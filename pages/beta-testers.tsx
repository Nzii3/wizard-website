
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { Navbar, Footer } from "../components";

    const markdown = "<h1 style=\"text-align: center;\">Seeking Beta Testers</h1>\r\nWe are currently seeking Beta Testers to evaluate and provide feedback on the upcoming features of **Wizard**! As a Beta Tester, you will play a crucial role in testing new features, including the official release of **Wizard**. While there are no monetary rewards, your name will be recognized as a notable contributor to the bot's development for actively participating in feature testing and ensuring their smooth functionality. We highly appreciate your valuable feedback. If you're interested, please apply [here](https://google.com)!";

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
    