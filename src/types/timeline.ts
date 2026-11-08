import type { DateValue } from "./common";
import type { Localized } from "./localized";

/** One entry in a timeline: a job or a degree. */
export type TimelineEntry = {
  id: string;
  title: Localized;
  organization: string;
  location?: Localized;
  start: DateValue;
  /** Omit for an ongoing entry. */
  end?: DateValue;
  highlights?: Localized<string[]>;
  /** Technologies used, shown as tags. */
  tech?: string[];
};
