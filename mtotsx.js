const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const mdToTsx = require('markdown-to-tsx');
const { mkdirpSync } = require('fs-extra');

const docsFolder = './docs';
const pagesFolder = './pages';
const componentsFolder = '../components';

const convertMarkdownToTsx = async (inputPath, outputPath) => {
  const stats = fs.statSync(inputPath);

  if (stats.isFile() && path.extname(inputPath) === '.md') {
    const markdownContent = fs.readFileSync(inputPath, 'utf-8');
    const tsxContent = await mdToTsx(markdownContent);

    const tsxFilePath = outputPath + '.tsx';
    fs.writeFileSync(
      tsxFilePath,
      `
        import React from 'react';
        import Markdown from 'markdown-to-jsx';
        import { Navbar, Footer } from '${componentsFolder}';

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
    const folderName = path.basename(inputPath);
    const outputFolderPath = path.join(outputPath, folderName);
    mkdirpSync(outputFolderPath);

    const files = fs.readdirSync(inputPath);
    files.forEach((file) => {
      const filePath = path.join(inputPath, file);
      const outputFile = path.join(outputFolderPath, file);
      convertMarkdownToTsx(filePath, outputFile);
    });
  }
};

convertMarkdownToTsx(docsFolder, pagesFolder);

const watcher = chokidar.watch(docsFolder, {
  persistent: true,
  ignoreInitial: false,
  depth: 0,
});

watcher.on('add', convertMarkdownToTsx);
watcher.on('change', convertMarkdownToTsx);
