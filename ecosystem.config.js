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
