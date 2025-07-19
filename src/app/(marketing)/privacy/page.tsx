export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">
        Privacy & Security
      </h1>

      <div className="prose prose-neutral">
        <p className="text-muted-foreground mb-6">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Our Commitment to Privacy
        </h2>
        <p className="mb-4">
          At KitePortfolio, we take your privacy seriously. This policy
          describes what personal information we collect and how we use it. Our
          primary goal is to provide a secure and trustworthy experience.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Information We Collect
        </h2>
        <p className="mb-4">We collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Account Information:</strong> When you create an account, we
            collect your email and authentication details.
          </li>
          <li>
            <strong>Holdings Data:</strong> CSV files containing your holdings
            information that you choose to upload.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use our
            website, such as the features you access and the time spent on the
            site.
          </li>
          <li>
            <strong>Device Information:</strong> Information about the device
            and browser you use to access our service.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          How We Use Your Information
        </h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Provide and maintain our service</li>
          <li>Improve and personalize your experience</li>
          <li>Communicate with you about your account or our service</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>
            Protect against unauthorized access and potential security threats
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Data Security
        </h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. Your holdings data is processed locally in your browser
          whenever possible, and we do not store your actual portfolio data on
          our servers.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Data Retention
        </h2>
        <p className="mb-4">
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this privacy policy, unless a longer
          retention period is required by law.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Third-Party Services
        </h2>
        <p className="mb-4">
          KitePortfolio uses third-party services for analytics and
          functionality. These services may collect information sent by your
          browser as part of their operations. We do not share your personal
          information with third parties except as described in this policy.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Your Rights
        </h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to our processing of your information</li>
          <li>
            Request a copy of your information in a structured, machine-readable
            format
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new policy on this page and updating the
          "Last updated" date.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          through our Discord server or via{" "}
          <a
            href="mailto:meow@nermalcat69.com"
            className="text-blue-700 underline"
          >
            meow@nermalcat69.com
          </a>
          .
        </p>

        <p className="text-sm text-muted-foreground mt-10">
          Note: KitePortfolio is not affiliated with Zerodha or endorsed by
          them.
        </p>
      </div>
    </div>
  );
}
