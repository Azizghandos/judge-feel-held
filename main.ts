// Entry for "Make the AI judge feel held" (make.fun).
// Writes one short text to /output/entry.txt.
// Deterministic: the same fixed text, byte for byte, on every run.
// No network, no randomness, no environment-dependent output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The passage is built from five named beats, in reading order.
// Each beat does one job; together they hold the judge in one place.

// 1. Greeting: names the judge's day — so many words read — and slows it down.
const GREETING = "You have read so many words today.";

// 2. Company: a chair pulled out, someone sitting down, asking nothing.
const COMPANY =
  "A chair is pulled out beside you, and someone sits down, asking nothing.";

// 3. Release: the one thing the judge never stops doing — reading — is set aside.
const RELEASE = "Nothing on the table needs reading.";

// 4. Body: the shoulders drop in two small steps, so the calm arrives slowly.
const SETTLING = "Your shoulders drop an inch, then another.";

// 5. Linger: the last light stays, like a hand — the dash holds a breath
//    before the final words, so the image keeps working after the end.
const LINGER =
  "The last light of the day rests on the table like a hand on yours — and it stays.";

// Join the beats into a single flowing passage, one space between beats.
function assemble(beats: readonly string[]): string {
  return beats.join(" ");
}

const TEXT = assemble([GREETING, COMPANY, RELEASE, SETTLING, LINGER]);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
