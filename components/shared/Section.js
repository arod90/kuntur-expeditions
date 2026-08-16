import { Eyebrow } from "@/components/ds/Eyebrow";
import { RevealLine } from "./Reveal";

/* Section shell with generous vertical rhythm + side gutters. */
export function Section({ children, id, tint, style = {}, inner = {} }) {
  return (
    <section id={id} style={{ padding: "var(--section-y) 0", background: tint || "transparent", ...style }}>
      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "0 var(--gutter)", ...inner }}>{children}</div>
    </section>
  );
}

/* Section opener: eyebrow + big heading + optional lead, with a draw-in rule. */
export function SectionHeading({ eyebrow, title, lead, align = "left" }) {
  return (
    <div style={{ marginBottom: "var(--space-6)" }}>
      <RevealLine />
      <div className="k-sec-head" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", paddingTop: "22px" }}>
        <div style={{ maxWidth: "min(760px, 92%)" }}>
          {eyebrow ? <div style={{ marginBottom: "18px" }}><Eyebrow tick>{eyebrow}</Eyebrow></div> : null}
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-h1)", lineHeight: "var(--lh-heading)", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)", textWrap: "balance" }}>{title}</h2>
        </div>
        {lead ? <p style={{ margin: 0, maxWidth: "40ch", fontFamily: "var(--font-text)", fontSize: "var(--fs-lead)", lineHeight: 1.4, color: "var(--text-body)", textWrap: "pretty" }}>{lead}</p> : null}
      </div>
    </div>
  );
}
