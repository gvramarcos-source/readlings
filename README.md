# 🐾 Readlings

A gentle, gamified **sight-word reading game** for early readers (ages ~4–6).
A word pops up, the child reads it aloud, and a grown-up taps **Got it!** or **Try again** —
there's no penalty for a miss. Every correct word feeds, pets, trains, or plays with a cute
critter. After **10 words**, the critter **evolves** with confetti and a fanfare. Each round
features a different themed critter to collect.

It's a single self-contained `index.html` — no build step, no server code, no accounts.
Works offline and installs to a phone or tablet home screen as an app (PWA).

## ▶️ Run it locally

Just open `index.html` in any modern browser (Chrome, Safari, Edge).
Double-click the file, or drag it into a browser tab. That's it.

> Note: when opened directly as a file, progress saving works in normal browser tabs.
> Some sandboxed previews block storage — that's expected and the game still plays fine.

## ✨ Features

- **8 collectible critters**, each a different "type" (fire, water, grass, electric, fairy, ice, psychic, flower), each with a baby form that **evolves** on a win.
- **3 difficulty levels:** Tiny words (2-letter), Short words (3-letter), Mix it up.
- **🔊 Tap-to-hear** — reads the current word aloud using the device voice.
- **Progress that sticks** — stars earned and critters evolved are saved on-device.
- **My Readlings** collection screen — locked silhouettes until you earn each one.
- **Happy sound effects** and per-action animations (eat, pet, train, nap, love).
- **Installable PWA** — add to home screen, works offline.

## 🌐 Deploy (GitHub Pages)

The site is plain static files, so any static host works. For GitHub Pages:

1. Create a new repository on github.com (e.g. `readlings`).
2. Push this folder to it (see the deploy notes your co-founder set up).
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` / `/ (root)`, save.
4. Your app goes live at `https://<your-username>.github.io/readlings/`.

Alternative one-step host: drag this folder onto **app.netlify.com/drop** for an instant URL.

## 🔁 Updating after launch

1. Edit `index.html` (everything lives there).
2. Bump the `CACHE` version string in `sw.js` (e.g. `v1` → `v2`) so installed users get the update.
3. Commit and push. GitHub Pages redeploys automatically.

## 🗂️ Files

| File | Purpose |
|------|---------|
| `index.html` | The entire game (HTML + CSS + JS). |
| `manifest.json` | PWA metadata (name, colors, icons). |
| `sw.js` | Service worker for offline support. |
| `icons/` | App icons (192, 512, 180 apple-touch, 32 favicon). |
| `og-image.png` | Preview image shown when the link is shared. |

## 🚀 Ideas for Version 2

- Per-word miss tracking so parents see which words need practice (still on-device, no accounts).
- Custom word lists a parent can type in.
- Multiple kid profiles (siblings / classrooms).
- More critters and a fuller evolution tree.
- Optional native app-store builds.
