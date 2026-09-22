import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Player Wiki",
  description: "The Giant's Breakfast player wiki hub: how to play, door code, food rarities, and codes status.",
  alternates: { canonical: "/wiki/" },
};

const sections = [
  ["How to play", "/how-to-play/", "The confirmed six-step path from buying food to offline earnings."],
  ["Door code", "/door-code/", "Community-reported lab/door keypad answer and safe entry steps."],
  ["Food rarities", "/food-rarities/", "Celestial endpoint and details still not public."],
  ["Codes status", "/codes/", "Why this guide does not invent an active promo list."],
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
    </>
  );
}
