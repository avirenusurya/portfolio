import React, { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, Play, X } from "lucide-react";
import { pauseNightShift, resumeNightShift } from "./night-shift-control.js";
import "./night-shift.css";

export default function NightShiftCorner({ obscured = false }) {
  const [open, setOpen] = useState(
    () => window.matchMedia("(min-width: 1120px)").matches,
  );
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const host = useRef(null);
  const game = useRef(null);
  const launcher = useRef(null);
  const resumeAfterDialog = useRef(false);
  const returnFocus = useRef(false);

  useEffect(() => {
    if (!open) {
      if (returnFocus.current) launcher.current?.focus({ preventScroll: true });
      returnFocus.current = false;
      return;
    }
    let disposed = false;
    let element;
    setStatus("loading");
    async function load() {
      try {
        const moduleURL = new URL(
          "/night-shift/night-shift.js",
          window.location.origin,
        ).href;
        await import(/* @vite-ignore */ moduleURL);
        if (disposed || !host.current) return;
        element = document.createElement("night-shift");
        game.current = element;
        host.current.append(element);
        await element.ready;
        if (!disposed) setStatus("ready");
      } catch {
        element?.remove();
        game.current = null;
        if (!disposed) setStatus("error");
      }
    }
    load();
    return () => {
      disposed = true;
      // disconnectedCallback releases the renderer, audio, worker and inputs.
      element?.remove();
      game.current = null;
      resumeAfterDialog.current = false;
    };
  }, [open, attempt]);

  useEffect(() => {
    if (status !== "ready" || !open) return;
    if (obscured) resumeAfterDialog.current = pauseNightShift(game.current);
    else {
      resumeNightShift(game.current, resumeAfterDialog.current);
      resumeAfterDialog.current = false;
    }
  }, [obscured, status, open]);

  function close() {
    returnFocus.current = true;
    setOpen(false);
    setExpanded(false);
  }

  if (!open)
    return (
      <button
        ref={launcher}
        className="night-shift-launcher"
        hidden={obscured}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open Night Shift game"
      >
        <Play size={13} aria-hidden="true" />
        <span>Night Shift</span>
      </button>
    );

  return (
    <section
      className={"night-shift-corner" + (expanded ? " is-expanded" : "")}
      aria-label="Night Shift game"
      hidden={obscured}
    >
      <div className="night-shift-toolbar">
        <span>Night Shift</span>
        <div>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Make game smaller" : "Enlarge game"}
            aria-pressed={expanded}
            title={expanded ? "Make smaller" : "Enlarge"}
          >
            {expanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
          <button
            type="button"
            onClick={close}
            aria-label="Close Night Shift game"
            title="Close game"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <div
        className="night-shift-host"
        ref={host}
        aria-busy={status === "loading"}
      />
      {status === "loading" && (
        <p className="night-shift-status" role="status">
          Loading the camp…
        </p>
      )}
      {status === "error" && (
        <div className="night-shift-error" role="status">
          <p>The camp couldn’t load.</p>
          <button type="button" onClick={() => setAttempt(attempt + 1)}>
            Try again
          </button>
          <a
            href="https://night-shift-camp-01a176f8.ashitoshjprogram.chatgpt.site/"
            target="_blank"
            rel="noreferrer"
          >
            Open separately ↗
          </a>
        </div>
      )}
    </section>
  );
}
