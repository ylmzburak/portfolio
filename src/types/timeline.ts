import type { YearMonth } from "./common";
import type { Localized } from "./localized";

/** One entry in a timeline: a job or a degree. */
export type TimelineEntry = {
  id: string;
  title: Localized;
  organization: string;
  location?: Localized;
  start: YearMonth;
  /** Omit for an ongoing entry. */
  end?: YearMonth;
  highlights: Localized<string[]>;
};

export type Experience = TimelineEntry;
export type Education = TimelineEntry;
