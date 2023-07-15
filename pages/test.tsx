
    import React from 'react';
    import Markdown from 'markdown-to-jsx';
    import { Navbar, Footer } from "../components";
    
    const markdown = "# Testing file\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non lorem id mauris luctus aliquet ac sed enim. Vivamus tincidunt sagittis tristique. Fusce interdum, justo id feugiat lacinia, turpis purus aliquam lectus, ut auctor felis sem ac erat. Nunc eu faucibus lacus. Proin tincidunt lectus id purus placerat, a tempus enim ullamcorper. Morbi auctor, elit id malesuada rhoncus, est risus mollis orci, sed faucibus nunc massa vel lacus. Quisque id felis elit. Donec rutrum libero vitae sem vestibulum, nec mattis est aliquet. Integer tempus facilisis lacus in aliquet. Nam posuere justo vel velit egestas, ac vulputate neque dictum.\r\n\r\n";
    
    const Page: React.FC = () => (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-grow justify-center items-center">
          <div className="prose prose-invert rounded-xl bg-black/20 p-8 dark-background shadow">
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
        <Footer />
      </div>
    );
    
    export default Page;
    