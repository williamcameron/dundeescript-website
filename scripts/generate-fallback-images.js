#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const publicDir = path.join(repoRoot, 'public', 'images');
const filesToCheck = [
  'organisers.md',
  'sponsors.md'
].map(f => path.join(repoRoot, f));

const refRegex = /srcset=\"([^\"]+\.(?:avif|webp))\"|src=\"([^\"]+\.(?:avif|webp))\"/g;

function ensureFileExists(target){
  const absTarget = path.join(repoRoot, target);
  if (fs.existsSync(absTarget)) return true;
  // Try the public/images location if path starts with images/
  const publicCandidate = path.join(repoRoot, 'public', target.replace(/^images\//,''));
  if (fs.existsSync(publicCandidate)){
    try{ fs.copyFileSync(publicCandidate, absTarget); console.log('Copied', publicCandidate, 'to', absTarget); return true }catch(e){ console.error('Failed copy', e); }
  }
  // try to find same basename in public/images
  const dirInPublic = path.dirname(publicCandidate);
  const base = path.basename(target, path.extname(target));
  const candidates = ['.jpg', '.jpeg', '.png'];
  for (const ext of candidates){
    const src = path.join(dirInPublic, base + ext);
    if (fs.existsSync(src)){
      try{ fs.copyFileSync(src, absTarget); console.log('Copied', src, 'to', absTarget); return true }catch(e){ console.error('Failed copy', e); return false }
    }
  }
  return false;
}

let created = [];
for (const file of filesToCheck){
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file,'utf8');
  let m;
  while ((m = refRegex.exec(content)) !== null){
    const ref = m[1] || m[2];
    if (!ref) continue;
    const targetPath = ref.startsWith('/') ? ref.slice(1) : ref;
    if (!fs.existsSync(path.join(repoRoot, targetPath))){
      const ok = ensureFileExists(targetPath);
      if (ok) created.push(targetPath);
      else console.warn('Could not create fallback for', targetPath);
    }
  }
}

if (created.length===0) console.log('No missing avif/webp references found or no fallbacks created.');
else console.log('Created fallbacks for:', created.join(', '));
