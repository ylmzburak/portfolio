import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";
import type { Locale } from "@/i18n/config";
import { publicFileExists } from "@/lib/public-file";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  lang: Locale;
};

export function ProjectCard({ project, lang }: ProjectCardProps) {
  const [cover] = project.images;
  const showCover = publicFileExists(cover.src);

  return (
    <Card className="relative flex h-full flex-col overflow-hidden">
      <div className="aspect-video bg-surface">
        {showCover && (
          <Image
            src={cover.src}
            width={cover.width}
            height={cover.height}
            alt={cover.alt[lang]}
            className="size-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold">
            <a
              href={`/${lang}/projects/${project.slug}/`}
              className="after:absolute after:inset-0"
            >
              {project.title[lang]}
            </a>
          </h3>
          <span className="text-sm text-muted">{project.year}</span>
        </div>
        <p className="text-muted">{project.summary[lang]}</p>
        <div className="mt-auto pt-2">
          <TagList items={project.tech} />
        </div>
      </div>
    </Card>
  );
}
