import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="description"
          content="Transform your server with an extraordinary, enchanted economy system with Wizard. Customize currency, build a diverse shop, and embark on an awe-inspiring adventure of wealth accumulation. Experience limitless possibilities with the enchanting powers of Wizard."
        />
        <meta property="title" content="Wizard - Discord Economy" />
        <meta property="image" content="https://cdn.discordapp.com/attachments/1127306168642048020/1129769370059546734/Wizard_Banner_1.png" />
        <meta
          property="og:description"
          content="Transform your server with an extraordinary, enchanted economy system with Wizard. Customize currency, build a diverse shop, and embark on an awe-inspiring adventure of wealth accumulation. Experience limitless possibilities with the enchanting powers of Wizard."
        />
        <meta property="og:title" content="Wizard - Discord Economy" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/1127306168642048020/1129769370059546734/Wizard_Banner_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#0d6efd" />
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
