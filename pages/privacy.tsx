import { Navbar, Footer } from "../components";

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div className="min-w-screen flex flex-col items-center overflow-x-hidden p-4">
        <div className="prose prose-invert rounded-xl bg-black/20 p-8 dark-background shadow">
          <div>
            <h1 className="center">Privacy Policy</h1>
            <h4>Last updated: 2022-01-07</h4>
            <p>
              Server Manager Development Team built the Server Manager{" "}
              <a href="https://discord.com">Discord</a> bot application as a{" "}
              <strong>free</strong> service. This SERVICE is provided by the
              Server Manager Development Team at no cost and is intended for use
              as is.
            </p>
            <p>
              This page is used to inform visitors regarding our policies with
              the collection, use, and disclosure of Personal Information if
              anyone decided to use our Service.
            </p>
            <p>
              If you choose to use our Service, then you agree to the collection
              and use of information in relation to this policy. The Personal
              Information that we collect is used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which are accessible in{" "}
              <a href="https://servermanagerbot.ml/invite">Server Manager</a>{" "}
              unless otherwise defined in this Privacy Policy.
            </p>
            <h2>Information Collection and Use</h2>
            <p>
              For a better experience, while using our Service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to{" "}
              <strong>configuration values</strong> for more guild
              customization. This data is then later used for customize
              exclusively for your server.The information that we request will
              be retained by us and used as described in this privacy policy.{" "}
              <strong>
                We do not share this data with any other project than ourselves.
              </strong>
            </p>
            <h2>Service Providers</h2>
            <p>
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>
              We want to inform users of this Service that these third parties
              have access to their Personal Information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </p>
            <h2>Links to Other Sites</h2>
            <p>
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party
              sites or services.
            </p>
            <h1>Changes to This Privacy Policy</h1>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <p>
              <strong>This policy is effective as of 2022-06-03</strong>
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us in{" "}
              <a href="https://servermanagerbot.ml/support">
                our support server
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Privacy;
