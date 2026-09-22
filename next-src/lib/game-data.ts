export const siteDomain = "https://the-giants-breakfast.wiki";
export const officialGameUrl =
  "https://www.roblox.com/games/100235161195378/The-Giants-Breakfast";
export const officialUniverseId = "10514182487";
export const creatorName = "Zidiam Studios";
export const checkedDateLabel = "September 22, 2026";

export const navItems = [
  ["How to play", "/how-to-play/"],
  ["Door code", "/door-code/"],
  ["Food rarities", "/food-rarities/"],
  ["Codes", "/codes/"],
  ["Wiki", "/wiki/"],
] as const;

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
    "Community write-ups and puzzle-code trackers list EGGS as the short keypad answer players try for the in-world lab/door prompt in The Giant's Breakfast. It is not a verified Zidiam promo/gift code.",
  steps: [
    "Stay inside the Roblox experience—do not type the answer into external “redeem” websites.",
    "Find the lab/door keypad, terminal, chalkboard, or task field near the clue (YouTube playthroughs title this as lab location + door code).",
    "Enter EGGS exactly; if the field is picky, try the same letters with no spaces.",
    "Watch for a door opening, quest checkmark, or item spawn—not a Discord-style reward toast.",
    "If nothing happens, the prompt may be cosmetic, patched, or referring to a different interactable. Re-check after updates.",
  ],
  notPromo:
    "EGGS is documented here as a community puzzle candidate for an in-world keypad. It is not listed as an official gift string on this site’s Codes page unless Zidiam publishes it there separately.",
};

export const faqs = [
  {
    question: "What is the door code in The Giant's Breakfast?",
    answer:
      "Community sources commonly try EGGS on the in-world lab/door keypad. That is separate from promo gift codes in the Codes UI.",
  },
  {
    question: "How do you play The Giant's Breakfast?",
    answer:
      "Pull the lever to buy food, cook on the griddle or toaster, stack the tower for money per second, and climb toward rarer food including Celestial.",
  },
  {
    question: "Are there promo codes?",
    answer:
      "No official active promo codes were verified against the official Roblox listing and creator materials reviewed for this guide. We do not invent a code list.",
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
    note: "Lever buy → griddle/toaster cook → stack earnings → rarer food / Celestial endpoint; offline earnings named.",
  },
] as const;
