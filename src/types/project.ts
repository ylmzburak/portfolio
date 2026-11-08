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
