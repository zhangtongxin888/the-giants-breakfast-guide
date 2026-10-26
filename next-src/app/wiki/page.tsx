import Link from "next/link";
import type { Metadata } from "next";
import { AdPlacements } from "@/components/ad-placements";

export const metadata: Metadata = {
  title: "Player Guide Hub",
  description: "The Giant's Breakfast player wiki hub: how to play, door code, food rarities, codes status, and October updates.",
  alternates: { canonical: "/wiki/" },
};

const sections = [
  ["How to play", "/how-to-play/", "The confirmed six-step path from buying food to offline earnings."],
  ["Door code", "/door-code/", "Community-reported lab/door keypad answer (EGGS), FAQ, and safe entry steps."],
  ["Food rarities", "/food-rarities/", "Celestial endpoint and details still not public."],
  ["Codes status", "/codes/", "Why this guide does not invent an active promo list."],
  ["October updates", "/updates/", "Monthly log: live-update awareness, keypad recheck, promo status."],
] as const;

export default function WikiPage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Player wiki</p>
        <h1>Useful facts, without the filler</h1>
        <p className="lede">Choose a guide below. Every game claim is tied to official material or clearly marked as community-reported.</p>
      </section>
      <section className="grid-2">
        {sections.map(([title, href, detail]) => (
          <article className="panel" key={href}>
            <h2><Link href={href}>{title}</Link></h2>
            <p>{detail}</p>
            <Link href={href}>Open section →</Link>
          </article>
        ))}
      </section>
      <AdPlacements />
    </>
  );
}
