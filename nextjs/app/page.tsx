import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SectionHead, CtaBand } from "@/components/ui";
import HeroVideo from "@/components/HeroVideo";
import BusinessTypesMarquee from "@/components/BusinessTypesMarquee";
import { benefits, features } from "@/lib/data";
import { testimonials } from "@/data/home/testimonials";
import { heroVideo } from "@/data/home/hero-video";
import Reveal from "@/components/Reveal";

const SHOW_TESTIMONIALS = false;

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <BusinessTypesMarquee />

        {/* HERO */}
        <section
          className="container hero"
          style={{ padding: "56px 24px 56px", display: "grid", gap: 40, alignItems: "center" }}
        >
          <div>
            <h1 className="h1" style={{ marginBottom: 20 }}>
              Gérez votre commerce, <span style={{ color: "var(--accent)" }}>simplement.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 520, margin: "0 0 12px" }}>
              Djaté POS gère vos <strong>ventes</strong>, votre <strong>stock</strong>, vos <strong>clients</strong>, vos{" "}
              <strong>fournisseurs</strong>, votre <strong>caisse</strong> et vos <strong>rapports</strong> — sur une{" "}
              <strong>machine tactile</strong> ou en <strong>logiciel seul</strong>. Conçu spécialement pour les{" "}
              <strong>commerçants du Mali</strong>.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a href="#fonctionnalites" className="btn btn-primary">
                Voir les fonctionnalités
              </a>
              <Link href="/tarifs" className="btn btn-secondary">
                Voir les tarifs
              </Link>
            </div>
          </div>

          <div style={{ background: "var(--dark)", borderRadius: "var(--radius)", padding: 4 }}>
            <HeroVideo src={heroVideo.src} poster={heroVideo.poster} label={heroVideo.label} />
          </div>
        </section>

        {/* BENEFITS */}
        <section className="surface">
          <div className="container" style={{ padding: "64px 24px" }}>
            <SectionHead title="Pourquoi Djaté POS" />
            <div className="hgrid hc3 why-grid">
              {benefits.map((b, i) => {
                return (
                  <Reveal key={b.title} delay={i * 60} style={{ height: "100%", display: "flex" }}>
                    <div className="hcell why-card">
                      <div className="why-card-top">
                        <div className="why-card-icons">
                          {b.icons.map((Icon, idx) => (
                            <Icon key={idx} size={28} strokeWidth={1.5} color="#0e7a43" />
                          ))}
                        </div>
                        <div className="why-card-title">{b.title}</div>
                        <div className="why-card-body">{b.body}</div>
                      </div>
                      <div className="why-card-competitor">
                        <div className="why-card-competitor-label">Autres logiciels</div>
                        {b.competitor.map((c) => (
                          <div key={c} className="why-card-competitor-line">
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* FONCTIONNALITÉS (logiciel) */}
        <section id="fonctionnalites" className="container" style={{ padding: "72px 24px" }}>
          <SectionHead title="Fonctionnalités" />
          <div className="hgrid hc3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={(i % 3) * 60}>
                  <div className="hcell" style={{ padding: "28px 24px", height: "100%" }}>
                    <Icon size={30} strokeWidth={1.5} color="#0e7a43" style={{ marginBottom: 14 }} />
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 24, lineHeight: 1.15 }}>{f.title}</div>
                    <div style={{ fontSize: 18, color: "var(--neutral-600)", lineHeight: 1.5, marginTop: 8 }}>{f.body}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* TESTIMONIALS — réactiver avec SHOW_TESTIMONIALS = true */}
        {SHOW_TESTIMONIALS && (
          <section className="container" style={{ padding: "72px 24px" }}>
            <SectionHead title="Ils utilisent Djaté POS" />
            <div className="grid cols3">
              {testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="card" style={{ display: "flex", flexDirection: "column", gap: 16, padding: "26px 24px", height: "100%" }}>
                    <p style={{ fontSize: 17, lineHeight: 1.5, margin: 0 }}>“{t.quote}”</p>
                    <div style={{ marginTop: "auto" }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 17 }}>{t.name}</div>
                      <div style={{ fontSize: 14, color: "var(--neutral-600)" }}>{t.role}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p style={{ fontSize: 14, color: "var(--neutral-500)", marginTop: 18 }}>
              Témoignages à venir
            </p>
          </section>
        )}

        <CtaBand title="Demandez une démonstration gratuite" subtitle="Nous vous montrons Djaté POS dans votre commerce." />
      </main>
      <Footer />
    </>
  );
}
