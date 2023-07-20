import Individual from "./Individual";
import vnziee from "../../public/vnziee.png";

const Team = () => {
  const teamData = data();
  const staffData = data2();
  const betaTestersData = data3();

  return (
    <div className="flex min-h-[calc(100vh-92px)] flex-col items-center justify-around gap-y-8 py-12 px-36">
      <div className="mb-12 text-center font-heading text-6xl">
        Meet the Crew
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
      <div className="mb-10 text-center font-heading text-4xl">
        No Staff team just yet!
      </div>
      {/* <div className="flex w-full flex-wrap justify-around gap-y-24">
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
      </div> */}
      <br/>
      <div className="mb-12 text-center font-heading text-6xl">
        Beta Testers
      </div>
      <div className="mb-10 text-center font-heading text-4xl">
        Beta Testers not listed yet!
      </div>
      {/* <div className="flex w-full flex-wrap justify-around gap-y-24">
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
      </div> */}

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
        website: "https://nziie.xyz",
        discord: "https://discordapp.com/users/550476809280421903",
        github: "https://github.com/Nzii3",
      },
      image: vnziee,
      gradient: "from-[#3f09ff] to-[#830862]",
    },

  ];
};

const data2 = () => {
  return [
  ];
};

const data3 = () => {
  return [
  ];
};

