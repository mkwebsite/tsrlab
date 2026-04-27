# SMTP Configuration Guide

This document explains how to configure SMTP for the contact form.

## Setup Instructions

1. Create a `.env.local` file in the `nextjs-app` directory (same level as `package.json`)

2. Add the following environment variables:

```env
# SMTP Server Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Email Addresses
SMTP_FROM=your-email@gmail.com
SMTP_TO=hello@tsrlab.com

# Auto-reply to users (optional - set to 'true' to enable)
SMTP_SEND_AUTO_REPLY=false
```

## Common Email Provider Configurations

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # Use App Password, not regular password
SMTP_FROM=your-email@gmail.com
SMTP_TO=hello@tsrlab.com
```

**Note:** For Gmail, you need to:
- Enable 2-Step Verification on your Google account
- Generate an App Password: Google Account → Security → 2-Step Verification → App Passwords

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM=your-email@outlook.com
SMTP_TO=hello@tsrlab.com
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@yahoo.com
SMTP_TO=hello@tsrlab.com
```

### Custom SMTP Server
```env
SMTP_HOST=smtp.your-domain.com
SMTP_PORT=587  # or 465 for SSL
SMTP_USER=your-email@your-domain.com
SMTP_PASSWORD=your-password
SMTP_FROM=your-email@your-domain.com
SMTP_TO=hello@tsrlab.com
```

## Environment Variables Explained

- **SMTP_HOST**: The SMTP server hostname
- **SMTP_PORT**: The SMTP server port (usually 587 for TLS or 465 for SSL)
- **SMTP_USER**: Your email address or username for SMTP authentication
- **SMTP_PASSWORD**: Your email password or app password
- **SMTP_FROM**: The email address to send emails from (usually same as SMTP_USER)
- **SMTP_TO**: The email address where contact form submissions will be sent
- **SMTP_SEND_AUTO_REPLY**: Set to `'true'` to automatically send a thank you email to users (default: `false`)

## Testing

After setting up your `.env.local` file:

1. Restart your development server: `npm run dev`
2. Fill out the contact form on the website
3. Check the configured email inbox (SMTP_TO) for the submission

## Security Note

Never commit your `.env.local` file to version control. It should already be in `.gitignore`.
