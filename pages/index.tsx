import Head from "next/head";

import { createClient } from "next-sanity";

import {
  Announcement,
  Navbar,
  Hero,
  SocialProof,
  Features,
  CallToAction,
  Footer,
} from "../components";

export default function Home({
  announcement,
}: {
  announcement: { text: string; link: string };
}) {
  return (
    <>
      <Head>
        <title>Wizard - Discord Economy</title>
      </Head>
      <div className="min-w-screen overflow-x-hidden">
        <Announcement text={announcement?.text} link={announcement?.link} />
        <Navbar />
        <Hero />
        <SocialProof />
        <Features />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

const client = createClient({
  projectId: "osy5hr6i",
  dataset: "production",
  apiVersion: "2023-01-02",
  useCdn: false,
});

export async function getStaticProps() {
  // Get only the latest announcement
  const announcement = await client.fetch(
    `*[_type == "announcement"] | order(_createdAt desc) [0]`
  );

  return {
    props: {
      announcement,
    },
    revalidate: 60, // Will re-generate the page with announcement every 60 seconds
  };
}
