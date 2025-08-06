const fs = require('fs');
const path = require('path');

const baseHref = process.env.BASE_HREF || '';
const filePath = path.join(__dirname, '../public/index.html');
console.log(`replacing base href in ${filePath} with ${baseHref}`)

let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/{BASE_HREF}/g, baseHref);
fs.writeFileSync(filePath, content);
