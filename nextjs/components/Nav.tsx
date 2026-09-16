"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(242,242,243,.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line-strong)",
      }}
    >
      <div
        className="container"
        style={{
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, flex: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/djate-logo.png" alt="Djaté POS" style={{ height: 40, width: "auto" }} />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 26,
              letterSpacing: "-.01em",
              color: "var(--text)",
              lineHeight: 1,
            }}
          >
            Djaté POS
          </span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
            marginLeft: "auto",
          }}
        >
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  position: "relative",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 17,
                  letterSpacing: ".03em",
                  textTransform: "uppercase",
                  color: "var(--text)",
                  padding: "8px 12px",
                }}
              >
                {l.label}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      left: 12,
                      right: 12,
                      bottom: 2,
                      height: 2,
                      background: "var(--accent)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn btn-primary" style={{ flex: "none" }}>
          Demander une démo
        </Link>
      </div>
    </header>
  );
}
