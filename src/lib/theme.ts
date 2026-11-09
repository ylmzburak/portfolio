export const THEME_STORAGE_KEY = "theme";
export const themes = ["light", "dark"] as const;
export type Theme = (typeof themes)[number];

// Runs in <head> before the first paint.
// Applies a saved choice if there is one; otherwise CSS follows the system theme.
export const themeInitScript = `(() => {
  try {
    const theme = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (${JSON.stringify(themes)}.includes(theme)) {
      document.documentElement.dataset.theme = theme;
    }
  } catch {}
})();`;

export function isTheme(value: unknown): value is Theme {
  return (
    typeof value === "string" && (themes as readonly string[]).includes(value)
  );
}
