"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Icon } from "./Icon";

/* Full-bleed hero. A headline over an edge-to-edge still, warm scrim for
   legibility, optional foreground cut-out, slow ken-burns + host parallax. */
export function Hero({
  image,
  video,
  eyebrow,
  title = "Andes",
  subtitle,
  cta,
  onCta,
  height = "100vh",
  parallax = 0,
  parallaxSpeed = 0,
  kenBurns = true,
  intro = true,
  align = "center",
  anchor = "bottom",
  scrim,
  foreground,
  foregroundFade = "linear-gradient(to bottom, #000 0%, #000 43%, rgba(0,0,0,0) 56%)",
  slides,
  slideDwell = 6800,
  slideInterval = 8200,
  priority = false,
  children,
  style = {},
  ...rest
}) {
  const top = anchor === "top";
  const hasSlides = Array.isArray(slides) && slides.length > 0;
  const [active, setActive] = React.useState(0);
  const timerRef = React.useRef(null);
  const mediaRef = React.useRef(null);
  const fgRef = React.useRef(null);
  // Parallax driven imperatively (ref + rAF) so scrolling never re-renders React.
  React.useEffect(() => {
    if (!parallaxSpeed) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scroller = document.getElementById("kuntur-scroll") || window;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const st = scroller === window ? window.scrollY : scroller.scrollTop;
      const t = `translateY(${st * parallaxSpeed}px) scale(1)`;
      if (mediaRef.current) mediaRef.current.style.transform = t;
      if (fgRef.current) fgRef.current.style.transform = t;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    apply();
    return () => { scroller.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [parallaxSpeed, hasSlides]);
  React.useEffect(() => {
    if (!hasSlides || slides.length < 2) return;
    let idx = 0;
    const step = () => {
      idx = (idx + 1) % slides.length;
      setActive(idx);
      timerRef.current = setTimeout(step, slideInterval);
    };
    timerRef.current = setTimeout(step, slideDwell);
    return () => clearTimeout(timerRef.current);
  }, [hasSlides, slides && slides.length, slideDwell, slideInterval]);
  const scrimBg = scrim !== undefined ? scrim
    : top ? "linear-gradient(180deg, rgba(9,20,22,0.52) 0%, rgba(9,20,22,0.34) 28%, rgba(9,20,22,0.14) 48%, rgba(9,20,22,0) 66%, rgba(9,20,22,0.28) 100%)"
    : "var(--scrim-full)";
  return (
    <section style={{
      position: "relative", width: "100%", height, minHeight: "560px",
      overflow: "hidden", display: "flex", alignItems: top ? "flex-start" : "flex-end",
      justifyContent: align === "center" ? "center" : "flex-start",
      color: "var(--paper-100)", ...style,
    }} {...rest}>
      {/* media layer — fades in FIRST on load so the photo leads */}
      <div ref={mediaRef} style={{ position: "absolute", inset: 0, transform: `translateY(${parallax}px) scale(1)`, willChange: "transform", animation: intro ? "kuntur-fade 1500ms var(--ease-out-soft) both" : "none" }}>
        {hasSlides ? (
          slides.map((s, i) => (
            <Image key={`bg${i}`} src={s.image} alt="" fill sizes="100vw" priority={priority && i === 0} style={{
              objectFit: "cover", objectPosition: s.objectPosition || "center",
              opacity: active === i ? 1 : 0,
              transition: "opacity 1600ms var(--ease-in-out)",
              willChange: "opacity",
            }} />
          ))
        ) : video ? (
          <video src={video} autoPlay muted loop playsInline poster={image?.src || image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : image ? (
          <Image src={image} alt="" fill sizes="100vw" priority={priority} placeholder="blur"
            style={{ objectFit: "cover",
              animation: kenBurns ? "kuntur-kenburns 14s var(--ease-out) both" : "none" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, background: "var(--ink-700)", display: "grid", placeItems: "center", color: "var(--text-faint)", fontFamily: "var(--font-text)" }}>
            Drop a full-bleed hero image or video loop
          </div>
        )}
      </div>
      {/* scrim */}
      <div style={{ position: "absolute", inset: 0, background: scrimBg }} />

      {/* content */}
      <div style={{
        position: "relative", zIndex: 2, width: "100%", maxWidth: "var(--maxw)",
        padding: top ? "clamp(104px, 17vh, 210px) var(--gutter) 0" : "0 var(--gutter) clamp(48px, 8vh, 120px)",
        margin: "0 auto",
        display: "flex", flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align === "center" ? "center" : "left",
      }}>
        {eyebrow ? <div style={{ marginBottom: "22px", animation: "kuntur-rise var(--dur-slow) var(--ease-out) 200ms both" }}>{eyebrow}</div> : null}
        <h1 style={{
          margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-extrabold)",
          fontSize: "var(--fs-mega)", lineHeight: "var(--lh-tight)", letterSpacing: "var(--ls-mega)",
          textWrap: "balance", animation: "kuntur-rise var(--dur-hero) var(--ease-out) 120ms both",
        }}>{title}</h1>
        {subtitle ? (
          <p style={{
            margin: "20px 0 0", maxWidth: "34ch", fontFamily: "var(--font-text)",
            fontSize: "var(--fs-lead)", lineHeight: 1.35, fontWeight: "var(--fw-medium)",
            color: "var(--paper-100)", textWrap: "pretty",
            animation: "kuntur-rise var(--dur-slow) var(--ease-out) 320ms both",
          }}>{subtitle}</p>
        ) : null}
        {cta ? (
          <div style={{ marginTop: "36px", animation: "kuntur-rise var(--dur-slow) var(--ease-out) 460ms both" }}>
            <Button variant="paper" size="lg" trailingIcon="arrow-up-right" onClick={onCta}>{cta}</Button>
          </div>
        ) : null}
        {children}
      </div>

      {/* foreground cut-out (sky removed): renders IN FRONT of the text. */}
      {hasSlides ? (
        <div ref={fgRef} style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none", transform: `translateY(${parallax}px) scale(1)`, willChange: "transform", animation: intro ? "kuntur-fade 1500ms var(--ease-out-soft) both" : "none" }}>
          {slides.map((s, i) => s.foreground ? (
            <div key={`fg${i}`} style={{
              position: "absolute", inset: 0,
              WebkitMaskImage: s.foregroundFade || foregroundFade, maskImage: s.foregroundFade || foregroundFade,
              opacity: active === i ? 1 : 0, transition: "opacity 1600ms var(--ease-in-out)",
            }}>
              <Image key={`fgi${i}`} src={s.foreground} alt="" fill sizes="100vw" style={{
                objectFit: "cover", objectPosition: s.objectPosition || "center",
              }} />
            </div>
          ) : null)}
        </div>
      ) : foreground ? (
        <div ref={fgRef} style={{
          position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
          transform: `translateY(${parallax}px) scale(1)`, willChange: "transform",
          WebkitMaskImage: foregroundFade, maskImage: foregroundFade,
          animation: intro ? "kuntur-fade 1500ms var(--ease-out-soft) both" : "none",
        }}>
          <Image src={foreground} alt="" fill sizes="100vw" priority={priority} style={{
            objectFit: "cover",
            animation: kenBurns ? "kuntur-kenburns 14s var(--ease-out) both" : "none",
          }} />
        </div>
      ) : null}

      {/* Location badge — bottom-right, updates in sync with the slide */}
      {hasSlides && slides.some((s) => s.location) ? (
        <div style={{
          position: "absolute", left: "clamp(20px, 4vw, 56px)", bottom: "clamp(20px, 5vh, 54px)", zIndex: 5,
          display: "flex", alignItems: "center", gap: "9px",
          color: "var(--paper-100)", fontFamily: "var(--font-text)",
          textShadow: "0 1px 14px rgba(9,20,22,0.6)",
          animation: "kuntur-rise var(--dur-slow) var(--ease-out) 1200ms both",
        }}>
          <Icon name="map-pin" size={17} style={{ color: "var(--paper-100)" }} />
          <div style={{ position: "relative", height: "1.7em", overflow: "hidden", minWidth: "16ch" }}>
            {slides.map((s, i) => s.location ? (
              <span key={i} style={{
                position: "absolute", left: 0, top: 0, display: "flex", alignItems: "center", height: "100%",
                whiteSpace: "nowrap", lineHeight: 1.5,
                fontSize: "var(--fs-small)", fontWeight: "var(--fw-semibold)", letterSpacing: "0.01em",
                opacity: active === i ? 1 : 0,
                transform: active === i ? "translateY(0)" : (active > i || (active === 0 && i === slides.length - 1) ? "translateY(-12px)" : "translateY(12px)"),
                filter: active === i ? "blur(0)" : "blur(1px)",
                transition: "opacity 900ms var(--ease-out), transform 900ms var(--ease-out), filter 900ms var(--ease-out)",
              }}>{s.location}</span>
            ) : null)}
          </div>
        </div>
      ) : null}
    </section>
  );
}
