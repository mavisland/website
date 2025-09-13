import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

// Mock blog data - in a real app, this would come from a database
const allBlogPosts = [
  {
    id: 1,
    title: "Next.js 15 ile Modern Web Geliştirme",
    excerpt:
      "Next.js 15'in yeni özelliklerini keşfedin ve modern web uygulamaları geliştirme sürecinizi nasıl hızlandırabileceğinizi öğrenin. App Router, Server Components ve daha fazlası.",
    content: `Next.js 15, React ekosisteminde önemli bir dönüm noktası oldu. Bu yazıda, yeni sürümün getirdiği özellikleri ve bunların geliştirme sürecimize etkilerini inceleyeceğiz.

## App Router'ın Gücü

Next.js 13 ile tanıtılan App Router, 15. sürümde daha da olgunlaştı. Artık daha kararlı ve performanslı bir şekilde kullanabiliyoruz.

## Server Components

React Server Components, sunucu tarafında render edilen bileşenler sayesinde performansı artırıyor ve SEO'yu iyileştiriyor.

## Turbopack

Webpack'in yerini alan Turbopack, geliştirme sürecini hızlandırıyor ve daha iyi bir geliştirici deneyimi sunuyor.`,
    publishedAt: "2024-01-15",
    readTime: "5 dk",
    category: "Web Development",
    author: "Tanju",
    image: "/blog-nextjs-15.png",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
  },
  {
    id: 2,
    title: "Laravel ile API Geliştirme Best Practices",
    excerpt:
      "Laravel framework'ü kullanarak güvenli ve ölçeklenebilir API'ler geliştirmek için en iyi uygulamalar ve ipuçları. Authentication, validation ve error handling konularını ele alıyoruz.",
    content: `Laravel, PHP dünyasının en popüler framework'lerinden biri. Bu yazıda, Laravel ile API geliştirirken dikkat edilmesi gereken noktaları ele alacağız.

## API Resource Kullanımı

Laravel'in API Resource sınıfları, JSON response'larınızı standardize etmenin en iyi yoludur.

## Authentication ve Authorization

Sanctum kullanarak güvenli authentication sistemi kurma.

## Validation ve Error Handling

Form Request sınıfları ile validation ve tutarlı error handling.`,
    publishedAt: "2024-01-10",
    readTime: "8 dk",
    category: "Backend",
    author: "Tanju",
    image: "/blog-laravel-api.png",
    tags: ["Laravel", "PHP", "API", "Backend"],
  },
  {
    id: 3,
    title: "TypeScript ile Tip Güvenli Kod Yazma",
    excerpt:
      "TypeScript kullanarak daha güvenli ve sürdürülebilir JavaScript kodu yazmanın yollarını keşfedin. Interface'ler, generic'ler ve advanced type'lar hakkında detaylı bilgi.",
    content: `TypeScript, JavaScript'e statik tip kontrolü getiren güçlü bir araç. Bu yazıda, TypeScript'in avantajlarını ve en iyi uygulamalarını inceleyeceğiz.

## Interface ve Type Tanımları

Kodunuzu daha okunabilir ve sürdürülebilir hale getiren interface tanımları.

## Generic Types

Yeniden kullanılabilir ve esnek kod yazmanın anahtarı generic'ler.

## Advanced Types

Union types, intersection types ve conditional types ile güçlü tip sistemleri.`,
    publishedAt: "2024-01-05",
    readTime: "6 dk",
    category: "JavaScript",
    author: "Tanju",
    image: "/blog-typescript.png",
    tags: ["TypeScript", "JavaScript", "Programming", "Types"],
  },
  {
    id: 4,
    title: "React Hook'ları ile State Yönetimi",
    excerpt:
      "React Hook'larını etkili bir şekilde kullanarak component state'ini yönetme teknikleri. useState, useEffect, useContext ve custom hook'lar hakkında pratik örnekler.",
    content: `React Hook'ları, functional component'lerde state ve lifecycle yönetimini mümkün kılan güçlü araçlar.

## useState Hook'u

Component state'ini yönetmenin en temel yolu.

## useEffect Hook'u

Side effect'leri yönetmek için kullanılan hook.

## Custom Hook'lar

Kendi hook'larınızı yazarak kod tekrarını önleme.`,
    publishedAt: "2023-12-28",
    readTime: "7 dk",
    category: "React",
    author: "Tanju",
    image: "/blog-react-hooks.png",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
  },
  {
    id: 5,
    title: "CSS Grid ile Modern Layout Tasarımı",
    excerpt:
      "CSS Grid kullanarak responsive ve esnek layout'lar oluşturma teknikleri. Grid container, grid items ve responsive design patterns hakkında kapsamlı rehber.",
    content: `CSS Grid, modern web tasarımında layout oluşturmanın en güçlü yollarından biri.

## Grid Container ve Items

Grid sisteminin temel yapı taşları.

## Responsive Grid Patterns

Farklı ekran boyutları için esnek grid yapıları.

## Grid vs Flexbox

Hangi durumda hangisini kullanmalı?`,
    publishedAt: "2023-12-20",
    readTime: "9 dk",
    category: "CSS",
    author: "Tanju",
    image: "/blog-css-grid.png",
    tags: ["CSS", "Grid", "Layout", "Responsive Design"],
  },
  {
    id: 6,
    title: "Docker ile Geliştirme Ortamı Kurulumu",
    excerpt:
      "Docker kullanarak tutarlı geliştirme ortamları oluşturma. Container'lar, Docker Compose ve production deployment stratejileri hakkında pratik bilgiler.",
    content: `Docker, geliştirme ve production ortamları arasındaki tutarsızlıkları ortadan kaldıran güçlü bir araç.

## Container Nedir?

Container teknolojisinin temelleri.

## Docker Compose

Multi-container uygulamalar için orkestrasyon.

## Production Deployment

Docker ile production ortamına deployment.`,
    publishedAt: "2023-12-15",
    readTime: "10 dk",
    category: "DevOps",
    author: "Tanju",
    image: "/blog-docker.png",
    tags: ["Docker", "DevOps", "Containers", "Deployment"],
  },
  {
    id: 7,
    title: "Vue.js 3 Composition API Rehberi",
    excerpt:
      "Vue.js 3'ün Composition API'sini kullanarak daha organize ve yeniden kullanılabilir kod yazma teknikleri. Setup function, reactive data ve composables hakkında detaylar.",
    content: `Vue.js 3'ün Composition API'si, component logic'ini organize etmenin yeni bir yolunu sunuyor.

## Setup Function

Composition API'nin kalbi olan setup function.

## Reactive Data

ref ve reactive ile reaktif veri yönetimi.

## Composables

Logic'i yeniden kullanılabilir hale getirme.`,
    publishedAt: "2023-12-10",
    readTime: "8 dk",
    category: "Vue.js",
    author: "Tanju",
    image: "/blog-vue-composition.png",
    tags: ["Vue.js", "Composition API", "JavaScript", "Frontend"],
  },
  {
    id: 8,
    title: "MySQL Performans Optimizasyonu",
    excerpt:
      "MySQL veritabanı performansını artırma teknikleri. Index kullanımı, query optimization ve database design best practices hakkında kapsamlı rehber.",
    content: `MySQL performansını artırmak için dikkat edilmesi gereken önemli noktalar.

## Index Stratejileri

Doğru index'leme ile query performansını artırma.

## Query Optimization

Slow query'leri tespit etme ve optimize etme.

## Database Design

Performanslı veritabanı tasarımı prensipleri.`,
    publishedAt: "2023-12-05",
    readTime: "12 dk",
    category: "Database",
    author: "Tanju",
    image: "/blog-mysql-optimization.png",
    tags: ["MySQL", "Database", "Performance", "Optimization"],
  },
  {
    id: 9,
    title: "Tailwind CSS ile Hızlı UI Geliştirme",
    excerpt:
      "Tailwind CSS utility-first yaklaşımı ile hızlı ve tutarlı kullanıcı arayüzleri oluşturma. Component patterns ve responsive design teknikleri.",
    content: `Tailwind CSS, utility-first yaklaşımı ile CSS yazma şeklimizi değiştiren bir framework.

## Utility-First Yaklaşımı

Neden utility classes kullanmalıyız?

## Component Patterns

Tailwind ile component oluşturma stratejileri.

## Responsive Design

Mobile-first responsive tasarım.`,
    publishedAt: "2023-11-30",
    readTime: "6 dk",
    category: "CSS",
    author: "Tanju",
    image: "/blog-tailwind-css.png",
    tags: ["Tailwind CSS", "CSS", "UI", "Frontend"],
  },
  {
    id: 10,
    title: "Git ile Versiyon Kontrolü Best Practices",
    excerpt:
      "Git kullanarak etkili versiyon kontrolü yapma teknikleri. Branching strategies, commit messages ve team collaboration için en iyi uygulamalar.",
    content: `Git, modern yazılım geliştirmede vazgeçilmez bir araç. Bu yazıda Git'i etkili kullanma yollarını ele alacağız.

## Branching Strategies

Git Flow, GitHub Flow ve diğer branching modelleri.

## Commit Messages

Anlamlı ve tutarlı commit mesajları yazma.

## Team Collaboration

Takım çalışmasında Git kullanımı.`,
    publishedAt: "2023-11-25",
    readTime: "9 dk",
    category: "Tools",
    author: "Tanju",
    image: "/blog-git-best-practices.png",
    tags: ["Git", "Version Control", "Collaboration", "Tools"],
  },
]

const POSTS_PER_PAGE = 10

interface BlogListProps {
  currentPage: number
}

export function BlogList({ currentPage }: BlogListProps) {
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const posts = allBlogPosts.slice(startIndex, endIndex)

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Card key={post.id} className="group hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="relative overflow-hidden rounded-lg h-48 md:h-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" asChild className="group/button p-0 h-auto">
                  <Link href={`/blog/${post.id}`}>
                    Devamını Oku
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export { allBlogPosts }
