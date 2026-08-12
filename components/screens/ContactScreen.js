"use client";
import React from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Button } from "@/components/ds/Button";
import { Icon } from "@/components/ds/Icon";
import { MetaItem } from "@/components/ds/MetaItem";
import { Section } from "@/components/shared/Section";
import { Footer } from "@/components/shared/Footer";
import { IMG } from "@/lib/images";
import { useKunturNav } from "@/lib/useKunturNav";

function Field({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontSize: "var(--fs-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>{label}</span>
      {children}
    </label>
  );
}
const inputStyle = {
  width: "100%", boxSizing: "border-box", padding: "14px 16px", background: "var(--ink-700)",
  border: "1px solid var(--line-hair)", borderRadius: "var(--radius-md)", color: "var(--text-strong)",
  fontFamily: "var(--font-text)", fontSize: "var(--fs-body)", outline: "none",
};

export function ContactScreen() {
  const { go } = useKunturNav();
  const [form, setForm] = React.useState({ name: "", email: "", trip: "Andes & Páramo", msg: "" });
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div>
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "clamp(28px,4vw,72px)", alignItems: "start" }}>
          {/* Form */}
          <div>
            <Eyebrow tick>Plan with us</Eyebrow>
            <h1 style={{ margin: "20px 0 var(--space-6)", fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-display)", lineHeight: "var(--lh-snug)", letterSpacing: "var(--ls-display)", color: "var(--text-strong)", textWrap: "balance" }}>
              Tell us where you want to go
            </h1>
            {sent ? (
              <div style={{ padding: "var(--space-7)", background: "var(--surface-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--line-amber)" }}>
                <div style={{ color: "var(--accent)", marginBottom: 14 }}><Icon name="check" size={28} /></div>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-h3)", color: "var(--text-strong)" }}>¡Gracias, {form.name || "traveller"}!</h3>
                <p style={{ margin: "10px 0 22px", color: "var(--text-body)" }}>A guide will reply within one working day.</p>
                <Button variant="outline" trailingIcon="arrow-left" onClick={() => setSent(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gap: "var(--space-5)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
                  <Field label="Name"><input required style={inputStyle} value={form.name} onChange={set("name")} placeholder="Your name" /></Field>
                  <Field label="Email"><input required type="email" style={inputStyle} value={form.email} onChange={set("email")} placeholder="you@email.com" /></Field>
                </div>
                <Field label="Which region?">
                  <div style={{ position: "relative" }}>
                    <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} value={form.trip} onChange={set("trip")}>
                      <option>Andes & Páramo</option><option>Colonial Towns</option><option>Amazon Basin</option><option>Galápagos</option><option>Not sure yet</option>
                    </select>
                    <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-muted)" }}><Icon name="chevron-down" size={18} /></span>
                  </div>
                </Field>
                <Field label="Tell us about your trip"><textarea rows={4} style={{ ...inputStyle, resize: "vertical" }} value={form.msg} onChange={set("msg")} placeholder="Dates, group size, what you're dreaming of…" /></Field>
                <div><Button variant="paper" size="lg" as="button" trailingIcon="arrow-up-right">Send enquiry</Button></div>
              </form>
            )}
          </div>

          {/* Info + image */}
          <div>
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "3 / 2", background: "var(--ink-700)" }}>
              <Image src={IMG.quilotoa} alt="Laguna Quilotoa crater lake" fill sizes="(max-width: 900px) 100vw, 40vw" placeholder="blur" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ marginTop: "var(--space-6)" }}>
              <MetaItem icon="map-pin" iconSide="left">La Ronda, Quito, Ecuador</MetaItem>
              <MetaItem icon="compass" iconSide="left">hola@kuntur.ec</MetaItem>
              <MetaItem icon="clock" iconSide="left">Mon–Sat · 08:00–18:00 (ECT)</MetaItem>
            </div>
            <p style={{ marginTop: 20, fontSize: "var(--fs-small)", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Prefer to talk? Book a 20-minute call and we'll sketch a route together — no obligation.
            </p>
          </div>
        </div>
      </Section>
      <Footer onNavigate={go} />
    </div>
  );
}
