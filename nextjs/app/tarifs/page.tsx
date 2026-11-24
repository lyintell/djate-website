import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SectionHead, CtaBand } from "@/components/ui";
import OfferCard from "@/components/OfferCard";
import { purchaseFormulas } from "@/data/home/pricing";
import Reveal from "@/components/Reveal";

export default function Tarifs() {
  return (
    <>
      <Nav />
      <main>
        <section className="container" style={{ padding: "64px 24px 40px" }}>
          <div className="kicker" style={{ marginBottom: 14 }}>Tarifs</div>
          <h1 className="h1" style={{ fontSize: "clamp(34px,7vw,56px)", maxWidth: 800, marginBottom: 18 }}>
            Options d&apos;achat
          </h1>
          <p className="lead" style={{ maxWidth: 680, margin: 0 }}>
            Choisissez la formule adaptée à votre commerce — clé en main, logiciel seul ou matériel.
          </p>
        </section>

        <section id="offres" className="surface">
          <div className="container" style={{ padding: "64px 24px" }}>
            <SectionHead title="Nos formules" />
            <div className="grid cols3" style={{ alignItems: "stretch" }}>
              {purchaseFormulas.map((f, i) => (
                <Reveal key={f.kicker} delay={i * 80}>
                  <OfferCard
                    kicker={f.kicker}
                    title={f.title}
                    items={f.items}
                    fromPrice={f.fromPrice}
                    dark={f.dark}
                    href={f.href}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title="Une question sur les tarifs ?" subtitle="Nous vous aidons à choisir la bonne formule." buttonLabel="Nous contacter" />
      </main>
      <Footer />
    </>
  );
}
