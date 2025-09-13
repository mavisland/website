import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What types of projects do you work on?",
    answer:
      "I work on web applications, e-commerce sites, CMS systems, API development, and frontend/backend integrations. I develop projects primarily using Laravel, Next.js, and modern JavaScript technologies.",
  },
  {
    question: "How do your project processes work?",
    answer:
      "First, we analyze your project's requirements in detail. Then, I develop a technical solution proposal and timeline. I provide regular updates and feedback throughout the development process. I also provide support after the project is delivered.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes, I work entirely remotely. While I'm based in Konya, I can work with clients from all over Türkiye and abroad. I manage projects effectively using video conferencing, Slack, and other communication tools.",
  },
  {
    question: "How do you price your projects?",
    answer:
      "Pricing varies depending on the complexity, duration, and requirements of the project. I offer flat rates or hourly rates. After a detailed consultation, I can create a personalized quote for you.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Answers I have prepared about the most curious topics
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-pretty">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
