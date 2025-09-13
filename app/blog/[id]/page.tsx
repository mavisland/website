import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { allBlogPosts } from "@/components/blog-list";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const post = allBlogPosts.find((p) => p.id === Number.parseInt(params.id));

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = allBlogPosts.find((p) => p.id === Number.parseInt(params.id));

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = allBlogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <article className="py-20">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Blog
                </Link>
              </Button>
            </div>

            {/* Article Header */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  {post.title}
                </h1>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative mb-12">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
                {post.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.trim() === "") {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="mb-4 text-pretty leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Share Button */}
              <div className="flex justify-center mb-12">
                <Button variant="outline" size="lg">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/50">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Related Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.id}
                      className="group hover:shadow-lg transition-shadow"
                    >
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {relatedPost.category}
                        </Badge>
                        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                          <Link href={`/blog/${relatedPost.id}`}>
                            {relatedPost.title}
                          </Link>
                        </CardTitle>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <time dateTime={relatedPost.publishedAt}>
                            {new Date(
                              relatedPost.publishedAt
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
