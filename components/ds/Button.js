"use client";
import { useState } from "react";
import { Icon } from "./Icon";

/* Kuntur Expeditions button. Pill-shaped, optional leading/trailing icon. */
const SIZES = {
  sm: { pad: "9px 16px", font: "0.8125rem", chip: 24, icon: 14, gap: "10px" },
  md: { pad: "13px 22px", font: "0.9375rem", chip: 30, icon: 16, gap: "14px" },
  lg: { pad: "18px 30px", font: "1.0625rem", chip: 38, icon: 18, gap: "18px" },
};

function palette(variant) {
  switch (variant) {
    case "paper":
      return { bg: "var(--paper-100)", color: "var(--text-on-paper)", border: "1px solid transparent", borderHover: "1px solid transparent",
               chipBg: "var(--ink-800)", chipColor: "var(--paper-100)", hoverBg: "var(--paper-000)" };
    case "amber":
      return { bg: "var(--accent)", color: "var(--text-on-amber)", border: "1px solid transparent", borderHover: "1px solid transparent",
               chipBg: "rgba(10,23,27,0.18)", chipColor: "var(--ink-900)", hoverBg: "var(--accent-hover)" };
    case "ghost":
      return { bg: "transparent", color: "var(--text-strong)", border: "1px solid transparent", borderHover: "1px solid transparent",
               chipBg: "var(--line-strong)", chipColor: "var(--paper-100)", hoverBg: "rgba(241,240,234,0.06)" };
    case "outline":
    default:
      return { bg: "transparent", color: "var(--text-strong)", border: "1px solid var(--line-strong)", borderHover: "1px solid rgba(241,240,234,0.5)",
               chipBg: "rgba(241,240,234,0.08)", chipColor: "var(--paper-100)", hoverBg: "rgba(241,240,234,0.05)" };
  }
}

export function Button({
  children,
  variant = "paper",
  size = "md",
  trailingIcon,
  leadingIcon,
  block = false,
  disabled = false,
  as = "button",
  onClick,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const p = palette(variant);
  const [hover, setHover] = useState(false);
  const Tag = as;

  const rootStyle = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: block ? "space-between" : "center",
    gap: s.gap,
    padding: s.pad,
    fontFamily: "var(--font-text)",
    fontSize: s.font,
    fontWeight: "var(--fw-semibold)",
    letterSpacing: "0.01em",
    lineHeight: 1,
    color: p.color,
    background: hover && !disabled ? p.hoverBg : p.bg,
    border: hover && !disabled ? p.borderHover : p.border,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    textDecoration: "none",
    transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    transform: hover && !disabled ? "translateY(-1px)" : "none",
    WebkitTapHighlightColor: "transparent",
    ...style,
  };

  const isArrow = /arrow/.test(trailingIcon || "");
  const nudge = trailingIcon === "arrow-up-right" ? "translate(3px,-3px)"
    : trailingIcon === "arrow-right" ? "translateX(4px)" : "none";
  const trailStyle = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    color: "currentColor", flexShrink: 0,
    transition: "transform var(--dur-base) var(--ease-out)",
    transform: hover && !disabled && isArrow ? nudge : "none",
  };

  return (
    <Tag
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => { if (!window.matchMedia || window.matchMedia("(hover: hover)").matches) setHover(true); }}
      onMouseLeave={() => setHover(false)}
      disabled={Tag === "button" ? disabled : undefined}
      style={rootStyle}
      {...rest}
    >
      {leadingIcon ? <Icon name={leadingIcon} size={s.icon} /> : null}
      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>{children}</span>
      {trailingIcon ? <span style={trailStyle}><Icon name={trailingIcon} size={s.icon + 2} /></span> : null}
    </Tag>
  );
}
