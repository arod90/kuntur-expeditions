"use client";
import { Hero } from "@/components/ds/Hero";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Button } from "@/components/ds/Button";
import { MetaItem } from "@/components/ds/MetaItem";
import { StarRating } from "@/components/ds/StarRating";
import { HoverVideo } from "@/components/ds/HoverVideo";
import { Divider } from "@/components/ds/Divider";
import { Section } from "@/components/shared/Section";
import { Reveal, RevealLine } from "@/components/shared/Reveal";
import { Footer } from "@/components/shared/Footer";
import { IMG } from "@/lib/images";
import { getExpedition } from "@/lib/expeditions";
import { useKunturNav } from "@/lib/useKunturNav";

export function ExpeditionDetailScreen({ id = "cotopaxi" }) {
  const { go } = useKunturNav();
  const data = getExpedition(id) || {};
  const hero = data.image || IMG.cotopaxi;

  const itinerary = [
    { d: "Day 1", t: "Arrive in Quito", b: "Airport transfer, welcome dinner on the plaza, gear check." },
    { d: "Day 2", t: "Cotopaxi National Park", b: "Acclimatization hike to the Limpiopungo lagoon at 3,800 m." },
    { d: "Day 3", t: "Páramo traverse", b: "Full day across the high páramo — wild horses, deer, condors overhead." },
    { d: "Day 4", t: "Refuge night", b: "Ascend to the José Rivas refuge; summit briefing and early rest." },
    { d: "Day 5", t: "Summit attempt", b: "Pre-dawn start for the glacier route with certified mountain guides." },
    { d: "Day 6", t: "Baños hot springs", b: "Descend to the valley, thermal baths, and a slow recovery day." },
    { d: "Day 7", t: "Return to Quito", b: "Highland market stop, farewell lunch, airport transfer." },
  ];

  return (
    <div>
      <Hero image={hero} height="82vh" parallaxSpeed={0.3} align="left" priority
        eyebrow={<Eyebrow tick>Andes &amp; Páramo</Eyebrow>}
        title={data.title || "7-Day Cotopaxi & Páramo Traverse"}>
        <div style={{ marginTop: 24, display: "flex", gap: 28, flexWrap: "wrap", alignItems: "center", animation: "kuntur-rise var(--dur-slow) var(--ease-out) 460ms both" }}>
          <StarRating value={data.rating || 5} showValue />
          <span style={{ color: "var(--paper-100)", fontSize: "var(--fs-small)" }}>Trusted by {data.trust || "190+"} travellers</span>
          <Button variant="ghost" leadingIcon="arrow-left" onClick={() => go("Expeditions")}>All expeditions</Button>
        </div>
      </Hero>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: "clamp(32px,4vw,80px)", alignItems: "start" }}>
          {/* Itinerary */}
          <div>
            <Eyebrow tick>Day by day</Eyebrow>
            <h2 style={{ margin: "18px 0 var(--space-6)", fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-h1)", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>The route</h2>
            {itinerary.map((it, i) => (
              <Reveal key={it.d} delay={i * 40}>
                <div style={{ paddingTop: 22 }}><RevealLine delay={i * 40} /></div>
                <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 24, padding: "20px 0 26px" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", color: "var(--accent)", letterSpacing: "0.02em" }}>{it.d}</div>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-h3)", color: "var(--text-strong)", letterSpacing: "var(--ls-heading)" }}>{it.t}</h3>
                    <p style={{ margin: "8px 0 0", fontFamily: "var(--font-text)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)", maxWidth: "52ch", textWrap: "pretty" }}>{it.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sticky booking panel */}
          <div style={{ position: "sticky", top: "100px", background: "var(--surface-card)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", border: "1px solid var(--line-hair)" }}>
            <div style={{ fontFamily: "var(--font-text)", color: "var(--text-muted)", fontSize: "var(--fs-body)" }}>from</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-extrabold)", fontSize: "3rem", lineHeight: 1, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>{data.price || "$1,000"}</div>
            <div style={{ color: "var(--text-muted)", fontSize: "var(--fs-small)", marginTop: 6 }}>per traveller · all-inclusive</div>
            <div style={{ margin: "var(--space-5) 0" }}><Divider /></div>
            <MetaItem icon="map-pin">{data.location || "Cotopaxi Province, Ecuador"}</MetaItem>
            <MetaItem icon="calendar">{data.dateRange || "Feb 15 – 21, 2026"}</MetaItem>
            <MetaItem icon="users">{data.guests || "12 travellers"}</MetaItem>
            <MetaItem icon="mountain">Max altitude 5,897 m</MetaItem>
            <div style={{ marginTop: "var(--space-6)", display: "flex", flexDirection: "column", gap: 12 }}>
              <Button variant="paper" block trailingIcon="arrow-up-right">Reserve a place</Button>
              <Button variant="outline" block trailingIcon="bookmark">Save for later</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery band */}
      <Section tint="var(--ink-900)" style={{ paddingTop: "var(--space-8)" }}>
        <Eyebrow tick>On the trail</Eyebrow>
        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 18 }}>
          <HoverVideo poster={IMG.cotopaxi} label="Summit sunrise" ratio="16 / 10" sizes="(max-width: 700px) 100vw, 50vw" />
          <HoverVideo poster={IMG.plaza} label="Quito plaza" ratio="4 / 5" sizes="(max-width: 700px) 100vw, 25vw" />
          <HoverVideo label="Add clip" ratio="4 / 5" />
        </div>
      </Section>

      <Footer onNavigate={go} />
    </div>
  );
}
