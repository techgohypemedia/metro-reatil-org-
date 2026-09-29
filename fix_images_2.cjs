const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\GHM\\.gemini\\antigravity-ide\\brain\\39d0db91-c9f6-48af-811b-9bda884d81dd';
const destDir = path.join(__dirname, 'public', 'images', 'fixed_ai');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy new images
const newImages = {
  'flagship_store_1790666915515.jpg': 'flagship_store.jpg',
  'retail_space_1790666929580.jpg': 'retail_space.jpg',
  'fb_interior_1790666980410.jpg': 'fb_interior.jpg',
  'turnkey_restaurant_1790666999184.jpg': 'turnkey_restaurant.jpg'
};

for (const [srcName, destName] of Object.entries(newImages)) {
  fs.copyFileSync(path.join(srcDir, srcName), path.join(destDir, destName));
}

let content = fs.readFileSync('src/app/services/[id]/data.ts', 'utf8');

// Replacements configuration
const replacements = [
  {
    targetSlugOrTitle: 'Flagship Store Design',
    newImg: '/images/fixed_ai/flagship_store.jpg'
  },
  {
    targetSlugOrTitle: 'Retail Space Design Experts',
    newImg: '/images/fixed_ai/retail_space.jpg'
  },
  {
    targetSlugOrTitle: 'F&B Interior Design',
    newImg: '/images/fixed_ai/fb_interior.jpg'
  },
  {
    targetSlugOrTitle: 'Turnkey Restaurant Fitout',
    newImg: '/images/fixed_ai/turnkey_restaurant.jpg'
  }
];

for (const { targetSlugOrTitle, newImg } of replacements) {
  // Regex to match an object block containing the title/slug and replace its img/heroImage/gallery img
  // This is a bit tricky, so let's just do a manual line-by-line or simple block replace
  let lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(targetSlugOrTitle) || (lines[i].includes('slug:') && lines[i].includes(targetSlugOrTitle.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')))) {
      // Look around 5 lines above and below for the old image string and replace
      for (let j = Math.max(0, i - 15); j <= Math.min(lines.length - 1, i + 15); j++) {
        if (lines[j].includes('/images/fixed_ai/retail_fitout_broken_1790666226495.jpg')) {
          lines[j] = lines[j].replace('/images/fixed_ai/retail_fitout_broken_1790666226495.jpg', newImg);
        }
        if (lines[j].includes('/images/fixed_ai/restaurant_fitout_broken_1790666280539.jpg')) {
          lines[j] = lines[j].replace('/images/fixed_ai/restaurant_fitout_broken_1790666280539.jpg', newImg);
        }
      }
    }
  }
  content = lines.join('\n');
}

fs.writeFileSync('src/app/services/[id]/data.ts', content);
console.log('Fixed same-image issue successfully.');
