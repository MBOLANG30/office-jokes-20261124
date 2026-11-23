import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original office joke: the mute button, reframed twice —
// HR's corporate spin, then the therapist's punchline at the very end.
const JOKE =
  "I've spent three years on mute in meetings — HR calls it active listening, my therapist calls it progress.";

// MAKEFUN_OUTPUT_DIR names the output directory; the entry is entry.txt inside it.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.txt");

// The gate: 1–199 characters, not only whitespace, single line.
if (
  JOKE.length < 1 ||
  JOKE.length > 199 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n")
) {
  console.error(
    `Invalid joke: must be a single line of 1–199 characters (got ${JOKE.length}).`,
  );
  process.exit(1);
}

// Only write the one file; never delete the output folder or its contents.
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${outputPath}`);
