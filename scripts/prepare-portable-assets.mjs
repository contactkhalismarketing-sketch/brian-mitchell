import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'client', 'src');
const outputRoot = path.join(root, 'client', 'public', 'assets', 'practice');
const publicOrigin = 'https://brianmitchell.khalismarketing.com.au';

const assets = [
  'bioclear-certified-dr-brian-mitchell_489e77d8.png',
  'blog-implant_6ad9e8fd.png',
  'blog-soft-tissue_118170c6.png',
  'brian-cosmetic-youtube-thumb_7a5e79b6.jpg',
  'brian-mitchell-full-composition-practice-tour_5757208e.mp4',
  'brian-mitchell-live-logo_02f81e9c.png',
  'brian-mitchell-live-office_d91a92cb.jpg',
  'brian-practice-tour-equipment-poster_106066d8.jpg',
  'brian_c0d844bb.jpg',
  'camille_06a39838.jpg',
  'cosmetic-hero-poster_7f4095a0.jpg',
  'cosmetics_48be418b.png',
  'crystal_cf908663.jpg',
  'diana_4c83a6c1.jpg',
  'dr-diana-zhen-live_c8e7cb59.jpg',
  'gisselle_06071191.jpg',
  'jackie_99712114.jpg',
  'kiana_d5850992.jpg',
  'monique_166d66e2.jpg',
  'nita_74b0856c.jpg',
  'ortho_9f9f5437.png',
  'roxanne_50319ff2.jpg',
  'team-practice_c32289f8.jpg',
  'tenzi_625460fa.jpg',
  'yuri_059e611a.jpg',
];

async function walk(directory) {
  const entries = await readdir(directory);
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry);
    if ((await stat(target)).isDirectory()) files.push(...await walk(target));
    else if (/\.(ts|tsx|css|html)$/i.test(entry)) files.push(target);
  }
  return files;
}

await mkdir(outputRoot, { recursive: true });

for (const asset of assets) {
  const source = `${publicOrigin}/manus-storage/${asset}`;
  const response = await fetch(source);
  if (!response.ok) throw new Error(`Unable to download ${source}: ${response.status}`);
  await writeFile(path.join(outputRoot, asset), Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${asset}`);
}

for (const file of await walk(sourceRoot)) {
  const before = await readFile(file, 'utf8');
  const after = before.replace(/\/manus-storage\/([A-Za-z0-9._-]+)/g, '/assets/practice/$1');
  if (before !== after) await writeFile(file, after);
}

console.log('Rewrote managed asset paths to portable local asset paths.');
