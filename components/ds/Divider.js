/* Signature animated hairline. On mount it draws in (scaleX/scaleY from 0). */
export function Divider({
  orientation = "horizontal",
  animate = true,
  delay = 0,
  color = "var(--line-hair)",
  thickness = 1,
  length = "100%",
  style = {},
  ...rest
}) {
  const horizontal = orientation === "horizontal";
  const base = {
    background: color,
    transformOrigin: horizontal ? "left center" : "top center",
    width: horizontal ? length : `${thickness}px`,
    height: horizontal ? `${thickness}px` : length,
    animation: animate
      ? `${horizontal ? "kuntur-draw-x" : "kuntur-draw-y"} var(--dur-draw) var(--ease-line) ${delay}ms both`
      : "none",
    ...style,
  };
  return <div role="separator" aria-orientation={orientation} style={base} {...rest} />;
}
