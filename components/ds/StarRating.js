import { Icon } from "./Icon";

/* Five-point star rating in brand amber. */
export function StarRating({ value = 5, max = 5, size = 15, showValue = false, style = {}, ...rest }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "3px", color: "var(--accent)", ...style }} {...rest}>
      {Array.from({ length: max }).map((_, i) => (
        <Icon key={i} name="star" size={size}
          style={{ color: i < Math.round(value) ? "var(--accent)" : "var(--line-strong)" }} />
      ))}
      {showValue ? (
        <span style={{ marginLeft: "6px", fontSize: "var(--fs-small)", color: "var(--text-muted)", fontFamily: "var(--font-text)" }}>
          {value.toFixed(1)}
        </span>
      ) : null}
    </span>
  );
}
