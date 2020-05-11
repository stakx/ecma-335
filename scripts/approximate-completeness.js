const fs = require('fs');
const path = require('path');

const tocFilePath = path.join(__dirname, '/../docs/TABLE_OF_CONTENTS.md');

const lines = fs.readFileSync(tocFilePath, 'utf-8')
                .split(/\r?\n/)
                .filter(l => l.trim());

const lineCount = lines.length;

const hyperlinkedLineCount = lines.filter(l => /\[.+\]\(.+\.md\)/.test(l))
                                  .length;

console.log('approx.', Math.round(hyperlinkedLineCount / lineCount * 100), '% complete');
