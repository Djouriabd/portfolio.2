export type ContactLink = {
  kind: "email" | "phone" | "instagram" | "behance";
  label: string;
  href?: string;
};

export const profile = {
  name: "Djouri",
  brand: "RUBY.AI",
  /**
   * Your photo for the "About me" frame.
   * Drop an image in /public (e.g. /public/me.jpg) and set this to "/me.jpg".
   * Leave it null to show the placeholder.
   */
  photo: "/public/me.jpg",
  email: "rubyaichan@gmail.com",
  timeZone: "Africa/Algiers",
  location: "Algeria",
  intro: [
    "Name's Djouairia, or you can call me Djouri | Ruby, a UI/UX and graphic designer who aims to make any idea a beautiful design.",
    "I craft experiences that live at the intersection of form and function. Whether it's a brand identity or a web interface, I bring the same obsession for detail and intention to every pixel and frame.",
  ],
};

export const contacts: ContactLink[] = [
  { kind: "email", label: "rubyaichan@gmail.com", href: "mailto:rubyaichan@gmail.com" },
  { kind: "phone", label: "+213 553497271", href: "tel:+213553497271" },
  { kind: "instagram", label: "@_.iluvuei._", href: "https://instagram.com/_.iluvuei._" },
  // TODO: add your Behance handle + link
  { kind: "behance", label: "@?", href: undefined },
];

export const navLinks = [
  { href: "#about", label: "About me" },
  { href: "#journey", label: "My journey" },
  { href: "#skills", label: "Skills" },
  { href: "#works", label: "My works" },
  { href: "#contact", label: "Get in touch" },
];
