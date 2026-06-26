"use client";
import { useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";
import FlipCard from "./FlipCard";

// ── EDIT YOUR SPACE CARDS HERE ──────────────────────────────────────────────
const SPACE_CARDS = [
  {
    icon: "📊",
    tag: "Trading · Analytics",
    name: "kdash",
    descFront: "Kalshi prediction-market performance dashboard. Drop in your CSV, get deep P&L analytics.",
    descBack: "Track Kalshi trading performance — P&L curves, win rates, and edge analysis for serious prediction-market traders.",
    href: "https://kdash.ldvyyc.com",
    accent: "#FF6B35",
  },
  {
    icon: "🧠",
    tag: "Quant · Study",
    name: "prep",
    descFront: "Quant interview prep hub — stats, finance, coding, ML, and brain teasers in one place.",
    descBack: "Notes & practice across 8 sections: Industry, Brain Teasers, Maths, Stats, Finance, Coding, ML, and Companies.",
    href: "https://prep.ldvyyc.com",
    accent: "#00D4FF",
  },
  {
    icon: "🎬",
    tag: "Content · NBA",
    name: "hoops",
    descFront: "Data-driven NBA analytics — decoding basketball with the quant toolkit. Videos & visualizations.",
    descBack: "Chinese-language NBA analytics channel. Charts, animations, and deep dives into 40 years of league data.",
    comingSoon: true,
    accent: "#A78BFA",
  },
];
// ────────────────────────────────────────────────────────────────────────────

export default function SpaceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="space" ref={sectionRef} className="section-wrap">
      <div className="reveal">
        <SectionLabel num="01" label="Space" />
      </div>
      <h2 className="reveal section-eyebrow-title">Things I&apos;ve built</h2>
      <p className="reveal section-intro">
        Tools, experiments, and projects — a growing collection of things at the
        intersection of code, quant, and curiosity.
      </p>

      <div className="cards-grid">
        {SPACE_CARDS.map((card, i) => (
          <div key={card.name} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <FlipCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
}
