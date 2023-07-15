
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { Navbar, Footer } from "../components";

    const markdown = "<h1 style=\"text-align: center;\">Beta Program</h1>\r\nThanks for your interest in our Beta Program! Our Beta program was designed to allow users to give us feedback on features before they are released to the main bot. Thus, giving you access to a beta bot upon acceptance into the program.\r\n\r\n";

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
    