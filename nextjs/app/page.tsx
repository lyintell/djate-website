import Link from "next/link";
import { Check, GraduationCap, Clock } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SectionHead, CtaBand } from "@/components/ui";
import HeroVideo from "@/components/HeroVideo";
import { businessTypes, benefits, specs, cloud } from "@/lib/data";
import { offerFast, offerPro, pricing } from "@/data/home/pricing";
import { testimonials } from "@/data/home/testimonials";
import { heroVideo } from "@/data/home/hero-video";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* BUSINESS TYPES BAND */}
        <section className="container" style={{ padding: "44px 24px 0" }}>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(14px,2.9vw,30px)",
              lineHeight: 1.15,
              letterSpacing: "-.01em",
              textTransform: "uppercase",
              color: "var(--accent)",
              textWrap: "balance",
            }}
          >
            {businessTypes.join(" · ")}
          </div>
        </section>

        {/* HERO */}
        <section
          className="container hero"
          style={{ padding: "72px 24px 56px", display: "grid", gap: 40, alignItems: "center" }}
        >
          <div>
            <h1 className="h1" style={{ marginBottom: 20 }}>
              Gérez votre commerce, <span style={{ color: "var(--accent)" }}>simplement.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 520, margin: "0 0 12px" }}>
              Djaté POS gère vos ventes, votre stock, vos clients, vos fournisseurs, votre caisse et vos rapports — sur une machine tactile ou en
              logiciel seul. Conçu spécialement pour les commerçants du Mali.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href="/contact" className="btn btn-primary">
                Demander une démo gratuite
              </Link>
              <a href="#offres" className="btn btn-secondary">
                Voir les offres
              </a>
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
            <div className="hgrid hc3">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <Reveal key={b.title} delay={i * 60}>
                    <div className="hcell" style={{ display: "flex", gap: 16, alignItems: "flex-start", height: "100%" }}>
                      <Icon size={28} strokeWidth={1.5} color="#0e7a43" style={{ flex: "none" }} />
                      <div>
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 22, lineHeight: 1.1 }}>{b.title}</div>
                        <div style={{ fontSize: 15, color: "var(--neutral-600)", lineHeight: 1.4, marginTop: 6 }}>{b.body}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* MACHINE */}
        <section
          id="machine"
          className="container"
          style={{ padding: "72px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 14 }}>
            {["machine-front.jpg", "machine-back.jpg"].map((src, i) => (
              <div key={src} style={{ background: "var(--dark)", borderRadius: "var(--radius)", padding: 10 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/${src}`}
                  alt={i === 0 ? "Terminal Djaté POS, écran caisse" : "Terminal Djaté POS, écran client"}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: i === 0 ? "50% 20%" : "50% 30%", borderRadius: 9 }}
                />
              </div>
            ))}
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 12 }}>Le matériel</div>
            <h2 className="h2" style={{ marginBottom: 16 }}>Machine propriétaire Djaté POS</h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--neutral-700)", margin: "0 0 24px" }}>
              Un terminal tout-en-un, prêt à vendre dès l&apos;installation. Le logiciel seul est aussi disponible sur
              votre propre matériel.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {specs.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <Icon size={28} strokeWidth={1.5} color="#0e7a43" style={{ flex: "none" }} />
                    <div>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 17, lineHeight: 1.1 }}>{s.title}</div>
                      <div style={{ fontSize: 14, color: "var(--neutral-600)", lineHeight: 1.35, marginTop: 2 }}>{s.body}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLOUD */}
        <section className="band-dark">
          <div
            className="container"
            style={{ padding: "64px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}
          >
            <div>
              <h2 className="h2" style={{ marginBottom: 16 }}>Mode Cloud disponible</h2>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.8)", margin: 0, maxWidth: 520 }}>
                Vos ventes, votre stock et vos rapports sont accessibles partout, sur les appareils que vous utilisez
                déjà. Vos données restent synchronisées et sauvegardées en sécurité.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "var(--radius)", overflow: "hidden" }}>
              {cloud.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} style={{ background: "var(--dark)", padding: 22, display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <Icon size={28} strokeWidth={1.5} color="#8fd3ac" style={{ flex: "none" }} />
                    <div>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 20, lineHeight: 1.1 }}>{c.title}</div>
                      <div style={{ fontSize: 15, color: "rgba(255,255,255,.72)", lineHeight: 1.4, marginTop: 4 }}>{c.body}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OFFERS */}
        <section id="offres" className="surface">
          <div className="container" style={{ padding: "64px 24px" }}>
            <SectionHead title="Un logiciel, deux offres" />
            <div className="grid cols2" style={{ alignItems: "start" }}>
              <Reveal><OfferCard kicker="Offre Fast" title="L'essentiel pour vendre" desc="Tout ce qu'il faut pour encaisser, suivre votre stock et vos clients au quotidien." items={offerFast} /></Reveal>
              <Reveal delay={100}><OfferCard dark kicker="Offre Pro" title="La gestion complète" desc="Toute l'offre Fast, plus la gestion des fournisseurs, des commandes et de l'inventaire." items={offerPro} /></Reveal>
            </div>
            <p style={{ fontSize: 14, color: "var(--neutral-500)", marginTop: 20 }}>
              Voir les <a href="#tarifs" style={{ fontWeight: 600 }}>tarifs détaillés</a> ci-dessous — machine ou logiciel seul.
            </p>
          </div>
        </section>

        {/* PRICING */}
        <section id="tarifs" className="container" style={{ padding: "72px 24px" }}>
          <SectionHead title="Tarifs" />

          <div className="card" style={{ background: "var(--accent-100)", display: "flex", flexWrap: "wrap", gap: "20px 32px", alignItems: "center", marginBottom: 28, padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 18, color: "var(--accent-700)" }}>
              Inclus dans toutes les offres :
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <GraduationCap size={22} strokeWidth={1.8} color="#0e7a43" />
              <span style={{ fontSize: 16, fontWeight: 600 }}>Formation incluse</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Clock size={22} strokeWidth={1.8} color="#0e7a43" />
              <span style={{ fontSize: 16, fontWeight: 600 }}>1 mois de suivi</span>
            </div>
          </div>

          <div className="grid cols2" style={{ alignItems: "stretch" }}>
            <Reveal><PriceCard data={pricing.fast} buttonLabel="Choisir Fast" /></Reveal>
            <Reveal delay={100}><PriceCard data={pricing.pro} buttonLabel="Choisir Pro" dark /></Reveal>
          </div>
        </section>

        {/* TESTIMONIALS */}
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

        <CtaBand title="Demandez une démonstration gratuite" subtitle="Nous vous montrons Djaté POS dans votre commerce." />
      </main>
      <Footer />
    </>
  );
}

function OfferCard({
  kicker,
  title,
  desc,
  items,
  dark,
}: {
  kicker: string;
  title: string;
  desc: string;
  items: string[];
  dark?: boolean;
}) {
  return (
    <div className={`card${dark ? " card-dark" : ""}`}>
      <div className="kicker" style={{ color: dark ? "var(--mint)" : "var(--accent)" }}>{kicker}</div>
      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 30, lineHeight: 1, margin: "6px 0" }}>{title}</div>
      <p style={{ fontSize: 15, lineHeight: 1.5, color: dark ? "rgba(255,255,255,.78)" : "var(--neutral-600)", margin: "0 0 22px" }}>{desc}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((it) => (
          <div key={it} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <Check size={20} strokeWidth={2} color={dark ? "#8fd3ac" : "#0e7a43"} style={{ flex: "none", marginTop: 2 }} />
            <div style={{ fontSize: 16, lineHeight: 1.4 }}>{it}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceCard({
  data,
  buttonLabel,
  dark,
}: {
  data: { name: string; tagline: string; solo: string; full: string };
  buttonLabel: string;
  dark?: boolean;
}) {
  const rowBg = dark ? "var(--dark)" : "#fff";
  const sub = dark ? "rgba(255,255,255,.7)" : "var(--neutral-600)";
  return (
    <div className={`card${dark ? " card-dark" : ""}`} style={{ display: "flex", flexDirection: "column" }}>
      <div className="kicker" style={{ color: dark ? "var(--mint)" : "var(--accent)" }}>{data.name}</div>
      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 24, lineHeight: 1, margin: "6px 0 22px" }}>{data.tagline}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: dark ? "rgba(255,255,255,.16)" : "var(--line)", border: `1px solid ${dark ? "rgba(255,255,255,.16)" : "var(--line)"}`, borderRadius: 10, overflow: "hidden", marginBottom: 28 }}>
        <PriceRow bg={rowBg} sub={sub} label="Logiciel seul" price={data.solo} />
        <PriceRow bg={rowBg} sub={sub} label={<>Système complet <span style={{ fontWeight: 400, color: sub }}>avec machine</span></>} price={data.full} />
      </div>
      <Link href="/contact" className={`btn btn-block ${dark ? "btn-light" : "btn-secondary"}`} style={{ marginTop: "auto" }}>
        {buttonLabel}
      </Link>
    </div>
  );
}

function PriceRow({ bg, sub, label, price }: { bg: string; sub: string; label: React.ReactNode; price: string }) {
  return (
    <div style={{ background: bg, padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 17 }}>{label}</div>
      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 26, whiteSpace: "nowrap" }}>
        {price} <span style={{ fontSize: 15, color: sub }}>FCFA</span>
      </div>
    </div>
  );
}
