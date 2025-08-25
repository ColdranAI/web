import { Metadata } from "next";
import Link from "next/link";
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
  Coffee,
  Code,
  Zap,
  MapPin,
  Calendar,
  Award,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Arjun Aditya | The Mastermind Behind the Code",
  description:
    "Get to know Arjun Aditya, the solo developer who built this entire platform. His journey, skills, and the story behind the one-person tech empire.",
  openGraph: {
    title: "About Arjun Aditya | The Mastermind Behind the Code",
    description:
      "Get to know Arjun Aditya, the solo developer who built this entire platform.",
  },
};

export default function AboutArjunPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6">
                <Heart className="w-4 h-4 mr-2" />
                The Story Behind the Code
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Meet
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}
                  Arjun Aditya(dummy page rn)
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                The one-person tech army who turned caffeine into code and
                dreams into digital reality. This is the story of how one
                developer decided to build an entire platform solo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The Origin Story</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Arjun's journey into the world of development started with a
                    simple question: "What if I could build this better?" That
                    question led to countless late nights, an unhealthy
                    relationship with energy drinks, and eventually, this entire
                    platform.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    What started as a side project quickly evolved into a
                    full-scale operation. Armed with nothing but determination,
                    a mechanical keyboard, and an impressive collection of
                    programming socks, Arjun set out to prove that sometimes,
                    one person can indeed do the work of an entire team.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Today, he continues to push the boundaries of what's
                    possible with modern web technologies, all while maintaining
                    his reputation as the most productive one-person development
                    team in existence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Philosophy & Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">
                        "Code with Purpose"
                      </h4>
                      <p className="text-muted-foreground">
                        Every line of code should solve a real problem. No
                        bloat, no unnecessary complexity.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">
                        "Quality over Quantity"
                      </h4>
                      <p className="text-muted-foreground">
                        Better to have one well-crafted feature than ten
                        half-baked ones.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">
                        "User-First Design"
                      </h4>
                      <p className="text-muted-foreground">
                        Technology should serve people, not the other way
                        around.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Wherever WiFi is Strong
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Coding Since</p>
                      <p className="text-sm text-muted-foreground">
                        The Dawn of Time
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Fuel of Choice</p>
                      <p className="text-sm text-muted-foreground">
                        Coffee (Obviously)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Favorite Language</p>
                      <p className="text-sm text-muted-foreground">
                        TypeScript
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Bun</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">Built entire platform solo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">
                      0 production bugs (this week)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">Master of Stack Overflow</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">Can debug in sleep</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            By the Numbers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">
                  Lines of Code
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Availability
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-muted-foreground">Team Size</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-8">
            Whether you want to discuss code, share ideas, or just say hi, Arjun
            is always up for a good conversation (especially if it involves
            tech).
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
          </div>

          <div className="space-x-4">
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <Link href="/team">
              <Button variant="outline" size="lg">
                Back to Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
