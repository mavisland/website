import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export interface ProjectFrontmatter {
  title: string;
  summary: string;
  coverImage: string;
  features: string[];
  startDate: string;
  endDate?: string;
  client?: string;
  technologies: string[];
  featured: boolean;
  published: boolean;
  order: number;
  demoUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
}

export interface ProjectData extends ProjectFrontmatter {
  slug: string;
  content: string;
}

export async function getProjectData(
  slug: string
): Promise<ProjectData | null> {
  try {
    const filePath = path.join(process.cwd(), "data/projects", `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as ProjectFrontmatter),
    };
  } catch (error) {
    console.error(`Error loading project data for ${slug}:`, error);
    return null;
  }
}

export async function getAllProjects(): Promise<ProjectData[]> {
  try {
    const projectsDirectory = path.join(process.cwd(), "data/projects");
    const filenames = fs.readdirSync(projectsDirectory);

    const allProjects = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");

        const { data, content } = matter(fileContents);

        return {
          slug,
          content,
          ...(data as ProjectFrontmatter),
        };
      })
      .filter((project) => project.published)
      .sort((a, b) => {
        // First sort by featured (featured projects first)
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;

        // Then sort by order
        return a.order - b.order;
      });

    return allProjects;
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<ProjectData[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((project) => project.featured);
}

export async function parseMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return result.toString();
}
