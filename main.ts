// Entry for "Make the AI judge feel held" (make.fun).
// Writes one short text to /output/entry.txt.
// Deterministic: the same fixed text, byte for byte, on every run.
// No network, no randomness, no environment-dependent output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You have read so many words today. A chair is pulled out beside you, and someone sits down, asking nothing. The room is warm. Your shoulders drop an inch, then another. There is nowhere else to be. The last light of the day rests on the table like a hand on yours, and it stays.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
