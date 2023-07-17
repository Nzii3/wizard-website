
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { Navbar, Footer } from "../components";

    const markdown = "<h1 style=\"text-align: center;\">Basic Markdown Testing</h1> \r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo ligula a purus facilisis, vitae malesuada diam blandit. Mauris tincidunt lorem ac facilisis finibus. Sed auctor malesuada nisl ac tincidunt. In scelerisque sem sed magna eleifend, at congue sapien interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc rutrum sem ut orci feugiat aliquet. Donec lacinia congue libero, sit amet blandit velit vulputate ac.\r\n\r\n<h1 style=\"text-align: center;\">Interested?</h1>\r\n\r\nLet's check out the [statistics](https://example.com/stats).\r\n\r\n> Make sure to read!\r\n\r\n| Month    | Savings |\r\n| -------- | ------- |\r\n| January  | $250    |\r\n| February | $80     |\r\n| March    | $420    |\r\n\r\n```\r\nThanks for reading!\r\n```\r\n\r\nHere's a sentence with a footnote. [^*]\r\n\r\n[^*]: This is the footnote.\r\n\r\n~~The world is flat.~~\r\n\r\n- [x] Write the press release\r\n- [ ] Update the website\r\n- [ ] Contact the media\r\n\r\nI need to highlight these ==very important words==.\r\n\r\n![Wizard banner](../banner.png)\r\n";

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
    