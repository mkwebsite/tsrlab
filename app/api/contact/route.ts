import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const smtpTo = process.env.SMTP_TO || 'hello@tsrlab.com';

    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email to company
    const companyMailOptions = {
      from: `"${name}" <${smtpFrom}>`,
      to: smtpTo,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff3333; border-bottom: 2px solid #ff3333; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; color: #374151; line-height: 1.6;">${message}</p>
            </div>
          </div>
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
            This email was sent from the TSR Lab contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    };

    // Send email to company
    await transporter.sendMail(companyMailOptions);

    // Auto-reply to user (optional)
    if (process.env.SMTP_SEND_AUTO_REPLY === 'true') {
      const autoReplyOptions = {
        from: `"TSR Lab" <${smtpFrom}>`,
        to: email,
        subject: 'Thank you for contacting TSR Lab',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #ff3333;">Thank you for contacting us!</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Your message:</strong></p>
              <p style="white-space: pre-wrap; color: #374151;">${message}</p>
            </div>
            <p>Best regards,<br />TSR Lab Team</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
            <p style="color: #6b7280; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        `,
        text: `
          Thank you for contacting us!
          
          Dear ${name},
          
          We have received your message and will get back to you as soon as possible.
          
          Your message:
          ${message}
          
          Best regards,
          TSR Lab Team
        `,
      };

      await transporter.sendMail(autoReplyOptions);
    }

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
