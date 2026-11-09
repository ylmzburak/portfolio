import clsx from "clsx";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={clsx(
        "rounded-2xl border border-border bg-background transition",
        "hover:border-primary motion-safe:hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </article>
  );
}
