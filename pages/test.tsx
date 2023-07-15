
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { Navbar, Footer } from "../components";

    const markdown = "# Testing file\r\nUse **this** file for [testing](https://example.com) the conversion process. Testing again. afafa\r\n![test](/screen.png)\r\n";

    const Page: React.FC = () => (
      <div>
      <Navbar />
      <div className="min-w-screen flex flex-col items-center overflow-x-hidden p-4">
        <div className="prose prose-invert rounded-xl bg-black/20 p-8 dark-background shadow">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
      <Footer />
    </div>
    );

    export default Page;
    