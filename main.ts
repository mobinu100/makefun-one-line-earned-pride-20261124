import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One quiet, earned moment: a child who has already failed twice
// carries the soup pot herself and does not spill a drop.
const ENTRY =
  "After dropping the soup pot twice, eight-year-old Mara carried it across the icy yard with both hands and set it down without spilling a drop.";

const out = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), ENTRY, "utf8");
