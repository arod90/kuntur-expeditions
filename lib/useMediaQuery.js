"use client";
import { useEffect, useState } from "react";

/** SSR-safe media query hook. Returns `false` on the server / first paint,
 *  then tracks the query live. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);
  return matches;
}
