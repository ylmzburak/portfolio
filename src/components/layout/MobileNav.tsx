"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import type { Locale } from "@/i18n/config";
import type { SectionId } from "@/lib/sections";

type NavItem = {
  id: SectionId;
  label: string;
};

type MobileNavProps = {
  lang: Locale;
  name: string;
  items: NavItem[];
  labels: {
    nav: string;
    open: string;
    close: string;
  };
};

export function MobileNav({ lang, name, items, labels }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background lg:hidden">
      <div className="flex h-16 items-center justify-between px-6">
        <a href={`/${lang}/`} className="font-bold">
          {name}
        </a>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={isOpen ? labels.close : labels.open}
          onClick={() => setIsOpen((open) => !open)}
          className="-mr-2 rounded-full p-2"
        >
          {isOpen ? (
            <CloseIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </button>
      </div>

      <nav
        id={panelId}
        aria-label={labels.nav}
        hidden={!isOpen}
        className="border-t border-border px-6 py-4"
      >
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`/${lang}/#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
