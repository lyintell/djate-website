import Link from "next/link";
import { Monitor } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SectionHead, CtaBand } from "@/components/ui";
import { cleEnMainAdvantages } from "@/data/solution/cle-en-main";
import { logicielSeulAdvantages } from "@/data/solution/logiciel-seul";
import { devices, specLabels } from "@/data/materiel/devices";
import Reveal from "@/components/Reveal";

function specValue(deviceIndex: number, label: string) {
  return devices[deviceIndex].specs.find((s) => s.label === label)?.value ?? "—";
}

export default function NosFormules() {
  return (
    <>
      <Nav />
      <main>
        <section className="container" style={{ padding: "64px 24px 40px" }}>
          <div className="kicker" style={{ marginBottom: 14 }}>Nos formules</div>
          <h1 className="h1" style={{ fontSize: "clamp(34px,7vw,56px)", maxWidth: 860, marginBottom: 18 }}>
            Clé en main ou logiciel seul
          </h1>
          <p className="lead" style={{ maxWidth: 680, margin: "0 0 28px" }}>
            Clé en main si vous voulez tout prêt. Logiciel seul si vous avez déjà vos ordinateurs.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="#cle-en-main" className="btn btn-primary">Offre clé en main</a>
            <a href="#logiciel" className="btn btn-secondary">Logiciel seul</a>
            <a href="#terminaux" className="btn btn-secondary">Nos terminaux</a>
          </div>
        </section>

        {/* CLÉ EN MAIN */}
        <section id="cle-en-main" className="surface">
          <div className="container" style={{ padding: "64px 24px" }}>
            <SectionHead title="Offre clé en main" />

            <div className="grid cols2" style={{ gap: 20 }}>
              {cleEnMainAdvantages.map((a, i) => {
                const Icon = a.icon;
                return (
                  <Reveal key={a.title} delay={i * 60}>
                    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <Icon size={28} strokeWidth={1.5} color="#0e7a43" style={{ flex: "none" }} />
                      <div>
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 22, lineHeight: 1.15 }}>
                          {a.title}
                        </div>
                        <div style={{ fontSize: 18, color: "var(--neutral-600)", lineHeight: 1.5, marginTop: 6 }}>{a.body}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#terminaux" className="btn btn-secondary">
                Voir nos terminaux
              </a>
              <Link href="/#fonctionnalites" className="btn btn-secondary">
                Découvrir les fonctionnalités
              </Link>
              <Link href="/tarifs" className="btn btn-primary">
                Voir le tarif clé en main
              </Link>
            </div>
          </div>
        </section>

        {/* LOGICIEL SEUL */}
        <section id="logiciel" className="container" style={{ padding: "72px 24px" }}>
          <SectionHead title="Logiciel seul" />
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--neutral-700)", maxWidth: 640, margin: "0 0 32px" }}>
            Pour ceux qui ont déjà des ordinateurs. Installez Djaté POS sur votre matériel existant — avec formation et
            1 mois de suivi.
          </p>
          <div className="grid cols3" style={{ gap: 20, marginBottom: 36 }}>
            {logicielSeulAdvantages.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.title} delay={i * 60}>
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <Icon size={28} strokeWidth={1.5} color="#0e7a43" style={{ flex: "none" }} />
                    <div>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 22, lineHeight: 1.15 }}>
                        {a.title}
                      </div>
                      <div style={{ fontSize: 18, color: "var(--neutral-600)", lineHeight: 1.5, marginTop: 6 }}>{a.body}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href="/#fonctionnalites" className="btn btn-secondary">
              Découvrir les fonctionnalités
            </Link>
            <Link href="/tarifs" className="btn btn-primary">
              Voir le tarif logiciel
            </Link>
          </div>
        </section>

        {/* NOS SYSTÈMES */}
        <section id="terminaux" className="surface">
          <div className="container" style={{ padding: "64px 24px" }}>
            <SectionHead title="Nos terminaux" />
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--neutral-700)", maxWidth: 640, margin: "0 0 32px" }}>
              Trois terminaux Windows ou Android adaptés à votre activités.
            </p>
            <Reveal>
              <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                <table
                  style={{
                    width: "100%",
                    minWidth: 720,
                    borderCollapse: "separate",
                    borderSpacing: 0,
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          ...thStyle,
                          width: "22%",
                          textAlign: "left",
                          background: "var(--accent-100)",
                          color: "var(--accent-700)",
                        }}
                      >
                        Caractéristique
                      </th>
                      {devices.map((d) => (
                        <th key={d.name} style={{ ...thStyle, width: `${78 / devices.length}%`, background: "var(--dark)", color: "#fff", textAlign: "center" }}>
                          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 22, lineHeight: 1.15 }}>{d.name}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ ...tdStyle, fontWeight: 600, color: "var(--neutral-600)", background: "var(--accent-100)" }}>Aperçu</td>
                      {devices.map((d) => (
                        <td key={d.name} style={{ ...tdStyle, padding: 12, verticalAlign: "middle" }}>
                          <div
                            style={{
                              aspectRatio: "4 / 3",
                              borderRadius: 8,
                              background: "var(--accent-100)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            aria-label={d.name}
                          >
                            <Monitor size={48} strokeWidth={1.4} color="#0e7a43" />
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ ...tdStyle, fontWeight: 600, color: "var(--neutral-600)", background: "var(--accent-100)" }}>Description</td>
                      {devices.map((d) => (
                        <td key={d.name} style={{ ...tdStyle, fontSize: 17, lineHeight: 1.5, color: "var(--neutral-700)" }}>
                          {d.description}
                        </td>
                      ))}
                    </tr>
                    {specLabels.map((label, rowIndex) => (
                      <tr key={label}>
                        <td
                          style={{
                            ...tdStyle,
                            fontWeight: 600,
                            color: "var(--neutral-600)",
                            background: "var(--accent-100)",
                            borderBottom: rowIndex === specLabels.length - 1 ? "none" : tdStyle.borderBottom,
                          }}
                        >
                          {label}
                        </td>
                        {devices.map((d, di) => (
                          <td
                            key={d.name}
                            style={{
                              ...tdStyle,
                              fontFamily: "var(--font-heading)",
                              fontWeight: 600,
                              fontSize: 18,
                              borderBottom: rowIndex === specLabels.length - 1 ? "none" : tdStyle.borderBottom,
                            }}
                          >
                            {specValue(di, label)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <div style={{ marginTop: 36 }}>
              <Link href="/tarifs" className="btn btn-primary">
                Voir tarifs matériel
              </Link>
            </div>
          </div>
        </section>

        <CtaBand title="Quelle offre pour votre commerce ?" subtitle="Nous vous aidons à choisir la bonne formule." buttonLabel="Nous contacter" />
      </main>
      <Footer />
    </>
  );
}

const thStyle: React.CSSProperties = {
  padding: "22px 18px",
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  fontSize: 17,
  letterSpacing: ".04em",
  textAlign: "left",
  verticalAlign: "bottom",
  borderBottom: "1px solid var(--line)",
};

const tdStyle: React.CSSProperties = {
  padding: "18px 18px",
  fontSize: 17,
  verticalAlign: "top",
  borderBottom: "1px solid var(--line)",
  borderLeft: "1px solid var(--line)",
};
