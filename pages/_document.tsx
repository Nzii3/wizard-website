import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="description"
          content="Server Manager is a unique Discord bot that gives server moderators and admins easy and reliable ways to moderate servers, create interactive giveaways, forms/applications, create polls to vote on, and more."
        />
        <meta property="title" content="Server Manager" />
        <meta property="image" content="https://imgur.com/BHyNRD2.png" />
        <meta
          property="og:description"
          content="Server Manager is a unique Discord bot that gives server moderators and admins easy and reliable ways to moderate servers, create interactive giveaways, forms/applications, create polls to vote on, and more."
        />
        <meta property="og:title" content="Server Manager" />
        <meta property="og:image" content="https://imgur.com/BHyNRD2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#5865F2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;600;700&family=Saira:wght@800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="debug-screens">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
