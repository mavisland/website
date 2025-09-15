import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { getAllBlogPosts, type BlogPost } from "@/lib/blog-markdown-loader";
import { LoadingSpinner } from "@/components/loading-spinner";

// Extended type for blog posts
type ExtendedPost = BlogPost & {
  image?: string;
  publishedAt?: string;
};

const POSTS_PER_PAGE = 10;

interface BlogListProps {
  currentPage: number;
}

export async function BlogList({ currentPage }: BlogListProps) {
  // Get blog posts from markdown files
  const blogPosts = await getAllBlogPosts();

  // Convert data to ExtendedPost type
  const extendedPosts: ExtendedPost[] = blogPosts.map((post) => ({
    ...post,
    publishedAt: post.created_at,
    image: post.coverImage || "/placeholder.svg",
  }));

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  // Slice the posts for pagination
  const posts = extendedPosts.slice(startIndex, endIndex);

  if (!posts.length) {
    return (
      <div className="text-center py-20">No blog posts available yet.</div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Card key={post.id} className="group hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="relative overflow-hidden rounded-lg h-48 md:h-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt || ""}>
                      {new Date(
                        post.publishedAt || new Date()
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit mb-2">
                  {post.category}
                </Badge>
                <CardTitle className="group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty mb-4">
                  {post.excerpt}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags &&
                    post.tags.slice(0, 3).map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="group/button p-0 h-auto"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
