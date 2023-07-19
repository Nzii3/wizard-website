import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stars } from "./Navbar";
import ReactSparkle from "react-sparkle";

import {
  faShoppingBag,
  faFaceGrinSquint
} from "@fortawesome/free-solid-svg-icons";

import screen from "../public/screen.png";
import screen2 from "../public/screen2.png";
import screen3 from "../public/screen_coming_soon.png";

import scale from "../public/scale.svg";
import coin from "../public/coin.png";
import poll from "../public/poll.svg";

const Features = () => {
  const features = [
    {
      title: "Global Economy",
      description:
        "Engage with Wizard, a global economy bot, to play interactive games, rob friends, work virtual shifts for coins and items, earn daily/weekly/monthly rewards, and reach the leaderboard's pinnacle for exclusive perks and badges!",
      link: "https://docs.servermanagerbot.ml/commands/giveaways",
      icon: coin,
      src: screen,
    },
    {
      title: "Statistics",
      description:
        `Effortlessly track your command count, accumulated coins, badges, work shifts, and more with the Wizard's convenient "/stats" command! Stay informed and keep tabs on your progress with ease.`,
      link: "https://docs.servermanagerbot.ml/commands/moderation",
      icon: poll,
      src: screen2,
    },
    {
      title: "Events",
      description:
        "Experience thrilling games and events, win exclusive rewards from our shop. Join now for an unforgettable journey of victory, glory, and coveted prizes in our virtual world!",
      link: "https://docs.servermanagerbot.ml/commands/polls",
      icon: poll,
      src: screen3,
    },
  ];

  return (
    <div className="flex flex-col">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center px-4 lg:px-16">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="gap flex flex-col gap-y-8 rounded-xl bg-black/70 px-7 py-10 shadow-xl w-full sm:w-[32rem]"
            >
              <div className="flex items-center gap-x-3 font-heading text-4xl sm:text-5xl">
                <Image
                  alt={feature.icon}
                  src={feature.icon}
                  width={48}
                  height={48}
                />
                {feature.title}
              </div>
              <div className="text-xl text-white-300">
                {feature.description}
              </div>
              <div>
                <Link href={feature.link} target="_blank">
                  <button className="box-shadow-green inline-block rounded-lg bg-emerald-500 px-4 py-3 text-lg font-semibold">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="box-shadow-black relative overflow-clip rounded-lg bg-[#181a1c] w-full sm:w-[33rem]"
            >
              <Image src={feature.src} alt="feature" placeholder="blur" />
            </motion.div>
          </div>
        </div>
      ))}

      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
        className="relative mb-12 flex flex-col items-center justify-center gap-y-4"
      >
        <br />
        <Image
          src="/zigzag.svg"
          width={300}
          height={200}
          alt="zigzag"
          className="mt-10 lg:-mt-12"
        />
        <div className="text-center font-heading text-6xl">More Features</div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 sm:px-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="box-shadow-black flex flex-col gap-y-6 rounded-lg bg-[#1E1E1E] py-6 items-center"
        >
          <div className="flex items-center">
            <FontAwesomeIcon icon={faShoppingBag} size="2x" color="#fff" />
            <span className="ml-4 font-heading text-4xl sm:text-4xl">Custom Shops</span>
          </div>
          <div className="flex text-white-300">
            Improve your server's marketplace with personalized items for customized operations. Send messages to channels, assign/remove roles, and offer other useful functions.
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="box-shadow-black flex flex-col gap-y-6 rounded-lg bg-[#1E1E1E] py-6 items-center"
        >
          <div className="flex items-center">
            <FontAwesomeIcon icon={faFaceGrinSquint} size="2x" color="#fff" />
            <span className="ml-4 font-heading text-3xl">Fun Commands</span>
          </div>
          <div className="flex text-white-300">
            Engage in enjoyable games alongside your friends, where the option to place bets adds an element of competition and the thrill of high stakes!
          </div>
        </motion.div>
      </div>

      <div className="mt-16 mb-12 flex justify-center px-8">
        <Link href="/premium">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="box-shadow-gold relative inline-block rounded-lg px-3 py-3 text-lg font-semibold shadow-lg"
            style={{
              background: "linear-gradient(94.48deg, #DABD4D 16.25%, #D2AF26 91.78%)",
            }}
          >
            <div className="relative flex items-center text-xl sm:text-2xl">
              <ReactSparkle
                count={20}
                minSize={7}
                maxSize={12}
                fadeOutSpeed={20}
                flicker={false}
              />
              <Stars />
              <span className="mx-2 text-center">Unlock More with Premium</span>
              <Stars />
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Features;