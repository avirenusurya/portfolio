# Night Shift

The bottom-right camp is Night Shift, pinned to build `8817ec4fff063f2f56a8914cef650e6d11a44181`, including the corrected A/D steering. The game build and its source were already verified in that project; the integration does not modify its models, audio or gameplay.

## Use

- On screens at least 1120px wide, the still camp appears beside the page in the bottom-right corner. On narrower screens, a small Night Shift launcher loads it on demand.
- Press the game's Play button to begin. Audio is enabled by that gesture.
- WASD / arrows move during combat. Click or tap zombies to shoot. With the game focused, Space or Enter automatically aims at a target and fires one shot per press; the shotgun still has to pump between shots.
- During harvesting, W/S drive forward and reverse along the cart's heading; A/D turn left and right. The original phone joystick remains available.
- The corner's enlarge control gives more room. Close releases the game and returns a small launcher; reopening starts a fresh camp.
- The question mark beside enlarge opens keyboard, phone, and cleanup instructions. Help pauses the existing game and sound; Back to game or Escape closes it and restores game focus.
- Opening a portfolio project temporarily hides and suspends the existing game session, including sound. Closing the project resumes it. Hidden tabs use the game's built-in suspension behavior.

## Files

`src/NightShiftCorner.jsx` loads the self-contained custom element and manages the corner controls and cleanup. `src/night-shift-control.js` bridges project-dialog suspension to this pinned engine version. `src/night-shift.css` scopes the responsive corner styles. `public/night-shift/` retains the game's module, background worker, four GLBs, twenty local MP3 recordings, audio manifest and Three.js license. `VERSION.json` records provenance and hashes for every copied runtime asset.

The wrapper supplies a softly blurred, tinted panel behind the transparent scene, with an opaque fallback. Enlarging uses smooth canvas interpolation instead of hard pixel upscaling. The game still renders at its original resolution; its pinned runtime assets are unchanged.

## Verify

```sh
node --test tests/night-shift-control.test.mjs
npm run build
npm run dev
```

The integration checks cover pause/resume, an unplayed camp, a completed run and returning while the document is hidden. Browser review also checks loading, audio activation, enlarge, close/reopen, project-dialog suspension and desktop/phone positioning. The unchanged game's own source project contains the full gameplay checks.
