"use client";
import React from "react";
import { Icon } from "./Icon";

/* Kuntur Expeditions top navigation. Wordmark cell, vertical hairlines, links
   + a trailing "Explore". On load/navigation the items stagger-rise (slot
   machine) and the hairlines draw in. Transparent over hero, frosted when solid.
   Below 900px the links collapse into a "Menu" cell that opens a full-height
   drawer (the NavBar is re-mounted per route, so the drawer closes on nav). */
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
  const [hovered, setHovered] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const solid = variant === "solid" || open;

  // Close on Escape; lock the page scroller while the drawer is open.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    const scroller = document.getElementById("kuntur-scroll");
    const prev = scroller ? scroller.style.overflowY : "";
    if (scroller) scroller.style.overflowY = "hidden";
    return () => { window.removeEventListener("keydown", onKey); if (scroller) scroller.style.overflowY = prev; };
  }, [open]);

  const nav = (target) => { setOpen(false); onNavigate && onNavigate(target); };

  // (display is intentionally NOT set inline — the .k-nav-* classes toggle it per breakpoint)
  const cell = {
    position: "relative",
    alignItems: "center", height: "100%",
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
        height: "var(--nav-h)", display: "flex", alignItems: "stretch",
        color: "var(--paper-100)",
        background: solid ? "rgba(9,20,22,0.9)" : "transparent",
        transition: "background var(--dur-base) var(--ease-out)",
        fontFamily: "var(--font-text)", ...style,
      }}
      {...rest}
    >
      {/* Wordmark cell */}
      <a href="#" onClick={(e) => { e.preventDefault(); nav("home"); }}
        style={{ ...cell, display: "flex", textDecoration: "none", color: "inherit", flex: "0 1 auto", minWidth: 0 }}>
        {slot(0, <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", whiteSpace: "nowrap" }}><img src="/flag-ec.svg" alt="Ecuador" width="27" height="18" style={{ display: "block", borderRadius: "3px", boxShadow: "0 1px 3px rgba(0,0,0,0.35)" }} /><span>{brand}<span className="k-brand-suffix" style={{ fontWeight: "var(--fw-regular)", opacity: 0.7, marginLeft: "7px", letterSpacing: "0.02em" }}>{brandSuffix}</span></span></span>, {
          fontFamily: "var(--font-display)", fontWeight: "var(--fw-extrabold)",
          fontSize: "1.3rem", letterSpacing: "-0.02em", lineHeight: 1,
        })}
        <i style={vline(startDelay + 120, "right")} />
      </a>

      {/* Links (desktop) */}
      <nav className="k-nav-desktop" style={{ flex: 1, alignItems: "center", justifyContent: "flex-end", gap: "38px", padding: "0 var(--gutter)" }}>
        {links.map((l, i) => (
          <a key={l.label} href={l.href || "#"}
            onClick={(e) => { e.preventDefault(); nav(l.label); }}
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

      {/* Explore cell (desktop) */}
      <a href="#" className="k-nav-desktop" onClick={(e) => { e.preventDefault(); nav(cta); }}
        style={{
          ...cell, textDecoration: "none", color: "inherit",
          fontSize: "0.95rem", fontWeight: "var(--fw-semibold)",
        }}>
        <i style={vline(startDelay + 180, "left")} />
        {slot(links.length + 1, cta)}
      </a>

      {/* Menu cell (mobile / tablet) */}
      <button type="button" className="k-nav-menu-cell"
        aria-expanded={open} aria-controls="k-nav-drawer" aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        style={{
          ...cell, marginLeft: "auto", padding: "0 var(--gutter)", border: "none", background: "none",
          color: "inherit", cursor: "pointer", fontFamily: "inherit", fontSize: "0.95rem", fontWeight: "var(--fw-semibold)",
          gap: "10px", WebkitTapHighlightColor: "transparent",
        }}>
        <i style={vline(startDelay + 180, "left")} />
        {slot(1, <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>{open ? "Close" : "Menu"}<Icon name={open ? "x" : "menu"} size={20} /></span>)}
      </button>

      {/* Drawer (mobile / tablet) */}
      <div id="k-nav-drawer" className="k-nav-drawer" data-open={open ? "true" : "false"} aria-hidden={!open}>
        {links.map((l, i) => (
          <a key={l.label} href={l.href || "#"} className="k-nav-drawer-link" data-active={l.active ? "true" : "false"}
            style={{ animationDelay: `${60 + i * 60}ms` }}
            onClick={(e) => { e.preventDefault(); nav(l.label); }}>
            <span>{l.label}</span>
            <span className="k-nav-drawer-idx">0{i + 1}</span>
          </a>
        ))}
        <div className="k-nav-drawer-foot">
          <a href="#" onClick={(e) => { e.preventDefault(); nav(cta); }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px",
              padding: "18px 24px", borderRadius: "var(--radius-pill)",
              background: "var(--paper-100)", color: "var(--text-on-paper)", textDecoration: "none",
              fontFamily: "var(--font-text)", fontWeight: "var(--fw-semibold)", fontSize: "1.0625rem",
            }}>
            <span>{cta} expeditions</span>
            <Icon name="arrow-up-right" size={20} />
          </a>
          <p className="k-nav-drawer-note">Small-group journeys across Ecuador · Quito · Cotopaxi · Amazon · Galápagos</p>
        </div>
      </div>

      {/* Bottom hairline — draws across after the items */}
      <i style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: "1px",
        background: "var(--line-hair)", transformOrigin: "left center",
        animation: animateIn ? `kuntur-draw-x var(--dur-draw) var(--ease-line) ${startDelay}ms both` : "none",
      }} />
    </header>
  );
}
