import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }
    
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Your message should be at least 10 characters long' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Contact Form <info@mybossagency.com>',
      to: ['info@mybossagency.com'], 
      subject: `Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
        </head>
        <body style="margin: 6px; padding: 6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f7; line-height: 1.6;">
          <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); overflow: hidden;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                📧 New Contact Form Submission
              </h1>
              <p style="margin: 8px 0 0 0; color: #e8e9ff; font-size: 16px; opacity: 0.9;">
                You have received a new message from your website
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Contact Details Card -->
              <div style="background-color: #f8f9fa; border-radius: 8px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #667eea;">
                <h2 style="margin: 0 0 20px 0; color: #2d3748; font-size: 20px; font-weight: 600;">
                  📝 Contact Details
                </h2>
                
                <div style="display: grid; gap: 16px;">
                  <div style="display: flex; align-items: center;">
                    <span style="display: inline-block; width: 24px; height: 24px; background-color: #667eea; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; color: white; margin-right: 12px;">👤</span>
                    <div>
                      <strong style="color: #4a5568; font-size: 14px; display: block;">Name</strong>
                      <span style="color: #2d3748; font-size: 16px;">${name}</span>
                    </div>
                  </div>
                  
                  <div style="display: flex; align-items: center;">
                    <span style="display: inline-block; width: 24px; height: 24px; background-color: #48bb78; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; color: white; margin-right: 12px;">✉️</span>
                    <div>
                      <strong style="color: #4a5568; font-size: 14px; display: block;">Email</strong>
                      <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 16px;">${email}</a>
                    </div>
                  </div>
                  
                  <div style="display: flex; align-items: center;">
                    <span style="display: inline-block; width: 24px; height: 24px; background-color: #ed8936; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; color: white; margin-right: 12px;">📞</span>
                    <div>
                      <strong style="color: #4a5568; font-size: 14px; display: block;">Phone</strong>
                      <span style="color: #2d3748; font-size: 16px;">${phone || 'Not provided'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Message Card -->
              <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                <h2 style="margin: 0 0 16px 0; color: #2d3748; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                  💬 Message
                </h2>
                <div style="background-color: #f7fafc; padding: 20px; border-radius: 6px; border-left: 3px solid #667eea;">
                  <p style="margin: 0; color: #4a5568; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Call to Action -->
              <div style="margin-top: 32px; text-align: center; padding: 24px; background-color: #f8f9fa; border-radius: 8px;">
                <p style="margin: 0 0 16px 0; color: #4a5568; font-size: 14px;">
                  Ready to respond? Click the button below to reply directly:
                </p>
                <a href="mailto:${email}?subject=Re: Your inquiry&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out to us!" 
                   style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px; transition: all 0.2s;">
                  📧 Reply to ${name}
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #718096; font-size: 14px;">
                This email was sent from your contact form on <strong>Boss Agency</strong>
              </p>
              <p style="margin: 8px 0 0 0; color: #a0aec0; font-size: 12px;">
                ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
} 