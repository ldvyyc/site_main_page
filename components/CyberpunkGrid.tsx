"use client";
import { useEffect, useRef } from "react";

export default function CyberpunkGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse parallax: blobs shift slightly toward cursor
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const dx = (e.clientX / window.innerWidth  - 0.5) * 28;
      const dy = (e.clientY / window.innerHeight - 0.5) * 28;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <style>{`
        @keyframes drift1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(60px, -80px) scale(1.08); }
          66%  { transform: translate(-40px, 50px) scale(0.94); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes drift2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(-70px, 60px) scale(1.06); }
          66%  { transform: translate(50px, -40px) scale(0.96); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes drift3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(40px, 70px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes drift4 {
          0%   { transform: translate(0px, 0px) scale(1); }
          40%  { transform: translate(-50px, -60px) scale(0.92); }
          80%  { transform: translate(30px, 40px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes drift5 {
          0%   { transform: translate(0px, 0px) scale(1); }
          60%  { transform: translate(80px, -50px) scale(1.12); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          will-change: transform;
          mix-blend-mode: screen;
        }
      `}</style>

      {/* Base gradient background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #0F1422 0%, #080B12 55%, #050709 100%)",
        }}
      />

      {/* Subtle noise grain overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          opacity: 0.6,
        }}
      />

      {/* Aurora blobs layer — mouse parallax container */}
      <div
        ref={containerRef}
        className="fixed pointer-events-none z-0"
        style={{
          inset: "-60px",
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* Cyan — top center, dominant */}
        <div
          className="aurora-blob"
          style={{
            width: "65vw", height: "65vw",
            top: "-15%", left: "17%",
            background: "rgba(91,184,232,0.14)",
            animation: "drift1 22s ease-in-out infinite",
          }}
        />

        {/* Orange — lower left */}
        <div
          className="aurora-blob"
          style={{
            width: "50vw", height: "50vw",
            bottom: "5%", left: "-10%",
            background: "rgba(200,212,74,0.10)",
            animation: "drift2 28s ease-in-out infinite",
          }}
        />

        {/* Purple — right mid */}
        <div
          className="aurora-blob"
          style={{
            width: "45vw", height: "45vw",
            top: "20%", right: "-8%",
            background: "rgba(58,139,92,0.10)",
            animation: "drift3 19s ease-in-out infinite",
          }}
        />

        {/* Cyan accent — bottom right */}
        <div
          className="aurora-blob"
          style={{
            width: "35vw", height: "35vw",
            bottom: "-5%", right: "10%",
            background: "rgba(91,184,232,0.08)",
            animation: "drift4 25s ease-in-out infinite",
          }}
        />

        {/* Orange accent — top right */}
        <div
          className="aurora-blob"
          style={{
            width: "28vw", height: "28vw",
            top: "5%", right: "5%",
            background: "rgba(200,212,74,0.07)",
            animation: "drift5 31s ease-in-out infinite",
          }}
        />
      </div>
    </>
  );
}
