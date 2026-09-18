import { Play, Lock } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SectionHead, CtaBand } from "@/components/ui";
import { videosFree, videosLocked } from "@/data/videos/videos";
import Reveal from "@/components/Reveal";
import YouTubeThumb from "@/components/YouTubeThumb";
import { getYouTubeId, detectLanguageFromTitle } from "@/lib/youtube";
import type { VideoLang } from "@/data/videos/videos";

function LangTag({ lang, title }: { lang?: VideoLang; title: string }) {
  const resolved = lang ?? detectLanguageFromTitle(title);
  if (!resolved) return null;
  const isBambara = resolved === "Bambara";
  return (
    <span
      className="tag"
      style={{
        fontSize: 11,
        padding: "4px 10px",
        background: isBambara ? "#f4941e" : undefined,
        color: isBambara ? "#fff" : undefined,
      }}
    >
      {resolved}
    </span>
  );
}

export default function Videos() {
  return (
    <>
      <Nav />
      <main>
        <section className="container" style={{ padding: "64px 24px 40px" }}>
          <div className="kicker" style={{ marginBottom: 14 }}>Formations</div>
          <h1 className="h1" style={{ fontSize: "clamp(34px,7vw,56px)", maxWidth: 800, marginBottom: 18 }}>
            Apprenez à utiliser Djaté POS
          </h1>
          <p className="lead" style={{ maxWidth: 680, margin: 0 }}>
            Des vidéos courtes pour prendre en main l&apos;application, étape par étape. Certaines sont en accès libre,
            d&apos;autres sont réservées à nos clients.
          </p>
        </section>

        {/* FREE */}
        <section className="container" style={{ padding: "16px 24px 8px" }}>
          <SectionHead title="Introduction à Djaté POS">
            <span className="tag" style={{ alignSelf: "center" }}>Accès libre</span>
          </SectionHead>
          <p style={{ fontSize: 16, color: "var(--neutral-600)", margin: "0 0 32px", maxWidth: 640 }}>
            Les vidéos seront ajoutées prochainement. Voici les sujets prévus.
          </p>
          <div className="grid cols3">
            {videosFree.map((v, i) => {
              const youtubeId = v.youtube ? getYouTubeId(v.youtube) : null;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  {youtubeId ? (
                    <YouTubeThumb youtubeId={youtubeId} title={v.title} />
                  ) : (
                    <div className="card" style={{ aspectRatio: "16 / 9", background: "var(--accent-100)", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, position: "relative" }}>
                      <span className="play-btn" style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                        <Play size={26} fill="#fff" color="#fff" style={{ marginLeft: 3 }} />
                      </span>
                      {v.dur && (
                        <span style={{ position: "absolute", left: 10, bottom: 10, fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent-700)", background: "#fff", padding: "3px 8px", borderRadius: 6 }}>
                          {v.dur}
                        </span>
                      )}
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 19, lineHeight: 1.15 }}>{v.title}</div>
                    <LangTag lang={v.lang} title={v.title} />
                  </div>
                  <div style={{ fontSize: 14, color: "var(--neutral-600)", marginTop: 4, lineHeight: 1.4 }}>{v.body}</div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* LOCKED */}
        <section className="container" style={{ padding: "56px 24px 8px" }}>
          <SectionHead title="Formations clients">
            <span className="tag tag-outline" style={{ alignSelf: "center" }}>Réservé aux clients</span>
          </SectionHead>
          <p style={{ fontSize: 16, color: "var(--neutral-600)", margin: "0 0 32px", maxWidth: 640 }}>
            Des formations approfondies, accessibles à nos clients. Contactez-nous pour y accéder.
          </p>
          <div className="grid cols3">
            {videosLocked.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card" style={{ aspectRatio: "16 / 9", background: "#e2e3e4", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
                  <Lock size={34} strokeWidth={1.5} color="#5d5d60" />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 19, lineHeight: 1.15 }}>{v.title}</div>
                  <LangTag lang={v.lang} title={v.title} />
                </div>
                <div style={{ fontSize: 14, color: "var(--neutral-600)", marginTop: 4, lineHeight: 1.4 }}>{v.body}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <div style={{ marginTop: 56 }}>
          <CtaBand title="Vous êtes déjà client ?" subtitle="Contactez-nous pour accéder à toutes les formations." />
        </div>
      </main>
      <Footer />
    </>
  );
}
