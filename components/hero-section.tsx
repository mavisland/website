import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Hello, <span className="text-primary">Tanju Yıldız</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
                I’m Full stack developer based in Turkey, and I love coding and simplifying complex systems. I create solutions that streamline business processes using PHP, MySQL, and JavaScript.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <Image
                src="/tanju-yildiz.webp"
                alt="Tanju Yıldız - Full Stack Developer"
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
