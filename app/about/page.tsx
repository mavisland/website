import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "About Me",
  description:
    "Information about me, my experiences and educational background as a software developer",
};

const experiences = [
  {
    company: "TechCorp A.Ş.",
    position: "Senior Full Stack Developer",
    period: "2022 - Devam Ediyor",
    description:
      "Laravel ve Next.js kullanarak kurumsal web uygulamaları geliştirme. Takım liderliği ve mentörlük görevleri.",
    technologies: ["Laravel", "Next.js", "MySQL", "Redis", "Docker"],
  },
  {
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "E-ticaret platformları ve CMS sistemleri geliştirme. API tasarımı ve frontend geliştirme.",
    technologies: ["PHP", "Vue.js", "MySQL", "Bootstrap"],
  },
  {
    company: "StartupXYZ",
    position: "Frontend Developer",
    period: "2019 - 2020",
    description:
      "React ve TypeScript kullanarak modern web uygulamaları geliştirme. UI/UX tasarım implementasyonu.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    company: "Freelance",
    position: "Web Developer",
    period: "2018 - 2019",
    description:
      "Küçük ve orta ölçekli işletmeler için web siteleri ve uygulamalar geliştirme.",
    technologies: ["PHP", "jQuery", "MySQL", "Bootstrap"],
  },
];

const education = [
  {
    school: "İstanbul Teknik Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    period: "2014 - 2018",
    description:
      "Yazılım geliştirme, algoritma ve veri yapıları, veritabanı yönetimi konularında eğitim.",
  },
  {
    school: "Ankara Fen Lisesi",
    degree: "Fen Bilimleri",
    period: "2010 - 2014",
    description: "Matematik ve fen bilimleri ağırlıklı eğitim.",
  },
];

const languages = [
  { language: "Türkçe", level: "Ana Dil" },
  { language: "İngilizce", level: "İleri (C1)" },
  { language: "Almanca", level: "Orta (B2)" },
];

const technicalSkills = [
  {
    category: "Frontend",
    skills: [
      "Next.js",
      "React",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    skills: ["PHP", "Laravel", "CodeIgniter", "Node.js", "RESTful APIs"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    category: "DevOps & Others",
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "AWS",
      "jQuery",
      "ApexCharts.js",
      "mPDF",
      "PhpSpreadsheet",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">
                  Hello, it's Tanju.
                </h1>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  A passionate Full Stack Developer with over 15 years of
                  experience building web applications and custom software
                  solutions. I enjoy turning complex problems into simple,
                  efficient systems that help businesses work smarter.
                </p>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Throughout my career, I have developed a wide range of
                  applications—from management systems for language schools and
                  industrial solutions to advanced reporting and automation
                  tools. I am proficient in PHP, MySQL, JavaScript, and modern
                  frameworks like Laravel, Next.js, and Astro. I also work with
                  tools like mPDF, PhpSpreadsheet, ApexCharts, and Dropzone.js
                  to deliver complete, reliable solutions.
                </p>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  I thrive in collaborative environments where I can contribute
                  to meaningful projects and continue learning new technologies.
                  When I’m not coding, I enjoy exploring new approaches to
                  streamline workflows and optimize software performance.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Konya, Türkiye</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/Tanju-Yildiz-Resume.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
                  <Image
                    src="/tanju-yildiz.webp"
                    alt="Tanju Yıldız - Full Stack Developer"
                    width={400}
                    height={500}
                    className="relative rounded-2xl border-4 border-background shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Work Experience
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                The experiences I have gained and the roles I have undertaken in
                different companies
              </p>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          {exp.position}
                        </CardTitle>
                        <p className="text-lg font-medium text-muted-foreground mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Education
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                My academic background and trainings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg font-medium text-muted-foreground">
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Language
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Languages ​​I can speak and their levels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {languages.map((lang, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      {lang.language}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-sm">
                      {lang.level}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Technical Skills
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Technologies and development tools I use
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
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
      </main>
      <Footer />
    </div>
  );
}
