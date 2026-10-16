/** Content-page ad hosts. Placed after the article so the guide renders first. */
export function AdPlacements() {
  return (
    <div id="adsterra-mount" data-adsterra-mount="1">
      <aside className="ad-placement" data-ad-slot="native" aria-label="Advertisement">
        <span className="ad-label">Advertisement</span>
        <div className="ad-host" data-ad-host="native" />
      </aside>
      <aside className="ad-placement" data-ad-slot="leaderboard" aria-label="Advertisement">
        <span className="ad-label">Advertisement</span>
        <div className="ad-host" data-ad-host="leaderboard" />
      </aside>
      <aside className="ad-placement" data-ad-slot="rectangle" aria-label="Advertisement">
        <span className="ad-label">Advertisement</span>
        <div className="ad-host" data-ad-host="rectangle" />
      </aside>
    </div>
  );
}
