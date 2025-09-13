import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { getProjects, type Project } from "@/lib/supabase-service";
import { LoadingSpinner } from "@/components/loading-spinner";

export async function FeaturedProjects() {
  const allProjects = await getProjects();

  if (!allProjects || allProjects.length === 0) {
    return <LoadingSpinner />;
  }

  // Filter featured projects and limit to 3
  const featuredProjects = allProjects
    .filter((project) => project.featured)
    .slice(0, 3);
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Some of the projects I developed and the technologies I used in
            them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.cover_image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4 text-pretty">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies &&
                    project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href={`/projects/${project.id}`}>View</Link>
                  </Button>
                  {project.demo_url && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.github_url && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        View Source
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
