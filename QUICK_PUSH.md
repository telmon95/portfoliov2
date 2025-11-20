# Quick Push to GitHub - Automated

## 🚀 Automated Script (Easiest Method)

I've created an automated script that will handle everything for you!

### Steps:

1. **Create the GitHub repository first:**
   - Go to: https://github.com/new
   - Repository name: `portfoliov2`
   - Description: "Professional portfolio website v2"
   - Choose: **Public**
   - **DO NOT** check "Initialize with README"
   - Click **Create repository**

2. **Run the automated script:**
   ```bash
   cd /Users/telmonmaluleka/portfolio
   ./setup-and-push.sh
   ```

   The script will:
   - ✅ Set up the Git remote
   - ✅ Push all your code to GitHub
   - ✅ Build the project
   - ✅ Deploy to GitHub Pages
   - ✅ Give you the live URL

---

## 🔧 Manual Method (If script doesn't work)

If you prefer to do it manually or the script fails:

```bash
cd /Users/telmonmaluleka/portfolio

# 1. Create repo on GitHub first (see step 1 above)

# 2. Add remote and push
git remote add origin https://github.com/telmon95/portfoliov2.git
git push -u origin main

# 3. Deploy to GitHub Pages
npm run deploy
```

---

## 📝 What's Already Configured

- ✅ Git repository initialized
- ✅ All files committed
- ✅ Homepage set to: `https://telmon95.github.io/portfoliov2`
- ✅ Deployment scripts ready
- ✅ gh-pages package installed

---

## 🎯 After Pushing

Your portfolio will be live at:
**https://telmon95.github.io/portfoliov2**

(It may take 5-10 minutes for GitHub Pages to update)

---

## 🔐 Authentication

If you get authentication errors:
- Use a Personal Access Token instead of password
- Or set up SSH keys for GitHub

---

**Ready?** Just create the repo and run `./setup-and-push.sh`!

