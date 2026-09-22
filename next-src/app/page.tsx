import Link from "next/link";
import type { Metadata } from "next";
import { checkedDateLabel, doorCodeAnswer, faqs, officialGameUrl, playSteps } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "The Giant's Breakfast Wiki & Beginner Guide",
  description:
    "Stack breakfast to the sky: official loop, door/lab keypad answer, Celestial rarity status, and honest code checks for The Giant's Breakfast on Roblox.",
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
          Need the lab keypad? Start with the door-code answer, then follow the six-step loop.
        </p>
        <div className="actions">
          <Link className="btn" href="/door-code/">Door code: {doorCodeAnswer.code}</Link>
          <Link className="btn-secondary" href="/how-to-play/">How to play guide</Link>
          <a className="btn-secondary" href={officialGameUrl} target="_blank" rel="noreferrer">Official game</a>
        </div>
        <p className="note">Checked {checkedDateLabel}. Homepage no longer tries to answer every query alone—door-code and how-to-play now have dedicated owners.</p>
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
      </section>
    </>
  );
}
