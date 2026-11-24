import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Insert a coin, press B7, and I'll dispense my heart — fair warning, it's the only snack in here that always gets stuck on you.";

function main(): void {
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  if (LINE.length > 200) {
    throw new Error("entry exceeds 200 characters: " + String(LINE.length));
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR
    ? process.env.MAKEFUN_OUTPUT_DIR
    : "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
