import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "CodeIgniter", "Node.js", "RESTful APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    title: "DevOps & Others",
    skills: ["Git", "Docker", "Vercel", "AWS", "jQuery", "ApexCharts.js", "mPDF", "PhpSpreadsheet"],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Technical Skills</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Technologies and development tools I use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-lg text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
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
