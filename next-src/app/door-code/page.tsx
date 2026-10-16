import Link from "next/link";
import type { Metadata } from "next";
import { AdPlacements } from "@/components/ad-placements";
import { checkedDateLabel, doorCodeAnswer } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "Door Code / Lab Keypad",
  description:
    "The Giant's Breakfast Roblox door code and lab keypad answer: community-reported EGGS, how to enter it safely, and how it differs from promo codes.",
  alternates: { canonical: "/door-code/" },
};

export default function DoorCodePage() {
  const structured = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Enter the Giant's Breakfast door / lab keypad code",
    description: doorCodeAnswer.summary,
    step: doorCodeAnswer.steps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
      <section className="hero">
        <p className="eyebrow">Exact-intent owner · checked {checkedDateLabel}</p>
        <h1>The Giant&apos;s Breakfast door code</h1>
        <p className="lede">
          Players searching “the giants breakfast roblox door code” need the in-world keypad answer—not a promo gift string.
        </p>
        <div className="answer-card" style={{ marginTop: 8 }}>
          <span className="badge">Community-reported keypad answer</span>
          <p className="code-pill">{doorCodeAnswer.code}</p>
          <p>{doorCodeAnswer.summary}</p>
        </div>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2>How to use the door / lab code</h2>
        <div className="steps">
          {doorCodeAnswer.steps.map((step, index) => (
            <div className="step" key={step}>
              <div className="num">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h3 style={{ margin: "0 0 6px" }}>Step {index + 1}</h3>
                <p style={{ margin: 0 }}>{step}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="note">{doorCodeAnswer.notPromo}</p>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2>Door code vs promo codes</h2>
        <ul>
          <li><strong>Door / lab keypad:</strong> typed on an in-world terminal or door pad. Candidate answer on this page: <strong>EGGS</strong>.</li>
          <li><strong>Promo / gift codes:</strong> entered in a Codes/Gifts UI if the creator publishes one. See the <Link href="/codes/">codes status page</Link>—no invented gift list.</li>
        </ul>
        <div className="actions">
          <Link className="btn-secondary" href="/how-to-play/">Continue with how to play</Link>
          <Link className="btn-secondary" href="/codes/">Codes status</Link>
          <Link className="btn-secondary" href="/">Back to wiki home</Link>
        </div>
      </section>
      <AdPlacements />
    </>
  );
}
