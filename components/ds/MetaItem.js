import { Icon } from "./Icon";

/* Row of icon + text used for location / date / guests metadata. */
export function MetaItem({ icon, children, iconSide = "right", muted = true, style = {}, ...rest }) {
  const glyph = icon ? (
    <Icon name={icon} size={17} style={{ color: "var(--text-faint)" }} />
  ) : null;
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "16px", padding: "10px 0",
      borderBottom: "1px solid var(--line-hair)",
      fontFamily: "var(--font-text)", fontSize: "var(--fs-small)",
      color: muted ? "var(--text-body)" : "var(--text-strong)", ...style,
    }} {...rest}>
      {iconSide === "left" ? glyph : null}
      <span style={{ flex: 1, textWrap: "pretty" }}>{children}</span>
      {iconSide === "right" ? glyph : null}
    </div>
  );
}
