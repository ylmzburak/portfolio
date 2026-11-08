import type { ReactNode } from "react";
import type { SectionId } from "@/lib/sections";

type SectionProps = {
  id: SectionId;
  title: string;
  children?: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 py-12 lg:scroll-mt-24"
    >
      <h2 id={headingId} className="text-2xl font-bold">
        {title}
      </h2>
      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}
