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
    import { components } from '../components';
    const { MdNavbar, MdFooter } = components;
    
    const markdown = ${tsxContent};
    
    const Page: React.FC = () => (
      <div className="grid min-h-screen place-content-center gap-4">
        <Navbar />
        <div className="prose prose-invert rounded-xl bg-black/20 p-8 dark-background shadow">
          <Markdown>{markdown}</Markdown>
        </div>
        <Footer />
      </div>
    );
    
    export default Page;
    `
  );
};

const watcher = chokidar.watch(path.join(docsDir, '*.md'), {
  persistent: true,
  ignoreInitial: false,
  depth: 0,
});

watcher.on('add', convertMarkdownToTsx);
watcher.on('change', convertMarkdownToTsx);

// handle stuff in start
watcher.on('ready', () => {
  const watchedPaths = watcher.getWatched();

  Object.keys(watchedPaths).forEach((watchedDir) => {
    watchedPaths[watchedDir].forEach((file) => {
      const fullPath = path.join(watchedDir, file);
      convertMarkdownToTsx(fullPath);
    });
  });
});