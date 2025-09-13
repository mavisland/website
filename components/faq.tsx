import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Hangi tür projeler üzerinde çalışıyorsunuz?",
    answer:
      "Web uygulamaları, e-ticaret siteleri, CMS sistemleri, API geliştirme ve frontend/backend entegrasyonları üzerinde çalışıyorum. Özellikle Laravel, Next.js ve modern JavaScript teknolojileri kullanarak projeler geliştiriyorum.",
  },
  {
    question: "Proje süreçleriniz nasıl işliyor?",
    answer:
      "İlk olarak projenizin gereksinimlerini detaylı bir şekilde analiz ediyoruz. Ardından teknik çözüm önerisi ve zaman planı hazırlıyorum. Geliştirme sürecinde düzenli güncellemeler paylaşır ve geri bildirimlerinizi alırım. Proje teslim edildikten sonra da destek sağlarım.",
  },
  {
    question: "Uzaktan çalışma yapıyor musunuz?",
    answer:
      "Evet, tamamen uzaktan çalışıyorum. İstanbul merkezli olmakla birlikte, Türkiye'nin her yerinden ve yurt dışından müşterilerle çalışabiliyorum. Video konferans, Slack ve diğer iletişim araçları ile etkili bir şekilde proje yönetimi yapıyorum.",
  },
  {
    question: "Proje fiyatlandırmanız nasıl?",
    answer:
      "Fiyatlandırma projenin karmaşıklığına, süresine ve gereksinimlerine göre değişiklik gösterir. Sabit fiyat veya saatlik ücret seçenekleri sunuyorum. Detaylı bir görüşme sonrasında size özel bir teklif hazırlayabilirim.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Sıkça Sorulan Sorular</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            En çok merak edilen konular hakkında hazırladığım cevaplar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>SSS</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-pretty">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
