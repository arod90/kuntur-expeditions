"use client";
import { useRouter } from "next/navigation";

// Maps the design's navigation labels to real routes. The original SPA called
// onNavigate("Destinations") etc.; here that becomes a router push.
const LABEL_TO_PATH = {
  Expeditions: "/expeditions",
  Destinations: "/destinations",
  Guides: "/guides",
  Journal: "/guides",
  Contact: "/contact",
  Explore: "/expeditions",
  home: "/",
};

export function useKunturNav() {
  const router = useRouter();
  const go = (target) => {
    const path = LABEL_TO_PATH[target] || (target && target.startsWith("/") ? target : "/" + target);
    router.push(path);
  };
  const openExpedition = (id) => router.push("/expeditions/" + id);
  return { go, openExpedition };
}
