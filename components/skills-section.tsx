import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Node.js", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Veritabanı",
    skills: ["MySQL", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    title: "Araçlar & Diğer",
    skills: ["Git", "Docker", "Vercel", "AWS", "jQuery", "ApexCharts.js", "mPDF", "PhpSpreadsheet"],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Teknik Yetenekler</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Kullandığım teknolojiler ve geliştirme araçları
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
