const path = require('path');

try {
  require('dotenv').config({ path: path.join(__dirname, '.env') });
  require('dotenv').config({
    path: path.join(__dirname, '.env.local'),
    override: true,
  });
  require('dotenv').config({
    path: path.join(__dirname, '.env.production.local'),
    override: true,
  });
} catch {
  /* dotenv is optional; install with: npm install dotenv */
}

const apiUrl =
  process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || undefined;

/** Port is managed by env (`.env` / `.env.local`). Default: 3202 */
const port = Number(process.env.PORT) || 3202;

/**
 * Preferred deploy flow:
 *   npm run build:dist
 *   cd dist && pm2 start ecosystem.config.js
 *
 * Deploy checklist (images 404 / broken in production):
 * - Keep the whole package: `public/`, `.next/`, `node_modules/`, `package.json`, `.env`
 * - `next start` serves `/images/*` from `./public`; missing `public` = broken logo and static assets.
 * - If using Nginx, proxy all paths to Node (do not `alias` /images to an empty server directory).
 *
 * Port: set PORT in `.env` (e.g. PORT=3202), then:
 *   pm2 start ecosystem.config.js
 *   pm2 reload ecosystem.config.js
 */
module.exports = {
  apps: [
    {
      name: `tsrlab-web-${port}`,
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
        PORT: port,
        ...(process.env.NEXT_PUBLIC_API_URL && {
          NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        }),
        ...(apiUrl && { API_URL: apiUrl }),
      },
    },
  ],
};
