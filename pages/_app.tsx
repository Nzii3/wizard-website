import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import NextNProgress from "nextjs-progressbar";

const whitney = localFont({
  src: [
    {
      path: "../public/whitneymedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/whitneysemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/whitneybold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="white" height={4} />
      <Component className={whitney.className} {...pageProps} />
    </>
  );
}
