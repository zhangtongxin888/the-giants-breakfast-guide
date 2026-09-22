import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact notes for The Giant's Breakfast wiki.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <section className="panel">
      <h1>Contact</h1>
      <p>For factual corrections about this unofficial guide, reach the site operator through the channel published with the domain registration / hosting account.</p>
    </section>
  );
}
