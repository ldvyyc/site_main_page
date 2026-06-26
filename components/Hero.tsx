"use client";
import { useEffect, useRef, useState } from "react";

const NAME = "LDV    YYC";
const TAGLINE_PREFIX = "Quant in NYC";
const TAGLINE_SUFFIX = ", always learning";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const idxRef = useRef(0);

  // Type-in effect for tagline suffix after a short delay
  useEffect(() => {
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        if (idxRef.current <= TAGLINE_SUFFIX.length) {
          setTyped(TAGLINE_SUFFIX.slice(0, idxRef.current));
          idxRef.current++;
        } else {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      {/* Eyebrow */}
      {/* <p
        className="font-mono text-xs tracking-[0.22em] uppercase mb-6 animate-[fadeUp_0.8s_0.3s_both]"
        style={{ fontFamily: "var(--font-mono)", color: "var(--cyan)" }}
      >
        <span style={{ color: "var(--muted)" }}>// </span>ldvyyc.com
      </p> */}

      {/* Name */}
      <h1
        className="font-display font-bold leading-none mb-5 animate-[fadeUp_0.8s_0.5s_both]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(4.5rem,13vw,11rem)",
          letterSpacing: "-0.03em",
          marginBottom: "2rem",
        }}
      >
        {NAME.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block hover:-translate-y-2 hover:scale-110 transition-transform duration-150"
            style={{
              background: "linear-gradient(135deg, var(--text) 0%, var(--cyan) 55%, var(--orange) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Real name — identity annotation */}
      <p
        className="font-mono animate-[fadeUp_0.8s_0.65s_both]"
        style={{
          fontSize: "clamp(0.9rem,2vw,1.15rem)",
          color: "var(--muted)",
          letterSpacing: "0.18em",
          marginBottom: "1rem",
        }}
      >
        <span style={{ color: "var(--text-dim)", opacity: 0.5 }}>// </span>
        Yuchen Yu
        <span style={{ color: "var(--muted)", margin: "0 0.6em" }}>·</span>
        Frank
      </p>

      {/* Tagline */}
      <p
        className="font-mono animate-[fadeUp_0.8s_0.7s_both]"
        style={{
          fontSize: "clamp(0.9rem,2vw,1.15rem)",
          color: "var(--text-dim)",
          marginBottom: "2.75rem",
          letterSpacing: "0.02em",
        }}
      >
        <span style={{ color: "var(--orange)" }}>{TAGLINE_PREFIX}</span>
        {typed}
        <span
          className="blink"
          style={{ display: "inline-block", width: 2, height: "1.1em", marginLeft: 2, background: "var(--cyan)", verticalAlign: "text-bottom" }}
        />
      </p>

      {/* CTA buttons */}
      <div
        className="animate-[fadeUp_0.8s_0.9s_both]"
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
      >
        <a
          href="#space"
          className="font-mono"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.8rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
            padding: "0.95rem 2.2rem",
            borderRadius: 4,
            background: "var(--orange)",
            color: "var(--bg)",
            textDecoration: "none",
            boxShadow: "0 0 22px rgba(255,107,53,0.35)",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 32px rgba(255,107,53,0.65)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 22px rgba(255,107,53,0.35)"; e.currentTarget.style.transform = "none"; }}
        >
          Explore →
        </a>
        <a
          href="https://resume.ldvyyc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.8rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "0.95rem 2.2rem",
            borderRadius: 4,
            border: "1px solid var(--muted)",
            color: "var(--text-dim)",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "var(--cyan)";
            e.currentTarget.style.color = "var(--cyan)";
            e.currentTarget.style.boxShadow = "0 0 16px rgba(0,212,255,0.2)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "var(--muted)";
            e.currentTarget.style.color = "var(--text-dim)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "none";
          }}
        >
          Résumé ↗
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeUp_0.8s_1.4s_both]">
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, var(--cyan), transparent)", animation: "scrollPulse 2s ease-in-out infinite" }}
        />
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
          scroll
        </span>
      </div>
    </section>
  );
}
