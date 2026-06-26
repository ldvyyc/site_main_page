"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#space", label: "Space" },
    { href: "#blog",  label: "Blog" },
    { href: "#about", label: "About" },
    { href: "#connect", label: "Connect" },
    { href: "https://resume.ldvyyc.com", label: "Résumé", external: true },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.4rem 4rem",
        background: scrolled ? "rgba(11,14,20,0.85)" : "rgba(11,14,20,0.5)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      <Link
        href="/"
        className="font-mono nav-logo"
        style={{
          fontSize: "1.25rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
          color: "var(--text)",
          textDecoration: "none",
          transition: "color 0.2s",
        }}
      >
        ldv<span style={{ color: "var(--orange)" }}>/</span>yyc
      </Link>

      <ul className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(({ href, label, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-mono nav-link"
              style={{
                position: "relative",
                fontSize: "0.92rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
