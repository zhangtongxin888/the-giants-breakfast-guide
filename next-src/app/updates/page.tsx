import Link from "next/link";
import type { Metadata } from "next";
import { AdPlacements } from "@/components/ad-placements";
import { checkedDateLabel, octoberUpdateNotes } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "October 2026 Updates Log",
  description:
    "The Giant's Breakfast October 2026 updates log: observed live-update cadence, door-code recheck (EGGS), and promo status—without invented patch bullets.",
  alternates: { canonical: "/updates/" },
};

export default function UpdatesPage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Monthly log · checked {checkedDateLabel}</p>
        <h1>October 2026 updates</h1>
        <p className="lede">
          A short editorial log of what we can verify for The Giant&apos;s Breakfast this month: live-update awareness, the door/lab keypad answer, and promo-code status.
          We do not invent balance percentages or fake patch notes.
        </p>
        <div className="actions">
          <Link className="btn" href="/door-code/">Door code still EGGS</Link>
          <Link className="btn-secondary" href="/codes/">Codes status</Link>
          <Link className="btn-secondary" href="/how-to-play/">How to play</Link>
        </div>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2>What changed for players (verified scope)</h2>
        <ul>
          <li><strong>Door / lab keypad:</strong> still community-reported <strong>EGGS</strong> after the Oct 25 recheck.</li>
          <li><strong>Promo gifts:</strong> still no verified active list on the sources reviewed.</li>
          <li><strong>Live ops:</strong> independent stats tracking shows frequent mid-October update days (through Oct 14) and a thumbnail look change on Oct 8—not a license to invent mechanics bullets.</li>
        </ul>
      </section>

      <section className="steps" style={{ marginTop: 18 }}>
        {octoberUpdateNotes.map((note) => (
          <article className="step" key={note.date + note.title}>
            <div className="num">{note.date.slice(5)}</div>
            <div>
              <h2 style={{ margin: "0 0 6px" }}>{note.title}</h2>
              <p style={{ margin: "0 0 8px" }}>{note.detail}</p>
              <p className="note" style={{ margin: 0 }}><strong>Player action:</strong> {note.playerAction}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2>Related guides</h2>
        <p>
          <Link href="/door-code/">Door code</Link> · <Link href="/codes/">Codes</Link> ·{" "}
          <Link href="/food-rarities/">Food rarities</Link> · <Link href="/wiki/">Wiki hub</Link> ·{" "}
          <Link href="/sources/">Sources</Link>
        </p>
      </section>
      <AdPlacements />
    </>
  );
}
