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
    company: "Raporzen Yazılım",
    position: "Senior Full Stack Developer",
    period: "October 2024 - Present",
    description: `Developed and led custom software projects using PHP, MySQL, Laravel, Tailwind, JavaScript, and React. Managed project planning, task assignment, and code reviews while ensuring on-time delivery.

Key projects:

- Elevator Quotation System – Built role-based access, product management, pricing, and PDF generation features.
- Language School Management System – Implemented student enrollment, placement tests, certificate generation, and scheduling modules.
- B2B Sales Portal – Delivered a platform with product catalog, order management, stock tracking, and pricing integration.`,
    technologies: ["Laravel", "Next.js", "MySQL", "Redis", "Docker"],
  },
  {
    company: "Grafix Reklam Ajansı",
    position: "Full Stack Developer",
    period: "August 2019 - October 2024",
    description: `Led the frontend team and contributed to the development of 4 large-scale projects, 10+ mid-sized projects, and 30+ smaller applications. Focused on building high-performance, maintainable web applications while ensuring quality delivery.

Key responsibilities and achievements:

- Created and maintained a reusable design and component library for company projects and client applications.
- Directed frontend development in projects such as sales management systems, dashboards, company websites, accounting tools, B2B/B2C platforms, and CRM solutions.
- Utilized modern frontend technologies including Gulp.js, SASS, Twig, TailwindCSS, PostCSS, Bootstrap, Chart.js, and DataTables.
- Conducted code reviews, training, and mentoring to raise the overall quality and performance of the development team.
- Built and scaled the frontend team, delegated workloads, planned releases, and ensured timely delivery aligned with business requirements.`,
    technologies: [
      "PHP",
      "Single Page Applications",
      "Vue.js",
      "Web Performance",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "HTML",
      "WordPress",
      "JavaScript",
      "REST APIs",
    ],
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    period: "April 2017 - August 2019",
    description: `- Delivered customized WordPress solutions, including installation, theme customization, and bespoke plugin development.
- Built and enhanced user-friendly front-end interfaces with modern UI practices.
- Transformed static HTML projects into dynamic, CMS-driven platforms, enabling easier content management for clients.
- Collaborated directly with clients to translate requirements into functional, scalable solutions, ensuring timely delivery and long-term maintainability.`,
    technologies: [
      "PHP",
      "WordPress",
      "WordPress Plugin Development",
      "CMS",
      "jQuery",
      "MySQL",
      "Bootstrap",
    ],
  },
  {
    company: "The Mediatix Production",
    position: "Full Stack Developer",
    period: "December 2016 - April 2017",
    description: `Held complete responsibility for frontend development, including architecture design, feature implementation, and long-term maintenance. Collaborated closely with UI/UX designers to transform wireframes into responsive and user-friendly web applications.
Key contributions:
- Designed and developed modular frontend components to improve reusability and maintainability.
- Optimized application performance and cross-browser compatibility.
- Ensured pixel-perfect implementation of UI/UX designs with a focus on accessibility and responsiveness.
- Contributed to project planning and aligned technical solutions with business requirements.`,
    technologies: [
      "Web Performance",
      "CSS",
      "MySQL",
      "HTML",
      "WordPress",
      "PHP",
      "JavaScript",
      "GitHub",
      "REST APIs",
    ],
  },
  {
    company: "Viva Dizayn",
    position: "Frontend Developer",
    period: "February 2015 - August 2016",
    description: `Developed custom software solutions tailored to client requirements, focusing on usability, performance, and accessibility.
Key contributions:
- Built a fully interactive product prototype using JavaScript, Less/SASS, Flexbox, HTML5, and CSS3, enabling rapid client validation and iteration.
- Delivered end-to-end frontend implementations, optimizing mobile web performance and ensuring WCAG-compliant accessibility (a11y).
- Collaborated with designers and backend developers to align technical solutions with business goals.`,
    technologies: [
      "PHP",
      "JavaScript",
      "jQuery",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    company: "WeblebiX Creative",
    position: "Frontend Developer",
    period: "April 2013 - February 2015",
    description: `- Designing, modernizing and creating websites
- WordPress back-end development
- Perform technical problem solving, analyze and design the architecture for each front-end project to ensure performance and scalability.
- Working with WordPress, WooCommerce, etc.
- Writing plugins and themes
- Maintaining existing websites.`,
    technologies: [
      "PHP",
      "CodeIgniter",
      "WordPress",
      "WordPress Theme Development",
      "WordPress Plugin Development",
      "WooCommerce",
      "JavaScript",
      "jQuery",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    company: "Reaktif Ajans",
    position: "Web Developer",
    period: "September 2011 - April 2013",
    description: `- Build and maintain websites.
- Implement pixel-perfect design.`,
    technologies: [
      "PHP",
      "JavaScript",
      "WordPress",
      "jQuery",
      "MySQL",
      "Bootstrap",
    ],
  },
  {
    company: "Ajans Dialog Organizasyon",
    position: "Web Developer",
    period: "July 2009 - August 2011",
    description: `- Build and maintain websites.
- Implement pixel-perfect design.`,
    technologies: [
      "PHP",
      "JavaScript",
      "WordPress",
      "jQuery",
      "MySQL",
      "Bootstrap",
    ],
  },
  {
    company: "Esform Ofset Matbaa",
    position: "Web Developer",
    period: "September 2008 - June 2009",
    description: `- Build and maintain websites.
- Implement pixel-perfect design.`,
    technologies: [
      "PHP",
      "JavaScript",
      "WordPress",
      "jQuery",
      "MySQL",
      "Bootstrap",
    ],
  },
  {
    company: "Mika Pro.",
    position: "Web Developer",
    period: "March 2008 - September 2009",
    description: `- Build and maintain websites.
- Implement pixel-perfect design.`,
    technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
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
  { language: "Turkish", level: "Native" },
  { language: "English", level: "Upper Intermediate (C1)" },
  { language: "German", level: "Intermediate (B1)" },
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
                  efficient systems that help businesses work smarter.{" "}
                </p>{" "}
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
          <div className="container mx-auto max-w-4xl px-4">
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
                    {exp.description.split("\n").map((line, i) => (
                      <p
                        key={i}
                        className="text-muted-foreground mb-4 text-pretty"
                      >
                        {line}
                      </p>
                    ))}
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
