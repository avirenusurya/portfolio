// Fire-and-forget wake-up for the free-tier SafeWaves backend.
// Called once on page load so the first real Analyze click is likelier to hit
// a warm server. Returns fast regardless of whether the backend is up yet.
const HEALTH = "https://safewaves-api.onrender.com/health";

export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 55000);
  try {
    const r = await fetch(HEALTH, { signal: controller.signal });
    clearTimeout(timer);
    res.status(200).json({ warm: r.ok });
  } catch (err) {
    clearTimeout(timer);
    res.status(200).json({ warm: false, detail: err.name || "error" });
  }
}
