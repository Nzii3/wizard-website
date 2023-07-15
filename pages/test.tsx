
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { MdNavbar, MdFooter } from "../components";

    const markdown = "<h1 style=\"text-align: center;\">Beta Program</h1>\r\nThanks for your interest in our Beta Program! Our Beta program was designed to allow users to give us feedback on features before they are released to the main bot. Thus, giving you access to a beta bot upon acceptance into the program.\r\n\r\n<h1 style=\"text-align: center;\">Interested?</h1>\r\n\r\nFill out the form here to apply for our Beta Program. Good luck! \r\n\r\n";

    const Page: React.FC = () => (
      <div className="grid min-h-screen place-content-center gap-4">
        <MdNavbar />
        <div className="prose prose-invert rounded-xl bg-black/20 p-8 dark-background shadow">
          <Markdown>{markdown}</Markdown>
        </div>
        <MdFooter />
      </div>
    );

    export default Page;
    