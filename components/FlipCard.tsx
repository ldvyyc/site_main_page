"use client";
import { useState } from "react";

interface FlipCardProps {
  icon: string;
  tag: string;
  name: string;
  descFront: string;
  descBack: string;
  href?: string;
  comingSoon?: boolean;
  accent: string;
}

export default function FlipCard({
  icon, tag, name, descFront, descBack, href, comingSoon, accent,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const faceBase: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div
      className="flip-card"
      style={{ height: 290, cursor: "pointer" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
    >
      <div className="flip-card-inner" style={{ transform: flipped ? "rotateY(180deg)" : "none" }}>
        {/* ── FRONT ── */}
        <div
          style={{
            ...faceBase,
            padding: "1.75rem",
            justifyContent: "flex-start",
            background: "linear-gradient(150deg, rgba(26,31,46,0.9) 0%, rgba(17,21,32,0.95) 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, borderRadius: "8px 8px 0 0", background: `linear-gradient(to right, ${accent}, transparent)` }} />

          {/* Icon tile */}
          <div
            style={{
              width: 48, height: 48, borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "1.25rem", fontSize: "1.4rem",
              background: `${accent}1A`, border: `1px solid ${accent}40`,
            }}
          >
            {icon}
          </div>

          <p className="font-mono" style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: accent, marginBottom: "0.5rem" }}>
            {tag}
          </p>
          <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.5rem", marginBottom: "0.6rem" }}>{name}</h3>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-dim)" }}>{descFront}</p>

          <div style={{ marginTop: "auto", paddingTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.05em", color: "var(--muted)" }}>hover to flip</span>
            <span style={{ color: accent, fontSize: "1.1rem", lineHeight: 1 }}>↻</span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            ...faceBase,
            transform: "rotateY(180deg)",
            padding: "1.75rem",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "1.25rem",
            background: "linear-gradient(150deg, rgba(17,21,32,0.97) 0%, rgba(11,14,20,0.98) 100%)",
            border: `1px solid ${accent}`,
            boxShadow: `inset 0 0 50px rgba(0,0,0,0.4), 0 0 30px ${accent}22`,
          }}
        >
          <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.25rem", color: accent }}>{name}</h3>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-dim)" }}>{descBack}</p>
          {comingSoon ? (
            <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid var(--muted)", padding: "0.6rem 1.25rem", borderRadius: 3 }}>
              Coming Soon
            </span>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="font-mono"
              style={{
                fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "0.7rem 1.75rem", borderRadius: 3,
                background: accent, color: "#0B0E14", fontWeight: 600,
                textDecoration: "none", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 22px ${accent}`; e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              Open Site →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
