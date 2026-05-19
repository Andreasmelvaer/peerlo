import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { navn, epost, telefon, erfaring } = await req.json();

  if (!navn || !epost || !erfaring) {
    return NextResponse.json({ error: "Mangler påkrevde felt" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Peerlo <noreply@peerlo.no>",
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

  if (error) {
    return NextResponse.json({ error: "Kunne ikke sende e-post" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
