import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog-markdown-loader";

const POSTS_PER_PAGE = 10;

interface BlogPaginationProps {
  currentPage: number;
}

export async function BlogPagination({ currentPage }: BlogPaginationProps) {
  // Fetch blog posts from markdown files
  const blogPosts = await getAllBlogPosts();

  // Calculate total number of posts
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (totalPages <= 1) return null;

  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <Button variant="outline" asChild disabled={!hasPrevPage}>
        <Link href={`/blog?page=${currentPage - 1}`}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Link>
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? "default" : "outline"}
            size="sm"
            asChild
          >
            <Link href={`/blog?page=${page}`}>{page}</Link>
          </Button>
        ))}
      </div>

      <Button variant="outline" asChild disabled={!hasNextPage}>
        <Link href={`/blog?page=${currentPage + 1}`}>
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}
