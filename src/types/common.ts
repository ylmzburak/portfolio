import type { Localized } from "./localized";

type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

/** A date with month precision, e.g. "2024-03". */
export type YearMonth = `${number}-${Month}`;

/** An image with fixed dimensions (prevents layout shift) and localized alt text. */
export type Image = {
  src: string;
  width: number;
  height: number;
  alt: Localized;
};
