export type Work = {
  title: string;
  category: string;
  /**
   * Cover image shown when the folder opens on hover.
   * Put the file in /public/works/ and reference it like "/works/elevate.jpg".
   * Leave it empty to show a placeholder.
   */
  cover?: string;
  /** Link to the project (Behance, live site, case study...). Optional. */
  href?: string;
  /** Color the folder face turns into on hover. Optional. */
  accent?: string;
};

// Add, remove or reorder your projects here — the carousel adapts automatically.
export const works: Work[] = [
  { title: "Elevate", category: "Social media", cover: "/works/elevatepost.jpg", href: "https://www.figma.com/design/3QrLX4LHOHcle18ZEOfMmh/elevate-2?node-id=0-1&t=eHdZFWPgBANq4qh0-1", accent: "#06004a" },
  { title: "Elevate UI/UX", category: "UI / UX", cover: "/works/elevateuiux.png", href: "https://www.figma.com/design/KmAczmD5LTxQy76DW9on2a/elevate-ui-ux?node-id=0-1&t=zedD7cvyuTv4dXm4-1" },
  { title: "Ignite participant guide", category: "Graphic design", cover: "/works/ignite.png", href: "https://www.figma.com/design/7LvfB3NMUg454hpRtqVtkE/ignite-participant-guide?node-id=0-1&t=2XbBeFTilZIAKmOm-1" },
  { title: "Ramadan Bootcamp", category: "Social media", cover: "/works/ramadan.png", href: "https://www.figma.com/design/j6AZqAeRhqYSdNe3kPmZeH/workshops?node-id=0-1&t=3UoWwjLRUZxzabGC-1" },
  { title: "Istacherni", category: "UI / UX", cover: "/works/istacherni.png", href: "https://www.figma.com/design/CVVdM0ZqV2vKSYoZnElcrd/ISTECHERNI?node-id=0-1&t=GjeCYhVLJ8op8jdW-1" },
  { title: "Tabkha", category: "UI/UX", cover: "/works/tabkha.png", href: "https://www.figma.com/design/VYD54guh4iI2XYyGu70yfH/Tabkha?node-id=2-3&t=DKJLLvA2Ut4n19qA-1" },
  { title: "NCS Hack Participant Guide", category: "Graphic design", cover: "/works/ncshack.png", href: "https://www.figma.com/design/UtQPPIniQBlGsnWOD3GK2l/participant-guide?node-id=0-1&t=7RHBsuSI9cpa0DB4-1" },
  { title: "Owari", category: "Visual identity", cover: "/works/owari.png", href: "https://www.figma.com/design/ThVz6fCS1MAZkS0eLvkwLb/owari?node-id=138-2&t=7QJpTUA6QYg7NbEX-1" },
  { title: "jammy jam", category: "Branding", cover: "/works/jammyjam.png", href: "https://www.figma.com/design/sYxHFfD3BZ38n8frZILpoq/khdmati?node-id=5-149623" },
];
