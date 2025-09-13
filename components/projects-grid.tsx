import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const allProjects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description:
      "Laravel ve Vue.js ile geliştirilmiş modern e-ticaret çözümü. Ödeme entegrasyonları, stok yönetimi ve admin paneli dahil.",
    image: "/ecommerce-dashboard.png",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe", "Redis"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/tanju/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Proje Yönetim Sistemi",
    description:
      "Next.js ve Supabase kullanılarak geliştirilen takım çalışması için proje yönetim uygulaması. Gerçek zamanlı güncellemeler ve işbirliği özellikleri.",
    image: "/project-management-dashboard.png",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://demo-pm.example.com",
    githubUrl: "https://github.com/tanju/project-management",
    featured: true,
  },
  {
    id: 3,
    title: "Blog CMS",
    description:
      "PHP ve MySQL ile geliştirilmiş içerik yönetim sistemi. SEO optimizasyonu, çoklu dil desteği ve medya yönetimi.",
    image: "/blog-cms-interface.jpg",
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    demoUrl: "https://demo-cms.example.com",
    githubUrl: "https://github.com/tanju/blog-cms",
    featured: true,
  },
  {
    id: 4,
    title: "Muhasebe Uygulaması",
    description: "Küçük işletmeler için geliştirilmiş web tabanlı muhasebe ve fatura yönetim sistemi.",
    image: "/accounting-app-dashboard.png",
    technologies: ["Laravel", "MySQL", "Chart.js", "mPDF"],
    demoUrl: "https://demo-accounting.example.com",
    githubUrl: "https://github.com/tanju/accounting-app",
    featured: false,
  },
  {
    id: 5,
    title: "Restoran Menü Sistemi",
    description: "QR kod ile erişilebilen dijital menü sistemi. Restoran sahipleri için admin paneli dahil.",
    image: "/restaurant-menu-system.png",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "QR Code"],
    demoUrl: "https://demo-menu.example.com",
    githubUrl: "https://github.com/tanju/restaurant-menu",
    featured: false,
  },
  {
    id: 6,
    title: "Hava Durumu Uygulaması",
    description: "React ile geliştirilmiş hava durumu uygulaması. Konum tabanlı tahminler ve 7 günlük öngörü.",
    image: "/weather-app-interface.png",
    technologies: ["React", "OpenWeather API", "CSS3", "Geolocation"],
    demoUrl: "https://demo-weather.example.com",
    githubUrl: "https://github.com/tanju/weather-app",
    featured: false,
  },
]

export function ProjectsGrid() {
  const featuredProjects = allProjects.filter((project) => project.featured)
  const otherProjects = allProjects.filter((project) => !project.featured)

  return (
    <div className="space-y-16">
      {/* Featured Projects */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Öne Çıkan Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Diğer Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof allProjects)[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          />
          {project.featured && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Öne Çıkan</Badge>
          )}
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
  )
}
