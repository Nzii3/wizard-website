import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Stars } from "../Navbar";

const Card = ({
  type,
  cost,
  link,
  features,
}: {
  type: string;
  cost: number;
  link: string;
  features: string[];
}) => {
  return (
    <div className="box-shadow-black flex w-full flex-col gap-y-3 rounded-xl bg-black/70 py-6 px-3 sm:w-[25rem] sm:px-6">
      <div className="text-center font-heading text-4xl">{type}</div>
      <div className="mb-4 flex items-center justify-center gap-x-2 text-xl">
        <span className="text-3xl font-bold text-green-400">${cost}</span> per
        month
      </div>

      <div className="flex flex-col gap-y-2">
        {features.map((feature, index) => (
          <Feature key={index} title={feature} />
        ))}
      </div>

      <div className="my-4 flex grow justify-center px-24">
        <div className="w-full self-end">
          <Link
            className="flex items-center justify-center"
            href={link}
          >
            <div
              className="box-shadow-gold relative rounded-lg px-5 py-3  text-lg font-semibold shadow-lg "
              style={{
                background:
                  "linear-gradient(94.48deg, #DABD4D 16.25%, #D2AF26 91.78%)",
              }}
            >
              <span className="text-xl font-bold">Subscribe</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="rounded-full bg-black/20 p-2">
        <FontAwesomeIcon icon={faCheck} className="text-green-400" size="xl" />
      </div>
      <div className="flex flex-col gap-y-1">
        <span className="">{title}</span>
      </div>
    </div>
  );
};
export default Card;
