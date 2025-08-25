import { getCaseStudies } from "@/lib/mdx";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();
  const featuredCaseStudies = caseStudies.filter((cs) => cs.featured);
  const regularCaseStudies = caseStudies.filter((cs) => !cs.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Case Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how we've helped businesses transform their customer
          experience and achieve remarkable results with our AI-powered
          solutions.
        </p>
      </div>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((caseStudy) => (
              <div
                key={caseStudy.slug}
                className="group relative overflow-hidden rounded-xl border bg-card p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="mb-2">
                    {caseStudy.industry}
                  </Badge>
                  <Badge variant="outline">Featured</Badge>
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {caseStudy.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {caseStudy.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-medium">{caseStudy.client}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(caseStudy.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                </div>

                {/* Results Preview */}
                {caseStudy.results && caseStudy.results.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <div
                        key={index}
                        className="text-center p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-primary">
                          {result.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Link href={`/case-studies/${caseStudy.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">
          {featuredCaseStudies.length > 0
            ? "More Case Studies"
            : "All Case Studies"}
        </h2>

        {regularCaseStudies.length === 0 && featuredCaseStudies.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No case studies yet</h3>
            <p className="text-muted-foreground mb-6">
              We're working on some amazing case studies. Check back soon!
            </p>
            <Link href="/contact">
              <Button>
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCaseStudies.map((caseStudy) => (
              <div
                key={caseStudy.slug}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-md transition-all duration-300"
              >
                <Badge variant="secondary" className="mb-3">
                  {caseStudy.industry}
                </Badge>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {caseStudy.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {caseStudy.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium">{caseStudy.client}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(caseStudy.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>
                </div>

                <Link href={`/case-studies/${caseStudy.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
