import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtpauths.bluewin.ch',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailToMe = {
    from: process.env.EMAIL_USER,
    to: 'cyril.scheurmann@students.bfh.ch',
    replyTo: email,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`,
  };

  const autoReply = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Vielen Dank für Ihre Nachricht",
    text: `Hallo ${name},

Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns so rasch wie möglich bei Ihnen melden.

Freundliche Grüsse  
Cyril Scheurmann`,
  };

  try {
    await transporter.sendMail(mailToMe);
    await transporter.sendMail(autoReply);
    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
