import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import {
  getProjectById,
  getProjects,
  type Project,
} from "@/lib/supabase-service";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = await getProjectById(params.id);

  if (!project) {
    return {
      title: "Proje Bulunamadı - Tanju",
    };
  }

  return {
    title: `${project.title} - Tanju`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const project = await getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="py-20">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
            </div>

            {/* Project Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies &&
                    project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                </div>

                <div className="flex gap-4">
                  {project.demo_url && (
                    <Button asChild>
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.github_url && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative">
                <Image
                  src={project.cover_image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">
                      About the Project
                    </h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      {project.content &&
                        project.content.split("\n").map((paragraph, index) => (
                          <p key={index} className="mb-4 text-pretty">
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-4">Features</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.screenshots.map((screenshot, index) => (
                          <Image
                            key={index}
                            src={screenshot || "/placeholder.svg"}
                            alt={`${project.title} screenshot ${index + 1}`}
                            width={400}
                            height={300}
                            className="rounded-lg border"
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Project Information</h3>
                    <div className="space-y-4">
                      {project.client && (
                        <div className="flex items-center gap-3">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div className="text-sm font-medium">Client</div>
                            <div className="text-sm text-muted-foreground">
                              {project.client}
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Created</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(project.created_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                              }
                            )}
                          </div>
                        </div>
                      </div>
                      {project.updated_at && (
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div className="text-sm font-medium">Updated</div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(project.updated_at).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies &&
                        project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Project Links</h3>
                    <div className="space-y-3">
                      {project.demo_url && (
                        <Button className="w-full" asChild>
                          <a
                            href={project.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                          asChild
                        >
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
