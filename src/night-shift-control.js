// The embedded game is pinned in public/night-shift/VERSION.json. Its engine
// already handles hidden tabs; this bridge also suspends it behind a project dialog.
export function pauseNightShift(widget, cancelFrame = cancelAnimationFrame) {
  const engine = widget?.engine;
  if (!engine) return false;
  const wasRunning = engine.started && !engine.paused;
  engine.paused = true;
  cancelFrame(engine.frameId);
  engine.frameId = 0;
  engine.controls?.clear();
  engine.sound?.setActive(false);
  return wasRunning;
}

export function resumeNightShift(widget, wasRunning, visible = !document.hidden) {
  const engine = widget?.engine;
  if (!engine) return;
  engine.sound?.setActive(visible);
  if (wasRunning) {
    // The game's visibility handler resumes a started, unpaused session when
    // the document becomes visible. Do not start a frame loop in a hidden tab.
    engine.paused = false;
    if (visible) engine.play();
  }
}
