const fs = require('fs');
const path = require('path');

function findImages(dir, results = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        findImages(fullPath, results);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const regex = /["'`](\/[^"'`]+?\.(?:png|jpg|jpeg|webp|svg))["'`]/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        results.push({ file: fullPath, img: match[1] });
      }
    }
  }
  return results;
}

const allImages = findImages('./src');
const missing = new Set();
const details = [];

for (const item of allImages) {
  const publicPath = path.join('./public', item.img);
  if (!fs.existsSync(publicPath)) {
    missing.add(item.img);
    details.push(item);
  }
}

console.log(JSON.stringify(Array.from(missing), null, 2));
console.log(JSON.stringify(details, null, 2));
