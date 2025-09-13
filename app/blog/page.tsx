import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BlogList } from "@/components/blog-list";
import { BlogPagination } from "@/components/blog-pagination";

export const metadata = {
  title: "Blog",
  description:
    "Posts about software development, technology and my experiences",
};

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Blog
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Posts about software development, technology and my experiences
              </p>
            </div>
            <BlogList currentPage={currentPage} />
            <BlogPagination currentPage={currentPage} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
