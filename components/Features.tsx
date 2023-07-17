import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stars } from "./Navbar";
import ReactSparkle from "react-sparkle";

import {
  faClipboardList,
  faLightbulb,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import screen from "../public/screen.png";
import screen2 from "../public/screen2.png";
import screen3 from "../public/screen3.png";
import screen4 from "../public/screen4.png"

import scale from "../public/scale.svg";
import coin from "../public/coin.png";
import party from "../public/party.svg";
import poll from "../public/poll.svg";
import clipboard from "../public/clipboard.svg"

const Features = () => {
  const features = [
    {
      title: "Global Economy",
      description:
        "Interact with a global economy bot like Wizard and play in interactive games, rob your friends, work at your imaginary virtual shift to earn coins & items, earn daily/weekly/monthly coins, and much more. Climb to the top of the global leaderboard to earn a special badge and perks!",
      link: "https://docs.servermanagerbot.ml/commands/giveaways",
      icon: coin,
      src: screen2,
    },
    {
      title: "Statistics",
      description:
        `Monitor your command count, accumulated coins, badges, work shifts, and numerous other statistics effortlessly using the Wizard's "/stats" command!`,
      link: "https://docs.servermanagerbot.ml/commands/moderation",
      icon: poll,
      src: screen,
    },
    {
      title: "Polls",
      description:
        "Host polls that members can vote on with Discord's Button UI and even see vote percentages! You can even make multiple choice polls.",
      link: "https://docs.servermanagerbot.ml/commands/polls",
      icon: poll,
      src: screen3,
    },
    {
      title: "Forms",
      description:
        "Host polls that members can vote on with Discord's Button UI and even see vote percentages! You can even make multiple choice polls.",
      link: "https://docs.servermanagerbot.ml/commands/forms",
      icon: clipboard,
      src: screen4,
    },
  ];

  return (
    <div
      className="flex flex-col"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 20 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 6H6v4H4V6H2V4h2V0h2v4h10V0h2v4h2v2h-2v4h-2V6z' fill='%23404eed' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex h-[100vh] items-center px-4 lg:h-[70vh] xl:h-[60vh]"
        >
          <div
            className={`flex w-full flex-col items-center justify-around gap-y-8 ${
              index % 2 == 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="flex ">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className={`${
                  index % 2 == 1 && "ml-auto"
                } gap flex flex-col gap-y-8 rounded-xl bg-black/70  px-7 py-10 shadow-xl sm:w-[32rem]`}
              >
                <div className="flex items-center gap-x-3 font-heading text-4xl sm:text-5xl">
                <Image
                    alt={feature.icon}
                    src={feature.icon}
                    width={48}
                    height={48}
                  /> {feature.title}{" "}
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
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="box-shadow-black relative overflow-clip rounded-lg bg-[#292c30] sm:w-[33rem] "
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
        className="relative mb-12 flex w-full flex-col items-center justify-center gap-y-4"
      >
        <Image
          src="/zigzag.svg"
          width={300}
          height={200}
          alt="zigzag"
          className="mt-10 lg:-mt-12"
        />
        <div className="text-center font-heading text-6xl">More Features</div>
      </motion.div>

      <div className="grid grid-cols-1 grid-rows-3 flex-col place-items-center items-center justify-between gap-y-12 px-8 sm:px-20 xl:grid-cols-3 xl:grid-rows-1">
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
          className="box-shadow-black flex flex-col gap-y-6 rounded-lg bg-[#1E1E1E] py-6 lg:items-center xl:w-[20rem]"
        >
          <div className="flex items-center px-8 lg:px-0">
            <FontAwesomeIcon icon={faClipboardList} size="3x" color="#fff" />
            <span className="ml-4 font-heading text-4xl sm:text-4xl">Suggestions</span>
          </div>
          <div className="flex px-8 text-white-300 ">
          Allow server members to share their ideas about server changes with
            ease. Manage suggestions with suggestion marking, customize embeds, and more!
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
          className="box-shadow-black mb-auto flex flex-col gap-y-6 rounded-lg bg-[#1E1E1E] px-6 py-6 sm:w-[27.125rem] sm:px-8 xl:w-[24rem]"
        >
          <div className="flex items-center">
            <FontAwesomeIcon icon={faLightbulb} size="3x" color="#fff" />
            <span className="ml-2.5 font-heading text-4xl sm:text-4xl">
              Customization
            </span>
          </div>

          <div className="flex text-white-300 ">
            Customize Server Manager's responses and behavior specifically for your server. Embeds can be customized with an embed builder.
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
          className="flex max-w-[28rem]"
        >
          <div className="box-shadow-black flex flex-col gap-y-6 rounded-lg bg-[#1E1E1E] py-6 lg:items-center xl:w-[19.3125rem]">
            <div className="flex items-center px-8 lg:px-0">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                size="3x"
                color="#fff"
              />
              <span className="ml-4 font-heading text-4xl">Utilities</span>
            </div>
            <div className="flex px-8 text-white-300">
              View in-depth info about the server, a member or user, and more! Other commands are in this category that are uncategorized.
            </div>
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
              background:
                "linear-gradient(94.48deg, #DABD4D 16.25%, #D2AF26 91.78%)",
            }}
          >
            <div className=" relative flex items-center text-xl sm:text-2xl">
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