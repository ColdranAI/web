import { getCaseStudy, getAllSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Building2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("case-studies");
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} - Case Study | Coldran`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: "article",
      publishedTime: caseStudy.date,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
      {/* Back Button */}
      <Link href="/case-studies">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Button>
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="secondary">{caseStudy.industry}</Badge>
          {caseStudy.featured && <Badge variant="outline">Featured</Badge>}
          {caseStudy.tags?.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {caseStudy.title}
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          {caseStudy.description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>{caseStudy.client}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(caseStudy.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </span>
          </div>
        </div>
      </header>

      {/* Results Section */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Key Results</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.results.map((result, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border rounded-lg"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {result.value}
                </div>
                <div className="font-medium mb-1">{result.metric}</div>
                {result.description && (
                  <div className="text-sm text-muted-foreground">
                    {result.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Separator className="mt-12" />
        </section>
      )}

      {/* Content */}
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="prose prose-lg max-w-none">
          <pre>{caseStudy.content}</pre>
        </div>
      </article>

      {/* CTA Section */}
      <section className="mt-16 text-center p-8 bg-muted/50 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to achieve similar results?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let's discuss how we can help transform your customer experience and
          drive meaningful business outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/enterprise-contact">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/case-studies">
            <Button variant="outline" size="lg">
              View More Case Studies
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
