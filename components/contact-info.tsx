import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/tanju",
    username: "@tanju",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/tanju",
    username: "Tanju",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/tanju",
    username: "@tanju",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card>
        <CardHeader>
          <CardTitle>İletişim Bilgileri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">E-posta</p>
              <a href="mailto:tanju@example.com" className="text-muted-foreground hover:text-primary">
                tanju@example.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Konum</p>
              <p className="text-muted-foreground">İstanbul, Türkiye</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Çalışma Saatleri</p>
              <p className="text-muted-foreground">Pazartesi - Cuma, 09:00 - 18:00 (GMT+3)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card>
        <CardHeader>
          <CardTitle>Sosyal Medya</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {socialLinks.map((social) => (
            <div key={social.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <social.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{social.name}</p>
                  <p className="text-sm text-muted-foreground">{social.username}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  Ziyaret Et
                </a>
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Response Time */}
      <Card>
        <CardHeader>
          <CardTitle>Yanıt Süresi</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-pretty">
            Genellikle 24 saat içinde geri dönüş yaparım. Acil durumlar için e-posta yerine sosyal medya hesaplarımdan
            ulaşabilirsiniz.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
