export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">
        Terms of Service
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
          1. Introduction
        </h2>
        <p className="mb-4">
          Welcome to KitePortfolio. By using our website and services, you agree
          to comply with and be bound by the following terms and conditions.
          Please review them carefully.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          2. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing or using KitePortfolio, you acknowledge that you have
          read, understood, and agree to be bound by these Terms of Service. If
          you do not agree to these terms, please do not use our service.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          3. Description of Service
        </h2>
        <p className="mb-4">
          KitePortfolio provides a platform for Zerodha users to track their
          stock holdings without repeated logins. Users can upload their
          holdings CSV file to view live price changes, portfolio value, and
          profit/loss information.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          4. User Accounts
        </h2>
        <p className="mb-4">
          Some features of our service may require you to create an account. You
          are responsible for maintaining the confidentiality of your account
          information and for all activities that occur under your account.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          5. User Content
        </h2>
        <p className="mb-4">
          You retain ownership of any content you upload to our service. By
          uploading content, you grant us a non-exclusive license to use, store,
          and process this content for the purpose of providing our service.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          6. Prohibited Uses
        </h2>
        <p className="mb-4">
          You agree not to use KitePortfolio for any unlawful purpose or in any
          way that could damage, disable, or impair our service. Prohibited
          activities include but are not limited to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Attempting to gain unauthorized access to our systems</li>
          <li>Using our service for any fraudulent or illegal purpose</li>
          <li>Interfering with other users' access to the service</li>
          <li>Uploading malicious code or content</li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          KitePortfolio is provided "as is" without warranties of any kind. We
          are not responsible for any losses or damages resulting from your use
          of our service.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          8. Changes to Terms
        </h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. We will notify
          users of any significant changes by posting the new terms on our
          website.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          9. Governing Law
        </h2>
        <p className="mb-4">
          These terms shall be governed by and construed in accordance with
          applicable laws, without regard to its conflict of law principles.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          10. Contact Us
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
          Note: This is a simplified version of Terms of Service for
          demonstration purposes only.
        </p>
      </div>
    </div>
  );
}
