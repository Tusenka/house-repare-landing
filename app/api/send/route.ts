import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.yandex.ru";
    const fromEmail = process.env.SMTP_USER;
    const fromLabel = process.env.EMAIL_FROM || `"Лендинг" <${fromEmail}>`;
    const recipient =
      process.env.CONTACT_EMAIL || "Oavrabota@yandex.ru";

    if (!fromEmail) {
      return NextResponse.json(
        { ok: false, error: "SMTP не настроен" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: (process.env.SMTP_PORT || "465") === "465",
      auth: {
        user: fromEmail,
        pass: process.env.SMTP_PASS || "",
      },
    });

    await transporter.sendMail({
      from: fromEmail ? fromLabel : undefined,
      to: recipient,
      subject: "Новая заявка на обратный звонок",
      text: `Имя: ${name}\nТелефон: ${phone}`,
      html: `
        <h2>Новая заявка на обратный звонок</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку" },
      { status: 500 }
    );
  }
}
