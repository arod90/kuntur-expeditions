"use client";
import React from "react";
import { ExpeditionCard } from "@/components/ds/ExpeditionCard";
import { Section, SectionHeading } from "@/components/shared/Section";
import { Reveal } from "@/components/shared/Reveal";
import { Footer } from "@/components/shared/Footer";
import { EXPEDITIONS } from "@/lib/expeditions";
import { useKunturNav } from "@/lib/useKunturNav";

export function ExpeditionsScreen() {
  const { go, openExpedition } = useKunturNav();
  const filters = ["All regions", "Andes & Páramo", "Colonial Towns", "Amazon", "Galápagos"];
  const [active, setActive] = React.useState("All regions");
  return (
    <div>
      <Section style={{ paddingBottom: "var(--space-7)" }}>
        <SectionHeading eyebrow="/ 12 active departures" title="Every Kuntur expedition"
          lead="Small groups, local guides, honest prices. Filter by the terrain you're chasing." />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: "10px 18px", borderRadius: "var(--radius-pill)", cursor: "pointer",
              fontFamily: "var(--font-text)", fontSize: "var(--fs-small)", fontWeight: "var(--fw-medium)",
              border: "1px solid " + (active === f ? "transparent" : "var(--line-strong)"),
              background: active === f ? "var(--paper-100)" : "transparent",
              color: active === f ? "var(--ink-900)" : "var(--text-body)",
              transition: "all var(--dur-fast) var(--ease-out)",
            }}>{f}</button>
          ))}
        </div>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px,4.5vw,64px)" }}>
          {EXPEDITIONS.map((e, i) => (
            <Reveal key={e.id}>
              <ExpeditionCard {...e} imageSide={i % 2 === 0 ? "right" : "left"} onExplore={() => openExpedition(e.id)} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Footer onNavigate={go} />
    </div>
  );
}
