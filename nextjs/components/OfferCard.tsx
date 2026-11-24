import Link from "next/link";
import { Check } from "lucide-react";

export default function OfferCard({
  kicker,
  title,
  items,
  fromPrice,
  dark,
  href,
}: {
  kicker: string;
  title: string;
  items: string[];
  fromPrice?: string;
  dark?: boolean;
  href?: string;
}) {
  const card = (
    <div
      className={`card${dark ? " card-dark" : ""}`}
      style={{ height: "100%", display: "flex", flexDirection: "column", transition: "transform .2s ease, box-shadow .2s ease" }}
    >
      <div className="kicker" style={{ color: dark ? "var(--mint)" : "var(--accent)" }}>{kicker}</div>
      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 30, lineHeight: 1.05, margin: "6px 0 18px" }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {items.map((it) => (
          <div key={it} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <Check size={22} strokeWidth={2} color={dark ? "#8fd3ac" : "#0e7a43"} style={{ flex: "none", marginTop: 2 }} />
            <div style={{ fontSize: 18, lineHeight: 1.45 }}>{it}</div>
          </div>
        ))}
      </div>
      {fromPrice && (
        <div
          style={{
            marginTop: 22,
            paddingTop: 18,
            borderTop: `1px solid ${dark ? "rgba(255,255,255,.16)" : "var(--line)"}`,
          }}
        >
          <div style={{ fontSize: 15, color: dark ? "rgba(255,255,255,.65)" : "var(--neutral-600)", marginBottom: 4 }}>
            À partir de
          </div>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 28, lineHeight: 1 }}>
            {fromPrice}{" "}
            <span style={{ fontSize: 17, color: dark ? "rgba(255,255,255,.7)" : "var(--neutral-600)" }}>FCFA</span>
          </div>
        </div>
      )}
    </div>
  );

  if (!href) return card;
  return (
    <Link href={href} style={{ display: "block", height: "100%", color: "inherit", textDecoration: "none" }}>
      {card}
    </Link>
  );
}
