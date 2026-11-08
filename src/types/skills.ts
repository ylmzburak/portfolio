import type { Localized } from "./localized";

export type SkillGroup = {
  id: string;
  label: Localized;
  items: string[];
};

export type SpokenLanguage = {
  name: Localized;
  /** CEFR level or "native", e.g. { de: "C1", en: "C1" } */
  level?: Localized;
};
