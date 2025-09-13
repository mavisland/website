import { createServerSupabaseClient } from "./supabase";

export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  cover_image?: string;
  author_id?: number;
  category?: string;
  read_time?: string;
  tags?: string[];
};

export async function getBlogPosts() {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return data as Post[];
}

export async function getBlogPostBySlug(slug: string) {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }

  return data as Post;
}

export type Project = {
  id: number;
  title: string;
  slug: string;
  description?: string;
  content: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  cover_image?: string;
  github_url?: string;
  demo_url?: string;
  technologies?: string[];
  featured?: boolean;
  client?: string;
  features?: string[];
  screenshots?: string[];
};

export async function getProjects() {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data as Project[];
}

export async function getProjectById(id: string) {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .eq("published", true)
    .single();

  if (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    return null;
  }

  return data as Project;
}
