
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { Navbar, Footer } from "../components";

    const markdown = "# Testing file\r\nUse **this** file for [testing](https://example.com) the conversion process. Testing again. \r\n![test](/screen.png)\r\n";

    const Page: React.FC = () => (
      <div className="grid min-h-screen grid-rows-auto gap-4">
        <Navbar />
        <div className="prose prose-invert rounded-xl bg-black/20 p-8 dark-background shadow row-start-1 row-end-3">
          <Markdown>{markdown}</Markdown>
        </div>
        <Footer className="row-start-3 row-end-4" />
      </div>
    );

    export default Page;
    