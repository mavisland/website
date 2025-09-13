import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { SkillsSection } from "@/components/skills-section"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProjects />
        <SkillsSection />
        <LatestBlogPosts />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
