import Link from "next/link";
import type { Metadata } from "next";
import { checkedDateLabel } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "Food Rarities",
  description: "The Giant's Breakfast food rarity status: Celestial is the highest named tier in the official description; the full ladder is not publicly listed.",
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
          <p className="note">See <Link href="/how-to-play/">how to play</Link> for the stacking loop that unlocks rarer food.</p>
        </article>
      </section>
    </>
  );
}
