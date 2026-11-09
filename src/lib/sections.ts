import type { Dictionary } from "@/i18n/dictionaries/de";

// Order of the sections on the page and in the navigation.
// Each id must be a key of the dictionary's `sections` group.
export const sectionIds = [
  "about",
  "projects",
  "experience",
  "skills",
  "education",
  "languages",
] as const satisfies readonly (keyof Dictionary["sections"])[];

export type SectionId = (typeof sectionIds)[number];
