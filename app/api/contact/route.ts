import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Get form data
    const formData = await request.json();
    const {
      name,
      email,
      subject,
      message,
      "project-type": projectType,
      budget,
    } = formData;

    // Validate data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject and message are required" },
        { status: 400 }
      );
    }

    // Special transport settings for Gmail
    const isGmail = process.env.EMAIL_HOST?.includes("gmail");

    // Special configuration for Gmail
    const transporter = nodemailer.createTransport({
      service: isGmail ? "gmail" : undefined, // More reliable for Gmail
      host: !isGmail ? process.env.EMAIL_HOST : undefined, // Use host if not Gmail
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE === "true"),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD?.replace(/"/g, ""), // Clean potential quote marks
      },
      tls: {
        rejectUnauthorized: false, // Ignore certificate issues
      },
      debug: true, // Enable debugging information
    });

    // Prepare email content
    let emailContent = `
      <h2>New Contact Form Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
    `;

    if (projectType) {
      emailContent += `<p><strong>Project Type:</strong> ${projectType}</p>`;
    }

    if (budget) {
      emailContent += `<p><strong>Budget Range:</strong> ${budget}</p>`;
    }

    emailContent += `
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    // Log mail configuration for debugging
    console.log("Email configuration:", {
      service: process.env.EMAIL_HOST?.includes("gmail") ? "gmail" : undefined,
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE === "true"),
      user: process.env.EMAIL_USER ? "Set (hidden)" : "Not set",
      pass: process.env.EMAIL_PASSWORD ? "Set (hidden)" : "Not set",
      from: process.env.EMAIL_FROM || email,
      to: process.env.EMAIL_TO || "Not set",
    });

    // Test the connection
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      throw verifyError;
    }

    // Send the email
    const info = await transporter.sendMail({
      from: `"Tanju Yıldız Website" <${process.env.EMAIL_FROM || email}>`,
      to: process.env.EMAIL_TO,
      subject: `Contact Form: ${subject}`,
      html: emailContent,
      replyTo: email,
    });

    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
