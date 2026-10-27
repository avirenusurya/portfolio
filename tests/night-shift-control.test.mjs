import test from "node:test";
import assert from "node:assert/strict";
import { pauseNightShift, resumeNightShift } from "../src/night-shift-control.js";

function fixture({ started = true, paused = false } = {}) {
  const calls = [];
  const widget = { engine: {
    started, paused, frameId: 42,
    controls: { clear: () => calls.push("clear-input") },
    sound: { setActive: value => calls.push(["audio", value]) },
    play() { this.paused = false; calls.push("play"); },
  } };
  return { widget, calls };
}

test("opening a project stops the frame and audio; closing it resumes the existing run", () => {
  const { widget, calls } = fixture();
  const running = pauseNightShift(widget, id => calls.push(["cancel", id]));
  assert.equal(running, true);
  assert.equal(widget.engine.paused, true);
  assert.equal(widget.engine.frameId, 0);
  assert.deepEqual(calls, [["cancel", 42], "clear-input", ["audio", false]]);
  resumeNightShift(widget, running, true);
  assert.equal(widget.engine.paused, false);
  assert.deepEqual(calls.slice(-2), [["audio", true], "play"]);
});

test("reading a project never starts an unplayed camp or retries a finished run", () => {
  for (const state of [{ started: false }, { started: true, paused: true }]) {
    const { widget, calls } = fixture(state);
    const running = pauseNightShift(widget, () => {});
    resumeNightShift(widget, running, true);
    assert.equal(running, false);
    assert.equal(widget.engine.paused, true);
    assert.equal(calls.includes("play"), false);
  }
});

test("returning from a project in a hidden tab waits for the game's visibility handler", () => {
  const { widget, calls } = fixture();
  const running = pauseNightShift(widget, () => {});
  resumeNightShift(widget, running, false);
  assert.equal(widget.engine.paused, false);
  assert.deepEqual(calls.at(-1), ["audio", false]);
  assert.equal(calls.includes("play"), false);
});

test("a loading or unavailable game can be suspended safely", () => {
  assert.equal(pauseNightShift(null, () => {}), false);
  assert.equal(pauseNightShift({}, () => {}), false);
  assert.doesNotThrow(() => resumeNightShift(null, true, true));
});
