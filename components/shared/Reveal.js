"use client";
import React from "react";

/* Reveal children on scroll (rise + fade), with optional stagger delay. */
export function Reveal({ children, delay = 0, y = 24, as = "div", style = {}, ...rest }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity var(--dur-slow) var(--ease-out) ${delay}ms, transform var(--dur-slow) var(--ease-out) ${delay}ms`,
      ...style,
    }} {...rest}>{children}</Tag>
  );
}

/* A hairline that draws itself in the first time it scrolls into view. */
export function RevealLine({ delay = 0, orientation = "horizontal", color = "var(--line-hair)", style = {} }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const h = orientation === "horizontal";
  return <div ref={ref} style={{
    background: color, transformOrigin: h ? "left center" : "top center",
    width: h ? "100%" : "1px", height: h ? "1px" : "100%",
    transform: shown ? "scale(1)" : (h ? "scaleX(0)" : "scaleY(0)"),
    transition: `transform var(--dur-draw) var(--ease-line) ${delay}ms`, ...style,
  }} />;
}

/* Scroll position hook (for hero parallax). */
export function useScrollY() {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const scroller = document.getElementById("kuntur-scroll") || window;
    const read = () => setY(scroller === window ? window.scrollY : scroller.scrollTop);
    scroller.addEventListener("scroll", read, { passive: true }); read();
    return () => scroller.removeEventListener("scroll", read);
  }, []);
  return y;
}
