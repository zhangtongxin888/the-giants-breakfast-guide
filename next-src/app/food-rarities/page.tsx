import Link from "next/link";
import type { Metadata } from "next";
import { AdPlacements } from "@/components/ad-placements";
import { checkedDateLabel } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "Food Rarities & How to Get Celestials",
  description: "How to get Celestials in The Giant's Breakfast: grow your tower until the lever offers Celestial food, then cook it on the right station. Rarity status checked Oct 2026.",
  alternates: { canonical: "/food-rarities/" },
};

export default function FoodRaritiesPage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Rarity status · checked {checkedDateLabel}</p>
        <h1>Food rarities in The Giant&apos;s Breakfast</h1>
        <p className="lede">Climb toward Celestial. A taller tower unlocks rarer food. Celestial is the highest rarity named in the official description; the complete ladder is not publicly listed in the official sources reviewed.</p>
      </section>
      <section className="grid-2">
        <article className="answer-card">
          <span className="badge ok">Highest named tier</span>
          <h2>Celestial</h2>
          <p>Named in the official Roblox description as the upper end of the rarity path. Exact drop odds and the full ordered ladder below it are not published there.</p>
        </article>
        <article className="panel">
          <h2>Still not public</h2>
          <ul>
            <li>Complete rarity table with every food name</li>
            <li>Numeric drop rates or pity rules</li>
            <li>Guaranteed unlock heights for each tier</li>
          </ul>
          <p className="note">
            See <Link href="/how-to-play/">how to play</Link> for the stacking loop that unlocks rarer food.
            After mid-October live touches, soft-rejoin and re-check station feel—see <Link href="/updates/">updates</Link>.
          </p>
        </article>
      </section>
      <section className="panel" id="how-to-get-celestials">
        <h2>How to get Celestials in The Giant&apos;s Breakfast</h2>
        <p>Short answer: keep stacking. The official Roblox description says &ldquo;bigger stacks secretly find RARER food... all the way up to the ultimate CELESTIAL tier,&rdquo; so Celestial food comes from the same lever once your tower is tall enough. There is no separate code or mode for it in the sources we reviewed.</p>
        <ol>
          <li>Grow the tower and your money per second with foods you can already cook cleanly.</li>
          <li>Keep sorting by food type when a rarer item appears: batters, eggs and meat go on the griddle; bread and pastries go in the toaster.</li>
          <li>Wait for it to cook so it flips onto the tower; a wasted expensive item costs more than a wasted cheap one.</li>
          <li>Keep some cash in reserve so one failed cook does not stall your stack.</li>
        </ol>
        <p className="note">Sources: the official Roblox experience description and an independent fan guide (thegiantsbreakfast.wiki, Celestial food guide) agree that Celestial is a late rarity gated by tower progress and uses the normal stations. Neither publishes exact unlock heights, prices or drop rates, so we do not list any. See <Link href="/how-to-play/">how to play</Link> and the <Link href="/sources/">sources</Link> page.</p>
      </section>
      <AdPlacements />
    </>
  );
}
