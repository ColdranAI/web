import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Coldran is a Gray Cup Product",
  description:
    "Coldran builds AI chatbots, AI WhatsApp bots, and AI support pages. It's a product of Gray Cup, a company around tea, coffee, and software.",
  openGraph: {
    title: "About | Coldran is a Gray Cup Product",
    description:
      "Coldran builds AI chatbots, AI WhatsApp bots, and AI support pages. It's a product of Gray Cup.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">About</h1>

      <div className="prose prose-neutral">
        <p className="mb-4">
          Coldran builds AI features for businesses: AI chatbots, AI
          WhatsApp bots, AI-powered support pages, and more, so teams can
          give their customers instant, accurate answers.
        </p>

        <p className="mb-4">
          Coldran is a product of{" "}
          <Link
            href="https://graycup.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Gray Cup
          </Link>
          , a company around tea, coffee, and software, founded by Arjun
          Aditya.
        </p>

        <p className="mb-4">
          Arjun still writes code, designs interfaces, and somehow keeps
          moving forward with a cup of tea or coffee in hand, the ritual
          that keeps him sane when the burnout starts creeping in.
        </p>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Other Gray Cup links
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <a
              href="https://graycup.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              graycup.org
            </a>
          </li>
          <li>
            <a
              href="https://graycup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              graycup.com
            </a>
          </li>
          <li>
            <a
              href="https://arjunaditya.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              arjunaditya.xyz
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Buy coffee or tea
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <a
              href="https://graycup.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              graycup.in
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-neutral-800 mt-8 mb-4">
          Bulk coffee or tea
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <a
              href="https://b2b.graycup.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              b2b.graycup.in
            </a>
          </li>
          <li>
            <a
              href="https://bulkgreencoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              bulkgreencoffee.com
            </a>
          </li>
          <li>
            <a
              href="https://bulkctc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              bulkctc.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
