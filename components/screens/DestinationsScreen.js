"use client";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Button } from "@/components/ds/Button";
import { Section, SectionHeading } from "@/components/shared/Section";
import { Reveal, RevealLine } from "@/components/shared/Reveal";
import { Footer } from "@/components/shared/Footer";
import { Figure } from "@/components/shared/Figure";
import { IMG } from "@/lib/images";
import { useKunturNav } from "@/lib/useKunturNav";

function RegionHeader({ index, eyebrow, title, lead, meta }) {
  return (
    <div style={{ marginBottom: "var(--space-7)" }}>
      <RevealLine />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", justifyContent: "space-between", alignItems: "flex-end", paddingTop: 26 }}>
        <div style={{ maxWidth: "22ch" }}>
          <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.14em" }}>{index}</span>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-h1)", lineHeight: "var(--lh-snug)", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)", textWrap: "balance" }}>{title}</h2>
        </div>
        <div style={{ maxWidth: "40ch" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--fs-lead)", lineHeight: 1.4, color: "var(--text-body)", textWrap: "pretty" }}>{lead}</p>
          {meta ? <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: "8px 22px", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", color: "var(--text-muted)", textTransform: "uppercase" }}>{meta.map((m) => <span key={m}>{m}</span>)}</div> : null}
        </div>
      </div>
    </div>
  );
}

export function DestinationsScreen() {
  const { go } = useKunturNav();
  const onNavigate = go;
  const G1 = "clamp(280px, 36vh, 420px)";
  const G2 = "clamp(230px, 30vh, 350px)";
  const gap = "clamp(12px,1.4vw,22px)";

  return (
    <div>
      <Section>
        <SectionHeading eyebrow="Destinations" title="One country, four wild worlds"
          lead="The Andes, the Amazon, the colonial highlands and the Galápagos — each an hour or two apart, each a different planet. Here is where we take you." />
      </Section>

      {/* 1 — La Sierra */}
      <Section tint="var(--ink-900)" style={{ paddingTop: 0 }}>
        <RegionHeader index="01" eyebrow="La Sierra" title="Andes & páramo"
          lead="A spine of glacier-capped volcanoes and high grassland running the length of the country. Cotopaxi, Chimborazo, and the patchwork valleys between them."
          meta={["3,800–5,900 m", "Páramo · glacier", "Cotopaxi · Quilotoa"]} />
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap, height: G1 }}>
          <Figure src={IMG.cotopaxi} caption="Cotopaxi at dawn · Cotopaxi National Park" pos="center 60%" delay={0} />
          <Figure src={IMG.rucu} caption="Ridge line · Rucu Pichincha" pos="center" delay={110} />
        </div>
        <div style={{ marginTop: gap, display: "grid", gridTemplateColumns: "1fr 1.5fr", gap, height: G2 }}>
          <Figure src={IMG.heroAndes} caption="Highland fields · the central corridor" pos="center 55%" delay={0} />
          <Figure src={IMG.chimborazo} caption="Chimborazo · snow & páramo" pos="center 45%" delay={110} />
        </div>
      </Section>

      {/* 2 — El Oriente */}
      <Section>
        <RegionHeader index="02" eyebrow="El Oriente" title="The Amazon"
          lead="Drop off the eastern slope and the cloud forest gives way to rivers, canoe villages and canopy full of monkeys, toucans and the loudest dawn you'll ever hear."
          meta={["Napo · Yasuní", "River lodges", "Canoe access"]} />
        <div style={{ display: "grid", gridTemplateColumns: "0.72fr 1.5fr 0.72fr", gap, height: G1 }}>
          <Figure src={IMG.amazonRainbow} caption="Rain & rainbow over the canopy" pos="center" delay={0} />
          <Figure src={IMG.amazonCanoe} caption="Sunset river crossing · Río Napo" pos="center" delay={110} />
          <Figure src={IMG.amazonToucan} caption="Toco toucan at first light" pos="center" delay={220} />
        </div>
        <div style={{ marginTop: gap, display: "grid", gridTemplateColumns: "1fr 1fr", gap, height: G2 }}>
          <Figure src={IMG.amazonMonkey} caption="Squirrel monkey in the understory" pos="center 55%" delay={0} />
          <Figure src={IMG.amazonRiver} caption="Meander bends from the air" pos="center" delay={110} />
        </div>
      </Section>

      {/* 3 — Galápagos */}
      <Section tint="var(--ink-900)">
        <RegionHeader index="03" eyebrow="Galápagos" title="The islands"
          lead="Volcanic islands a thousand kilometres out in the Pacific, where the animals never learned to fear people."
          meta={["600+ km offshore", "Endemic wildlife", "Land & liveaboard"]} />
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 0.75fr", gap, height: G1 }}>
          <Figure src={IMG.galKicker} caption="Kicker Rock · San Cristóbal" pos="center 65%" delay={0} />
          <Figure src={IMG.galTortoise} caption="Giant tortoise · Santa Cruz highlands" pos="center" delay={110} />
        </div>
        <div style={{ marginTop: gap, display: "grid", gridTemplateColumns: "0.75fr 1fr 1fr", gap, height: G2 }}>
          <Figure src={IMG.galPup} caption="Sea lion pup" pos="center 35%" delay={0} />
          <Figure src={IMG.galIguanas} caption="Marine iguanas · Tortuga Bay" pos="center 55%" delay={110} />
          <Figure src={IMG.galSealions} caption="Sea lion colony · San Cristóbal" pos="center" delay={220} />
        </div>
      </Section>

      {/* 4 — Quito & colonial cities */}
      <Section>
        <RegionHeader index="04" eyebrow="Quito & the Colonial Highlands" title="Cities & markets"
          lead="Start in the highest capital in the world — a UNESCO old town of baroque domes and cobbled hills — then out to the Andean markets and towns that keep the culture alive."
          meta={["2,850 m", "UNESCO old town", "Otavalo market"]} />
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap, height: G1 }}>
          <Figure src={IMG.quitoBasilica} caption="Basílica del Voto Nacional at sunset" pos="center" delay={0} />
          <Figure src={IMG.quitoSanFrancisco} caption="Plaza de San Francisco" pos="center 40%" delay={110} />
        </div>
        <div style={{ marginTop: gap, display: "grid", gridTemplateColumns: "1fr 1fr", gap, height: G2 }}>
          <Figure src={IMG.quitoPanorama} caption="Quito under Pichincha" pos="center" delay={0} />
          <Figure src={IMG.quitoCyclist} caption="Cobbled streets of the centro histórico" pos="center" delay={110} />
        </div>
      </Section>

      <Section tint="var(--ink-900)" style={{ paddingTop: 0 }}>
        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line-hair)", paddingTop: "var(--space-7)" }}>
            <p style={{ margin: 0, maxWidth: "34ch", fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-h3)", lineHeight: "var(--lh-snug)", color: "var(--text-strong)" }}>
              Most travellers pair two regions in one trip. We'll help you choose.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="outline" trailingIcon="compass" onClick={() => onNavigate("Expeditions")}>Browse expeditions</Button>
              <Button variant="paper" trailingIcon="arrow-up-right" onClick={() => onNavigate("Contact")}>Plan with a guide</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
