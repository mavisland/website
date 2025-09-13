import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description:
      "Laravel ve Vue.js ile geliştirilmiş modern e-ticaret çözümü. Ödeme entegrasyonları ve admin paneli dahil.",
    image: "/ecommerce-dashboard.png",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Proje Yönetim Sistemi",
    description: "Next.js ve Supabase kullanılarak geliştirilen takım çalışması için proje yönetim uygulaması.",
    image: "/project-management-dashboard.png",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Blog CMS",
    description: "PHP ve MySQL ile geliştirilmiş içerik yönetim sistemi. SEO optimizasyonu ve çoklu dil desteği.",
    image: "/blog-cms-interface.jpg",
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Öne Çıkan Projeler</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Geliştirdiğim bazı projeler ve kullandığım teknolojiler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4 text-pretty">{project.description}</CardDescription>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href={`/projects/${project.id}`}>Detaylar</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Kod
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">Tüm Projeleri Gör</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
