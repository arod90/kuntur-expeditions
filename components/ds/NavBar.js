"use client";
import React from "react";

/* Kuntur Expeditions top navigation. Wordmark cell, vertical hairlines, links
   + a trailing "Explore". On load/navigation the items stagger-rise (slot
   machine) and the hairlines draw in. Transparent over hero, frosted when solid. */
export function NavBar({
  brand = "Kuntur",
  brandSuffix = "Expeditions",
  links = [
    { label: "Expeditions", href: "#", active: true },
    { label: "Guides", href: "#" },
    { label: "Journal", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cta = "Explore",
  onNavigate,
  variant = "transparent",
  animateIn = true,
  /** ms before the nav sequence starts — lets the hero photo land first. */
  startDelay = 3150,
  style = {},
  ...rest
}) {
  const solid = variant === "solid";
  const [hovered, setHovered] = React.useState(null);

  const cell = {
    position: "relative",
    display: "flex", alignItems: "center", height: "100%",
    padding: "0 var(--gutter)",
  };
  const slot = (i, children, style) => (
    <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBottom: "0.12em", marginBottom: "-0.12em", ...style }}>
      <span style={{ display: "inline-block", animation: animateIn ? `kuntur-drop var(--dur-slow) var(--ease-out) ${startDelay + i * 80}ms both` : "none" }}>{children}</span>
    </span>
  );
  const vline = (delay, side) => ({
    position: "absolute", top: 0, bottom: 0, [side]: 0, width: "1px",
    background: "var(--line-hair)", transformOrigin: "top center",
    animation: animateIn ? `kuntur-draw-y var(--dur-draw) var(--ease-line) ${delay}ms both` : "none",
  });

  return (
    <header
      style={{
        position: "relative", zIndex: 20, width: "100%",
        height: "76px", display: "flex", alignItems: "stretch",
        color: "var(--paper-100)",
        background: solid ? "rgba(9,20,22,0.9)" : "transparent",
        fontFamily: "var(--font-text)", ...style,
      }}
      {...rest}
    >
      {/* Wordmark cell */}
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("home"); }}
        style={{ ...cell, textDecoration: "none", color: "inherit" }}>
        {slot(0, <span style={{ display: "inline-flex", alignItems: "center", gap: "11px" }}><img src="/flag-ec.svg" alt="Ecuador" width="27" height="18" style={{ display: "block", borderRadius: "3px", boxShadow: "0 1px 3px rgba(0,0,0,0.35)" }} /><span>{brand}<span style={{ fontWeight: "var(--fw-regular)", opacity: 0.7, marginLeft: "7px", letterSpacing: "0.02em" }}>{brandSuffix}</span></span></span>, {
          fontFamily: "var(--font-display)", fontWeight: "var(--fw-extrabold)",
          fontSize: "1.3rem", letterSpacing: "-0.02em", lineHeight: 1,
        })}
        <i style={vline(startDelay + 120, "right")} />
      </a>

      {/* Links */}
      <nav style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "38px", padding: "0 var(--gutter)" }}>
        {links.map((l, i) => (
          <a key={l.label} href={l.href || "#"}
            onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l.label); }}
            onMouseEnter={() => setHovered(l.label)} onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative", textDecoration: "none",
              fontSize: "0.95rem", fontWeight: "var(--fw-medium)",
              color: l.active ? "var(--accent)" : (hovered === l.label ? "var(--paper-100)" : "var(--text-body)"),
              transition: "color var(--dur-fast) var(--ease-out)",
            }}>
            {slot(i + 1, l.label)}
            <span style={{
              position: "absolute", left: 0, bottom: "-6px", height: "1.5px",
              width: "100%", background: "var(--accent)",
              transform: `scaleX(${l.active || hovered === l.label ? 1 : 0})`,
              transformOrigin: "left center",
              transition: "transform var(--dur-base) var(--ease-out)",
            }} />
          </a>
        ))}
      </nav>

      {/* Explore cell */}
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(cta); }}
        style={{
          ...cell, textDecoration: "none", color: "inherit",
          fontSize: "0.95rem", fontWeight: "var(--fw-semibold)",
        }}>
        <i style={vline(startDelay + 180, "left")} />
        {slot(links.length + 1, cta)}
      </a>

      {/* Bottom hairline — draws across after the items */}
      <i style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: "1px",
        background: "var(--line-hair)", transformOrigin: "left center",
        animation: animateIn ? `kuntur-draw-x var(--dur-draw) var(--ease-line) ${startDelay}ms both` : "none",
      }} />
    </header>
  );
}
