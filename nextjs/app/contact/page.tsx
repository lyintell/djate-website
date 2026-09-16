"use client";

import { useState } from "react";
import { MessageCircle, Facebook } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { contact } from "@/data/contact/contact";
import Reveal from "@/components/Reveal";

type Errors = Partial<Record<"nom" | "tel" | "email" | "msg", string>>;

export default function Contact() {
  const [form, setForm] = useState({ nom: "", tel: "", email: "", msg: "" });
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.nom.trim()) next.nom = "Le nom est obligatoire.";
    if (!form.tel.trim()) next.tel = "Le téléphone est obligatoire.";
    if (!form.email.trim()) next.email = "L'email est obligatoire.";
    const wordCount = form.msg.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 3) next.msg = "Le message doit contenir au moins 3 mots.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const lines = [
      `Nom : ${form.nom}`,
      `Téléphone / WhatsApp : ${form.tel}`,
      `Email : ${form.email}`,
      "",
      form.msg,
    ].join("\n");

    const mailto = `mailto:${contact.formTo}?subject=${encodeURIComponent(
      `Demande via le site — ${form.nom}`
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
  };

  return (
    <>
      <Nav />
      <main>
        <section className="container" style={{ padding: "64px 24px 40px" }}>
          <div className="kicker" style={{ marginBottom: 14 }}>Contact</div>
          <h1 className="h1" style={{ fontSize: "clamp(34px,7vw,56px)", maxWidth: 760, marginBottom: 18 }}>
            Parlons de votre commerce
          </h1>
          <p className="lead" style={{ maxWidth: 640, margin: 0 }}>
            Une question, une démonstration, un devis ? Écrivez-nous ou appelez-nous — nous répondons vite.
          </p>
        </section>

        <section className="container" style={{ padding: "0 24px 72px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "start" }}>
          {/* FORM */}
          <Reveal className="card">
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 28, margin: "0 0 6px" }}>
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="nom">Nom *</label>
                <input id="nom" className="input" type="text" placeholder="Votre nom" value={form.nom} onChange={set("nom")} />
                {errors.nom && <span style={fieldError}>{errors.nom}</span>}
              </div>
              <div className="field">
                <label htmlFor="tel">Téléphone / WhatsApp *</label>
                <input id="tel" className="input" type="tel" placeholder="+223 ..." value={form.tel} onChange={set("tel")} />
                {errors.tel && <span style={fieldError}>{errors.tel}</span>}
              </div>
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" className="input" type="email" placeholder="vous@exemple.com" value={form.email} onChange={set("email")} />
                {errors.email && <span style={fieldError}>{errors.email}</span>}
              </div>
              <div className="field" style={{ marginBottom: 24 }}>
                <label htmlFor="msg">Message *</label>
                <textarea id="msg" className="input" rows={5} placeholder="Parlez-nous de votre commerce et de vos besoins..." style={{ resize: "vertical" }} value={form.msg} onChange={set("msg")} />
                {errors.msg && <span style={fieldError}>{errors.msg}</span>}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </div>
            </form>
          </Reveal>

          {/* COORDS */}
          <Reveal delay={100} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div className="card card-dark">
              <div className="kicker" style={{ color: "var(--mint)", marginBottom: 18 }}>Coordonnées</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <div style={coordLabel}>Appel</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {contact.phones.map((p) => {
                      const isWhatsapp = p.replace(/\D/g, "").endsWith(contact.whatsapp.replace(/\D/g, ""));
                      return (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className={isWhatsapp ? "pulse-ring" : undefined}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            color: "#fff",
                            fontFamily: "var(--font-heading)",
                            fontWeight: 600,
                            fontSize: 22,
                            background: "rgba(255,255,255,.12)",
                            border: "1px solid rgba(255,255,255,.16)",
                            padding: "12px 20px",
                            borderRadius: 999,
                          }}
                        >
                          {isWhatsapp && <MessageCircle size={20} color="var(--mint)" />}
                          {p}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div style={coordLabel}>Email</div>
                  <a href={`mailto:${contact.email}`} style={{ color: "#fff", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 22, wordBreak: "break-word" }}>
                    {contact.email}
                  </a>
                </div>
                <div>
                  <div style={coordLabel}>Localisation</div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 22 }}>{contact.location}</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 20, marginBottom: 6 }}>Suivez-nous</div>
              <p style={{ fontSize: 15, color: "var(--neutral-600)", margin: "0 0 16px", lineHeight: 1.45 }}>
                Retrouvez Djaté POS sur les réseaux sociaux.
              </p>
              <a href={contact.facebook} target="_blank" rel="noopener" className="btn btn-secondary">
                <Facebook size={18} /> Facebook
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

const coordLabel: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(255,255,255,.6)",
  textTransform: "uppercase",
  letterSpacing: ".08em",
  marginBottom: 4,
};

const fieldError: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  color: "#c0392b",
  marginTop: 4,
};
