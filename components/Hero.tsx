import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faRocketchat } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faHome, faRightToBracket, faRocket } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="relative flex flex-col items-center justify-center gap-y-12 bg-background px-6 pb-36"
      style={{
        height: `calc(100vh - 92px)`,
        backgroundImage: `url("/waves.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "175%",
      }}
    >
      <div className="flex max-w-full flex-col items-center gap-y-2 transition-all xl:max-w-[40%]">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="confetti-text text-center font-heading text-6xl"
        >
          Wizard
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.75,
            duration: 0.5,
          }}
          className="text-center text-lg text-white-300 sm:text-2xl"
        >
          Wizard is a global Discord Economy bot that keeps you and server members engaged in currency, games, and much more!
        </motion.div>
      </div>

      <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
        <Link href={"https://servermanagerbot.ml/invite"}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            className="box-shadow-blue relative rounded-lg bg-dark-background py-3 px-4 text-2xl font-semibold shadow-lg"
          >
            <div className="flex items-center justify-center">
              <FontAwesomeIcon icon={faDiscord} />
              <span className="ml-2">Invite to Server</span>
            </div>
          </motion.div>
        </Link>

        <Link href={"https://docs.servermanagerbot.ml/getting-started"}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            className="box-shadow-green relative rounded-lg green-background py-3 px-4 text-2xl font-semibold shadow-lg"
          >
            <div className="flex items-center justify-center">
              <FontAwesomeIcon icon={faRightToBracket} />
              <span className="ml-2">Get Started</span>
            </div>
          </motion.div>
        </Link>

        <Link href={"https://servermanagerbot.ml/support"}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            className="box-shadow-gray relative  rounded-lg bg-gray-400 py-3 px-4 text-2xl font-semibold shadow-lg"
          >
            <div className="flex items-center justify-center">
              <FontAwesomeIcon icon={faHome} />
              <span className="ml-2">Support</span>
            </div>
          </motion.div>
        </Link>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className="animate-updown absolute bottom-12"
      >
        <FontAwesomeIcon icon={faChevronDown} size="3x" />
      </motion.div>
    </motion.div>
  );
};
export default Hero;
