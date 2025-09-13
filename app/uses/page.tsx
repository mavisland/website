import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Code, Palette, Cloud, Zap } from "lucide-react";

export const metadata = {
  title: "Uses",
  description: "Devices, software and tools I use for software development",
};

const categories = [
  {
    title: "Computer and Hardware",
    icon: Monitor,
    items: [
      {
        name: 'MacBook Pro 16" M2 Pro',
        description:
          "My main development machine. Powerful performance with 32GB RAM and 1TB SSD.",
        category: "Laptop",
      },
      {
        name: 'Dell UltraSharp 27" 4K Monitor',
        description:
          "The external monitor I use when writing code and designing.",
        category: "Monitor",
      },
      {
        name: "Magic Keyboard",
        description: "Apple's wireless keyboard. Turkish Q layout.",
        category: "Keyboard",
      },
      {
        name: "Logitech MX Master 3",
        description:
          "An excellent mouse with ergonomic design and precise tracking.",
        category: "Mouse",
      },
    ],
  },
  {
    title: "Development Tools",
    icon: Code,
    items: [
      {
        name: "Visual Studio Code",
        description:
          "My main code editor. I've customized it with numerous extensions.",
        category: "Editor",
      },
      {
        name: "PhpStorm",
        description: "The IDE I use for PHP and Laravel projects.",
        category: "IDE",
      },
      {
        name: "TablePlus",
        description: "Modern GUI tool that I use for database management.",
        category: "Database",
      },
      {
        name: "Postman",
        description: "The indispensable tool for API development and testing.",
        category: "API",
      },
      {
        name: "Git",
        description:
          "For version control. Integrated use with GitHub and GitLab.",
        category: "Version Control",
      },
      {
        name: "Docker",
        description: "To containerize development environments.",
        category: "DevOps",
      },
    ],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    items: [
      {
        name: "Figma",
        description: "The main tool I use for UI/UX design and prototyping.",
        category: "Design",
      },
      {
        name: "Adobe Photoshop",
        description: "For image editing and graphic design.",
        category: "Graphics",
      },
      {
        name: "Canva Pro",
        description: "For quick graphic designs and social media content.",
        category: "Graphics",
      },
    ],
  },
  {
    title: "Hosting & Deployment",
    icon: Cloud,
    items: [
      {
        name: "Vercel",
        description: "Next.js is the main platform where I deploy my projects.",
        category: "Hosting",
      },
      {
        name: "DigitalOcean",
        description: "The service I use for VPS and cloud hosting.",
        category: "Cloud",
      },
      {
        name: "Cloudflare",
        description: "For CDN, DNS and security.",
        category: "CDN",
      },
      {
        name: "Supabase",
        description: "The platform I use as Backend-as-a-Service.",
        category: "BaaS",
      },
    ],
  },
  {
    title: "Productivity & Organization",
    icon: Zap,
    items: [
      {
        name: "Notion",
        description: "For project management, note-taking and documentation.",
        category: "Productivity",
      },
      {
        name: "Todoist",
        description: "The app I use for task management and planning.",
        category: "Task Management",
      },
      {
        name: "Slack",
        description: "For team communication and project coordination.",
        category: "Communication",
      },
      {
        name: "Zoom",
        description: "For video conferencing and remote meetings.",
        category: "Communication",
      },
    ],
  },
  {
    title: "Mobile and Accessories",
    icon: Smartphone,
    items: [
      {
        name: "iPhone 14 Pro",
        description:
          "My main phone. I also use it for mobile testing and development.",
        category: "Phone",
      },
      {
        name: "AirPods Pro 2",
        description:
          "These are the headphones I use for listening to music and in meetings.",
        category: "Audio",
      },
      {
        name: "iPad Air",
        description: "The tablet I use for design drawings and reading.",
        category: "Tablet",
      },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Uses
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                The devices, software, and tools I use in my software
                development process. This list is updated regularly.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card
                        key={itemIndex}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">
                              {item.name}
                            </CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              {item.category}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-pretty text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Note</h3>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                This list is constantly updated. I update this page whenever I
                try new tools or make changes to my current setup. If you have
                any questions about any tools, please{" "}
                <a href="/contact" className="text-primary hover:underline">
                  contact
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
