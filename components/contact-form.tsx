"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Mesaj gönderildi!",
      description: "En kısa sürede size geri dönüş yapacağım.",
    })

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Mesajınız Gönderildi!</h3>
          <p className="text-muted-foreground">
            Teşekkürler! Mesajınızı aldım ve en kısa sürede size geri dönüş yapacağım.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <MessageSquare className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>Mesaj Gönderin</CardTitle>
        <CardDescription>Size en kısa sürede geri dönüş yapacağım</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ad Soyad *</Label>
              <Input id="name" name="name" placeholder="Adınız ve soyadınız" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta *</Label>
              <Input id="email" name="email" type="email" placeholder="ornek@email.com" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Konu *</Label>
            <Input id="subject" name="subject" placeholder="Mesajınızın konusu" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="project-type">Proje Türü</Label>
            <Select name="project-type">
              <SelectTrigger>
                <SelectValue placeholder="Proje türünü seçin (opsiyonel)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-app">Web Uygulaması</SelectItem>
                <SelectItem value="ecommerce">E-ticaret</SelectItem>
                <SelectItem value="cms">CMS / Blog</SelectItem>
                <SelectItem value="api">API Geliştirme</SelectItem>
                <SelectItem value="consultation">Danışmanlık</SelectItem>
                <SelectItem value="other">Diğer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Bütçe Aralığı</Label>
            <Select name="budget">
              <SelectTrigger>
                <SelectValue placeholder="Bütçe aralığınızı seçin (opsiyonel)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-5k">5.000 TL altı</SelectItem>
                <SelectItem value="5k-15k">5.000 - 15.000 TL</SelectItem>
                <SelectItem value="15k-30k">15.000 - 30.000 TL</SelectItem>
                <SelectItem value="30k-50k">30.000 - 50.000 TL</SelectItem>
                <SelectItem value="over-50k">50.000 TL üzeri</SelectItem>
                <SelectItem value="discuss">Görüşelim</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mesaj *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Projeniz hakkında detayları, beklentilerinizi ve sorularınızı buraya yazın..."
              rows={6}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              "Gönderiliyor..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Mesaj Gönder
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Mesaj göndererek kişisel verilerinizin işlenmesini kabul etmiş olursunuz.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
