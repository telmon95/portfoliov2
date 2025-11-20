# Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages or Netlify.

## Option 1: GitHub Pages (Recommended)

### Prerequisites
- GitHub account
- Git installed on your machine

### Steps

1. **Install gh-pages package** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `portfolio` (or any name you prefer)
   - **Don't** initialize with README, .gitignore, or license

3. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/telmon95/portfolio.git
   git push -u origin main
   ```
   (Replace `telmon95` with your GitHub username)

4. **Update homepage in package.json**:
   - Change the `homepage` field to match your repository:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio"
   ```

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select `gh-pages` branch
   - Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

---

## Option 2: Netlify (Easier & Faster)

### Prerequisites
- Netlify account (free at [netlify.com](https://www.netlify.com))
- GitHub repository (from Option 1, steps 1-3)

### Steps

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify Dashboard**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click **Add new site** → **Import an existing project**
   - Connect to GitHub and select your portfolio repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `build`
   - Click **Deploy site**

3. **Or deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=build
   ```

4. **Custom Domain** (Optional):
   - In Netlify dashboard, go to **Domain settings**
   - Add your custom domain (e.g., portfoliotff.netlify.app)

Your site will be live immediately with a Netlify URL!

---

## Option 3: Vercel

### Steps

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be deployed!

---

## Updating Your Site

After making changes:

### GitHub Pages:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

### Netlify:
- If connected to GitHub, just push to main branch - Netlify auto-deploys!
- Or use: `netlify deploy --prod --dir=build`

---

## Troubleshooting

### GitHub Pages 404 Error:
- Make sure `homepage` in package.json matches your repository URL
- Check that `gh-pages` branch exists after running `npm run deploy`
- Wait a few minutes for GitHub Pages to update

### Build Errors:
- Make sure all dependencies are installed: `npm install`
- Check for any console errors: `npm run build`

### Routing Issues:
- For GitHub Pages, you may need to add a `_redirects` file in `public/` folder:
  ```
  /*    /index.html   200
  ```

---

## Need Help?

- GitHub Pages Docs: https://pages.github.com
- Netlify Docs: https://docs.netlify.com
- React Deployment: https://create-react-app.dev/docs/deployment

