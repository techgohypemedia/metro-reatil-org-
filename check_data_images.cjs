const fs = require('fs');
const content = fs.readFileSync('src/app/services/[id]/data.ts', 'utf8');
const regex = /(?:img|heroImage|image):\s*['"](.*?)['"]/g;
let match;
const images = new Set();
while ((match = regex.exec(content)) !== null) {
  images.add(match[1]);
}

const missingLocal = [];
for (const img of images) {
  if (img.startsWith('/')) {
    const publicPath = './public' + img;
    if (!fs.existsSync(publicPath)) {
      missingLocal.push(img);
    }
  }
}

console.log("Missing local images in data.ts:");
console.log(missingLocal);
