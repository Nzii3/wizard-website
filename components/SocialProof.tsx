import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import icon1 from "../public/icon1.gif";
import icon2 from "../public/icon2.gif";
import icon3 from "../public/icon3.gif";

type Props = {};
const SocialProof = (props: Props) => {
  const banners = [
    {
      src: icon1,
      alt: "Moonlight Twilight",
      link: "https://go.servermanagerbot.ml/moonlight-twilight",
    },
    {
      src: icon2,
      alt: "Molten Advertising",
      link: "https://go.servermanagerbot.ml/molten-advertising",
    },
    {
      src: icon3,
      alt: "Market Masters",
      link: "https://go.servermanagerbot.ml/market-masters",
    },
  ];

  return (
    <div className="dark-background border-y-4 border-[#616EFF] bg-dark-background py-16 px-12 xl:px-20">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
        className="flex flex-col items-center justify-between gap-y-8 2xl:flex-row"
      >
        <div className="text-center font-heading text-3xl sm:text-5xl">
          Trusted by 750+ Servers{" "}
        </div>
        <div className="flex flex-row items-center gap-x-8 gap-y-6 lg:flex-row">
          {banners.map((banner, index) => (
            <Link href={banner.link || ""} key={index} target={"_blank"}>
              <div
                key={index}
                className="relative flex max-h-[10rem] max-w-[8rem] items-center justify-center overflow-clip rounded-full sm:w-[10rem]"
              >
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  style={{
                    clipPath: "circle(50% at 50% 50%)",
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default SocialProof;
