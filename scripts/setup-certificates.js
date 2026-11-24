import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = 'C:\\Users\\KiTE\\.gemini\\antigravity-ide\\brain\\f62c140f-62e6-48c6-9574-43d52fd376f6\\.user_uploaded';
const targetDir = path.resolve(__dirname, '../public/assets/certificates');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const fileMap = {
  'media_1792392764920.png': 'adobe_hackathon.png',
  'media_1792392780152.jpg': 'dcg_coimbatore_meetup.jpg',
  'media_1792392780153.jpg': 'nasa_space_apps.jpg',
  'media_1792392780182.jpg': 'dcg_thoughtworks_workshop.jpg',
  'media_1792392780199.jpg': 'brewingsec_hackathon.jpg',
};

for (const [srcFile, destFile] of Object.entries(fileMap)) {
  const srcPath = path.join(uploadDir, srcFile);
  const destPath = path.join(targetDir, destFile);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcFile} -> ${destFile}`);
  } else {
    console.warn(`File not found: ${srcPath}`);
  }
}
console.log('Certificates setup completed!');
