"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#space",   label: "Space" },
    { href: "#blog",    label: "Blog" },
    { href: "#about",   label: "About" },
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
        padding: "1rem 4rem",
        background: scrolled ? "rgba(5,5,8,0.88)" : "rgba(5,5,8,0.45)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      {/* Logo: image + text */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.65rem",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        <Image
          src="/logo.png"
          alt="ldvyyc logo"
          width={32}
          height={32}
          style={{
            borderRadius: 6,
            flexShrink: 0,
          }}
        />
        <span
          className="font-mono"
          style={{
            fontSize: "1.15rem",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "var(--text)",
          }}
        >
          ldv<span style={{ color: "var(--orange)" }}>/</span>yyc
        </span>
      </Link>

      {/* Nav links */}
      <ul
        className="nav-links"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
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
