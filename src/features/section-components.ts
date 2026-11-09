import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";
import type { SectionId } from "@/lib/sections";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
export type SectionContentProps = {
  lang: Locale;
};

// Temporary: renders nothing until the section is built.
function ComingSoon() {
  return null;
}

// Every section id must have a component; a missing one is a type error.
export const sectionComponents: Record<
  SectionId,
  ComponentType<SectionContentProps>
> = {
  about: About,
  projects: Projects,
  experience: ComingSoon,
  skills: ComingSoon,
  education: ComingSoon,
  languages: ComingSoon,
};
