import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { HiringStatus } from "@/components/hiring-status";
import { FAQ } from "@/components/faq";

export const metadata = {
  title: "Contact",
  description:
    "Contact me. Send me a message for project proposals and collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Contact
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Contact me to talk about your projects, collaborate or just say
                hello.
              </p>
            </div>

            {/* Hiring Status */}
            <div className="flex justify-center mb-16">
              <HiringStatus />
            </div>

            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
