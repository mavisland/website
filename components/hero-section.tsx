import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Merhaba, ben <span className="text-primary">Tanju</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
                Modern web teknolojileri ile kullanıcı odaklı çözümler geliştiren yazılım geliştirici
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  İletişime Geç
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">Projelerimi Gör</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:tanju@example.com">
                  <Mail className="h-4 w-4 mr-2" />
                  E-posta
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="/cv.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  CV İndir
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <Image
                src="/professional-developer-portrait.png"
                alt="Tanju - Software Developer"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-background shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
