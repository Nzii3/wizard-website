
    import React from 'react';
    import Markdown from 'markdown-to-jsx';

    const markdown = "# Testing file\r\nUse **this** file for [testing](https://example.com) the conversion process.\r\n";

    const Page: React.FC = () => (
      <div>
        <Markdown>{markdown}</Markdown>
      </div>
    );

    export default Page;
    