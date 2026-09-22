import type { Metadata } from "next";
import { checkedDateLabel, sources } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "Sources",
  description: "Source notes for The Giant's Breakfast wiki claims.",
  alternates: { canonical: "/sources/" },
};

export default function SourcesPage() {
  return (
    <section className="panel">
      <h1>Sources</h1>
      <p className="note">Last reviewed {checkedDateLabel}.</p>
      <ul>
        {sources.map((source) => (
          <li key={source.label}>
            <strong>{source.label}:</strong>{" "}
            {source.url.startsWith("http") ? (
              <a href={source.url} target="_blank" rel="noreferrer">{source.url}</a>
            ) : (
              <span>{source.url}</span>
            )}
            <div className="note">{source.note}</div>
          </li>
        ))}
      </ul>
      <p className="note">Door-code keypad answer is labeled community-reported on its owner page and is not presented as an official Zidiam gift string.</p>
    </section>
  );
}
