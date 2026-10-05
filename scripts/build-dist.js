/**
 * Build a deployable web package into ./dist
 *
 * - Removes old ./dist
 * - Runs production Next.js build (`npm run build`)
 * - Copies runtime files, node_modules, and env files into ./dist
 *
 * Usage:
 *   npm run build:dist
 *   cd dist && pm2 start ecosystem.config.js
 */

const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

function log(msg) {
  console.log(`\n[build:dist] ${msg}`);
}

function removeDir(dirPath, label) {
  if (!fs.existsSync(dirPath)) return;
  log(`Removing old ${label}...`);
  fs.rmSync(dirPath, { recursive: true, force: true });
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyPath(srcRel, destRel = srcRel) {
  const src = path.join(root, srcRel);
  const dest = path.join(dist, destRel);
  if (!fs.existsSync(src)) {
    console.warn(`[build:dist] skip missing: ${srcRel}`);
    return false;
  }

  ensureDir(path.dirname(dest));
  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    if (process.platform === 'win32') {
      const result = spawnSync(
        'robocopy',
        [src, dest, '/E', '/NFL', '/NDL', '/NJH', '/NJS', '/NC', '/NS', '/NP'],
        { stdio: 'inherit' },
      );
      const code = result.status ?? 1;
      if (code >= 8) {
        throw new Error(`robocopy failed for ${srcRel} (exit ${code})`);
      }
    } else {
      fs.cpSync(src, dest, { recursive: true, force: true });
    }
  } else {
    fs.copyFileSync(src, dest);
  }
  return true;
}

function copyEnvFiles() {
  const envNames = [
    '.env',
    '.env.local',
    '.env.production',
    '.env.production.local',
    '.env.development',
    '.env.development.local',
    '.env.example',
  ];

  let copied = 0;
  for (const name of envNames) {
    if (copyPath(name)) copied += 1;
  }
  if (copied === 0) {
    console.warn('[build:dist] warning: no env files found to copy');
  } else {
    log(`Copied ${copied} env file(s)`);
  }
}

function main() {
  removeDir(dist, 'dist/');
  removeDir(path.join(root, 'out'), 'out/');

  log('Building Next.js (production)...');
  execSync('npm run build', {
    cwd: root,
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
    },
  });

  if (!fs.existsSync(path.join(root, '.next'))) {
    throw new Error('Build finished but .next was not created');
  }

  ensureDir(dist);

  log('Copying runtime files into dist/...');
  const runtimeFiles = [
    '.next',
    'public',
    'package.json',
    'package-lock.json',
    'next.config.ts',
    'next-env.d.ts',
    'postcss.config.js',
    'ecosystem.config.js',
    'tsconfig.json',
    'global.d.ts',
    'middleware.ts',
    'middleware.js',
  ];

  for (const item of runtimeFiles) {
    copyPath(item);
  }

  log('Copying env files into dist/...');
  copyEnvFiles();

  log('Copying node_modules into dist/ (this can take a while)...');
  copyPath('node_modules');

  const readme = `# TSR Lab Web (dist)

Production package created by \`npm run build:dist\`.

## Start with PM2
\`\`\`bash
cd dist
pm2 start ecosystem.config.js
\`\`\`

## Start with Next
\`\`\`bash
cd dist
npm start
\`\`\`

Port comes from \`.env\` (default 3202).
`;
  fs.writeFileSync(path.join(dist, 'README.md'), readme, 'utf8');

  log('Done. Deployable package is ready at ./dist');
  console.log(`
Next steps:
  cd dist
  pm2 start ecosystem.config.js
`);
}

try {
  main();
} catch (err) {
  console.error('\n[build:dist] FAILED:', err instanceof Error ? err.message : err);
  process.exit(1);
}
