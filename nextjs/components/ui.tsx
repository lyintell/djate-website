import Link from "next/link";

export function SectionHead({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="sec-head">
      <h2 className="h2">{title}</h2>
      {children}
      <div className="rule" />
    </div>
  );
}

export function CtaBand({
  title,
  subtitle,
  buttonLabel = "Nous contacter",
}: {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="band-accent">
      <div
        className="container"
        style={{
          padding: "48px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "clamp(24px,4.5vw,32px)", lineHeight: 1.05 }}>
            {title}
          </div>
          {subtitle && <div style={{ fontSize: 17, color: "rgba(255,255,255,.85)", marginTop: 6 }}>{subtitle}</div>}
        </div>
        <Link href="/contact" className="btn btn-light">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
