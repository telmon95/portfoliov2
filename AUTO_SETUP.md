# 🚀 Automated Setup - portfoliov2

## Quick Start (2 Steps)

### Step 1: Create Repository on GitHub

**Option A: Via Web Browser (30 seconds)**
1. Click this link: https://github.com/new?name=portfoliov2&description=Professional+portfolio+website+v2
2. Make sure it's set to **Public**
3. **DO NOT** check "Initialize with README"
4. Click **Create repository**

**Option B: Manual**
- Go to: https://github.com/new
- Name: `portfoliov2`
- Public
- Don't initialize with anything
- Create

### Step 2: Run Automated Script

```bash
cd /Users/telmonmaluleka/portfolio
./setup-and-push.sh
```

That's it! The script will:
- ✅ Connect to GitHub
- ✅ Push all your code
- ✅ Build the project
- ✅ Deploy to GitHub Pages
- ✅ Give you the live URL

---

## What You'll Get

- **Repository**: https://github.com/telmon95/portfoliov2
- **Live Site**: https://telmon95.github.io/portfoliov2

---

## If You Get Authentication Errors

The script will prompt you for credentials. You may need:

1. **Personal Access Token** (recommended):
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select scope: `repo`
   - Use token as password when prompted

2. **Or use SSH** (if you have SSH keys set up):
   ```bash
   git remote set-url origin git@github.com:telmon95/portfoliov2.git
   ```

---

## Alternative: One-Command Push (After Creating Repo)

If you've already created the repo, just run:

```bash
cd /Users/telmonmaluleka/portfolio && git remote add origin https://github.com/telmon95/portfoliov2.git 2>/dev/null; git remote set-url origin https://github.com/telmon95/portfoliov2.git; git push -u origin main && npm run build && npm run deploy
```

---

**Ready?** Create the repo (Step 1) then run the script (Step 2)!

