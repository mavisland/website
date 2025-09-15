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
import {
  getAllProjects,
  getFeaturedProjects,
  type ProjectData,
} from "@/lib/markdown-loader";
import { LoadingSpinner } from "@/components/loading-spinner";

export async function ProjectsGrid() {
  const projects = await getAllProjects();

  if (!projects || projects.length === 0) {
    return <LoadingSpinner />;
  }

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="space-y-16">
      {/* Featured Projects */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          />
          {project.featured && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-2">{project.title}</CardTitle>
        <CardDescription className="mb-4 text-pretty">
          {project.summary}
        </CardDescription>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies &&
            project.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
        </div>

        <div className="flex gap-2">
          <Button size="sm" asChild>
            <Link href={`/projects/${project.slug}`}>Detaylar</Link>
          </Button>
          {project.demoUrl && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-1" />
                Kod
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
