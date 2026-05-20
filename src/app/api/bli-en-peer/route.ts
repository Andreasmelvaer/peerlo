import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function appendToSheet(navn: string, epost: string, telefon: string, erfaring: string) {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY || !process.env.GOOGLE_SHEET_ID) return;

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[new Date().toLocaleString("nb-NO"), navn, epost, telefon || "", erfaring]],
    },
  });
}

export async function POST(req: NextRequest) {
  const { navn, epost, telefon, erfaring } = await req.json();

  if (!navn || !epost || !erfaring) {
    return NextResponse.json({ error: "Mangler påkrevde felt" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Peerlo" <${process.env.SMTP_USER}>`,
      to: "ole@peerlo.no",
      subject: `Ny peer-interesse fra ${navn}`,
      text: [
        `Navn: ${navn}`,
        `E-post: ${epost}`,
        telefon ? `Telefon: ${telefon}` : null,
        ``,
        `Erfaring:`,
        erfaring,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    await appendToSheet(navn, epost, telefon, erfaring);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Send error:", err);
    return NextResponse.json({ error: "Kunne ikke sende e-post" }, { status: 500 });
  }
}
