import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectsGrid } from "@/components/projects-grid"

export const metadata = {
  title: "Projeler - Tanju",
  description: "Geliştirdiğim projeler ve kullandığım teknolojiler",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Projelerim</h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Farklı teknolojiler kullanarak geliştirdiğim web uygulamaları ve projeler
              </p>
            </div>
            <ProjectsGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
