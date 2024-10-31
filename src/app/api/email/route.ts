import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
    try {
      const { name, email, subject, description } = await req.json();
  
      // Configure Nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail', // or your preferred email provider
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      // Define email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.SENDER_EMAIL,
        subject: `Contact Form Submission: ${subject}`, // Use subject from form
        text: description, // Use description as the plain text
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Description:</strong> ${description}</p>`,
      };
  
      // Send email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
      console.error('Email sending error:', error);
      return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
  }
