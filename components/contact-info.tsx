import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/mavisland",
    username: "@mavisland",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yildiztanju",
    username: "Tanju Yildiz",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/yildiztanju",
    username: "@yildiztanju",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Email</p>
              <a
                href="mailto:hello@tanjuyildiz.com"
                className="text-muted-foreground hover:text-primary"
              >
                hello@tanjuyildiz.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">Konya, Türkiye</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Working Hours</p>
              <p className="text-muted-foreground">
                Monday - Friday, 09:00 - 18:00 (GMT+3)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card>
        <CardHeader>
          <CardTitle>Social Media</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {socialLinks.map((social) => (
            <div
              key={social.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <social.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{social.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {social.username}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Response Time */}
      <Card>
        <CardHeader>
          <CardTitle>Response Time</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-pretty">
            I usually respond within 24 hours. For urgent matters, please
            contact me through my social media accounts instead of email.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
