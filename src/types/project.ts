import type { Image } from "./common";
import type { Localized } from "./localized";

export type ProjectVideo =
  | { kind: "file"; src: string; poster: string }
  | { kind: "youtube"; id: string };

export type Project = {
  slug: string;
  title: Localized;
  summary: Localized;
  description: Localized;
  problem: Localized;
  solution: Localized;
  role: Localized;
  /** Technical details as bullet points, shown on the detail page. */
  highlights: Localized<string[]>;
  tech: string[];
  images: Image[];
  video?: ProjectVideo;
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
  year: number;
};
