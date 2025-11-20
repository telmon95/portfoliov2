# How to Convert Resume to PDF

The resume is available as an HTML file at `/public/resume.html`. You can convert it to PDF using any of these methods:

## Method 1: Browser Print to PDF (Easiest)
1. Open `http://localhost:3000/resume.html` in your browser
2. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows/Linux)
3. Select "Save as PDF" as the destination
4. Click "Save"

## Method 2: Using Chrome Headless (Command Line)
```bash
# Install Chrome/Chromium if not already installed
# Then run:
google-chrome --headless --disable-gpu --print-to-pdf=resume.pdf http://localhost:3000/resume.html
```

## Method 3: Using Puppeteer (Node.js)
```bash
npm install puppeteer --save-dev
node scripts/convert-resume.js
```

## Method 4: Online HTML to PDF Converter
1. Open the resume.html file
2. Copy the content or upload to an online converter like:
   - https://www.ilovepdf.com/html-to-pdf
   - https://www.freeconvert.com/html-to-pdf

## Method 5: Using wkhtmltopdf (if installed)
```bash
wkhtmltopdf resume.html resume.pdf
```

After creating the PDF, place it in the `/public` folder and update the Hero component link from `/resume.html` to `/resume.pdf`.

