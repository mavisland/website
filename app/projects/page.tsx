import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata = {
  title: "Projects",
  description:
    "Web applications and projects I developed using different technologies",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Projects
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Web applications and projects I developed using different
                technologies
              </p>
            </div>
            <ProjectsGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
