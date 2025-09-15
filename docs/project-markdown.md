# Project Markdown Yapısı

Bu döküman, projelerinizi markdown formatında nasıl ekleyeceğinizi açıklar.

## Dosya Yapısı

Projeler `data/projects/` dizini altında `.md` uzantılı dosyalar olarak saklanır. Her bir proje için bir markdown dosyası oluşturulmalıdır.

## Dosya Adı

Dosya adı, projenin URL'sinde kullanılacak olan benzersiz bir slug olarak kullanılır. Örneğin:
- `ecommerce-project.md` dosyası `/projects/ecommerce-project` URL'inde erişilebilir olacaktır.

## Frontmatter (Üst Veri) Yapısı

Her proje dosyası, aşağıdaki özellikleri içeren bir YAML frontmatter ile başlamalıdır:

```yaml
---
title: "Proje Adı"
summary: "Proje Özeti"
coverImage: "/proje-demo-gorseli.jpg"
features:
  - "Özellik 1"
  - "Özellik 2"
  - "Özellik 3"
startDate: "2024-01-15"
endDate: "2024-03-20"  # Opsiyonel, hala devam ediyorsa belirtmeyin
client: "Müşteri Adı"  # Opsiyonel
technologies:
  - "Next.js"
  - "TypeScript"
  - "TailwindCSS"
featured: true  # Ana sayfada gösterilmesi için true olarak ayarlayın
published: true  # Yayınlanması için true olarak ayarlayın
order: 1  # Sıralama önceliği (düşük numara daha yüksek öncelik)
demoUrl: "https://demo-site.com"  # Opsiyonel
githubUrl: "https://github.com/user/repo"  # Opsiyonel
screenshots:  # Opsiyonel ekran görüntüleri
  - "/screenshot1.jpg"
  - "/screenshot2.jpg"
---
```

## İçerik Bölümü

Frontmatter'dan sonra projenin detaylı açıklaması Markdown formatında yazılır:

```markdown
## Proje Genel Bakış

Projenin detaylı açıklaması buraya yazılır.

## Teknik Detaylar

Teknik bilgiler, kullanılan teknolojiler ve mimarinin detaylı açıklaması.

### Alt Başlık

Daha fazla detay...

## Müşteri Geri Bildirimi

> "Müşteri yorumları buraya alıntı olarak eklenebilir."
>
> **- Müşteri Adı, Ünvanı**
```

## Önemli Notlar

1. Tüm görsel dosyaları `public` dizininde saklanmalıdır.
2. Görsellere referans verirken, `/` ile başlayan yolları kullanın (örn: `/project-image.jpg`).
3. Markdown içinde Markdown sözdizimi kullanabilirsiniz (başlıklar, listeler, bağlantılar vb.).
4. Öne çıkarılacak projeler için `featured: true` olarak ayarlayın.
5. Yayınlanmayan projeler için `published: false` olarak ayarlayın.
6. `order` alanı projelerin sıralama önceliğini belirler.

## Örnek

Örnek proje dosyalarını `data/projects/` dizininde bulabilirsiniz:
- `ecommerce-project.md`
- `blog-cms.md`
- `project-management-app.md`