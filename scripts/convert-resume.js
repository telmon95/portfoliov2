const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Get the absolute path to the resume HTML file
    const resumePath = path.join(__dirname, '../public/resume.html');
    const fileUrl = `file://${resumePath}`;
    
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdfPath = path.join(__dirname, '../public/resume.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });
    
    await browser.close();
    console.log(`✅ Resume PDF created successfully at: ${pdfPath}`);
  } catch (error) {
    console.error('❌ Error creating PDF:', error);
    process.exit(1);
  }
})();

