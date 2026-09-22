import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notes for The Giant's Breakfast wiki.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <section className="panel">
      <h1>Privacy</h1>
      <p>This fan guide does not require accounts. If advertising is enabled on a live deployment, third-party ad networks may process technical data under their own policies.</p>
    </section>
  );
}
