const fs = require("fs");
const path = require("path");

const docsPath = path.join(__dirname, "/../docs");
const fsFiles = new Set(fs.readdirSync(docsPath));

let exitCode = 0;
for (const f of fsFiles) {
  if (!f.endsWith(".md")) continue;
  const content = fs.readFileSync(path.join(docsPath, f), "utf-8");
  const regex = /\[.+\]\((.+\.md)\)/g;
  while ((match = regex.exec(content)) !== null) {
    const link = match[1];
    if (!fsFiles.has(link)) {
      console.log("Broken link: " + link + " in file " + f);
      exitCode = 1;
    }
  }
}

process.exit(exitCode);
