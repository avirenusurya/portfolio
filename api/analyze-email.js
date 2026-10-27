// Same-origin proxy to the SafeWaves email-analysis endpoint.
// Runs server-side so the browser never makes a cross-origin call (the upstream
// API only allows localhost origins), which means the live demo works from any domain.
const UPSTREAM = "https://safewaves-api.onrender.com/api/v1/analyze/email";

export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }

  const body = req.body || {};
  const email_text = typeof body.email_text === "string" ? body.email_text : "";
  const subject = typeof body.subject === "string" ? body.subject : "";

  // Abort before Vercel's function limit so the client gets a clean 504
  // (and falls back to the saved response) instead of a hard timeout.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 58000);

  try {
    const upstream = await fetch(UPSTREAM, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email_text, subject }),
      signal: controller.signal,
    });
    clearTimeout(timer);

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json");
    res.send(text);
  } catch (err) {
    clearTimeout(timer);
    res.status(504).json({ error: "upstream_unavailable", detail: err.name || "error" });
  }
}
