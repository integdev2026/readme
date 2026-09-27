// Wix headless hosting does not resolve /page to /page/index.html, so also emit /page.html.
import { readdir, copyFile, stat } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve(process.argv[2] ?? 'dist');
let count = 0;

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const sub = path.join(dir, entry.name);
    const index = path.join(sub, 'index.html');
    try {
      await stat(index);
      await copyFile(index, `${sub}.html`);
      count++;
    } catch {}
    await walk(sub);
  }
}

await walk(dist);
console.log(`[flat-html] wrote ${count} flat .html copies`);
