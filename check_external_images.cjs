const fs = require('fs');
const https = require('https');
const http = require('http');
const content = fs.readFileSync('src/app/services/[id]/data.ts', 'utf8');
const regex = /(?:img|heroImage|image):\s*['"](.*?)['"]/g;
let match;
const images = new Set();
while ((match = regex.exec(content)) !== null) {
  images.add(match[1]);
}

const externalUrls = Array.from(images).filter(img => img.startsWith('http'));
console.log(`Checking ${externalUrls.length} external URLs...`);

async function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      if (res.statusCode >= 400) {
        resolve({ url, status: res.statusCode });
      } else {
        resolve(null);
      }
    });
    req.on('error', (e) => resolve({ url, error: e.message }));
    req.on('timeout', () => { req.destroy(); resolve({ url, error: 'timeout' }); });
    req.end();
  });
}

async function run() {
  const broken = [];
  for (let i = 0; i < externalUrls.length; i += 10) {
    const batch = externalUrls.slice(i, i + 10);
    const results = await Promise.all(batch.map(checkUrl));
    for (const r of results) {
      if (r) broken.push(r);
    }
  }
  console.log("Broken external URLs:");
  console.log(JSON.stringify(broken, null, 2));
}
run();
