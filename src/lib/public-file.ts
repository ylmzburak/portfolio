import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Checks at build time whether a file exists in /public.
 * Server-only: uses the file system.
 */
export function publicFileExists(src: string): boolean {
  return existsSync(join(process.cwd(), "public", src));
}
