import Link from "next/link";
import type { Metadata } from "next";
import { checkedDateLabel } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "Codes Status",
  description: "The Giant's Breakfast Roblox codes status: no verified official promo codes from the sources reviewed. Door/lab keypad answers are tracked separately.",
  alternates: { canonical: "/codes/" },
};

export default function CodesPage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Codes check · checked {checkedDateLabel}</p>
        <h1>Codes status for The Giant&apos;s Breakfast</h1>
        <p className="lede">No official promo codes verified. The official sources reviewed for this guide do not publish gift codes or confirm a redemption list. We will not invent a code table to fill the gap.</p>
      </section>
      <section className="panel">
        <h2>Looking for the door code instead?</h2>
        <p>Many “code” searches mean the in-world lab/door keypad. That answer lives on the dedicated <Link href="/door-code/">door code page</Link> (community-reported <strong>EGGS</strong>), not in a promo list.</p>
      </section>
    </>
  );
}
