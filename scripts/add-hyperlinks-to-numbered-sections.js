const fs = require('fs');
const path = require('path');

const todoMissingHyperlinkRegex = new RegExp(/\[([^\]]+)\]\(#todo-missing-hyperlink\)/gi);

const docsDir = path.join(__dirname, '../docs/');
const docs = fs.readdirSync(docsDir);
for (const fileName of docs.filter(f => f.toLowerCase().endsWith('.md'))) {
    const filePath = path.join(docsDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    console.log(fileName, ':');
    const newFileContents = fileContents.replace(todoMissingHyperlinkRegex, (_, text, __, str) => {
        const matchingFiles = docs
          .filter(f => f.toLowerCase().startsWith(text.toLowerCase() + '-'))
          .filter(f => f.toLowerCase().endsWith('.md'));
        if (matchingFiles.length === 1) {
            console.debug({ text, targetFileName: matchingFiles[0] });
            return `[${text}](${matchingFiles[0]})`;
        }
        else {
            return `[${text}](#todo-missing-hyperlink)`;
        }
    });
    if (newFileContents != fileContents) {
        fs.writeFileSync(filePath, newFileContents, { encoding: 'utf8', flag: 'w' });
    }
}
