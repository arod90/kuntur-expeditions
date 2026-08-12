import { IMG } from "./images";

// The four active departures (drives the Expeditions index + detail lookup).
export const EXPEDITIONS = [
  {
    id: "cotopaxi",
    title: "7-Day Cotopaxi & Páramo Traverse",
    price: "$1,000",
    location: "Cotopaxi Province, Ecuador",
    dateRange: "Feb 15 – 21, 2026 (7 days, 6 nights)",
    guests: "12 travellers",
    trust: "190+",
    rating: 5,
    image: IMG.cotopaxi,
  },
  {
    id: "colonial",
    title: "Colonial Trails & Highland Markets",
    price: "$1,328",
    location: "Quito · Otavalo · Cuenca",
    dateRange: "Jan 15 – 21, 2026 (7 days, 6 nights)",
    guests: "8 travellers",
    trust: "125+",
    rating: 5,
    image: IMG.quitoBasilica,
  },
  {
    id: "amazon",
    title: "Napo River & Cloud Forest Expedition",
    price: "$2,140",
    location: "Tena · Yasuní, Ecuador",
    dateRange: "March 06 – 15, 2026 (10 days, 9 nights)",
    guests: "10 travellers",
    trust: "88+",
    rating: 5,
    image: IMG.amazonCanoe,
  },
  {
    id: "galapagos",
    title: "Galápagos Islands Small-Ship Voyage",
    price: "$3,829",
    location: "San Cristóbal · Isabela",
    dateRange: "April 12 – 20, 2026 (8 days, 7 nights)",
    guests: "16 travellers",
    trust: "412+",
    rating: 5,
    image: IMG.galKicker,
  },
];

export function getExpedition(id) {
  return EXPEDITIONS.find((e) => e.id === id);
}
