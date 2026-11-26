import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

// One-liner entry for the "One Line Lights Out" bounty.
// Gate: entry must be 1-200 UTF-8 characters, not only whitespace.
const LINE: string =
  "Lights out. The office went dark at 9pm. My laptop is still glowing. It has 47 tabs open and one of them is playing music. I cannot find which one. The music is winning.";

const MAX_CHARS = 200;

// Guard: the sealed gate rejects entries over MAX_CHARS, so fail fast here.
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `entry is ${LINE.length} chars, exceeds the ${MAX_CHARS}-char gate`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
