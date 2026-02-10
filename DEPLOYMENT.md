abc# Deployment Guide for TSR Lab Next.js Application

## Server Information
- **Server IP**: 210.89.34.145
- **Application URL**: http://210.89.34.145/

## Prerequisites
- Node.js 18+ installed on the server
- npm or yarn package manager
- PM2 (recommended for production) - `npm install -g pm2`

## Deployment Steps

### Option 1: Deploy using PM2 (Recommended)

1. **Build the application locally:**
   ```bash
   npm run build
   ```

2. **Upload files to server:**
   - Upload the entire project folder to your server
   - Or upload: `.next/`, `public/`, `package.json`, `next.config.js`, `ecosystem.config.js`

3. **On the server, install dependencies:**
   ```bash
   npm install --production
   ```

4. **Start with PM2:**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx (if using):**
   ```nginx
   server {
       listen 80;
       server_name 210.89.34.145;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Option 2: Direct Node.js

1. **Build and upload** (same as above)

2. **On the server:**
   ```bash
   npm install --production
   npm start
   ```

   Or to bind to specific IP:
   ```bash
   HOSTNAME=0.0.0.0 PORT=3000 npm start
   ```

### Option 3: Using Docker (Optional)

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY .next ./.next
COPY public ./public
COPY next.config.js ./
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t tsrlab-app .
docker run -d -p 3000:3000 tsrlab-app
```

## Environment Variables

If needed, create a `.env.production` file:
```
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

## Troubleshooting

- **Port already in use**: Change PORT in ecosystem.config.js or use `lsof -i :3000` to find the process
- **Build errors**: Ensure Node.js version is 18+
- **Memory issues**: Increase memory limit in ecosystem.config.js or use `--max-old-space-size=4096`

## Monitoring

- **PM2 logs**: `pm2 logs tsrlab-nextjs`
- **PM2 status**: `pm2 status`
- **Restart**: `pm2 restart tsrlab-nextjs`

