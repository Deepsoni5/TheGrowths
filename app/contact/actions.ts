"use server";

import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // ✅ Keep this as your authenticated email
    to: "officialcodewithnexus@gmail.com",
    replyTo: data.email,
    subject: `New contact form submission: ${data.subject}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`,
    html: `
      <h1>New contact form submission</h1>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true }; // ✅ Ensure a successful response
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email"); // ❌ Throw an error so frontend can handle it
  }
}
