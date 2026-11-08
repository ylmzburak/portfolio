import type { Image } from "./common";
import type { Localized } from "./localized";

export type Profile = {
  name: string;
  title: Localized;
  tagline: Localized;
  about: Localized<string[]>;
  location: Localized;
  email: string;
  links: {
    linkedin: string;
    github: string;
  };
  photo: Image;
};
