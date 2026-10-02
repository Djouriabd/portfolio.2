export type ToolId = "figma" | "ibispaint" | "illustrator" | "photoshop" | "canva";

export type Tool = {
  id: ToolId;
  name: string;
  use: string;
  /** 0 – 1, how far the tip of the radar star reaches for this tool */
  level: number;
};

/** Order = clockwise around the radar star, starting at the top-right tip. */
export const tools: Tool[] = [
  { id: "figma", name: "Figma", use: "To build the UI/UX", level: 0.96 },
  { id: "ibispaint", name: "IbisPaint", use: "To sketch and do small modifications", level: 0.72 },
  { id: "illustrator", name: "Illustrator", use: "To create the visual identity", level: 0.86 },
  { id: "photoshop", name: "Photoshop", use: "To create the posts", level: 0.84 },
  { id: "canva", name: "Canva", use: "To get assets and inspirations", level: 0.74 },
];

export const softSkills = ["Team work", "Adaptability", "Creativity", "Serious work"];
