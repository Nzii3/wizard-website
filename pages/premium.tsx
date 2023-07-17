import { Navbar, Footer, Card } from "../components";
const Premium = () => {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23404eed' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
      className="min-w-screen flex flex-col overflow-x-hidden"
    >
      <Navbar />
      <div className="flex min-h-[calc(100vh-92px)] flex-col flex-wrap items-center justify-around gap-y-8 py-12 px-4 sm:px-36">
        <div className="justify-center text-center font-heading text-6xl">
          Premium Tiers
        </div>

        <div className="flex w-full flex-wrap justify-around gap-10">
          <Card
            type="Mystical User"
            cost={1}
            link="https://www.patreon.com/checkout/nziiedev/6987448"
            features={[
              "1.5x coin booster",
              "1.25x items chance",
              "...And more!",
            ]}
          />
          {/* <Card
            type="Advanced Supporter"
            cost={5}
            link="https://ko-fi.com/summary/35c230b5-e4e1-4b96-a857-f37712ee6e1e"
            features={[
              "All Supporter Tier perks",
              "Basic Bot Hosting Server",
              "Custom branded Server Manager",
              "Customizable bot status"
            ]}
          /> */}
          {/* <Card
            type="Super Supporter"
            cost={5}
            link="https://r.nziie.xyz/server-manager-super-supporter"
            features={[
              "Perks above",
              "Custom bot instance",
              "Branded to your server",
              "Access to customize username, avatar, status, and about me"
            ]}
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Premium;
