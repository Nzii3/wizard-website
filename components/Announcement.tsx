import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Announcement = ({ text, link }: { text: string; link: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && text !== "" && text !== undefined) {
      const announcement = localStorage.getItem("announcement");

      if (announcement !== text) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, []);

  const onClose = () => {
    setIsOpen(false);
    localStorage.setItem("announcement", text);
  };

  return (
    <>
      {isOpen && text && (
        <AnimatePresence>
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
            transition={{
              duration: 0.25,
            }}
            className="px- group relative flex w-full items-center justify-between bg-dark-background py-2 px-3 text-center text-2xl font-bold"
          >
            <div className=""></div>
            <Link
              className={`${!link && "pointer-events-none"}`}
              target={link ? "_blank" : ""}
              href={link || "#"}
            >
              <div className="inline-block underline">
                {text}

                {link && (
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 hidden transition-transform group-hover:translate-x-1 sm:inline-block"
                  />
                )}
              </div>
            </Link>

            <FontAwesomeIcon
              onClick={onClose}
              icon={faXmark}
              className="rounded-full px-2 py-1 transition-all hover:cursor-pointer hover:bg-black/20"
            />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};
export default Announcement;
