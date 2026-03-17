#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const title = process.argv[2] || 'DundeeScript Meetup';
const out = process.argv[3] || path.join('public','images', 'og-generated.svg');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0" stop-color="#0ea5a0"/>
      <stop offset="1" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)" />
  <g fill="#fff" font-family="Inter, Arial, sans-serif">
    <text x="60" y="200" font-size="56" font-weight="700">${escapeXml(title)}</text>
    <text x="60" y="280" font-size="32">Monthly JavaScript & TypeScript talks in Dundee</text>
  </g>
</svg>`;

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'\"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, svg, 'utf8');
console.log('Wrote OG image to', out);
