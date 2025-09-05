import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Twitter,
  CupSoda,
  Code,
  Zap,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | Meet the Solo Developer Behind the Magic",
  description:
    "Meet Arjun Aditya, the one-person army who built this entire platform. Yes, just one person. We're as surprised as you are.",
  openGraph: {
    title: "Our Team | Meet the Solo Developer Behind the Magic",
    description:
      "Meet Arjun Aditya, the one-person army who built this entire platform.",
  },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            <Users className="w-4 h-4 mr-2" />
            Team of 1 (Yes, Really)
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Meet Our Entire Team
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're not like other companies with hundreds of employees. We have
            something better:
            <strong>one incredibly talented developer</strong> who somehow
            manages to do the work of an entire engineering department.
          </p>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Dream Team</h2>
            <p className="text-muted-foreground">
              Population: 1. Impact: Immeasurable.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <Image
                    src="/arjun.jpg"
                    alt="Arjun Aditya"
                    className="rounded-full"
                    width={128}
                    height={128}
                  />
                </div>

                <CardTitle className="text-2xl mb-2">Arjun Aditya</CardTitle>
                <CardDescription className="text-lg">
                  Founder, CEO, CTO, Lead Developer, DevOps Engineer, QA Tester,
                  Product Manager, and Cool Person
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    "I don't always write code, but when I do, I prefer to do it
                    alone. Stay productive, my friends."
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Lines of Code Written:
                    </span>
                    <Badge variant="outline">∞ (Lost count)</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Lemonade Consumed:
                    </span>
                    <Badge variant="outline">Dangerous Levels</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Sleep Schedule:</span>
                    <Badge variant="outline">Sleeps Whenever He wants</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Debugging Skills:
                    </span>
                    <Badge variant="outline">Legendary</Badge>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <a
                    href="https://github.com/nermalcat69"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nermalcat69/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                  <a
                    href="https://twitter.com/arjunships"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Fun Facts About Our Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Size</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">1</p>
                <p className="text-sm text-muted-foreground">
                  Quality over quantity. We believe in the power of one
                  incredibly skilled developer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Office Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">∞</p>
                <p className="text-sm text-muted-foreground">
                  Wherever Arjun's laptop is, that's our headquarters. Very
                  flexible work environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Meeting Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">
                  No unnecessary meetings when you're the only one in the room.
                  Peak productivity achieved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-muted-foreground mb-8">
            We're not currently hiring (our office space is limited to one
            desk), but feel free to reach out if you want to grab coffee and
            talk code!
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <Link href="/about-arjun">
              <Button variant="outline" size="lg">
                Learn More About Arjun
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
