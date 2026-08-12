import Image from "next/image";
import { Reveal } from "./Reveal";

/* Editorial figure: image fills its grid cell exactly (so it can't overflow a
   fixed-height row), with a caption + reveal. */
export function Figure({ src, alt, caption, ratio, pos = "center", delay = 0, sizes = "(max-width: 900px) 100vw, 50vw" }) {
  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <figure style={{ margin: 0, position: "relative", height: "100%", width: "100%", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--ink-700)" }}>
        <Image src={src} alt={alt || ""} fill sizes={sizes} placeholder="blur" style={{ objectFit: "cover", objectPosition: pos }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(9,20,22,0.6) 0%, rgba(9,20,22,0) 42%)" }} />
        {caption ? (
          <figcaption style={{ position: "absolute", left: 16, bottom: 14, right: 16, color: "var(--paper-100)", fontFamily: "var(--font-text)", fontSize: "var(--fs-small)", letterSpacing: "0.01em", textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}>{caption}</figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
