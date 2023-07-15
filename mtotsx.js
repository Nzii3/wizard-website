const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const docsDir = path.resolve(__dirname, './docs');
const pagesDir = path.resolve(__dirname, './pages');

// just an extra check
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}
//

const convertMarkdownToTsx = (markdownFile) => {
  const markdownContent = fs.readFileSync(markdownFile, 'utf-8');
  const tsxContent = JSON.stringify(markdownContent);

  if (path.basename(markdownFile) === 'README.md') {
    return;
  }

  const tsxFile = path.resolve(pagesDir, path.basename(markdownFile, '.md') + '.tsx');
  fs.writeFileSync(
    tsxFile,
    `
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { Navbar, Footer } from "../components";

    const markdown = ${tsxContent};
    const Page: React.FC = () => (
      <div className="grid min-h-screen gap-4">
        <Navbar />
        <div className="prose prose-invert rounded-xl bg-black/20 p-8 dark-background shadow" style={{placeSelf: 'center'}}>
          <Markdown>{markdown}</Markdown>
        </div>
        <Footer />
      </div>
    );

    export default Page;
    `
  );
};

// handle stuff in start
fs.readdirSync(docsDir).forEach((file) => {
  if(path.extname(file) === '.md') {
    convertMarkdownToTsx(path.join(docsDir, file));
  }
});

const watcher = chokidar.watch(docsDir, {
  persistent: true,
  ignoreInitial: false,
  depth: 0,
});

watcher.on('add', convertMarkdownToTsx);
watcher.on('change', convertMarkdownToTsx);