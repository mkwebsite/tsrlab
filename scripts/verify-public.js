/**
 * Fail the build if critical files under public/ are missing or look like Git LFS pointers.
 * On the server, `next start` serves /images/* from this folder — it must exist in the deploy artifact.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const required = ['public/images/logo.png'];

let failed = false;
for (const rel of required) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    console.error(`[verify-public] MISSING: ${rel} (copy tsrlab/public into your deploy or run from repo root)`);
    failed = true;
    continue;
  }
  const st = fs.statSync(abs);
  if (st.size < 200) {
    console.error(
      `[verify-public] ${rel} is only ${st.size} bytes — install Git LFS and pull, or replace with the real PNG`,
    );
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}
console.log('[verify-public] OK:', required.join(', '));
