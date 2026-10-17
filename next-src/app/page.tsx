import Link from "next/link";
import type { Metadata } from "next";
import { AdPlacements } from "@/components/ad-placements";
import {
  checkedDateLabel,
  doorCodeAnswer,
  faqs,
  homeFreshnessNote,
  officialGameUrl,
  playSteps,
} from "@/lib/game-data";

export const metadata: Metadata = {
  title: {
    absolute: "The Giant's Breakfast Wiki: Door Code, Codes & Guide (Oct 2026)",
  },
  description:
    "October 2026 guide: the door/lab keypad answer (EGGS), official cooking loop, Celestial rarity, and verified code status for The Giant's Breakfast on Roblox.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "The Giant's Breakfast Wiki",
        url: "https://the-giants-breakfast.wiki/",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
      <section className="hero">
        <p className="eyebrow">Independent, source-backed player guide</p>
        <h1>Stack breakfast to the sky.</h1>
        <p className="lede">
          Pull the lever. Cook giant food. Build a tower that earns every second—then climb toward rarer finds all the way to Celestial.
          Searching <strong>the giants breakfast roblox door code</strong>? Start with the keypad answer below, then follow the six-step loop.
        </p>
        <div className="actions">
          <Link className="btn" href="/door-code/">Door code: {doorCodeAnswer.code}</Link>
          <Link className="btn-secondary" href="/how-to-play/">How to play guide</Link>
          <Link className="btn-secondary" href="/updates/">October updates</Link>
          <a className="btn-secondary" href={officialGameUrl} target="_blank" rel="noreferrer">Official game</a>
        </div>
        <p className="note">{homeFreshnessNote}</p>
      </section>

      <div className="grid-2" style={{ marginTop: 18 }}>
        <article className="answer-card">
          <span className="badge">High-demand answer</span>
          <h2>Lab / door keypad</h2>
          <p className="code-pill">{doorCodeAnswer.code}</p>
          <p>{doorCodeAnswer.summary}</p>
          <Link className="btn" href="/door-code/">Open the door-code page</Link>
        </article>
        <article className="panel">
          <h2>Official cooking loop</h2>
          <ol>
            {playSteps.slice(0, 4).map((step) => (
              <li key={step.number}><strong>{step.title}.</strong> {step.detail}</li>
            ))}
          </ol>
          <Link href="/how-to-play/">Full how-to-play steps →</Link>
        </article>
      </div>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2>Quick FAQ</h2>
        {faqs.map((item) => (
          <div key={item.question} style={{ marginBottom: 12 }}>
            <h3 style={{ marginBottom: 4 }}>{item.question}</h3>
            <p className="note" style={{ margin: 0 }}>{item.answer}</p>
          </div>
        ))}
        <p className="note" style={{ marginTop: 12 }}>
          Next steps: <Link href="/door-code/">door code</Link> · <Link href="/codes/">codes status</Link> ·{" "}
          <Link href="/food-rarities/">food rarities</Link> · <Link href="/updates/">updates log</Link> ·{" "}
          <Link href="/sources/">sources</Link>
        </p>
      </section>
      <p className="note" style={{ marginTop: 8 }}>Checked {checkedDateLabel}.</p>
      <AdPlacements />
    </>
  );
}
