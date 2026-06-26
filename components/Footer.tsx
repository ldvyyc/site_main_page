"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("2026");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <footer
      className="relative z-10 text-center py-8 border-t font-mono"
      style={{
        borderColor: "rgba(255,255,255,0.05)",
        fontSize: "0.7rem",
        color: "var(--muted)",
      }}
    >
      <span>© {year} ldvyyc — </span>
      <a href="https://ldvyyc.com" style={{ color: "var(--cyan)" }} className="hover:underline">
        ldvyyc.com
      </a>
      <span> — built with intent, not templates</span>
    </footer>
  );
}
