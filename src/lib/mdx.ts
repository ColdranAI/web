import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  readingTime: number;
  content: string;
}

interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  date: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  results: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDir = path.join(process.cwd(), "content/blog");

    if (!fs.existsSync(blogDir)) {
      console.log("Blog posts directory not found, returning empty array");
      return [];
    }

    const files = fs.readdirSync(blogDir);
    const posts = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(".mdx", "");
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return {
          slug,
          title: data.title || "",
          description: data.description || "",
          date: data.date || "",
          author: data.author || "",
          tags: data.tags || [],
          published: data.published !== false,
          featured: data.featured || false,
          readingTime: data.readingTime || "5 min read",
          content: content || "",
        };
      })
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  const blogDir = path.join(process.cwd(), "content/blog");
  const filePath = path.join(blogDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      content,
      ...data,
    } as BlogPost;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

export function getCaseStudies(): CaseStudy[] {
  const caseStudiesDir = path.join(process.cwd(), "content/case-studies");

  if (!fs.existsSync(caseStudiesDir)) {
    console.log("Case studies directory not found, returning empty array");
    return [];
  }

  const files = fs.readdirSync(caseStudiesDir);
  const caseStudies = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(caseStudiesDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        content,
        ...data,
      } as CaseStudy;
    });

  return caseStudies
    .filter((cs) => cs.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const caseStudiesDir = path.join(process.cwd(), "content/case-studies");
  const filePath = path.join(caseStudiesDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      content,
      ...data,
    } as CaseStudy;
  } catch (error) {
    console.error(`Error loading case study ${slug}:`, error);
    return null;
  }
}

export function getAllSlugs(type: "blog" | "case-studies"): string[] {
  const directory =
    type === "blog"
      ? path.join(process.cwd(), "content/blog")
      : path.join(process.cwd(), "content/case-studies");

  try {
    const fileNames = fs.readdirSync(directory);
    return fileNames
      .filter((name) => name.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));
  } catch (error) {
    return [];
  }
}
