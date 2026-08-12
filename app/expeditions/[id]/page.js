import { notFound } from "next/navigation";
import { ExpeditionDetailScreen } from "@/components/screens/ExpeditionDetailScreen";
import { EXPEDITIONS, getExpedition } from "@/lib/expeditions";

// Only the known expeditions are valid routes; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return EXPEDITIONS.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const e = getExpedition(id);
  if (!e) return {};
  return {
    title: `${e.title} — Kuntur Expeditions`,
    description: `${e.location}. ${e.dateRange}. From ${e.price} per traveller, all-inclusive, small-group.`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  if (!getExpedition(id)) notFound();
  return <ExpeditionDetailScreen id={id} />;
}
