import Link from "next/link";
import type { Metadata } from "next";
import { AdPlacements } from "@/components/ad-placements";
import { checkedDateLabel, officialGameUrl, playSteps } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "How to Play",
  description:
    "How to play The Giant's Breakfast on Roblox: lever buy, griddle vs toaster, stacking income, Celestial rarity path, and what official sources do not publish.",
  alternates: { canonical: "/how-to-play/" },
};

export default function HowToPlayPage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Beginner guide · checked {checkedDateLabel}</p>
        <h1>How to play The Giant&apos;s Breakfast</h1>
        <p className="lede">
          From empty plate to sky-high stack. Follow the official loop in order. Anything the official sources do not specify is labeled instead of guessed.
        </p>
        <div className="actions">
          <a className="btn" href={officialGameUrl} target="_blank" rel="noreferrer">Play the official game</a>
          <Link className="btn-secondary" href="/door-code/">Need the door code?</Link>
        </div>
      </section>

      <section className="steps">
        {playSteps.map((step) => (
          <article className="step" key={step.number}>
            <div className="num">{step.number}</div>
            <div>
              <h2 style={{ margin: "0 0 6px" }}>{step.title}</h2>
              <p style={{ margin: 0 }}>{step.detail}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="panel">
        <h2>What official sources do not publish</h2>
        <ul>
          <li>Exact lever prices, cook timers, or income formulas</li>
          <li>A complete public food ladder below Celestial</li>
          <li>Event calendars or offline reward amounts</li>
        </ul>
        <p className="note">Use the live Roblox UI as the authority for numbers. For rarity status, see <Link href="/food-rarities/">food rarities</Link>.</p>
      </section>
      <AdPlacements />
    </>
  );
}
