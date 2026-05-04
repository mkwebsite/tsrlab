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
      },
    },
  ],
};
