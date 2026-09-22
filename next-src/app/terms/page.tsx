import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for The Giant's Breakfast wiki.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <section className="panel">
      <h1>Terms</h1>
      <p>Unofficial fan information only. Roblox® is a trademark of Roblox Corporation. Game content belongs to its creators. Use at your own risk; pre-release or live game behavior can change.</p>
    </section>
  );
}
