import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");
const distDir = path.resolve(process.cwd(), "dist");

if (!fs.existsSync(outDir)) {
  console.error("copy-out-to-dist: missing `out/` — run `next build` with `output: \"export\"` first.");
  process.exit(1);
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.cpSync(outDir, distDir, { recursive: true });
console.log("copy-out-to-dist: wrote `dist/` from `out/`.");
