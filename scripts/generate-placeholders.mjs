// Generates neutral SVG placeholders for the demo catalog.
// These are development-only illustrations, not product photography.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

const categories = [
  ['home-living', 'Home & Living', '#B2B2B2'],
  ['tech-accessories', 'Tech Accessories', '#7F7F7F'],
  ['kitchen-dining', 'Kitchen & Dining', '#8C8C8C'],
  ['outdoor-recreation', 'Outdoor & Recreation', '#6F6F6F'],
  ['travel-gear', 'Travel Gear', '#999999'],
  ['wellness', 'Wellness', '#A6A6A6'],
];

const products = [
  ['linen-throw-blanket-1', 'Linen Throw Blanket', '#E7E3DB'],
  ['linen-throw-blanket-2', 'Folded Linen Throw', '#DDD8CF'],
  ['ceramic-table-lamp-1', 'Ceramic Table Lamp', '#EDEDEA'],
  ['ceramic-table-lamp-2', 'Table Lamp Detail', '#E2E2DF'],
  ['magnetic-cable-organizer-1', 'Cable Organizer', '#E5E7E9'],
  ['foldable-phone-stand-1', 'Phone Stand', '#E4E4E4'],
  ['stainless-steel-bottle-opener-1', 'Bottle Opener', '#DFE2E4'],
  ['silicone-utensil-rest-1', 'Utensil Rest', '#E6E8E4'],
  ['compact-camping-lantern-1', 'Camping Lantern', '#E4E6DE'],
  ['packable-daypack-1', 'Packable Daypack', '#E1E3E6'],
  ['packing-cube-set-1', 'Packing Cubes', '#E8E8E5'],
  ['neck-travel-pillow-1', 'Travel Pillow', '#E5E5E2'],
  ['resistance-band-set-1', 'Resistance Bands', '#E6E4E6'],
  ['cork-yoga-mat-1', 'Cork Yoga Mat', '#E8E1D4'],
];

const escapeXml = (value) => value.replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c]);

function svg(label, tone, size, subtitle) {
  const width = size[0];
  const height = size[1];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(label)} — development placeholder illustration">
  <rect width="${width}" height="${height}" fill="${tone}"/>
  <rect x="8" y="8" width="${width - 16}" height="${height - 16}" fill="none" stroke="#000000" stroke-opacity="0.12"/>
  <circle cx="${width / 2}" cy="${height / 2 - 18}" r="${Math.min(width, height) / 6}" fill="none" stroke="#000000" stroke-opacity="0.45" stroke-width="2"/>
  <path d="M${width / 2 - 22} ${height / 2 - 18}h44M${width / 2} ${height / 2 - 40}v44" stroke="#000000" stroke-opacity="0.25" stroke-width="1"/>
  <text x="${width / 2}" y="${height - 34}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#000000">${escapeXml(label)}</text>
  <text x="${width / 2}" y="${height - 16}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" fill="#666666">${escapeXml(subtitle)}</text>
</svg>
`;
}

for (const [slug, label, tone] of categories) {
  const file = join(root, 'public/images/categories', `${slug}.svg`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, svg(label, '#F1F3F5', [640, 400], 'Demo category placeholder'), 'utf8');
}

for (const [slug, label, tone] of products) {
  const file = join(root, 'public/images/products', `${slug}.svg`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, svg(label, tone, [900, 900], 'Demo product placeholder — not a real photo'), 'utf8');
}

console.log(`Generated ${categories.length} category and ${products.length} product placeholders.`);
