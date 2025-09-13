import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Tanju Yıldız</h3>
            <p className="text-sm text-muted-foreground">
              I’m a software developer and tech enthusiast, focused on web
              applications and personal projects. Always learning and exploring
              new innovations.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/uses"
                  className="text-muted-foreground hover:text-primary"
                >
                  Uses
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <a
                  href="mailto:tanju@example.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Social Media</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mavisland"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yildiztanju/"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/yildiztanju"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>2025 &copy; Tanju Yıldız. All rights reserved.</p>
          <p>
            Licensed under the{" "}
            <a
              href="https://opensource.org/licenses/MIT"
              className="underline hover:text-primary"
            >
              MIT License
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
