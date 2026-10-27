import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X, ArrowRight } from "lucide-react";

function Evaluation() {
  const [reranker, setReranker] = useState(true);
  const rows = [
    ["hit@1", 0.76, 0.56],
    ["hit@3", 0.88, 0.92],
    ["hit@5", 0.88, 0.96],
    ["MRR", 0.82, 0.72],
  ];
  return (
    <section className="evaluation" aria-labelledby="evaluation-title">
      <div className="detail-section-header">
        <h3 id="evaluation-title">Better at what?</h3>
        <span>Published results · 25 questions</span>
      </div>
      <p>
        The answerer uses the top five passages. Compare how reranking changes
        retrieval on the labeled test set.
      </p>
      <div
        className="segmented-control"
        role="group"
        aria-label="Retrieval configuration"
      >
        <button
          type="button"
          aria-pressed={!reranker}
          onClick={() => setReranker(false)}
        >
          Vector only
        </button>
        <button
          type="button"
          aria-pressed={reranker}
          onClick={() => setReranker(true)}
        >
          With reranker
        </button>
      </div>
      <div className="evaluation-values" aria-live="polite">
        {rows.map(([label, vector, ranked]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{(reranker ? ranked : vector).toFixed(2)}</strong>
            <div className="value-track">
              <span
                style={{ width: (reranker ? ranked : vector) * 100 + "%" }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="detail-note">
        Higher hit@5 comes with lower hit@1 and MRR here. These are retrieval
        metrics on a small set, not a general accuracy claim.{" "}
        <a
          href="https://github.com/avirenusurya/docs-agent#retrieval-measured"
          target="_blank"
          rel="noreferrer"
        >
          Read the evaluation.
        </a>
      </p>
    </section>
  );
}

const exampleText =
  "From: account-security@arnazon-support.com\n\nDear customer,\nYour account will be suspended in 24 hours. Verify your identity immediately at http://amaz0n-security-verify.com/login to avoid losing access.\n\nAmazon Security Team";
const savedExample = {
  risk_score: 87,
  severity: "critical",
  explanation: {
    summary:
      "This example combines a lookalike sender domain, an urgent deadline, and a suspicious verification link.",
    key_factors: [
      {
        feature: "Lookalike sender",
        description: "arnazon-support.com mimics a familiar brand.",
      },
      {
        feature: "Deadline pressure",
        description:
          "A short deadline tries to make the reader act without checking.",
      },
      {
        feature: "Suspicious link",
        description:
          "The destination uses a substituted character and an unfamiliar domain.",
      },
    ],
  },
  source: "Saved example",
};

function Analyzer() {
  const [text, setText] = useState(exampleText);
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const request = useRef(null);
  useEffect(() => () => request.current?.abort(), []);
  async function analyze(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setResult(null);
    const controller = new AbortController();
    request.current = controller;
    const timeout = setTimeout(() => controller.abort(), 59000);
    try {
      const response = await fetch("/api/analyze-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email_text: text,
          subject: "Suspicious account verification email",
        }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("The backend returned an error.");
      const data = await response.json();
      if (!Number.isFinite(data.risk_score) || !data.explanation)
        throw new Error("The backend returned an unexpected response.");
      setResult({ ...data, source: "Live API result" });
    } catch {
      if (request.current === controller)
        setError(
          "The live backend is unavailable or took too long. You can inspect the saved example below.",
        );
    } finally {
      clearTimeout(timeout);
      if (request.current === controller) {
        setBusy(false);
        request.current = null;
      }
    }
  }
  return (
    <section className="analyzer" aria-labelledby="analyzer-title">
      <div className="detail-section-header">
        <h3 id="analyzer-title">Put an email through it.</h3>
        <span>Interactive demo</span>
      </div>
      <form onSubmit={analyze}>
        <label htmlFor="email-example">Email to inspect</label>
        <textarea
          id="email-example"
          rows={6}
          value={text}
          onChange={(event) => setText(event.target.value)}
          maxLength={10000}
          required
          disabled={busy}
        />
        <div className="analyzer-actions">
          <button
            className="solid-button"
            type="submit"
            disabled={busy || !text.trim()}
          >
            {busy ? "Analyzing…" : "Run live analysis"}
            <ArrowRight size={17} />
          </button>
          <button
            className="plain-button"
            type="button"
            disabled={busy}
            onClick={() => {
              setText(exampleText);
              setResult(savedExample);
              setError("");
            }}
          >
            See saved example
          </button>
        </div>
        <p className="detail-note">
          {busy
            ? "The demo backend can take up to a minute to wake up."
            : "Live requests go to the existing SafeWaves API. Saved examples are labeled."}
        </p>
      </form>
      {error && (
        <p className="analysis-error" role="alert">
          {error}
        </p>
      )}
      {result && (
        <div className="analysis-result" aria-live="polite">
          <span className="result-source">{result.source}</span>
          <div className="result-score">
            <strong>
              {Math.round(result.risk_score)}
              <span>/100</span>
            </strong>
            <span>{result.severity} risk</span>
          </div>
          <p>{result.explanation?.summary}</p>
          <ul>
            {result.explanation?.key_factors
              ?.slice(0, 4)
              .map((factor, index) => (
                <li key={index}>
                  <strong>
                    {String(factor.feature || "Factor").replaceAll("_", " ")}
                  </strong>
                  <span>
                    {factor.description || String(factor.value || "")}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (!project) return;
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.({ preventScroll: true });
    };
  }, [project]);
  return (
    <dialog
      className="project-dialog"
      ref={dialog}
      aria-labelledby="project-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dialog-inner">
          <div className="dialog-top">
            <span>{project.category}</span>
            <button
              className="close-dialog"
              onClick={onClose}
              aria-label="Close project"
            >
              <X size={22} />
            </button>
          </div>
          <h2 id="project-dialog-title">{project.name}</h2>
          <p className="dialog-description">{project.description}</p>
          <div className="dialog-links">
            {project.live && (
              <a
                className="solid-button"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Open the live project <ArrowUpRight size={18} />
              </a>
            )}
            <a
              className="text-link"
              href={project.source}
              target="_blank"
              rel="noreferrer"
            >
              Explore the code <ArrowUpRight size={18} />
            </a>
            {project.evidence && (
              <a
                className="text-link"
                href={project.evidence}
                target="_blank"
                rel="noreferrer"
              >
                Testnet receipt <ArrowUpRight size={18} />
              </a>
            )}
          </div>
          {project.image && (
            <img
              className="dialog-image"
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
            />
          )}
          <section className="decisions" aria-label="Project decisions">
            {project.decisions.map(([title, description]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </section>
          {project.id === "docs-agent" && <Evaluation />}
          {project.id === "safewaves" && <Analyzer />}
          <aside className="limitation">
            <h3>Still a work in progress.</h3>
            <p>{project.limitation}</p>
          </aside>
          <div className="dialog-end">
            <span>{project.stack.join(" / ")}</span>
            <a href={project.source} target="_blank" rel="noreferrer">
              Source & documentation <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}
