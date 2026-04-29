#!/bin/bash
set -e
rm -rf dist node_modules/dist
npm run build
cd dist
git init
git add -A
git commit -m "deploy overseas-sites" --no-edit
git push -f "https://github.com/yangqingtaobeijing/overseas-sites.git" main:gh-pages
cd ..
echo "✅ Deployed to https://yangqingtaobeijing.github.io/overseas-sites/"
