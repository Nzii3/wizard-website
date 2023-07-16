const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const mdToTsx = require('markdown-to-jsx');
const { mkdirpSync } = require('fs-extra');

const docsDir = path.resolve(__dirname, './docs');
const pagesDir = path.resolve(__dirname, './pages');

// just an extra check
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}
//

const convertMarkdownToTsx = async (inputPath) => {
  const stats = fs.statSync(inputPath);

  if (stats.isFile() && path.extname(inputPath) === '.md') {
    const markdownContent = fs.readFileSync(inputPath, 'utf-8');
    const tsxContent = await mdToTsx(markdownContent);

    const relativePath = path.relative(docsDir, inputPath);
    const outputFolderPath = path.join(pagesDir, path.dirname(relativePath));
    mkdirpSync(outputFolderPath);

    const tsxFile = path.join(outputFolderPath, path.basename(inputPath, '.md') + '.tsx');
    fs.writeFileSync(
      tsxFile,
      `
      import React from 'react';
      import Markdown from 'markdown-to-jsx';
      import { Navbar, Footer } from "../../components";

      const markdown = ${JSON.stringify(tsxContent)};

      // CustomLink component to render links with a CSS class
      const CustomLink = ({ children, ...props }) => (
        <a className="markdown-links" {...props}>
          {children}
        </a>
      );

      const Page: React.FC = () => (
        <div className="grid min-h-screen gap-4">
          <Navbar />
          <div className="prose prose-invert rounded-xl bg-black/20 p-8 dark-background shadow" style={{placeSelf: 'center'}}>
            <Markdown options={{ overrides: { a: { component: CustomLink } } }}>{markdown}</Markdown>
          </div>
          <Footer />
        </div>
      );

      export default Page;
      `
    );
  } else if (stats.isDirectory()) {
    const files = fs.readdirSync(inputPath);
    files.forEach((file) => {
      const filePath = path.join(inputPath, file);
      convertMarkdownToTsx(filePath);
    });
  }
};

// handle stuff at startup
convertMarkdownToTsx(docsDir);

const watcher = chokidar.watch(docsDir, {
  persistent: true,
  ignoreInitial: false,
  depth: 0,
});

watcher.on('add', convertMarkdownToTsx);
watcher.on('change', convertMarkdownToTsx);
