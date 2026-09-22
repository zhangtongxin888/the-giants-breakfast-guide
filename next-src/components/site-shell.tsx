import Link from "next/link";
import { navItems, officialGameUrl } from "@/lib/game-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="The Giant's Breakfast Wiki home">
          <img src="/game/official-icon.png" alt="" width={36} height={36} />
          <span>
            <strong>GIANT&apos;S BREAKFAST</strong>
            <small>PLAYER WIKI</small>
          </span>
        </Link>
        <nav aria-label="Guide sections">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="play-pill" href={officialGameUrl} target="_blank" rel="noreferrer">
          Play the official game
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <strong>The Giant&apos;s Breakfast Wiki</strong>
          <p>Independent, source-backed player guide. Not affiliated with Roblox or Zidiam Studios.</p>
        </div>
        <div className="footer-links">
          <Link href="/how-to-play/">How to play</Link>
          <Link href="/door-code/">Door code</Link>
          <Link href="/food-rarities/">Food rarities</Link>
          <Link href="/codes/">Codes</Link>
          <Link href="/wiki/">Wiki</Link>
          <Link href="/sources/">Sources</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
