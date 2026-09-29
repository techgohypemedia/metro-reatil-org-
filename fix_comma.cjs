const fs = require('fs');
const file = 'c:/Users/GHM/Documents/Metro Retail/metro/src/app/services/[id]/data.ts';
let content = fs.readFileSync(file, 'utf8');

// The issue is a missing comma before "clothing-and-fashion": {
content = content.replace('}\n\n  "clothing-and-fashion": {', '},\n\n  "clothing-and-fashion": {');
content = content.replace('}\r\n\r\n  "clothing-and-fashion": {', '},\r\n\r\n  "clothing-and-fashion": {');
content = content.replace('}\n  "clothing-and-fashion": {', '},\n  "clothing-and-fashion": {');
content = content.replace('}\r\n  "clothing-and-fashion": {', '},\r\n  "clothing-and-fashion": {');

fs.writeFileSync(file, content);
console.log('Fixed comma.');
