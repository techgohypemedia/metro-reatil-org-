const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\GHM\\.gemini\\antigravity-ide\\brain\\39d0db91-c9f6-48af-811b-9bda884d81dd';
const destDir = path.join(__dirname, 'public', 'images', 'fixed_ai');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mappings = {
  'retail_fitout_broken_1790666226495.jpg': [
    'photo-1581373449483-374456832f05',
    'photo-1558769132-cb1fac08b14b',
    'photo-1556740738-f6a46e114ece'
  ],
  'office_fitout_broken_1790666253062.jpg': [
    'photo-1531973486364-5fa64260d752',
    'photo-1582653291997-059a56958d4a'
  ],
  'restaurant_fitout_broken_1790666280539.jpg': [
    'photo-1525648199593-ce5cafe386d8',
    'photo-1551632436-421b5b4cc601',
    'photo-1528605248644-14bf524458f3'
  ],
  'custom_table_broken_1790666306036.jpg': [
    'photo-1556910103-1c02745a8728',
    'photo-1572116469696-31de0f17ce67',
    'photo-1441984904996-e0b6edfe0b14'
  ]
};

let dataTs = fs.readFileSync('src/app/services/[id]/data.ts', 'utf8');

for (const [imgFile, urls] of Object.entries(mappings)) {
  const srcPath = path.join(srcDir, imgFile);
  const destPath = path.join(destDir, imgFile);
  fs.copyFileSync(srcPath, destPath);

  const localPath = `/images/fixed_ai/${imgFile}`;
  
  for (const unsplashId of urls) {
    // Replace both normal URLs and URLs with query params
    const regex = new RegExp(`https://images\\.unsplash\\.com/${unsplashId}[^"']*`, 'g');
    dataTs = dataTs.replace(regex, localPath);
  }
}

fs.writeFileSync('src/app/services/[id]/data.ts', dataTs);
console.log('Fixed images replaced successfully.');
