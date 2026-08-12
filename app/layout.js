import "./globals.css";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { SiteChrome } from "./SiteChrome";

// Self-hosted via next/font — no external request, no layout shift.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = "Kuntur Expeditions — Small-group journeys across Ecuador";
const description =
  "Kuntur Expeditions runs small-group journeys across Ecuador's four worlds — the Andes, the Amazon, the colonial highlands and the Galápagos — led by local guides who grew up on these trails.";

export const metadata = {
  title,
  description,
  applicationName: "Kuntur Expeditions",
  keywords: ["Ecuador", "expeditions", "travel", "Galápagos", "Amazon", "Andes", "Cotopaxi", "Quito", "small-group tours", "adventure travel"],
  openGraph: { title, description, type: "website", locale: "en", siteName: "Kuntur Expeditions" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c1a1e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
