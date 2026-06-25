"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnter = () => {
      isHovering = true;
      ring.classList.add(styles.expand);
      dot.classList.add(styles.hidden);
    };

    const onLeave = () => {
      isHovering = false;
      ring.classList.remove(styles.expand);
      dot.classList.remove(styles.hidden);
    };

    const loop = () => {
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      const ease = 0.12;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover], input, textarea, select, label"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll(
        "a, button, [data-cursor-hover], input, textarea, select, label"
      ).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
