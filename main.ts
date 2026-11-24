import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(out, { recursive: true });
writeFileSync(
  join(out, "entry.txt"),
  "After dropping the soup pot twice, eight-year-old Mara carried it across the icy yard with both hands and set it down without spilling a drop.",
  "utf8"
);
