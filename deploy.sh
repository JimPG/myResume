#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add -addgit commit -m 'deploy'
git push -f git@github.com:JimPG/myResume.git