"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { NavBar } from "@/components/ds/NavBar";
import { useKunturNav } from "@/lib/useKunturNav";

// Persistent app chrome: the fixed nav + the single scroll container that all
// routes render into (so parallax + the nav's transparent→solid behaviour work),
// plus the per-navigation nav replay, accent sweep, and content fade-in that the
// original SPA did on screen changes.
export function SiteChrome({ children }) {
  const pathname = usePathname();
  const { go } = useKunturNav();
  const scrollRef = React.useRef(null);
  const firstRef = React.useRef(true);
  const [scrolled, setScrolled] = React.useState(false);

  const isDetail = /^\/expeditions\/[^/]+$/.test(pathname);
  const isHero = pathname === "/" || isDetail;

  // Reset scroll + scrolled flag on every route change.
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setScrolled(false);
  }, [pathname]);

  // The elaborate first-load choreography only runs on the initial home render.
  const startDelay = React.useMemo(
    () => (firstRef.current && pathname === "/" ? 3150 : 120),
    [pathname]
  );
  React.useEffect(() => { firstRef.current = false; }, []);

  const onScroll = () => setScrolled((scrollRef.current?.scrollTop || 0) > 40);
  const navVariant = isHero && !scrolled ? "transparent" : "solid";

  const links = [
    { label: "Destinations", active: pathname === "/destinations" },
    { label: "Guides", active: pathname === "/guides" },
    { label: "Expeditions", active: pathname === "/expeditions" || pathname.startsWith("/expeditions/") },
    { label: "Contact", active: pathname === "/contact" },
  ];

  return (
    <div style={{ position: "fixed", inset: 0, background: "var(--bg-base)" }}>
      {/* Fixed nav — replays its slot-machine on every page change */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50 }}>
        <NavBar key={pathname} variant={navVariant} animateIn startDelay={startDelay} links={links} onNavigate={go} />
        <div key={"sweep" + pathname} aria-hidden="true" style={{
          position: "absolute", left: 0, right: 0, top: "var(--nav-h)", height: "2px",
          background: "var(--accent)", transformOrigin: "left center",
          animation: "kuntur-sweep 620ms var(--ease-in-out) both",
        }} />
      </div>

      {/* Scroll container */}
      <div id="kuntur-scroll" ref={scrollRef} onScroll={onScroll}
        style={{ position: "absolute", inset: 0, overflowY: "auto", overflowX: "hidden" }}>
        <div style={{ paddingTop: isHero ? 0 : "var(--nav-h)" }}>
          <div key={pathname} style={{ animation: "kuntur-rise var(--dur-base) var(--ease-out) both" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
