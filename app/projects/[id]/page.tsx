import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react"

// Mock project data - in a real app, this would come from a database
const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description:
      "Laravel ve Vue.js ile geliştirilmiş modern e-ticaret çözümü. Bu proje, küçük ve orta ölçekli işletmelerin online satış yapabilmesi için geliştirilmiş kapsamlı bir platformdur.",
    longDescription: `Bu e-ticaret platformu, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir çözümdür. 
    
    Proje kapsamında şu özellikler geliştirilmiştir:
    • Kullanıcı kayıt ve giriş sistemi
    • Ürün katalog yönetimi
    • Sepet ve ödeme işlemleri
    • Stok takip sistemi
    • Sipariş yönetimi
    • Admin paneli
    • Raporlama modülü
    
    Backend tarafında Laravel framework'ü kullanılarak RESTful API geliştirilmiş, frontend tarafında ise Vue.js ile modern ve responsive bir kullanıcı arayüzü oluşturulmuştur.`,
    image: "/ecommerce-dashboard.png",
    screenshots: ["/ecommerce-dashboard.png", "/ecommerce-product-page.png", "/ecommerce-checkout.png"],
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe", "Redis", "Docker"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/tanju/ecommerce-platform",
    startDate: "2023-06-01",
    endDate: "2023-09-15",
    client: "Özel Proje",
    features: [
      "Kullanıcı yönetimi ve kimlik doğrulama",
      "Ürün katalog yönetimi",
      "Sepet ve ödeme işlemleri",
      "Stok takip sistemi",
      "Sipariş yönetimi",
      "Admin paneli",
      "Raporlama ve analitik",
      "Responsive tasarım",
    ],
  },
  {
    id: 2,
    title: "Proje Yönetim Sistemi",
    description:
      "Next.js ve Supabase kullanılarak geliştirilen takım çalışması için proje yönetim uygulaması. Gerçek zamanlı güncellemeler ve işbirliği özellikleri içerir.",
    longDescription: `Modern takımların ihtiyaçlarını karşılamak için geliştirilmiş kapsamlı proje yönetim sistemi.
    
    Sistem özellikleri:
    • Proje oluşturma ve yönetimi
    • Görev atama ve takibi
    • Takım üyesi yönetimi
    • Gerçek zamanlı bildirimler
    • Dosya paylaşımı
    • Zaman takibi
    • Raporlama ve analitik
    
    Next.js 13'ün App Router özelliği kullanılarak geliştirilmiş, Supabase ile gerçek zamanlı veritabanı işlemleri sağlanmıştır.`,
    image: "/project-management-dashboard.png",
    screenshots: ["/project-management-dashboard.png", "/project-management-tasks.png", "/project-management-team.png"],
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://demo-pm.example.com",
    githubUrl: "https://github.com/tanju/project-management",
    startDate: "2023-10-01",
    endDate: "2024-01-15",
    client: "Startup Şirketi",
    features: [
      "Proje oluşturma ve yönetimi",
      "Görev atama ve takibi",
      "Takım üyesi yönetimi",
      "Gerçek zamanlı bildirimler",
      "Dosya paylaşımı",
      "Zaman takibi",
      "Kanban board görünümü",
      "Raporlama ve analitik",
    ],
  },
  {
    id: 3,
    title: "Blog CMS",
    description:
      "PHP ve MySQL ile geliştirilmiş içerik yönetim sistemi. SEO optimizasyonu, çoklu dil desteği ve medya yönetimi özellikleri içerir.",
    longDescription: `Bloggerlar ve içerik üreticileri için geliştirilmiş kullanıcı dostu içerik yönetim sistemi.
    
    CMS özellikleri:
    • Makale yazma ve düzenleme
    • Kategori ve etiket yönetimi
    • Medya kütüphanesi
    • SEO optimizasyonu
    • Çoklu dil desteği
    • Yorum sistemi
    • Kullanıcı rolleri
    • Tema yönetimi
    
    Vanilla PHP kullanılarak geliştirilmiş, modern PHP standartlarına uygun olarak kodlanmıştır.`,
    image: "/blog-cms-interface.jpg",
    screenshots: ["/blog-cms-interface.jpg", "/blog-cms-editor.png", "/blog-cms-media.png"],
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery", "TinyMCE"],
    demoUrl: "https://demo-cms.example.com",
    githubUrl: "https://github.com/tanju/blog-cms",
    startDate: "2023-03-01",
    endDate: "2023-05-30",
    client: "Blog Sitesi",
    features: [
      "Makale yazma ve düzenleme",
      "Kategori ve etiket yönetimi",
      "Medya kütüphanesi",
      "SEO optimizasyonu",
      "Çoklu dil desteği",
      "Yorum sistemi",
      "Kullanıcı rolleri",
      "Tema yönetimi",
    ],
  },
]

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    return {
      title: "Proje Bulunamadı - Tanju",
    }
  }

  return {
    title: `${project.title} - Tanju`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="py-20">
          <div className="container">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Projelere Dön
                </Link>
              </Button>
            </div>

            {/* Project Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{project.title}</h1>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Canlı Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Kaynak Kod
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
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
                    <h2 className="text-2xl font-bold mb-4">Proje Hakkında</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      {project.longDescription.split("\n").map((paragraph, index) => (
                        <p key={index} className="mb-4 text-pretty">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Özellikler</h2>
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

                {/* Screenshots */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Ekran Görüntüleri</h2>
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
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Proje Bilgileri</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Başlangıç</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(project.startDate).toLocaleDateString("tr-TR", {
                              year: "numeric",
                              month: "long",
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Bitiş</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(project.endDate).toLocaleDateString("tr-TR", {
                              year: "numeric",
                              month: "long",
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Müşteri</div>
                          <div className="text-sm text-muted-foreground">{project.client}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Teknolojiler</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Proje Linkleri</h3>
                    <div className="space-y-3">
                      <Button className="w-full" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Canlı Demo
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Kaynak Kod
                        </a>
                      </Button>
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
  )
}
