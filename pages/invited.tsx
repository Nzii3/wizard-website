
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { Navbar, Footer } from "../components";

    const markdown = "# Thanks for choosing Wizard!\r\nCheck out [the getting started page](/getting-started) to get Wizard setup correctly in your server, it's simple! Want to support development and help cover resource costs? Consider upgrading your user profile to Wizard premium or getting your server Wizard premium. User premium gives you a coin multiplier, item, multiplier and much more, giving you more payout. [Learn more](/premium).";

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
    