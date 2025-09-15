import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export interface BlogPostFrontmatter {
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

export interface BlogPost extends BlogPostFrontmatter {
  id: number;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export async function getBlogPostData(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), "data/blog", `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);
    const frontmatter = data as BlogPostFrontmatter;

    return {
      id: parseInt(slug, 10) || Date.now(),
      slug,
      content,
      created_at: frontmatter.date,
      updated_at: frontmatter.date,
      ...frontmatter,
    };
  } catch (error) {
    console.error(`Error loading blog post data for ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogsDirectory = path.join(process.cwd(), "data/blog");
    const filenames = fs.readdirSync(blogsDirectory);

    const allPosts = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const filePath = path.join(blogsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");

        const { data, content } = matter(fileContents);
        const frontmatter = data as BlogPostFrontmatter;

        return {
          id: parseInt(slug, 10) || Date.now(),
          slug,
          content,
          created_at: frontmatter.date,
          updated_at: frontmatter.date,
          ...frontmatter,
        };
      })
      .filter((post) => post.published)
      .sort((a, b) => {
        // Sort by date (newest first)
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    return allPosts;
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}

export async function parseMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return result.toString();
}
