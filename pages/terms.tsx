import { Navbar, Footer } from "../components";

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className="min-w-screen flex flex-col items-center overflow-x-hidden p-4">
        <div className="prose prose-invert rounded-xl bg-black/20 p-8 dark-background shadow">
          <h1 className="center">Terms of Service</h1>
          <h4>Last updated: 1/07/2022</h4>
          <p>
            <strong>1.</strong> You may not use the bot in any circumstances of
            violating{" "}
            <a href="https://discord.com/terms">Discord's Terms of Service</a>{" "}
            or{" "}
            <a href="https://discord.com/guidelines">
              Discord's Community Guidelines
            </a>
            .
          </p>
          <p>
            <strong>2.</strong> The bot is provided 'as is' and will not be
            modified to fit a user's expectations and or needs.
          </p>
          <p>
            <strong>3.</strong> We have the right to remove your server's
            configurations at any time if it infringes anyone right's or is
            hurtful/inappropriate in any way.
          </p>
          <p>
            <strong>4.</strong> Trying to tamper with the bot in anyway — not
            configurations — will lead to a permanent blacklist and the bot
            being removed from your server(s).
          </p>
          <p>
            <strong>5.</strong> Spamming broken/erroring commands will lead to a
            permanent blacklist and the bot being removed from your server(s).
          </p>
          <p>
            <strong>6.</strong> Any member of the development team reserve the
            right to take any action against you or your server by, for example
            but not limited to:
          </p>
          <div>
            <ul>
              <li>a) Removing the bot from your server</li>
              <li>
                b) Blacklisting you from Server Manager and all future services
                and projects.
              </li>
            </ul>
          </div>
          <p>
            <strong>7.</strong> If you have violated the Terms of Service and
            have purchased a premium plan, you shall be blacklisted from our
            system with <strong>no refund given</strong>.
          </p>
          <p>
            <strong>8.</strong>{" "}
            <em>
              Whilst we take every possible precaution to ensure the bot is
              exploit proof
            </em>
            , the development team won't be held responsible for any damages
            done to your server. Any exploits or bugs should be reported to the
            support team in the{" "}
            <a href="https://discord.gg/6bCKvP24kb">support server</a>{" "}
            immediately.
          </p>
          <p>
            <strong>9.</strong> Don't use our bot in malicious situations nor in
            servers that break{" "}
            <a href="https://discord.com/terms">Discord's Terms of Service</a>{" "}
            or{" "}
            <a href="https://discord.com/guidelines">
              Discord's Community Guidelines
            </a>
            . <strong>This will result in a blacklist</strong>.
          </p>
          <hr />
          <p>
            ❓{" "}
            <strong>
              Have any questions? Join{" "}
              <a href="https://servermanagerbot.ml/support">
                our support server
              </a>
            </strong>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Terms;
