import Link from "next/link";
import { Facebook, MessageCircle } from "lucide-react";
import { navLinks } from "@/lib/data";
import { contact } from "@/data/contact/contact";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "#fff" }}>
      <div
        className="container"
        style={{
          padding: "56px 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 40,
        }}
      >
        <div style={{ maxWidth: 340 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/djate-logo.png"
              alt="Djaté POS"
              style={{ height: 40, width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 26, lineHeight: 1 }}>
              Djaté POS
            </span>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.72)", margin: 0 }}>
            Système de point de vente et de gestion pour boutiques, alimentations, quincailleries et commerces généraux au Mali.
          </p>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,.5)", marginTop: 16 }}>Par Ly Intell</div>
        </div>

        <div>
          <div style={colHead}>Navigation</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15 }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,.82)" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={colHead}>Contact</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 15, color: "rgba(255,255,255,.82)" }}>
            {contact.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} style={{ color: "#fff", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 20 }}>
                {p}
              </a>
            ))}
            <div style={{ fontSize: 14, color: "rgba(255,255,255,.55)", marginTop: -4 }}>Appels &amp; WhatsApp</div>
            <a href={`mailto:${contact.email}`} style={{ color: "rgba(255,255,255,.82)" }}>
              {contact.email}
            </a>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <a href={`https://wa.me/${contact.whatsapp}`} aria-label="WhatsApp" style={social} target="_blank" rel="noopener">
              <MessageCircle size={20} />
            </a>
            <a href={contact.facebook} aria-label="Facebook" style={social} target="_blank" rel="noopener">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}>
        <div
          className="container"
          style={{
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 14,
            color: "rgba(255,255,255,.5)",
          }}
        >
          <span>© {new Date().getFullYear()} Djaté POS — Ly Intell. Tous droits réservés.</span>
          <span>{contact.location}</span>
        </div>
      </div>
    </footer>
  );
}

const colHead: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  fontSize: 15,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "var(--mint)",
  marginBottom: 16,
};

const social: React.CSSProperties = {
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,.1)",
  borderRadius: 10,
  color: "#fff",
};
