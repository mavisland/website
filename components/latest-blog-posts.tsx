import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const latestPosts = [
  {
    id: 1,
    title: "Next.js 15 ile Modern Web Geliştirme",
    excerpt:
      "Next.js 15'in yeni özelliklerini keşfedin ve modern web uygulamaları geliştirme sürecinizi nasıl hızlandırabileceğinizi öğrenin.",
    date: "2024-01-15",
    readTime: "5 dk",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Laravel ile API Geliştirme Best Practices",
    excerpt:
      "Laravel framework'ü kullanarak güvenli ve ölçeklenebilir API'ler geliştirmek için en iyi uygulamalar ve ipuçları.",
    date: "2024-01-10",
    readTime: "8 dk",
    category: "Backend",
  },
  {
    id: 3,
    title: "TypeScript ile Tip Güvenli Kod Yazma",
    excerpt: "TypeScript kullanarak daha güvenli ve sürdürülebilir JavaScript kodu yazmanın yollarını keşfedin.",
    date: "2024-01-05",
    readTime: "6 dk",
    category: "JavaScript",
  },
]

export function LatestBlogPosts() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Son Blog Yazıları</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Yazılım geliştirme, teknoloji ve deneyimlerim hakkında yazılar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Badge variant="secondary" className="w-fit mb-2">
                  {post.category}
                </Badge>
                <CardTitle className="group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty mb-4">{post.excerpt}</CardDescription>
                <Button variant="ghost" size="sm" asChild className="group/button p-0 h-auto">
                  <Link href={`/blog/${post.id}`}>
                    Devamını Oku
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">Tüm Yazıları Gör</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
