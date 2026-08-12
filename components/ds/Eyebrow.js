/* Wide-tracked uppercase label. Optional amber tick before it. */
export function Eyebrow({ children, tick = false, color, style = {}, ...rest }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "10px",
      fontFamily: "var(--font-text)", fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase", color: color || "var(--text-muted)", ...style,
    }} {...rest}>
      {tick ? <span style={{ width: "22px", height: "1.5px", background: "var(--accent)" }} /> : null}
      {children}
    </span>
  );
}
