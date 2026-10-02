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
  { title: "Elevate", category: "Brand identity", cover: "", href: "", accent: "#06004a" },
  { title: "Project two", category: "UI / UX", cover: "", href: "" },
  { title: "Project three", category: "Social media", cover: "", href: "" },
  { title: "Project four", category: "Poster design", cover: "", href: "" },
  { title: "Project five", category: "Visual identity", cover: "", href: "" },
];
