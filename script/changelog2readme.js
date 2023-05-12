const fs = require('fs');

// 读取 CHANGELOG.md 文件的内容
const changelog = fs.readFileSync('CHANGELOG.md', 'utf8');

// 读取 README.md 文件的内容
const readme = fs.readFileSync('README.md', 'utf8');

// 在 README.md 文件的开头插入 changelog
const updatedReadme = `${readme}\n\n# Changelog\n\n${changelog}\n\n`;

// 保存更新后的 README.md 文件
fs.writeFileSync('README.md', updatedReadme);