#!/usr/bin/env node
// Convert images to webp + avif variants using sharp
// Usage: node scripts/convert-images.js public/images

const fs = require('fs');
const path = require('path');

const dir = process.argv[2] || path.join('public','images');
const exts = ['.jpg', '.jpeg', '.png'];

if (!fs.existsSync(dir)){
  console.error('Directory does not exist:', dir);
  process.exit(1);
}

const sharp = (() => {
  try { return require('sharp'); } catch (e) {
    console.error('sharp is not installed. Install with: npm install --save-dev sharp');
    process.exit(1);
  }
})();

function walk(dir){
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries){
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else {
      const ext = path.extname(e.name).toLowerCase();
      if (exts.includes(ext)) processImage(full);
    }
  }
}

async function processImage(file){
  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));
  const outWebp = path.join(dir, base + '.webp');
  const outAvif = path.join(dir, base + '.avif');
  try {
    await sharp(file).toFile(outWebp);
    await sharp(file).toFile(outAvif);
    console.log('Generated:', outWebp, outAvif);
  } catch (err){
    console.error('Error processing', file, err.message);
  }
}

walk(dir);
