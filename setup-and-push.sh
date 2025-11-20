#!/bin/bash

# Automated script to push portfolio to GitHub repository "portfoliov2"
# This script will guide you through the process

set -e

echo "🚀 Portfolio Deployment Automation Script"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the portfolio directory."
    exit 1
fi

echo -e "${BLUE}Step 1: Checking Git status...${NC}"
git status --short

echo ""
echo -e "${YELLOW}⚠️  IMPORTANT: Before continuing, you need to create the repository on GitHub:${NC}"
echo ""
echo "1. Go to: https://github.com/new"
echo "2. Repository name: portfoliov2"
echo "3. Description: Professional portfolio website v2"
echo "4. Choose: Public"
echo "5. DO NOT initialize with README, .gitignore, or license"
echo "6. Click 'Create repository'"
echo ""
read -p "Press Enter after you've created the repository on GitHub..."

echo ""
echo -e "${BLUE}Step 2: Setting up Git remote...${NC}"

# Remove existing remote if any
git remote remove origin 2>/dev/null || true

# Add new remote
GITHUB_USER="telmon95"
REPO_NAME="portfoliov2"
REMOTE_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo "Adding remote: ${REMOTE_URL}"
git remote add origin "${REMOTE_URL}"

echo ""
echo -e "${BLUE}Step 3: Pushing code to GitHub...${NC}"
echo "Branch: main"

# Ensure we're on main branch
git checkout main 2>/dev/null || git branch -M main

# Push to GitHub
echo "Pushing to origin/main..."
if git push -u origin main; then
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
else
    echo -e "${YELLOW}⚠️  Push failed. This might be because:${NC}"
    echo "   - The repository doesn't exist yet"
    echo "   - Authentication is required"
    echo ""
    echo "Please:"
    echo "1. Make sure the repository 'portfoliov2' exists on GitHub"
    echo "2. Authenticate with GitHub (you may need to use a Personal Access Token)"
    echo "3. Run this script again"
    exit 1
fi

echo ""
echo -e "${BLUE}Step 4: Building project for deployment...${NC}"
npm run build

echo ""
echo -e "${BLUE}Step 5: Deploying to GitHub Pages...${NC}"
if npm run deploy; then
    echo -e "${GREEN}✅ Successfully deployed to GitHub Pages!${NC}"
    echo ""
    echo -e "${GREEN}🎉 Your portfolio is now live at:${NC}"
    echo -e "${GREEN}   https://${GITHUB_USER}.github.io/${REPO_NAME}${NC}"
    echo ""
    echo "Note: It may take a few minutes for the site to be available."
    echo "You can check the deployment status in:"
    echo "   GitHub → Settings → Pages"
else
    echo -e "${YELLOW}⚠️  Deployment failed. You can deploy manually later with:${NC}"
    echo "   npm run deploy"
fi

echo ""
echo -e "${GREEN}✨ Setup complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Visit your repository: https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo "2. Go to Settings → Pages to verify deployment"
echo "3. Your site will be live at: https://${GITHUB_USER}.github.io/${REPO_NAME}"

