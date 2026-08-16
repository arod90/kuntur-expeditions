"use client";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Button } from "@/components/ds/Button";
import { HoverVideo } from "@/components/ds/HoverVideo";
import { Section, SectionHeading } from "@/components/shared/Section";
import { Reveal } from "@/components/shared/Reveal";
import { Footer } from "@/components/shared/Footer";
import { IMG } from "@/lib/images";
import { useKunturNav } from "@/lib/useKunturNav";

export function GuidesScreen() {
  const { go } = useKunturNav();
  const onNavigate = go;
  const guides = [
    { name: "Mateo Chimbo", role: "Lead mountain guide · Cotopaxi", bio: "Born in Machachi at the foot of the volcano. 12 seasons on the glacier routes.", image: IMG.guideIce, pos: "center 30%" },
    { name: "Sisa Farinango", role: "Culture & markets · Otavalo", bio: "Weaver's daughter turned storyteller of the northern highlands.", image: IMG.guideAmazon, pos: "center 30%" },
    { name: "Daniel Andrade", role: "Amazon & rivers · Tena", bio: "Kichwa naturalist who's spent 15 years guiding the Napo — he'll have you spotting monkeys and river dolphins before you've had coffee.", image: IMG.guideKichwa, pos: "center 25%" },
    { name: "Camila Ortega", role: "Islands & marine · Galápagos", bio: "Marine biologist and licensed national park guide.", image: IMG.guideDiver, pos: "center 30%" },
  ];
  return (
    <div>
      {/* Story */}
      <Section>
        <div className="k-story">
          <div>
            <Eyebrow tick>Who we are</Eyebrow>
            <h1 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-display)", lineHeight: "var(--lh-snug)", letterSpacing: "var(--ls-display)", color: "var(--text-strong)", textWrap: "balance" }}>
              We grew up on these trails
            </h1>
            <p style={{ marginTop: 26, fontFamily: "var(--font-text)", fontSize: "var(--fs-lead)", lineHeight: 1.5, color: "var(--text-body)", maxWidth: "44ch", textWrap: "pretty" }}>
              Kuntur is a small collective of Ecuadorian guides. We keep groups small, pay fair local wages, and take you to the places we'd take our own families — before the buses arrive.
            </p>
            <div style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="outline" trailingIcon="arrow-up-right" onClick={() => onNavigate("Contact")}>Talk to a guide</Button>
              <Button variant="ghost" onClick={() => onNavigate("Expeditions")}>See expeditions</Button>
            </div>
          </div>
          <Reveal><HoverVideo className="k-story-media" poster={IMG.rucu} ratio="4 / 5" objectPosition="center 30%" sizes="(max-width: 900px) 100vw, 45vw" /></Reveal>
        </div>
      </Section>

      {/* Roster */}
      <Section tint="var(--ink-900)">
        <SectionHeading eyebrow="The guides" title="Local, licensed, and yours for the trip" />
        <div className="k-roster">
          {guides.map((g, i) => (
            <Reveal key={g.name} delay={i * 80}>
              <div>
                <HoverVideo poster={g.image} ratio="3 / 4" objectPosition={g.pos} sizes="(max-width: 480px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                <h3 style={{ margin: "18px 0 4px", fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-h4)", color: "var(--text-strong)" }}>{g.name}</h3>
                <div style={{ fontSize: "var(--fs-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--accent)" }}>{g.role}</div>
                <p style={{ margin: "12px 0 0", fontSize: "var(--fs-small)", lineHeight: "var(--lh-body)", color: "var(--text-body)", textWrap: "pretty" }}>{g.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
