import Individual from "./Individual";
import vnziee from "../../public/vnziee.png";
import john from "../../public/john.png";
import stryker from "../../public/strykera.png";
import anon from "../../public/anon.png";
import neb from "../../public/neb.png";
import scripted from "../../public/scripted.gif";
import rishaune from "../../public/rishaune.png"
import aiko from "../../public/aiko.png";
import dinotech from "../../public/dinotech.png";
import vixen from "../../public/vixen.gif";

const Team = () => {
  const teamData = data();
  const staffData = data2();
  const betaTestersData = data3();

  return (
    <div className="flex min-h-[calc(100vh-92px)] flex-col items-center justify-around gap-y-8 py-12 px-36">
      <div className="mb-12 text-center font-heading text-6xl">
        Meet the Developers
      </div>

      <div className="flex w-full flex-wrap justify-around gap-y-24">
        {teamData.map((member, index) => (
          <div key={index}>
            <Individual
              name={member.name}
              about={member.about}
              role={member.role}
              image={member.image}
              socials={member.social}
              gradient={member?.gradient}
            />
          </div>
        ))}
      </div>
      <br/>
      <div className="mb-12 text-center font-heading text-6xl">
        Staff Team
      </div>
      <div className="flex w-full flex-wrap justify-around gap-y-24">
        {staffData.map((member, index) => (
          <div key={index}>
            <Individual
              name={member.name}
              about={member.about}
              role={member.role}
              image={member.image}
              socials={member.social}
              gradient={member?.gradient}
            />
          </div>
        ))}
      </div>
      <br/>
      <div className="mb-12 text-center font-heading text-6xl">
        Beta Testers
      </div>
      <div className="flex w-full flex-wrap justify-around gap-y-24">
        {betaTestersData.map((member, index) => (
          <div key={index}>
            <Individual
              name={member.name}
              about={member.about}
              role={member.role}
              image={member.image}
              socials={member.social}
              gradient={member?.gradient}
            />
          </div>
        ))}
      </div>

    </div>
  );
};
export default Team;

const data = () => {
  return [
    {
      name: "vNziie--#7777",
      role: "Core Developer",
      about: `"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." - notsorealsanta`,
      social: {
        website: "https://nziie.is-a.dev",
        discord: "https://discordapp.com/users/550476809280421903",
        github: "https://github.com/Nzii3",
      },
      image: vnziee,
      gradient: "from-[#3610bb] to-[#9b0071]",
    },
    {
      name: "Neb#7507",
      role: "Development Team",
      about: "",
      social: {
        discord: "https://discordapp.com/users/691749834352361574",
      },
      image: neb,
      gradient: "from-[#2db4d4] to-[#4f4f4f]",
    },
    {
      name: "Jonfirexbox#8859",
      role: "Development Team",
      about:
        "Hi! My name is Jon and im part of the Dev Team for Server Manager, I come up with most of the new things we have added, but I don’t code for the bot thats Nziie’s job! Also if you have any ideas for Server Manager, let us know!!",
      social: {
        website: "https://kyro3400.github.io",
        discord: "https://discordapp.com/users/856176853719187506",
      },
      image: john,
      gradient: "from-[#f5c2eb] to-[#fefefe]",
    },
    {
      name: "Stryker3k Jnr#0966",
      role: "Development Team",
      about:
        "Hello! I'm Stryker. Apart of the development team for Server Manager. I help with managing the server and coming up with new things to add with the Project Advisors and other Development Team members. If you have any suggestions you wish to add, please don't hesite to create a suggestion post on our community form and we'll have a look!",
      social: {
        twitter: "https://twitter.com/Stryker3K_Jnr",
        discord: "https://discordapp.com/users/467929680645849100",
      },
      image: stryker,
      gradient: "from-[#2745cf] to-[#02030b]",
    },
    {
      name: "AnonDev#4280",
      role: "Project Advisor",
      about:
        "Hi, I'm AnonDev. I help with managing Server Manager Discord support server. I also take care about hosting stuff and I make sure that Server Manager has low latency and is up and running 24/7. If you are looking for a linux server manager or need hosting for your bot, feel free to contact me. You can join my Discord server to learn more about my projects and get support.",
      social: {
        website: "https://anondev.ml",
        discord: "https://discordapp.com/users/546000222300536844",
      },
      image: anon,
      gradient: "from-[#2875BD] to-[#84B89F]",
    },

  ];
};

const data2 = () => {
  return [
    {
      name: "Rishaune#6542",
      role: "Moderator",
      about:
        " ",
      social: {
        discord: "https://discordapp.com/users/944392197493641256"
      },
      image: rishaune,
      gradient: "",
    },
    {
      name: "Aiko#5971",
      role: "Moderator",
      about:
        "The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
      social: {
        discord: "https://discordapp.com/users/677288677717835796"
      },
      image: aiko,
      gradient: "from-[#0079ff] to-[#00fff5]",
    },
  ];
};

const data3 = () => {
  return [
    {
      name: "DinoTech#0873",
      role: "Beta Tester",
      about:
        " ",
      social: {
        discord: "https://discordapp.com/users/717300628728053792"
      },
      image: dinotech,
      gradient: "from-[#7ee87d] to-[#296b2e]",
    },
    {
      name: "√∞ Vixen ゴゴゴ#9667",
      role: "Beta Tester",
      about:
        " ",
      social: {
        discord: "https://discordapp.com/users/750034738751733883"
      },
      image: vixen,
      gradient: "",
    },
  ];
};
