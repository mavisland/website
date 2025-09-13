"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center">
        <div className="container">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
              <h2 className="text-2xl md:text-3xl font-semibold">Sayfa Bulunamadı</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Aradığınız sayfa mevcut değil veya taşınmış olabilir.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Ana Sayfaya Dön
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Geri Git
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
