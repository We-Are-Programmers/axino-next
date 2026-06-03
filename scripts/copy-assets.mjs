import { cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "..");
const target = join(root, "public");

const copies = [
  ["images", "images"],
  ["fonts", "fonts"],
  ["css/bootstrap.min.css", "css/bootstrap.min.css"],
  ["css/style.css", "css/style.css"],
  ["css/style-2.css", "css/style-2.css"],
  ["css/style-3.css", "css/style-3.css"],
  ["css/style-4.css", "css/style-4.css"],
];

for (const [from, to] of copies) {
  const srcPath = join(source, from);
  const destPath = join(target, to);
  if (!existsSync(srcPath)) {
    console.warn(`Skip (missing): ${from}`);
    continue;
  }
  cpSync(srcPath, destPath, { recursive: true, force: true });
  console.log(`Copied ${from} -> public/${to}`);
}

console.log("Asset sync complete.");
