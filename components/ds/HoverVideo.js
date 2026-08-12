"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";

/* Media tile: plays a video on hover, or shows an optimized poster image.
   In this site only posters are used (no footage yet), so the poster path is
   the hot path — rendered through next/image. */
export function HoverVideo({
  src,
  poster,
  label,
  ratio = "4 / 5",
  radius = "var(--radius-media)",
  auto = false,
  objectPosition = "center",
  sizes = "(max-width: 700px) 100vw, 33vw",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  const enter = () => {
    setHover(true);
    const v = ref.current;
    if (v && !auto) { v.currentTime = 0; const p = v.play(); if (p && p.catch) p.catch(() => {}); }
  };
  const leave = () => {
    setHover(false);
    const v = ref.current;
    if (v && !auto) { v.pause(); v.currentTime = 0; }
  };

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        position: "relative", overflow: "hidden", borderRadius: radius,
        aspectRatio: ratio, background: "var(--ink-700)", cursor: "pointer", ...style,
      }}
      {...rest}
    >
      {src ? (
        <video
          ref={ref}
          src={src}
          poster={typeof poster === "string" ? poster : poster?.src}
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay={auto}
          style={{
            width: "100%", height: "100%", objectFit: "cover", objectPosition, display: "block",
            transform: hover ? "scale(1.04)" : "scale(1)",
            transition: "transform var(--dur-slow) var(--ease-out)",
          }}
        />
      ) : poster ? (
        <Image src={poster} alt={label || ""} fill sizes={sizes} placeholder="blur" style={{
          objectFit: "cover", objectPosition,
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform var(--dur-slow) var(--ease-out)",
        }} />
      ) : (
        <div style={{
          position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "10px",
          color: "var(--text-faint)", fontFamily: "var(--font-text)", fontSize: "var(--fs-small)",
          border: "1px dashed var(--line-strong)", borderRadius: radius, textAlign: "center", padding: "16px",
        }}>
          <Icon name="play" size={26} />
          <span>Drop a video / poster here{label ? ` — ${label}` : ""}</span>
        </div>
      )}

      {/* scrim + play affordance for the hover-to-play state */}
      {src && !auto ? (
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          background: "var(--scrim-full)", opacity: hover ? 0 : 1,
          transition: "opacity var(--dur-base) var(--ease-out)", pointerEvents: "none",
        }}>
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 54, height: 54, borderRadius: "var(--radius-pill)",
            background: "var(--glass-bg)", backdropFilter: "var(--glass-blur)",
            WebkitBackdropFilter: "var(--glass-blur)", color: "var(--paper-100)",
            border: "1px solid var(--line-strong)",
          }}>
            <Icon name="play" size={18} />
          </span>
        </div>
      ) : null}

      {label ? (
        <span style={{
          position: "absolute", left: "16px", bottom: "14px", zIndex: 2,
          color: "var(--paper-100)", fontFamily: "var(--font-display)",
          fontSize: "var(--fs-h4)", fontWeight: "var(--fw-semibold)",
          letterSpacing: "var(--ls-heading)", pointerEvents: "none",
        }}>{label}</span>
      ) : null}
    </div>
  );
}
