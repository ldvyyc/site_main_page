"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip custom cursor on touch / coarse-pointer devices
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let mx = -200, my = -200, rx = -200, ry = -200, raf = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);

    function tick() {
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(tick);
    }
    tick();

    // Hover detection
    const onEnter = () => {
      dotRef.current?.style.setProperty("background", "var(--orange)");
      dotRef.current?.style.setProperty("box-shadow", "0 0 12px var(--orange), 0 0 24px rgba(255,107,53,0.4)");
      ringRef.current?.style.setProperty("border-color", "rgba(255,107,53,0.5)");
      ringRef.current?.style.setProperty("width", "48px");
      ringRef.current?.style.setProperty("height", "48px");
    };
    const onLeave = () => {
      dotRef.current?.style.setProperty("background", "var(--cyan)");
      dotRef.current?.style.setProperty("box-shadow", "0 0 12px var(--cyan), 0 0 24px rgba(0,212,255,0.4)");
      ringRef.current?.style.setProperty("border-color", "rgba(0,212,255,0.5)");
      ringRef.current?.style.setProperty("width", "36px");
      ringRef.current?.style.setProperty("height", "36px");
    };

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          width: 12, height: 12,
          background: "var(--cyan)",
          boxShadow: "0 0 12px var(--cyan), 0 0 24px rgba(0,212,255,0.4)",
          transform: "translate(-50%,-50%)",
          mixBlendMode: "screen",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none rounded-full"
        style={{
          width: 36, height: 36,
          border: "1px solid rgba(0,212,255,0.5)",
          transform: "translate(-50%,-50%)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
    </>
  );
}
