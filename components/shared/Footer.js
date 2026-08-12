"use client";
import { Divider } from "@/components/ds/Divider";

export function Footer({ onNavigate }) {
  const cols = [
    { h: "Expeditions", items: ["Andes & Páramo", "Colonial Towns", "Amazon Rivers", "Galápagos"] },
    { h: "Company", items: ["Our guides", "Journal", "Sustainability", "Contact"] },
    { h: "Visit", items: ["Quito, Ecuador", "hola@kuntur.ec", "+593 2 555 0142", "@kuntur.expeditions"] },
  ];
  return (
    <footer style={{ background: "var(--ink-900)", padding: "var(--space-9) 0 var(--space-7)", color: "var(--paper-100)", fontFamily: "var(--font-text)" }}>
      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-extrabold)", fontSize: "1.9rem", letterSpacing: "-0.02em" }}>
              Kuntur<span style={{ fontWeight: 400, opacity: 0.65, marginLeft: 8 }}>Expeditions</span>
            </div>
            <p style={{ marginTop: 18, maxWidth: "30ch", color: "var(--text-muted)", fontSize: "var(--fs-small)", lineHeight: 1.6 }}>
              Small-group journeys across Ecuador, led by guides who grew up on these trails.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontSize: "var(--fs-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 16 }}>{c.h}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {c.items.map((it) => <li key={it}><a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--text-body)", textDecoration: "none", fontSize: "var(--fs-small)" }}>{it}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ margin: "var(--space-8) 0 var(--space-6)" }}><Divider /></div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, color: "var(--text-faint)", fontSize: "var(--fs-small)" }}>
          <span>© 2026 Kuntur Expeditions — a portfolio concept.</span>
          <span>Quito · Cotopaxi · Baños · Galápagos</span>
        </div>
      </div>
    </footer>
  );
}
