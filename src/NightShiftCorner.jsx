import React, { useEffect, useId, useRef, useState } from "react";
import { CircleHelp, Maximize2, Minimize2, Play, X } from "lucide-react";
import { pauseNightShift, resumeNightShift } from "./night-shift-control.js";
import "./night-shift.css";

export default function NightShiftCorner({ obscured = false }) {
  const [open, setOpen] = useState(
    () => window.matchMedia("(min-width: 1120px)").matches,
  );
  const [expanded, setExpanded] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const host = useRef(null);
  const game = useRef(null);
  const launcher = useRef(null);
  const helpTitle = useRef(null);
  const helpId = useId();
  const resumeAfterOverlay = useRef(false);
  const returnFocus = useRef(false);
  const returnToGame = useRef(false);
  const suspended = obscured || helpOpen;

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
      resumeAfterOverlay.current = false;
    };
  }, [open, attempt]);

  useEffect(() => {
    if (status !== "ready" || !open) return;
    if (suspended) resumeAfterOverlay.current = pauseNightShift(game.current);
    else {
      resumeNightShift(game.current, resumeAfterOverlay.current);
      resumeAfterOverlay.current = false;
    }
  }, [suspended, status, open]);

  useEffect(() => {
    // The pinned widget uses hard pixel scaling. Interpolate only the enlarged
    // presentation; keep its render resolution and game assets unchanged.
    const canvas = game.current?.shadowRoot?.querySelector("canvas");
    if (canvas) canvas.style.imageRendering = expanded ? "auto" : "";
  }, [expanded, status, open]);

  useEffect(() => {
    if (helpOpen) helpTitle.current?.focus({ preventScroll: true });
    else if (returnToGame.current) {
      const shadow = game.current?.shadowRoot;
      const target =
        shadow?.querySelector(".play:not([hidden]):not(:disabled)") ||
        shadow?.querySelector("canvas");
      target?.focus({ preventScroll: true });
      returnToGame.current = false;
    }
  }, [helpOpen]);

  function dismissHelp() {
    returnToGame.current = true;
    setHelpOpen(false);
  }

  function close() {
    returnFocus.current = true;
    returnToGame.current = false;
    setOpen(false);
    setExpanded(false);
    setHelpOpen(false);
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
      className={
        "night-shift-corner" +
        (expanded ? " is-expanded" : "") +
        (helpOpen ? " is-help-open" : "")
      }
      aria-label="Night Shift game"
      hidden={obscured}
      onKeyDown={(event) => {
        if (event.key === "Escape" && helpOpen) {
          event.preventDefault();
          event.stopPropagation();
          dismissHelp();
        }
      }}
    >
      <div className="night-shift-toolbar">
        <span>Night Shift</span>
        <div>
          <button
            type="button"
            onClick={() => (helpOpen ? dismissHelp() : setHelpOpen(true))}
            aria-label="How to play Night Shift"
            aria-expanded={helpOpen}
            aria-controls={helpId}
            title="How to play"
          >
            <CircleHelp size={15} aria-hidden="true" />
          </button>
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
        hidden={helpOpen}
      />
      {helpOpen && (
        <div
          className="night-shift-help"
          id={helpId}
          aria-labelledby={`${helpId}-title`}
          role="region"
        >
          <h3 id={`${helpId}-title`} ref={helpTitle} tabIndex={-1}>
            How to play
          </h3>
          <p className="night-shift-help-intro">
            Survive the night. Clean up at sunrise. Do it all again.
          </p>
          <h4>Keyboard & mouse</h4>
          <dl>
            <div>
              <dt>Move</dt>
              <dd>
                <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or arrow keys
              </dd>
            </div>
            <div>
              <dt>Aim & fire</dt>
              <dd>Click a zombie.</dd>
            </div>
            <div>
              <dt>Auto-aim</dt>
              <dd>
                <kbd>Space</kbd> or <kbd>Enter</kbd> aims and fires. One shot per
                press; allow the shotgun to pump.
              </dd>
            </div>
          </dl>
          <h4>On your phone</h4>
          <p>Drag the lower-left of the game to move. Tap a zombie to shoot.</p>
          <h4>After sunrise</h4>
          <p>
            Drive the cart with <kbd>W</kbd> / <kbd>S</kbd> and turn with{" "}
            <kbd>A</kbd> / <kbd>D</kbd>. On touch, use the same lower-left joystick.
            Sweep up the remains and repair the ground.
          </p>
          <p className="night-shift-help-note">The game pauses while you read.</p>
          <button
            type="button"
            className="night-shift-help-done"
            onClick={dismissHelp}
          >
            Back to game
          </button>
        </div>
      )}
      {status === "loading" && !helpOpen && (
        <p className="night-shift-status" role="status">
          Loading the camp…
        </p>
      )}
      {status === "error" && !helpOpen && (
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
