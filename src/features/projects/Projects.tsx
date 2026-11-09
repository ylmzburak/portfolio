import clsx from "clsx";
import { projects } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import { ProjectCard } from "./ProjectCard";

type ProjectsProps = {
  lang: Locale;
};

export function Projects({ lang }: ProjectsProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <li
          key={project.slug}
          className={clsx(project.featured && "sm:col-span-2")}
        >
          <ProjectCard project={project} lang={lang} />
        </li>
      ))}
    </ul>
  );
}
