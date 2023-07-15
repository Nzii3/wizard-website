import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const mdNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Team",
      href: "/team",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex w-full flex-col fixed top-0 right-0 left-0 z-50"
    >
      <div className="flex items-center justify-between px-9 py-6">
        <Link href="/">
        <Image
            className="transition-transform hover:scale-[1.15]"
            src="/wizard_standalone.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>

        <div className="hidden items-center space-x-8 sm:flex">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="text-lg font-medium transition-colors  hover:text-gray-300"
            >
              {link.name}
            </Link>
          ))}

          <Link href="/premium">
            <div
              className="box-shadow-gold relative rounded-lg px-3 py-2 text-lg font-semibold shadow-lg"
              style={{
                background:
                  "linear-gradient(94.48deg, #DABD4D 16.25%, #D2AF26 91.78%)",
              }}
            >
              <div className="flex items-center">
                <Stars />
                <span className="ml-2">Premium</span>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="block hover:cursor-pointer sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className="text-2xl transition-colors hover:text-gray-300"
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className=" flex flex-col items-center justify-center gap-y-1 sm:hidden"
          >
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="w-full border-y border-blue-900 bg-dark-background p-2 text-center text-2xl font-semibold transition-colors hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}

            <div
              className="w-full border-y border-blue-900 bg-dark-background p-2 text-center text-2xl font-semibold transition-colors hover:text-gray-100"
              style={{
                background:
                  "linear-gradient(94.48deg, #DABD4D 16.25%, #D2AF26 91.78%)",
              }}
            >
              <Link
                className="flex items-center justify-center"
                href={"/premium"}
              >
                <Stars />
                <span className="mx-2">Premium</span>
                <Stars />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Stars = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default mdNavbar;
export { Stars };