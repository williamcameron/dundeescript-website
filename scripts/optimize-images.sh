#!/usr/bin/env bash
# Helper to optimize images in public/images
# Requires imagemin CLI tools or sharp-based tooling installed locally.

set -euo pipefail

if command -v npx >/dev/null 2>&1; then
  echo "If you have imagemin-cli installed, run:"
  echo "  npx imagemin 'public/images/*.{jpg,png}' --out-dir=public/images/optimized --plugins=pngquant,mozjpeg"
  echo
  echo "Or install imagemin-cli and plugins:"
  echo "  npm install --save-dev imagemin-cli imagemin-mozjpeg imagemin-pngquant"
else
  echo "npx not found. Install Node.js/npm first."
fi

echo "Script finished. Review the optimized output in public/images/optimized"
