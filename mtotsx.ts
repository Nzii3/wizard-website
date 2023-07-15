import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';

const docsDir = path.resolve(__dirname, '../docs');
const pagesDir = path.resolve(__dirname, '../pages');

// just an extra check
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}
//

const convertMarkdownToTsx = (markdownFile: string) => {
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

    const markdown = ${tsxContent};

    const Page: React.FC = () => (
      <div>
        <Markdown>{markdown}</Markdown>
      </div>
    );

    export default Page;
    `
  );
};

const watcher = chokidar.watch(docsDir, {
  persistent: true,
  ignoreInitial: true,
  depth: 0,
});


watcher.on('add', convertMarkdownToTsx);
watcher.on('change', convertMarkdownToTsx);
