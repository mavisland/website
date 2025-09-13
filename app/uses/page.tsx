import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Code, Palette, Cloud, Zap } from "lucide-react"

export const metadata = {
  title: "Uses - Tanju",
  description: "Yazılım geliştirme için kullandığım cihazlar, yazılımlar ve araçlar",
}

const categories = [
  {
    title: "Bilgisayar & Donanım",
    icon: Monitor,
    items: [
      {
        name: 'MacBook Pro 16" M2 Pro',
        description: "Ana geliştirme makinam. 32GB RAM ve 1TB SSD ile güçlü performans.",
        category: "Laptop",
      },
      {
        name: 'Dell UltraSharp 27" 4K Monitor',
        description: "Kod yazarken ve tasarım yaparken kullandığım harici monitör.",
        category: "Monitör",
      },
      {
        name: "Magic Keyboard",
        description: "Apple'ın kablosuz klavyesi. Türkçe Q layout.",
        category: "Klavye",
      },
      {
        name: "Logitech MX Master 3",
        description: "Ergonomik tasarımı ve hassas tracking ile mükemmel bir mouse.",
        category: "Mouse",
      },
    ],
  },
  {
    title: "Geliştirme Araçları",
    icon: Code,
    items: [
      {
        name: "Visual Studio Code",
        description: "Ana kod editörüm. Çok sayıda extension ile özelleştirdim.",
        category: "Editor",
      },
      {
        name: "PhpStorm",
        description: "PHP ve Laravel projeleri için kullandığım IDE.",
        category: "IDE",
      },
      {
        name: "TablePlus",
        description: "Veritabanı yönetimi için kullandığım modern GUI aracı.",
        category: "Database",
      },
      {
        name: "Postman",
        description: "API geliştirme ve test etme için vazgeçilmez araç.",
        category: "API",
      },
      {
        name: "Git",
        description: "Versiyon kontrolü için. GitHub ve GitLab ile entegre kullanım.",
        category: "Version Control",
      },
      {
        name: "Docker",
        description: "Geliştirme ortamlarını containerize etmek için.",
        category: "DevOps",
      },
    ],
  },
  {
    title: "Tasarım & UI/UX",
    icon: Palette,
    items: [
      {
        name: "Figma",
        description: "UI/UX tasarım ve prototipleme için kullandığım ana araç.",
        category: "Design",
      },
      {
        name: "Adobe Photoshop",
        description: "Görsel düzenleme ve grafik tasarım için.",
        category: "Graphics",
      },
      {
        name: "Canva Pro",
        description: "Hızlı grafik tasarımlar ve sosyal medya içerikleri için.",
        category: "Graphics",
      },
    ],
  },
  {
    title: "Hosting & Deployment",
    icon: Cloud,
    items: [
      {
        name: "Vercel",
        description: "Next.js projelerimi deploy ettiğim ana platform.",
        category: "Hosting",
      },
      {
        name: "DigitalOcean",
        description: "VPS ve cloud hosting için kullandığım servis.",
        category: "Cloud",
      },
      {
        name: "Cloudflare",
        description: "CDN, DNS ve güvenlik için.",
        category: "CDN",
      },
      {
        name: "Supabase",
        description: "Backend-as-a-Service olarak kullandığım platform.",
        category: "BaaS",
      },
    ],
  },
  {
    title: "Üretkenlik & Organizasyon",
    icon: Zap,
    items: [
      {
        name: "Notion",
        description: "Proje yönetimi, not alma ve dokümantasyon için.",
        category: "Productivity",
      },
      {
        name: "Todoist",
        description: "Görev yönetimi ve planlama için kullandığım uygulama.",
        category: "Task Management",
      },
      {
        name: "Slack",
        description: "Takım iletişimi ve proje koordinasyonu için.",
        category: "Communication",
      },
      {
        name: "Zoom",
        description: "Video konferans ve uzaktan toplantılar için.",
        category: "Communication",
      },
    ],
  },
  {
    title: "Mobil & Aksesuarlar",
    icon: Smartphone,
    items: [
      {
        name: "iPhone 14 Pro",
        description: "Ana telefonum. Mobil test ve geliştirme için de kullanıyorum.",
        category: "Phone",
      },
      {
        name: "AirPods Pro 2",
        description: "Müzik dinlemek ve toplantılarda kullandığım kulaklık.",
        category: "Audio",
      },
      {
        name: "iPad Air",
        description: "Tasarım çizimler ve okuma için kullandığım tablet.",
        category: "Tablet",
      },
    ],
  },
]

export default function UsesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Uses</h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Yazılım geliştirme sürecimde kullandığım cihazlar, yazılımlar ve araçlar. Bu liste düzenli olarak
                güncellenmektedir.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-20">
          <div className="container">
            <div className="space-y-16">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              {item.category}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-pretty text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Not</h3>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                Bu liste sürekli güncellenmektedir. Yeni araçlar denediğimde veya mevcut setup'ımda değişiklik
                yaptığımda bu sayfayı güncellerim. Herhangi bir araç hakkında soru sormak isterseniz{" "}
                <a href="/contact" className="text-primary hover:underline">
                  iletişime geçebilirsiniz
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
