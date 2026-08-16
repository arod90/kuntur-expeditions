"use client";
import React from "react";
import Image from "next/image";
import { Hero } from "@/components/ds/Hero";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { StepItem } from "@/components/ds/StepItem";
import { ExpeditionCard } from "@/components/ds/ExpeditionCard";
import { Button } from "@/components/ds/Button";
import { Section, SectionHeading } from "@/components/shared/Section";
import { Reveal, RevealLine } from "@/components/shared/Reveal";
import { Footer } from "@/components/shared/Footer";
import { Figure } from "@/components/shared/Figure";
import { IMG } from "@/lib/images";
import { useKunturNav } from "@/lib/useKunturNav";
import { useMediaQuery } from "@/lib/useMediaQuery";

/* Four region panels that fall diagonally into place on scroll-in. */
function FourWorlds({ items, onNavigate }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  const [hover, setHover] = React.useState(-1);
  // On phones the four panels sit in a 2×2 grid, so the diagonal offsets are
  // scaled down (and only alternate per column) to keep the cascade feel
  // without pushing row two into the next section.
  const compact = useMediaQuery("(max-width: 760px)");
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.28 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="k-worlds">
      {items.map((r, i) => {
        const restY = compact ? (i % 2) * 14 : i * 30;
        const restRot = compact ? ((i % 2) - 0.5) * 1.6 : (i - 1.5) * 1.7;
        const isHover = hover === i;
        const ty = shown ? (isHover ? restY - 16 : restY) : restY - (compact ? 48 : 84);
        const rot = shown ? (isHover ? 0 : restRot) : restRot - 4;
        return (
          <button key={r.title} type="button"
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
            onClick={() => onNavigate("Destinations")}
            style={{
              padding: 0, border: "none", background: "none", cursor: "pointer",
              textAlign: "left", transformOrigin: "center bottom",
              transform: `translateY(${ty}px) rotate(${rot}deg) scale(${shown ? 1 : 1.02})`,
              opacity: shown ? 1 : 0,
              transition: `transform 940ms cubic-bezier(.18,.86,.22,1.02) ${i * 130}ms, opacity 680ms var(--ease-out) ${i * 130}ms`,
            }}>
            <div style={{
              position: "relative", aspectRatio: "3 / 4.15", borderRadius: "var(--radius-md)", overflow: "hidden",
              background: "var(--ink-700)", boxShadow: isHover ? "0 40px 70px -34px rgba(0,0,0,0.78)" : "0 26px 54px -30px rgba(0,0,0,0.66)",
              transition: "box-shadow var(--dur-base) var(--ease-out)",
            }}>
              <Image src={r.image} alt={r.title} fill sizes="(max-width: 760px) 50vw, 22vw" placeholder="blur" style={{ objectFit: "cover", objectPosition: r.pos, transform: isHover ? "scale(1.05)" : "scale(1)", transition: "transform 900ms var(--ease-out)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(9,20,22,0.72) 4%, rgba(9,20,22,0.06) 46%)" }} />
              <span style={{ position: "absolute", top: 14, left: 15, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", color: "var(--paper-100)", opacity: 0.9 }}>0{i + 1}</span>
              <div style={{ position: "absolute", left: 16, right: 14, bottom: 15 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-h4)", letterSpacing: "var(--ls-heading)", color: "var(--paper-100)", textShadow: "0 1px 14px rgba(0,0,0,0.45)" }}>{r.title}</div>
                <div style={{ marginTop: 3, fontFamily: "var(--font-text)", fontSize: "var(--fs-small)", color: "var(--paper-100)", opacity: 0.86 }}>{r.count}</div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function HomeScreen() {
  const { go, openExpedition } = useKunturNav();
  const onNavigate = go;

  const regions = [
    { title: "La Sierra", count: "Andes & páramo", image: IMG.tileSierra, pos: "center 40%" },
    { title: "El Oriente", count: "Amazon rivers", image: IMG.amazonRiver, pos: "center" },
    { title: "Galápagos", count: "Islands & wildlife", image: IMG.tileGalapagos, pos: "center 45%" },
    { title: "Quito & Colonial", count: "Cities & markets", image: IMG.tileQuito, pos: "center 35%" },
  ];

  const steps = [
    { i: "01", t: "Choose your region", d: "Páramo traverse, Amazon river lodge, colonial cities, or an island crossing." },
    { i: "02", t: "Match a boutique stay", d: "Hacienda, eco-lodge, or a room on the plaza. We handle the bookings." },
    { i: "03", t: "Add transfers & extras", d: "Airport pickups, park permits, a private cook for summit night." },
    { i: "04", t: "Meet your guide", d: "One point of contact, born and raised on the trail you're walking." },
  ];

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Hero
          image={IMG.heroAndes}
          foreground={IMG.heroAndesFg}
          foregroundFade="linear-gradient(to bottom, #000 0%, #000 60%, rgba(0,0,0,0) 76%)"
          anchor="top"
          title=""
          kenBurns={false}
          parallaxSpeed={0}
          priority
        />
        {/* Overlay copy sits above the photo but behind the foreground cut-out. */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", color: "var(--paper-100)" }}>
          <div style={{ position: "absolute", top: "clamp(92px, 13vh, 180px)", left: 0, right: 0, textAlign: "center", padding: "0 var(--gutter)" }}>
            <div style={{ display: "inline-flex", animation: "kuntur-rise 900ms var(--ease-out) 2900ms both" }}>
              <Eyebrow tick>Kuntur Expeditions · Ecuador</Eyebrow>
            </div>
          </div>
          <h1 className="k-home-title" style={{
            position: "absolute", left: 0, right: 0, margin: 0, textAlign: "center",
            padding: "0 var(--gutter)", fontFamily: "var(--font-display)", fontWeight: "var(--fw-extrabold)",
            fontSize: "clamp(2.8rem, 8vw, 7.5rem)", lineHeight: "0.98", letterSpacing: "var(--ls-mega)",
            textShadow: "0 2px 10px rgba(9,20,22,0.4), 0 1px 34px rgba(9,20,22,0.34)",
          }}>
            <span style={{ display: "block", animation: "kuntur-slide-left 1150ms var(--ease-out) 1750ms both" }}>Four worlds</span>
            <span style={{ display: "block", animation: "kuntur-slide-right 1150ms var(--ease-out) 2100ms both" }}>one country</span>
          </h1>
        </div>
      </div>

      {/* Region showcase */}
      <Section>
        <SectionHeading eyebrow="Four worlds" title="One country, four ways to fall for it"
          lead="From glacier-topped volcanoes to island shorelines — the whole country fits inside a day's drive and a short flight." />
        <FourWorlds items={regions} onNavigate={onNavigate} />
      </Section>

      {/* Wildlife gallery */}
      <Section tint="var(--ink-900)">
        <SectionHeading eyebrow="Wildlife" title="Where the wildlife has no fear of you"
          lead="Llamas grazing below a volcano, macaques grooming in the canopy, marine iguanas on white sand — Ecuador's wildlife lives close and unbothered." />
        <div className="k-wild-1">
          <Figure src={IMG.monkeys} alt="Long-tailed macaques" caption="Long-tailed macaques · rainforest canopy" pos="center 22%" delay={0} />
          <Figure src={IMG.alpaca} alt="Llamas below Cotopaxi" caption="Llamas below Cotopaxi · the páramo" pos="center" delay={110} />
        </div>
        <div className="k-wild-2">
          <Figure src={IMG.galIguanas} alt="Marine iguanas" caption="Marine iguanas · Tortuga Bay" pos="center 60%" delay={0} />
          <Figure src={IMG.galSealions} alt="Sea lion family" caption="Sea lion family · San Cristóbal" pos="center" delay={110} />
          <Figure src={IMG.jaguar} alt="Jaguar" caption="Jaguar · Cuyabeno, the Amazon" pos="center" delay={220} />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "var(--space-7)" }}>
          <Button variant="outline" trailingIcon="arrow-up-right" onClick={() => onNavigate("Destinations")}>See all four regions</Button>
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <div className="k-how">
          <div>
            <Eyebrow tick>How it works</Eyebrow>
            <p style={{ marginTop: 22, fontFamily: "var(--font-display)", fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-h2)", lineHeight: "var(--lh-snug)", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)", textWrap: "balance" }}>
              One seamless plan. Instant confirmations, or concierge support for bespoke routes.
            </p>
            <div style={{ marginTop: 34 }}>
              <Button variant="outline" trailingIcon="arrow-up-right" onClick={() => onNavigate("Expeditions")}>Start planning</Button>
            </div>
          </div>
          <div className="k-steps">
            {steps.map((s, idx) => (
              <div key={s.i} className="k-step">
                {idx > 0 ? <div className="k-step-vline"><RevealLine orientation="vertical" delay={idx * 90} /></div> : null}
                <Reveal delay={idx * 80}><StepItem index={s.i} title={s.t} description={s.d} /></Reveal>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured expeditions */}
      <Section tint="var(--ink-900)">
        <SectionHeading eyebrow="Featured" title="Departures worth clearing your calendar for" />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <Reveal>
            <ExpeditionCard title="7-Day Cotopaxi & Páramo Traverse" price="$1,000"
              location="Cotopaxi Province, Ecuador" dateRange="Feb 15 – 21, 2026 (7 days, 6 nights)"
              guests="12 travellers" trust="190+" rating={5} image={IMG.cotopaxi} imageSide="right"
              onExplore={() => openExpedition("cotopaxi")} />
          </Reveal>
          <Reveal>
            <ExpeditionCard title="Amazon Rivers & Rainforest Lodge" price="$1,190"
              location="Napo · Yasuní, Ecuador" dateRange="Mar 8 – 13, 2026 (6 days, 5 nights)"
              guests="10 travellers" trust="140+" rating={5} image={IMG.amazonCanoe} imageSide="left"
              onExplore={() => openExpedition("amazon")} />
          </Reveal>
          <Reveal>
            <ExpeditionCard title="Colonial Trails & Highland Markets" price="$1,328"
              location="Quito · Otavalo · Cuenca, Ecuador" dateRange="Jan 15 – 21, 2026 (7 days, 6 nights)"
              guests="8 travellers" trust="125+" rating={5} image={IMG.quitoBasilica} imageSide="right"
              onExplore={() => openExpedition("colonial")} />
          </Reveal>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-8)" }}>
          <Button variant="paper" size="lg" trailingIcon="arrow-up-right" onClick={() => onNavigate("Expeditions")}>View all expeditions</Button>
        </div>
      </Section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
