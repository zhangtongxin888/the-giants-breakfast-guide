import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { siteDomain } from "@/lib/game-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteDomain),
  title: {
    default: "The Giant's Breakfast Wiki: Door Code, Codes & Guide (Oct 2026)",
    template: "%s | The Giant's Breakfast Wiki",
  },
  description:
    "October 2026 guide: door/lab keypad answer (EGGS), official cooking loop, Celestial rarity, and verified code status for The Giant's Breakfast on Roblox.",
  alternates: { canonical: "/" },
  icons: { icon: "/game/official-icon.png", apple: "/game/official-icon.png" },
  openGraph: {
    siteName: "The Giant's Breakfast Wiki",
    type: "website",
    images: [{ url: "/og.png", width: 768, height: 429, alt: "Official artwork for The Giant's Breakfast" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
