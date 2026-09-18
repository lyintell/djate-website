import Link from "next/link";
import { ImageIcon } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SectionHead, CtaBand } from "@/components/ui";
import { features } from "@/lib/data";
import { screenshots } from "@/data/fonctionnalites/screenshots";
import Reveal from "@/components/Reveal";

export default function Fonctionnalites() {
  return (
    <>
      <Nav />
      <main>
        <section className="container" style={{ padding: "64px 24px 40px" }}>
          <div className="kicker" style={{ marginBottom: 14 }}>L&apos;application</div>
          <h1 className="h1" style={{ fontSize: "clamp(34px,7vw,56px)", maxWidth: 800, marginBottom: 18 }}>
            Tout votre commerce dans une seule application
          </h1>
          <p className="lead" style={{ maxWidth: 680, margin: 0 }}>
            De la caisse aux rapports, Djaté POS couvre chaque étape de la gestion quotidienne. Simple à utiliser, pensé
            pour les commerces du Mali.
          </p>
        </section>

        <section className="surface">
          <div className="container" style={{ padding: "56px 24px" }}>
            <div className="hgrid hc3">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} delay={(i % 3) * 60}>
                    <div className="hcell" style={{ padding: "28px 24px", height: "100%" }}>
                      <Icon size={30} strokeWidth={1.5} color="#0e7a43" style={{ marginBottom: 14 }} />
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 22, lineHeight: 1.1 }}>{f.title}</div>
                      <div style={{ fontSize: 15, color: "var(--neutral-600)", lineHeight: 1.45, marginTop: 8 }}>{f.body}</div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container" style={{ padding: "72px 24px" }}>
          <SectionHead title="Captures d'écran" />
          <p style={{ fontSize: 16, color: "var(--neutral-600)", margin: "0 0 32px", maxWidth: 640 }}>
            À venir
          </p>
          <div className="grid cols2">
            {screenshots.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div
                  className="card"
                  style={{ aspectRatio: "16 / 10", background: "var(--accent-100)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: 0 }}
                >
                  <ImageIcon size={44} strokeWidth={1.5} color="#0e7a43" />
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 15, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-700)" }}>
                    Capture à venir
                  </span>
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 17, marginTop: 12 }}>{s.title}</div>
                <div style={{ fontSize: 14, color: "var(--neutral-600)" }}>{s.body}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaBand title="Envie de voir l'application en action ?" buttonLabel="Demander une démo" />
      </main>
      <Footer />
    </>
  );
}
