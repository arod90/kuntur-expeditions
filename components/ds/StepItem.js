/* Numbered process step: big index, "step" label, then title lower in the cell. */
export function StepItem({ index = "01", label = "Step", title, description, style = {}, ...rest }) {
  return (
    <div className="k-stepitem" style={style} {...rest}>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)",
        fontSize: "clamp(2.5rem, 4vw, 4rem)", lineHeight: 1, color: "var(--text-strong)",
        letterSpacing: "var(--ls-display)",
      }}>{index}</div>
      <div style={{
        marginTop: "8px", fontFamily: "var(--font-text)", fontSize: "var(--fs-small)",
        color: "var(--text-muted)", textTransform: "lowercase",
      }}>{label}</div>
      <div className="k-stepitem-body">
        <h4 style={{
          margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)",
          fontSize: "var(--fs-h4)", lineHeight: "var(--lh-heading)", color: "var(--text-strong)",
          letterSpacing: "var(--ls-heading)",
        }}>{title}</h4>
        {description ? (
          <p style={{ margin: "10px 0 0", fontFamily: "var(--font-text)", fontSize: "var(--fs-small)", lineHeight: "var(--lh-body)", color: "var(--text-body)", textWrap: "pretty" }}>{description}</p>
        ) : null}
      </div>
    </div>
  );
}
