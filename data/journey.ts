/** A title is a list of parts; `{ accent }` parts are highlighted in purple. */
export type TitlePart = string | { accent: string };

export type JourneyEntry = {
  title: TitlePart[];
  text: string;
};

export type JourneyYear = {
  year: string;
  entries: JourneyEntry[];
};

export const journey: JourneyYear[] = [
  {
    year: "2023-2024",
    entries: [
      {
        title: ["First year as ", { accent: "Computer Science student" }],
        text: "Learning many things like how to build a website using HTML / CSS / JavaScript, how machines work and think, algorithms and how to build a good solution to any problem, workshops to learn how to build a small system that can turn on a lamp, etc...",
      },
    ],
  },
  {
    year: "2024-2025",
    entries: [
      {
        title: ["Second year as ", { accent: "Computer Science student" }],
        text: "Another year, another thing to learn: digging into more details on how the machine works and its architecture, how machines communicate with each other, how to manage and save data, with many more modules throughout the 2 semesters.",
      },
      {
        title: ["Join the ", { accent: "NCS club" }],
        text: "Trying a new path beside studying and learning how to create good UI/UX, posts, visual identities and many other types of design that help the club's growth, plus learning how to manage and organize an event from zero.",
      },
    ],
  },
  {
    year: "2025-2026",
    entries: [
      {
        title: ["Third year as ", { accent: "Computer Science student" }],
        text: "Reaching the first ending as a licence Computer Science student with an AI specialty, graduating after many challenges like choosing the theme, reaching good results and a reasonable architecture and methodologies.",
      },
      {
        title: ["Get ", { accent: "design" }, " department's chief on ", { accent: "NCS club" }],
        text: "Taking care of the different challenges the design department had, making sure of the high quality and excellent work before posting it or giving it to the dev department to finish the rest of the work.",
      },
    ],
  },
];
