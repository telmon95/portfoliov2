# Push to GitHub - Step by Step Instructions

Your portfolio is ready to be pushed to GitHub! Follow these steps:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `portfolio` (or any name you prefer)
4. Description: "Professional portfolio website"
5. Choose **Public** (so GitHub Pages works for free)
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click **Create repository**

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/telmonmaluleka/portfolio

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

**Example** (if your username is `telmon95`):
```bash
git remote add origin https://github.com/telmon95/portfolio.git
git push -u origin main
```

## Step 3: Update Homepage in package.json

After pushing, update the homepage URL in `package.json` to match your repository:

```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

Then commit and push again:
```bash
git add package.json
git commit -m "Update homepage URL"
git push
```

## Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Push it to GitHub
- Make your site available at `https://YOUR_USERNAME.github.io/portfolio`

## Step 5: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select `gh-pages` branch
4. Click **Save**

Your site will be live in a few minutes!

---

## Alternative: Deploy to Netlify (Easier!)

If you prefer Netlify (which is easier and faster):

1. **Push to GitHub** (Steps 1-2 above)

2. **Go to [Netlify](https://www.netlify.com)** and sign up/login

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to GitHub** and select your `portfolio` repository

5. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Click **Deploy site**

6. **Done!** Your site will be live immediately with a Netlify URL

7. **Custom domain** (optional): You can add your custom domain in Netlify settings

---

## Troubleshooting

### Authentication Issues
If you get authentication errors when pushing:
- Use a Personal Access Token instead of password
- Or use SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/portfolio.git`

### Branch Name Issues
If you get branch name errors:
```bash
git branch -M main
git push -u origin main
```

### GitHub Pages Not Working
- Make sure repository is **Public**
- Wait 5-10 minutes after deploying
- Check Settings → Pages to ensure `gh-pages` branch is selected

---

## Quick Commands Summary

```bash
# Navigate to project
cd /Users/telmonmaluleka/portfolio

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

---

**Need help?** Check the `DEPLOYMENT.md` file for more detailed instructions!

