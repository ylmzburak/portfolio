"use client";

import { MoonIcon, SunIcon } from "@/components/ui/icons";
import { isTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

type ThemeToggleProps = {
  label: string;
};

function getCurrentTheme(): Theme {
  const saved = document.documentElement.dataset.theme;

  if (isTheme(saved)) {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle({ label }: ThemeToggleProps) {
  function handleClick() {
    const next: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage unavailable: the choice applies to this visit only.
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className="rounded-full p-2 text-muted transition-colors hover:text-foreground"
    >
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </button>
  );
}
