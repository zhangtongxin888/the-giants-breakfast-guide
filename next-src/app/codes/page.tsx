import Link from "next/link";
import type { Metadata } from "next";
import { AdPlacements } from "@/components/ad-placements";
import { checkedDateLabel, codesFaqs, doorCodeAnswer } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "Codes Status (Oct 2026)",
  description:
    "The Giant's Breakfast Roblox codes status (October 2026): no verified official promo codes from sources reviewed. Door/lab keypad answers are tracked separately.",
  alternates: { canonical: "/codes/" },
};

export default function CodesPage() {
  const structured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: codesFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
      <section className="hero">
        <p className="eyebrow">Codes check · checked {checkedDateLabel}</p>
        <h1>Codes status for The Giant&apos;s Breakfast</h1>
        <p className="lede">
          No official promo codes verified. The official Roblox listing and an independent JP codes tracker reviewed for this guide do not publish active gift strings. We will not invent a code table to fill the gap.
        </p>
      </section>
      <section className="panel">
        <h2>Looking for the door code instead?</h2>
        <p>
          Many “code” searches mean the in-world lab/door keypad. That answer lives on the dedicated{" "}
          <Link href="/door-code/">door code page</Link> (community-reported <strong>{doorCodeAnswer.code}</strong>), not in a promo list.
        </p>
      </section>
      <section className="panel" style={{ marginTop: 18 }}>
        <h2>What we checked</h2>
        <ul>
          <li>Official experience description — cooking loop only; no gift-code table.</li>
          <li>Independent JP codes tracker — active promo count reported as 0.</li>
          <li>Independent puzzle tracker — keypad candidate EGGS kept separate from promo UI.</li>
        </ul>
        <p className="note">
          See <Link href="/sources/">sources</Link> and the <Link href="/updates/">October updates log</Link> for dates.
        </p>
      </section>
      <section className="panel" style={{ marginTop: 18 }}>
        <h2>Codes FAQ</h2>
        {codesFaqs.map((item) => (
          <div key={item.question} style={{ marginBottom: 12 }}>
            <h3 style={{ marginBottom: 4 }}>{item.question}</h3>
            <p className="note" style={{ margin: 0 }}>{item.answer}</p>
          </div>
        ))}
        <div className="actions" style={{ marginTop: 12 }}>
          <Link className="btn" href="/door-code/">Open door code (EGGS)</Link>
          <Link className="btn-secondary" href="/how-to-play/">How to play</Link>
          <Link className="btn-secondary" href="/">Wiki home</Link>
        </div>
      </section>
      <AdPlacements />
    </>
  );
}
