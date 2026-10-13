import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ownerTemplate, senderTemplate } from "@/lib/email-templates";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Input too long" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    return NextResponse.json({ error: "Mail not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    const data = { name, email, message };
    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: process.env.CONTACT_TO_EMAIL || user,
      replyTo: { name: name.replace(/[\r\n"]/g, ""), address: email },
      ...ownerTemplate(data),
    });
    // Auto-reply to the sender; failure here shouldn't fail the request.
    try {
      await transporter.sendMail({
        from: `"Sahil Shrestha" <${user}>`,
        to: email,
        ...senderTemplate(data),
      });
    } catch (err) {
      console.error("Auto-reply failed:", err);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact mail failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
