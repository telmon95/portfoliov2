const fs = require('fs');
const path = require('path');

// Copy profile photo to build folder
const publicDir = path.join(__dirname, '../public');
const buildDir = path.join(__dirname, '../build');

// Ensure build directory exists
if (!fs.existsSync(buildDir)) {
  console.log('Build directory does not exist yet. Run "npm run build" first.');
  process.exit(0);
}

// Copy profile photo
const photoSource = path.join(publicDir, 'profile-photo.jpg');
const photoDest = path.join(buildDir, 'profile-photo.jpg');

if (fs.existsSync(photoSource)) {
  fs.copyFileSync(photoSource, photoDest);
  console.log('✅ Profile photo copied to build folder');
} else {
  console.log('⚠️  Profile photo not found in public folder');
}

// Copy resume.html
const resumeSource = path.join(publicDir, 'resume.html');
const resumeDest = path.join(buildDir, 'resume.html');

if (fs.existsSync(resumeSource)) {
  fs.copyFileSync(resumeSource, resumeDest);
  console.log('✅ Resume copied to build folder');
}

