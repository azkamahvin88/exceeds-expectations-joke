// Make the AI Judge Laugh — u-rama-melon-make-the-ai-judge-laugh-302d0825
// Writes one office-life joke (one line, 95 characters) to /output/entry.txt.
// Deterministic: a constant string, no network, no model call, no randomness,
// no reads of files outside this program.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My performance review said 'exceeds expectations' because nobody here expects anything anymore.";

// Self-check: the gate requires UTF-8 text of 1-200 characters, one line.
if (JOKE.length !== 95 || JOKE.includes("\n")) {
  throw new Error(`joke must be exactly 95 characters on one line, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
