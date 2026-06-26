"use client";
import { useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";

export default function BlogSection() {
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
    <section id="blog" ref={sectionRef} className="section-wrap">
      <div className="reveal">
        <SectionLabel num="02" label="Blog" />
      </div>
      <h2 className="reveal section-eyebrow-title" style={{ marginBottom: "2.5rem" }}>
        Writing &amp; ideas
      </h2>

      <div className="reveal blog-card">
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: 3, borderRadius: "8px 8px 0 0", background: "linear-gradient(to right, var(--purple), transparent)" }}
        />
        <div style={{ fontSize: "3rem", lineHeight: 1, flexShrink: 0 }}>✍️</div>
        <div style={{ flex: 1 }}>
          <p
            className="font-mono"
            style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--purple)", marginBottom: "0.5rem" }}
          >
            Quant · NBA Analytics · Ideas
          </p>
          {/* <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.35rem", marginBottom: "0.75rem" }}>
            blog.ldvyyc.com
          </h3> */}
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-dim)", marginBottom: "1.5rem" }}>
            Long-form writing on quant finance, NBA data analytics, and whatever I&apos;m obsessing over.
            Chinese-language NBA analytics video channel launching soon — using the same quant toolkit to decode basketball.
          </p>
          <a
            href="https://blog.ldvyyc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono"
            style={{
              display: "inline-block",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.7rem 1.6rem",
              borderRadius: 3,
              border: "1px solid var(--purple)",
              color: "var(--purple)",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 18px rgba(167,139,250,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
          >
            Visit Blog →
          </a>
        </div>
      </div>
    </section>
  );
}
