export const siteDomain = "https://the-giants-breakfast.wiki";
export const officialGameUrl =
  "https://www.roblox.com/games/100235161195378/The-Giants-Breakfast";
export const officialUniverseId = "10514182487";
export const creatorName = "Zidiam Studios";
export const checkedDateLabel = "October 17, 2026";

export const navItems = [
  ["How to play", "/how-to-play/"],
  ["Door code", "/door-code/"],
  ["Food rarities", "/food-rarities/"],
  ["Codes", "/codes/"],
  ["Updates", "/updates/"],
  ["Wiki", "/wiki/"],
] as const;

export const homeFreshnessNote =
  "Checked October 17, 2026. Independent trackers still list EGGS for the lab/door keypad; platform update activity continued into mid-October (thumbnail change Oct 8; update days through Oct 14). Zidiam has still not published a verified promo gift list.";

export const playSteps = [
  {
    number: "01",
    title: "Buy giant food",
    detail:
      "Pull the lever to purchase a giant food item. Official sources do not publish exact prices—use the values shown in your live session.",
  },
  {
    number: "02",
    title: "Choose the right station",
    detail:
      "Put batters, eggs, and meat on the griddle. Put bread and pastries in the toaster.",
  },
  {
    number: "03",
    title: "Wait for it to cook",
    detail:
      "Once an item is cooked, it pops up. Exact cook times are not published in the official description reviewed for this guide.",
  },
  {
    number: "04",
    title: "Build the tower",
    detail:
      "The cooked item joins your stack. Each stacked item earns money every second.",
  },
  {
    number: "05",
    title: "Reach rarer food",
    detail:
      "Grow the tower to unlock rarer foods. The official description names Celestial as the upper end of the path.",
  },
  {
    number: "06",
    title: "Return to your earnings",
    detail:
      "Offline earnings are part of the official feature list. Exact reward amounts and event schedules are not publicly stated in the sources reviewed.",
  },
] as const;

export const doorCodeAnswer = {
  code: "EGGS",
  claimState: "community-reported" as const,
  summary:
    "Independent puzzle-code write-ups list EGGS as the short keypad answer players try for the in-world lab/door prompt in The Giant's Breakfast. It is not a verified Zidiam promo/gift code.",
  steps: [
    "Stay inside the Roblox experience—do not type the answer into external “redeem” websites.",
    "Find the lab/door keypad, terminal, chalkboard, or task field near the clue (YouTube playthroughs title this as lab location + door code).",
    "Enter EGGS exactly; if the field is picky, try the same letters with no spaces.",
    "Watch for a door opening, quest checkmark, or item spawn—not a Discord-style reward toast.",
    "If nothing happens, the prompt may be cosmetic, patched, or referring to a different interactable. Re-check after updates.",
  ],
  notPromo:
    "EGGS is documented here as a community puzzle candidate for an in-world keypad. It is not listed as an official gift string on this site’s Codes page unless Zidiam publishes it there separately.",
  sourceNotes: [
    "Independent fan puzzle tracker (thegiantsbreakfast.wiki puzzle-codes page, Aug 2026): community-tracked keypad answer EGGS, labeled not a verified promo string.",
    "Independent JP codes tracker (roburo.jp experience page): active promo codes listed as 0 as of this check.",
    "Official Roblox experience description: cooking/stacking loop and Celestial rarity; no gift-code table published there.",
  ],
};

export const faqs = [
  {
    question: "What is the door code in The Giant's Breakfast?",
    answer:
      "Community sources commonly try EGGS on the in-world lab/door keypad. That is separate from promo gift codes in the Codes UI. Full steps live on the door-code page.",
  },
  {
    question: "What is the giants breakfast roblox door code?",
    answer:
      "Same answer: enter EGGS on the in-world lab or door keypad—not in an external redeem site and not as a Discord gift string unless Zidiam also publishes it as a promo code.",
  },
  {
    question: "How do you play The Giant's Breakfast?",
    answer:
      "Pull the lever to buy food, cook on the griddle or toaster, stack the tower for money per second, and climb toward rarer food including Celestial.",
  },
  {
    question: "Are there promo codes?",
    answer:
      "No official active promo codes were verified against the official Roblox listing and independent code trackers reviewed for this guide. We do not invent a code list.",
  },
  {
    question: "Does EGGS work as a promo or Discord code?",
    answer:
      "Treat EGGS as an in-world puzzle candidate. Independent trackers and this wiki keep it off the promo table unless Zidiam publishes it as a gift string separately.",
  },
  {
    question: "Where do I enter the door / lab code?",
    answer:
      "On the in-world keypad, terminal, chalkboard, or task field near the clue—inside the Roblox experience. Do not paste it into third-party redeem websites.",
  },
  {
    question: "What is the rarest food tier?",
    answer:
      "Celestial is the highest rarity named in the official Roblox description. The full ordered ladder and drop rates are not published there.",
  },
] as const;

export const doorCodeFaqs = [
  {
    question: "What is the giants breakfast roblox door code?",
    answer:
      "Community puzzle trackers list EGGS for the in-world lab/door keypad. Enter it in-game on the pad—not as a gift code unless Zidiam publishes it that way.",
  },
  {
    question: "Is EGGS an official Zidiam gift code?",
    answer:
      "No verified Zidiam promo listing for EGGS was found in the sources reviewed. It is tracked here as a community-reported keypad answer.",
  },
  {
    question: "Door code vs promo codes—what is the difference?",
    answer:
      "Door/lab codes go on in-world pads and open puzzles. Promo codes go in a Codes/Gifts UI when the creator publishes one. See the codes status page for the empty promo table.",
  },
  {
    question: "What if EGGS does nothing?",
    answer:
      "The prompt may be cosmetic, patched, or tied to a different interactable. Soft-rejoin a fresh server after a live update and re-check the pad before assuming the answer changed.",
  },
] as const;

export const codesFaqs = [
  {
    question: "Are there any working The Giant's Breakfast codes right now?",
    answer:
      "No verified active promo gift codes were found on the official Roblox listing or the independent JP codes tracker (0 active) during this check.",
  },
  {
    question: "I searched for codes—do you mean the door code?",
    answer:
      "Often yes. The lab/door keypad answer is EGGS and lives on the door-code page. Promo gifts are a different system.",
  },
  {
    question: "Where should I redeem a real gift code if one drops?",
    answer:
      "Only in the in-experience Codes/Gifts UI after Zidiam publishes a string on official channels. Never on password or Robux phishing sites.",
  },
] as const;

export const octoberUpdateNotes = [
  {
    date: "2026-10-17",
    title: "Editorial recheck — door code & promo status",
    detail:
      "Reconfirmed community-reported keypad answer EGGS against an independent puzzle tracker; promo gift count still 0 on an independent codes tracker; official description still has no gift table.",
    playerAction: "Use /door-code/ for the keypad; ignore invented promo lists.",
  },
  {
    date: "2026-10-14",
    title: "Platform update activity observed",
    detail:
      "Independent live-stats tracking (RoStats) shows update-day activity on Oct 14 among frequent mid-October touches. Exact balance bullets were not published in the materials reviewed, so none are invented here.",
    playerAction: "Soft-rejoin a fresh server and re-test keypad + cooking stations after joining.",
  },
  {
    date: "2026-10-10",
    title: "Prior editorial refresh (Oct 10 follow-up)",
    detail:
      "Homepage and door-code titles/meta were refreshed for door-code demand; this Oct 17 pass merges that follow-up into source, expands FAQ/internal links, and adds this updates log.",
    playerAction: "Prefer /door-code/ for “door code” searches instead of relying on the homepage alone.",
  },
  {
    date: "2026-10-08",
    title: "Thumbnail / look change noted",
    detail:
      "RoStats recorded a thumbnail look change on Oct 8, 2026. That is a presentation change, not a verified mechanics patch note.",
    playerAction: "No guide change required beyond awareness.",
  },
] as const;

export const sources = [
  {
    label: "Official Roblox experience",
    url: officialGameUrl,
    note: "Title, description, creator, universe metadata, and how-to-play loop wording.",
  },
  {
    label: "Official experience description (how-to-play loop)",
    url: officialGameUrl,
    note: "Lever buy → griddle/toaster cook → stack earnings → rarer food / Celestial endpoint; offline earnings named. No gift-code table.",
  },
  {
    label: "Independent puzzle-code tracker (door/lab keypad)",
    url: "https://thegiantsbreakfast.wiki/codes/puzzle-codes/",
    note: "Aug 2026 puzzle vs promo separation; community-tracked keypad candidate EGGS; explicitly not a verified Zidiam gift string.",
  },
  {
    label: "Independent JP codes tracker (promo count)",
    url: "https://www.roburo.jp/games/100235161195378/the-giants-breakfast/",
    note: "Lists active promo codes as 0 for this experience during the Oct 2026 recheck window.",
  },
  {
    label: "Independent live-stats / update cadence (RoStats)",
    url: "https://rostats.io/games/10514182487",
    note: "Universe 10514182487 update-day observations through mid-October 2026 and Oct 8 thumbnail look change; used for update awareness, not invented patch bullets.",
  },
] as const;
