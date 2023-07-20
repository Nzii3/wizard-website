import Image from "next/image";
import Link from "next/link";
import logo from "../public/wizard_standalone.png";
const Footer = () => {
  const usefulLinks = [
    {
      name: "Invite to Server",
      href: "/invite",
    },
    {
      name: "Team",
      href: "/team",
    },
    {
      name: "Premium",
      href: "/premium",
    },
  ];

  const supportLinks = [
    {
      name: "Support",
      href: "/support",
    },
    {
      name: "Documentation",
      href: "https://docs.servermanagerbot.ml",
    },
    {
      name: "Troubleshooting",
      href: "https://docs.servermanagerbot.ml/troubleshooting",
    },
  ];

  const legalLinks = [
    {
      name: "Terms of Service",
      href: "/terms",
    },
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
  ];

  const otherLinks = [
    {
      name: "Updates",
      href: "https://docs.servermanagerbot.ml/updates",
    },
    {
      name: "Roadmap",
      href: "https://docs.servermanagerbot.ml/roadmap",
    },
    {
      name: "Vote on Top.gg",
      href: "https://top.gg/bot/999132132754600016/vote",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-y-12 bg-[#191A1C] py-[1.875rem] px-4 xl:px-20">
      <div className="flex w-full flex-col items-center justify-between gap-y-6 md:items-start lg:flex-row">
        <div className="flex  flex-col gap-y-2 sm:max-w-sm">
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <Image src={logo} alt="logo" width={35} height={35}/>
            <div className="font-header text-[1.7rem] font-bold sm:text-3xl">
              Wizard
            </div>
          </div>
          <div className="font-body text-center font-medium text-white-300 md:text-left">
            Engage in a global economic community using Wizard, ascend to the pinnacle of the financial hierarchy, and dominate the global rankings!
          </div>
        </div>

        <div className="flex flex-col gap-x-4 gap-y-4 sm:gap-x-16 md:flex-row">
          <div className="flex flex-col gap-y-2">
            <div className="font-header text-center text-2xl font-bold sm:text-left">
              Useful Links
            </div>
            <div className="font-body flex flex-col items-center font-medium text-white-300 md:items-start">
              {usefulLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-y-2 md:items-start">
            <div className="font-header text-2xl font-bold">Support</div>
            <div className="font-body flex flex-col  items-center font-medium  text-white-300 md:items-start">
              {supportLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-y-2 md:items-start">
            <div className="font-header text-2xl font-bold">Legal</div>
            <div className="font-body flex flex-col items-center font-medium text-white-300 md:items-start">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-between gap-y-2 semimd:flex-row">
        <div className="font-header text-center font-medium md:text-left">
          © Wizard {new Date().getFullYear()}. All rights reserved.{" "}
        </div>
      </div>
    </div>
  );
};
export default Footer;
