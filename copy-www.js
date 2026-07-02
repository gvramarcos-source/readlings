// Builds the www/ folder Capacitor bundles into the native app.
// The web files live at the repo root so GitHub Pages can serve them directly.
const fs = require('fs');
const path = require('path');

const out = 'www';
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const f of ['index.html', 'manifest.json', 'sw.js', 'og-image.png']) {
  fs.copyFileSync(f, path.join(out, f));
}
fs.cpSync('icons', path.join(out, 'icons'), { recursive: true });
console.log('www/ built');
