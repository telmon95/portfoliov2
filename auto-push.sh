#!/bin/bash
# Quick auto-push script for portfoliov2

cd /Users/telmonmaluleka/portfolio

echo "🚀 Auto-pushing to portfoliov2..."
echo ""

# Check if repo exists on GitHub (this will fail if it doesn't exist, which is expected)
git remote remove origin 2>/dev/null
git remote add origin https://github.com/telmon95/portfoliov2.git

echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "Building and deploying..."
npm run build
npm run deploy

echo ""
echo "✅ Done! Your site will be at: https://telmon95.github.io/portfoliov2"
