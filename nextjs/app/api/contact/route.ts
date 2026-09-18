import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact } from "@/data/contact/contact";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const nom = typeof body?.nom === "string" ? body.nom.trim() : "";
  const tel = typeof body?.tel === "string" ? body.tel.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const msg = typeof body?.msg === "string" ? body.msg.trim() : "";

  const wordCount = msg.split(/\s+/).filter(Boolean).length;
  if (!nom || !tel || !email || wordCount < 3) {
    return NextResponse.json({ error: "Champs invalides." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante dans les variables d'environnement.");
    return NextResponse.json({ error: "Configuration email manquante." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "Djaté POS <onboarding@resend.dev>",
      to: contact.formTo,
      replyTo: email,
      subject: `Demande via le site — ${nom}`,
      text: [`Nom : ${nom}`, `Téléphone / WhatsApp : ${tel}`, `Email : ${email}`, "", msg].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Envoi impossible." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Envoi impossible." }, { status: 500 });
  }
}
