import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SocialProof from "./SocialProof";
import Features from "./Features";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Team from "./about/Team";
import Card from "./premium/Card";
import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';

const docsDir = path.resolve(__dirname, 'docs');
const pagesDir = path.resolve(__dirname, 'pages');

// just an extra check
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}
//

const convertMarkdownToTsx = (markdownFile: string) => {
  const markdownContent = fs.readFileSync(markdownFile, 'utf-8');
  const tsxContent = JSON.stringify(markdownContent);
  
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

export {
  Announcement,
  Navbar,
  Hero,
  SocialProof,
  Features,
  CallToAction,
  Footer,
  Team,
  Card,
};

watcher.on('add', convertMarkdownToTsx);
watcher.on('change', convertMarkdownToTsx);
