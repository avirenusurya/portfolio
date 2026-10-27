# Surya Avirenu

My personal portfolio: selected AI projects, background, and a small Night Shift game in the corner.

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

The development server proxies the SafeWaves demo. No credentials are required to run the site.

## Edit the site

- `src/content.js` — project descriptions, screenshots, links, and published results.
- `src/App.jsx` — profile, project rows, background, contact, and theme preference.
- `src/styles.css` and `src/dialog.css` — layout and project details.
- `src/ProjectDialog.jsx` — shareable project details and demos.
- `src/NightShiftCorner.jsx` — game loading and corner controls.

Hover or keyboard-focus a project on desktop to preview it. Click or tap its name for details. Individual projects have addresses such as `/#project/smurf`. Escape, the close button, or browser back dismisses the details.

The site supports dark and light themes, reduced motion, and phone layouts. Fonts and portfolio assets are served locally.

## Night Shift

The camp waits until Play. Smaller screens load the game only when its launcher is opened. Closing releases the renderer and audio; project details temporarily suspend the session. See [NIGHT-SHIFT.md](./NIGHT-SHIFT.md) for controls and the pinned build manifest.

## Deployment

The site uses React and Vite. Vercel builds with `npm run build` and serves `dist`. The `api/` directory contains the same-origin SafeWaves demo handlers; its existing backend can take up to a minute to wake up. Saved demo results are labeled in the interface.
