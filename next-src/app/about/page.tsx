import type { Metadata } from "next";
import { creatorName, officialGameUrl } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "About",
  description: "About this independent The Giant's Breakfast Roblox player guide.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <section className="panel">
      <h1>About this wiki</h1>
      <p>Independent player guide for <a href={officialGameUrl} target="_blank" rel="noreferrer">The Giant&apos;s Breakfast</a> by {creatorName}. Not affiliated with Roblox Corporation or the creator.</p>
      <p>We prioritize exact answers for high-demand tasks (door/lab keypad, how to play) and refuse invented promo-code lists.</p>
    </section>
  );
}
