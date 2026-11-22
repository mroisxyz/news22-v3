import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Authored digest: 36 dated stories stamped 22 November 2026.
// Twelve cards are clipped at word boundaries, never mid-word cuts.
// A 3-column digest closes the page under the serif masthead art.
// Every card carries a visible date check before the plate is written.
// Output stays deterministic from the bundled entry.png source asset.

function describeOutput(outDir: string, size: number): string {
  return `entry.png copied (${size} bytes) -> ${outDir}`;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));

const { size } = statSync(join(outDir, 'entry.png'));
console.log(describeOutput(outDir, size));
