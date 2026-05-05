const path = require('path');

try {
  require('dotenv').config({ path: path.join(__dirname, '.env.local') });
  require('dotenv').config({
    path: path.join(__dirname, '.env.production.local'),
    override: true,
  });
} catch {
  /* dotenv is optional; install with: npm install dotenv */
}

const apiUrl =
  process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || undefined;

/**
 * Deploy checklist (images 404 / broken in production):
 * - Run `npm run build` from this folder (tsrlab/) so `.next` matches the current code.
 * - Keep the whole app on the server: `public/`, `.next/`, `node_modules/`, `package.json` (not only `.next`).
 * - `next start` serves `/images/*` from `./public`; missing `public` = broken logo and static assets.
 * - If using Nginx, proxy all paths to Node (do not `alias` /images to an empty server directory).
 */
module.exports = {
  apps: [
    {
      name: 'tsrlab-web-3001',
      cwd: __dirname,
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        ...(process.env.NEXT_PUBLIC_API_URL && {
          NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        }),
        ...(apiUrl && { API_URL: apiUrl }),
      },
    },
  ],
};
