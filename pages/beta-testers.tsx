
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { Navbar, Footer } from "../components";

    const markdown = "<h1 style=\"text-align: center;\">Seeking Beta Testers</h1>\r\n<h2 style=\"text-align: center;\">Beta Testing applications are now closed!</h2>\r\nUpdates regarding **Wizard** will be made at [wizard-help.nziie.xyz](https://wizard-help.nziie.xyz)\r\n\r\n~~We are currently seeking Beta Testers to evaluate and provide feedback on the upcoming features of **Wizard**! As a Beta Tester, you will play a crucial role in testing new features, including the official release of **Wizard**. While there are no monetary rewards, your name will be recognized as a notable contributor to the bot's development for actively participating in feature testing and ensuring their smooth functionality. We highly appreciate your valuable feedback. If you're interested, please _[apply here](https://forms.gle/xRRx6FBAT2cMpVRF7)_!~~";

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
    