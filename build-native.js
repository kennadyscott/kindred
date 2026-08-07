/* ===========================================================================
   Builds the web assets into www/ for the native (Capacitor) app.
   ---------------------------------------------------------------------------
   Two things this does that a plain copy wouldn't:

   1. Flips PRODUCTION_BUILD to true in the copied app.js. That hides the
      "Demo prototype" banner and the client-demo shortcut, and — importantly —
      stops the seeded fictional therapists from ever being shown as a fallback.
      The web/dev copy at the repo root stays false.

   2. Leaves config.json OUT of the bundle. The app deliberately fetches its
      runtime flags from https://kindredtherapymatch.com/app/config.json so a
      flag can be flipped after launch without an App Store resubmission. If we
      bundled it, a stale copy could win.

   Run:  npm run build      (or `npm run ios` to build + open Xcode)
   =========================================================================== */

const fs = require('fs');
const path = require('path');

/* The web app moved to kindred-site/app/ so it shares an origin with the
   site. Capacitor serves its own bundle and never loads from the web origin,
   so this is just a different source directory -- the native build is
   otherwise unaffected by the move. */
const ROOT = require('path').join(__dirname, '..', 'kindred-site', 'app');
const OUT = path.join(ROOT, 'www');

const ASSETS = [
  'index.html',
  'style.css',
  'manifest.webmanifest',
  'brand-emblem.png',
  'brand-lockup.png',
  'icon-192.png',
  'icon-512.png',
];

// Fresh output every time so deleted files don't linger in the bundle.
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const file of ASSETS) {
  const src = path.join(ROOT, file);
  if (!fs.existsSync(src)) {
    console.warn(`  ! missing, skipped: ${file}`);
    continue;
  }
  fs.copyFileSync(src, path.join(OUT, file));
}

// app.js gets the production flag flipped on the way in.
const appSrc = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
const FLAG = /const PRODUCTION_BUILD = (true|false);/;
if (!FLAG.test(appSrc)) {
  console.error('\n  ERROR: could not find the PRODUCTION_BUILD flag in app.js.');
  console.error('  Refusing to build rather than risk shipping a demo-mode binary.\n');
  process.exit(1);
}
fs.writeFileSync(path.join(OUT, 'app.js'), appSrc.replace(FLAG, 'const PRODUCTION_BUILD = true;'));

// The service worker is a web/PWA concern; the native shell serves locally and
// a stale SW cache inside the app would be a debugging nightmare.
const html = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8')
  .replace(/<script[^>]*serviceWorker[\s\S]*?<\/script>/gi, '')
  .replace(/navigator\.serviceWorker\.register\([^)]*\);?/g, '');
fs.writeFileSync(path.join(OUT, 'index.html'), html);

console.log(`\n✓ Built native web assets -> www/`);
console.log(`  PRODUCTION_BUILD = true (demo banner + demo shortcut hidden, no seeded fallback)`);
console.log(`  runtime flags fetched from app.kindredtherapymatch.com/config.json\n`);
