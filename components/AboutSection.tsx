"use client";
import { useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";

// ── EDIT YOUR INFO HERE ──────────────────────────────────────────────────────
const SKILLS = [
  { label: "Machine Learning / Deep Learning", accent: "orange" },
  { label: "Quantitative Research",            accent: "cyan" },
  { label: "NLP & Text Models",                accent: "orange" },
  { label: "Python · C++ · SQL",               accent: "cyan" },
  { label: "Sports Analytics",                 accent: "orange" },
  { label: "Factor Research",                  accent: "cyan" },
  { label: "Philosophy & Literature",           accent: "orange" },
];
// ────────────────────────────────────────────────────────────────────────────

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-wrap">
      <div className="reveal">
        <SectionLabel num="03" label="About" />
      </div>
      <h2 className="reveal section-eyebrow-title" style={{ marginBottom: "3rem" }}>Who I am</h2>

      <div className="about-grid">
        <div className="reveal about-bio" style={{
          background: "rgba(5,5,8,0.72)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderRadius: 8,
          padding: "1.75rem",
          border: "1px solid rgba(255,255,255,0.05)",
        }}>
          <p>
            Quant researcher at <strong>Cubist Systematic Strategies</strong> in New York.
            I build systematic strategies at the intersection of{" "}
            <strong>machine learning, statistics, and markets</strong>.
          </p>
          <p>
            CS × Quantitative Finance background — dual undergrad degrees and a master&apos;s in
            Quant Finance. Previously at Millennium Management.
          </p>
          <p>
            On the side, building a Chinese-language NBA analytics channel — using the same
            quant toolkit to decode basketball. Numbers are numbers.
          </p>
        </div>

        <div className="reveal" style={{
          transitionDelay: "0.12s",
          background: "rgba(5,5,8,0.72)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderRadius: 8,
          padding: "1.75rem",
          border: "1px solid rgba(255,255,255,0.05)",
        }}>
          {SKILLS.map(({ label, accent }) => {
            const color = accent === "cyan" ? "var(--cyan)" : "var(--orange)";
            return (
              <div
                key={label}
                className="font-mono"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.8rem",
                  color: "var(--text-dim)",
                  padding: "0.65rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span style={{ color: "var(--orange)", fontSize: "0.7rem" }}>▸</span>
                {label}
                <span
                  style={{
                    marginLeft: "auto",
                    width: 6, height: 6, borderRadius: "50%",
                    background: color, boxShadow: `0 0 6px ${color}`, flexShrink: 0,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
