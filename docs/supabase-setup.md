# Supabase SQL Setup

This document contains the SQL queries required to create the Supabase database tables and sample data for our website.

## Posts Table

SQL commands to create the table required for blog posts:

```sql
-- Create posts table
CREATE TABLE posts (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    published BOOLEAN DEFAULT FALSE,
    cover_image TEXT,
    author_id INTEGER,
    category TEXT,
    read_time TEXT,
    tags TEXT[]
);

-- Note: We can't directly alter auth.users table due to permission restrictions
-- Instead, we'll use Supabase's custom_claims for admin users
-- This approach uses Supabase's built-in mechanisms instead of altering the auth.users table

-- RLS (Row Level Security) rules - grants read access to everyone by default
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Posts are viewable by everyone"
ON posts FOR SELECT USING (published = TRUE);

-- First create an admin_users table to manage admin permissions
CREATE TABLE IF NOT EXISTS admin_users (
  user_id UUID PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Use the admin_users table for access control
CREATE POLICY "Only authorized users can insert posts"
ON posts FOR INSERT WITH CHECK (
    auth.uid() IN (SELECT user_id FROM admin_users)
);

CREATE POLICY "Only authorized users can update posts"
ON posts FOR UPDATE USING (
    auth.uid() IN (SELECT user_id FROM admin_users)
);

CREATE POLICY "Only authorized users can delete posts"
ON posts FOR DELETE USING (
    auth.uid() IN (SELECT user_id FROM admin_users)
);

-- Automatically update the updated_at column when a record is modified
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_posts_updated_at
BEFORE UPDATE ON posts
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();
```

## Sample Posts

SQL commands to insert sample data for blog posts:

```sql
INSERT INTO posts (title, slug, content, excerpt, published, cover_image, category, read_time, tags)
VALUES
(
    'Next.js 15 ile Modern Web Geliştirme',
    'nextjs-15-ile-modern-web-gelistirme',
    E'# Next.js 15 ile Modern Web Geliştirme\n\nNext.js 15, React ekosisteminde önemli bir dönüm noktası oldu. Bu yazıda, yeni sürümün getirdiği özellikleri ve bunların geliştirme sürecimize etkilerini inceleyeceğiz.\n\n## App Router''ın Gücü\n\nNext.js 13 ile tanıtılan App Router, 15. sürümde daha da olgunlaştı. Artık daha kararlı ve performanslı bir şekilde kullanabiliyoruz.\n\n## Server Components\n\nReact Server Components, sunucu tarafında render edilen bileşenler sayesinde performansı artırıyor ve SEO''yu iyileştiriyor.\n\n## Turbopack\n\nWebpack''in yerini alan Turbopack, geliştirme sürecini hızlandırıyor ve daha iyi bir geliştirici deneyimi sunuyor.',
    'Next.js 15''in yeni özelliklerini keşfedin ve modern web uygulamaları geliştirme sürecinizi nasıl hızlandırabileceğinizi öğrenin. App Router, Server Components ve daha fazlası.',
    TRUE,
    '/blog-nextjs-15.png',
    'Web Development',
    '5 dk',
    ARRAY['Next.js', 'React', 'Web Development', 'JavaScript']
),
(
    'Laravel ile API Geliştirme Best Practices',
    'laravel-ile-api-gelistirme-best-practices',
    E'# Laravel ile API Geliştirme Best Practices\n\nLaravel, PHP dünyasının en popüler framework''lerinden biri. Bu yazıda, Laravel ile API geliştirirken dikkat edilmesi gereken noktaları ele alacağız.\n\n## API Resource Kullanımı\n\nLaravel''in API Resource sınıfları, JSON response''larınızı standardize etmenin en iyi yoludur.\n\n## API Authentication\n\nLaravel Sanctum, modern web uygulamaları için basit bir kimlik doğrulama sistemi sunar ve SPA\'lar, mobil uygulamalar için token tabanlı API koruması sağlar.\n\n## Rate Limiting\n\nLaravel\'in built-in rate limiting özellikleri, API\'nizi brute force ve DDoS saldırılarına karşı korur.',
    'Laravel framework''ü kullanarak güvenli ve ölçeklenebilir API''ler geliştirmek için en iyi uygulamalar ve ipuçları. Authentication, validation ve error handling konularını ele alıyoruz.',
    TRUE,
    '/placeholder.svg',
    'Backend',
    '7 dk',
    ARRAY['Laravel', 'PHP', 'API', 'REST']
),
(
    'Supabase ile Next.js Uygulaması Geliştirme',
    'supabase-ile-nextjs-uygulamasi-gelistirme',
    E'# Supabase ile Next.js Uygulaması Geliştirme\n\nSupabase, açık kaynak bir Firebase alternatifi olup PostgreSQL veritabanı üzerine kurulu bir backend çözümüdür. Bu yazıda, Supabase''i Next.js ile nasıl entegre edeceğimizi adım adım inceleyeceğiz.\n\n## Kurulum ve Yapılandırma\n\nİlk olarak, Supabase hesabı oluşturup yeni bir proje başlatmanız gerekiyor. Daha sonra, Next.js projenize Supabase istemci kütüphanesini ekleyebilirsiniz.\n\n```bash\npnpm add @supabase/supabase-js @supabase/ssr\n```\n\n## Kimlik Doğrulama\n\nSupabase, email/password, sosyal medya ve telefon numarası ile kimlik doğrulama gibi çeşitli kimlik doğrulama yöntemlerini destekler.\n\n## Gerçek Zamanlı Özellikler\n\nSupabase, PostgreSQL''in notify/listen özelliğini kullanarak gerçek zamanlı veri değişikliklerini dinlemenize olanak tanır.',
    'Supabase ve Next.js ile modern, hızlı ve ölçeklenebilir web uygulamaları nasıl geliştirilir? Kimlik doğrulama, veritabanı işlemleri ve gerçek zamanlı güncellemeler.',
    TRUE,
    '/placeholder-logo.svg',
    'Web Development',
    '10 dk',
    ARRAY['Supabase', 'Next.js', 'PostgreSQL', 'Authentication']
),
(
    'React 19 Yenilikleri',
    'react-19-yenilikleri',
    E'# React 19''un Getirdiği Yenilikler\n\nReact 19, React ekosisteminde büyük değişiklikler getiriyor. Bu yazıda, yeni sürümün öne çıkan özelliklerini ve bunların geliştirme sürecimize etkilerini inceleyeceğiz.\n\n## Otomatik Batching\n\nReact 19 ile birlikte tüm state güncellemeleri otomatik olarak batch haline getirilir. Bu da gereksiz yeniden render\'ları önleyerek performansı artırır.\n\n## Concurrent Features\n\nReact 19, concurrent rendering özelliklerini kararlı sürüme taşıyor. Bu, kullanıcı arayüzünün daha akıcı ve kesintisiz olmasını sağlar.\n\n## React Server Components\n\nReact Server Components artık tamamen kararlı. Server componentler, istemci tarafındaki JavaScript yükünü azaltmaya yardımcı olur.',
    'React''ın yeni majör sürümü olan React 19 ile gelen yenilikler, performans iyileştirmeleri ve mimari değişiklikler hakkında detaylı bir inceleme.',
    TRUE,
    '/placeholder.jpg',
    'Frontend',
    '8 dk',
    ARRAY['React', 'JavaScript', 'Frontend', 'Performance']
),
(
    'TypeScript 5.9 ile Gelen Yeni Özellikler',
    'typescript-5-9-ile-gelen-yeni-ozellikler',
    E'# TypeScript 5.9 ile Gelen Yeni Özellikler\n\nTypeScript 5.9, TypeScript ekosisteminde önemli yenilikler getiriyor. Bu yazıda, yeni sürümün getirdiği özellikleri ve bunların geliştirme sürecimize etkilerini inceleyeceğiz.\n\n## Const Type Parameters\n\nTypeScript 5.9 ile birlikte gelen `const` tip parametreleri, özellikle jenerik fonksiyonlarda çok kullanışlı.\n\n```typescript\nfunction toRecord<const K extends PropertyKey, V>(entries: [K, V][]): Record<K, V> {\n  return Object.fromEntries(entries) as Record<K, V>;\n}\n```\n\n## Dekoratör Metadata API\n\nTypeScript 5.9, ECMAScript dekoratör önerisi ile uyumlu metadata API\'sini destekliyor.\n\n## Gelişmiş Tip Çıkarımı\n\nTypeScript 5.9, birçok karmaşık senaryoda daha doğru tip çıkarımları yapabilir hale geldi.',
    'TypeScript 5.9 sürümünde gelen const tip parametreleri, dekoratör metadata API''si ve gelişmiş tip çıkarımı gibi yeni özelliklerin detaylı incelemesi.',
    TRUE,
    '/placeholder.svg',
    'Programming',
    '6 dk',
    ARRAY['TypeScript', 'JavaScript', 'Programming', 'Development']
);
```

## Search Functions

Useful functions for tag-based and text-based searches:

```sql
-- Function for tag-based search
CREATE OR REPLACE FUNCTION search_posts_by_tag(search_tag TEXT)
RETURNS SETOF posts AS $$
BEGIN
    RETURN QUERY
    SELECT *
    FROM posts
    WHERE search_tag = ANY(tags) AND published = TRUE
    ORDER BY created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- Function for text-based search
CREATE OR REPLACE FUNCTION search_posts(search_query TEXT)
RETURNS SETOF posts AS $$
BEGIN
    RETURN QUERY
    SELECT *
    FROM posts
    WHERE (
        title ILIKE '%' || search_query || '%' OR
        excerpt ILIKE '%' || search_query || '%' OR
        content ILIKE '%' || search_query || '%'
    ) AND published = TRUE
    ORDER BY created_at DESC;
END;
$$ LANGUAGE plpgsql;
```

## Projects Table

SQL commands to create the table required for projects:

```sql
-- Create projects table
CREATE TABLE projects (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    published BOOLEAN DEFAULT FALSE,
    cover_image TEXT,
    github_url TEXT,
    demo_url TEXT,
    technologies TEXT[],
    featured BOOLEAN DEFAULT FALSE,
    client TEXT,
    features TEXT[],
    screenshots TEXT[]
);

-- RLS (Row Level Security) rules
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone"
ON projects FOR SELECT USING (published = TRUE);

-- Use the admin_users table created earlier for access control
CREATE POLICY "Only authorized users can insert projects"
ON projects FOR INSERT WITH CHECK (
    auth.uid() IN (SELECT user_id FROM admin_users)
);

CREATE POLICY "Only authorized users can update projects"
ON projects FOR UPDATE USING (
    auth.uid() IN (SELECT user_id FROM admin_users)
);

CREATE POLICY "Only authorized users can delete projects"
ON projects FOR DELETE USING (
    auth.uid() IN (SELECT user_id FROM admin_users)
);

-- Automatically update the updated_at column when a record is modified
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON projects
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();
```

## Sample Projects

SQL commands to insert sample data for projects:

```sql
INSERT INTO projects (title, slug, description, content, published, cover_image, github_url, demo_url, technologies, featured, client, features, screenshots)
VALUES
(
    'E-Ticaret Dashboard',
    'ecommerce-dashboard',
    'Modern bir e-ticaret yönetim paneli ile satış istatistikleri, ürün yönetimi ve müşteri verilerini kolayca takip edin.',
    E'# E-Ticaret Dashboard\n\nModern bir e-ticaret yönetim paneli ile satış istatistikleri, ürün yönetimi ve müşteri verilerini kolayca takip edin.\n\n## Özellikler\n\n- Gerçek zamanlı satış istatistikleri\n- Ürün envanteri yönetimi\n- Müşteri verileri analizi\n- Sipariş takibi ve yönetimi\n- Gelişmiş filtreleme ve arama\n- Özelleştirilebilir raporlar\n\n## Kullanılan Teknolojiler\n\n- Next.js 14\n- TypeScript\n- Tailwind CSS\n- Shadcn UI\n- Recharts\n- Supabase',
    TRUE,
    '/ecommerce-dashboard.png',
    'https://github.com/mavisland/ecommerce-dashboard',
    'https://ecommerce-dashboard-demo.vercel.app',
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Recharts', 'Supabase'],
    TRUE,
    'E-Ticaret Firması',
    ARRAY['Gerçek zamanlı satış istatistikleri', 'Ürün envanteri yönetimi', 'Müşteri verileri analizi', 'Sipariş takibi ve yönetimi', 'Gelişmiş filtreleme ve arama', 'Özelleştirilebilir raporlar'],
    ARRAY['/ecommerce-dashboard.png', '/ecommerce-product-page.png', '/ecommerce-checkout.png']
),
(
    'Proje Yönetim Sistemi',
    'proje-yonetim-sistemi',
    'Ekip çalışmasını kolaylaştıran, görev atama, ilerleme takibi ve dosya paylaşımı özellikleri sunan kapsamlı bir proje yönetim sistemi.',
    E'# Proje Yönetim Sistemi\n\nEkip çalışmasını kolaylaştıran, görev atama, ilerleme takibi ve dosya paylaşımı özellikleri sunan kapsamlı bir proje yönetim sistemi.\n\n## Özellikler\n\n- Sürükle-bırak görev yönetimi\n- Ekip üyeleri arasında iş bölümü\n- Gerçek zamanlı ilerleme takibi\n- Dosya paylaşımı ve sürüm kontrolü\n- Takvim entegrasyonu ve hatırlatıcılar\n\n## Kullanılan Teknolojiler\n\n- React\n- Redux\n- Node.js\n- Express\n- MongoDB\n- Socket.io',
    TRUE,
    '/project-management-dashboard.png',
    'https://github.com/mavisland/project-management-system',
    'https://project-management-system-demo.vercel.app',
    ARRAY['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    TRUE,
    'Startup Şirketi',
    ARRAY['Sürükle-bırak görev yönetimi', 'Ekip üyeleri arasında iş bölümü', 'Gerçek zamanlı ilerleme takibi', 'Dosya paylaşımı ve sürüm kontrolü', 'Takvim entegrasyonu', 'Kanban board görünümü', 'Raporlama ve analitik'],
    ARRAY['/project-management-dashboard.png', '/project-management-tasks.png', '/project-management-team.png']
),
(
    'Blog CMS Arayüzü',
    'blog-cms-arayuzu',
    'Blog yazarları için tasarlanmış, SEO dostu içerik oluşturma, düzenleme ve yayınlama arayüzü.',
    E'# Blog CMS Arayüzü\n\nBlog yazarları için tasarlanmış, SEO dostu içerik oluşturma, düzenleme ve yayınlama arayüzü.\n\n## Özellikler\n\n- Zengin metin editörü (WYSIWYG)\n- Medya kütüphanesi yönetimi\n- SEO analizi ve önerileri\n- İçerik takvimi ve zamanlama\n- Kategori ve etiket yönetimi\n- Okunabilirlik skoru\n\n## Kullanılan Teknolojiler\n\n- Next.js\n- TypeScript\n- Tailwind CSS\n- Tiptap\n- Supabase',
    TRUE,
    '/blog-cms-interface.jpg',
    'https://github.com/mavisland/blog-cms',
    'https://blog-cms-demo.vercel.app',
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Tiptap', 'Supabase'],
    FALSE,
    'Blog Sitesi',
    ARRAY['Zengin metin editörü (WYSIWYG)', 'Medya kütüphanesi yönetimi', 'SEO analizi ve önerileri', 'İçerik takvimi ve zamanlama', 'Kategori ve etiket yönetimi', 'Yorum sistemi', 'Kullanıcı rolleri', 'Tema yönetimi'],
    ARRAY['/blog-cms-interface.jpg', '/blog-cms-editor.png', '/blog-cms-media.png']
);
```

## Users and Authentication

Managing admin users:

```sql
-- Add extension for UUID generation if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Note: We've already created the admin_users table to manage permissions
-- Without needing to alter the auth.users table directly

-- Steps to add an admin user:
--
-- 1. Create a user through Supabase Auth UI or API
--    Go to Authentication > Users in Supabase Dashboard
--    Click "Invite user" or create a user programmatically using Supabase Auth API
--
-- 2. Note the UUID of the user you want to make an admin
--
-- 3. Insert the admin user's UUID into the admin_users table:

-- Example of how to make a user an admin
-- IMPORTANT: Do NOT execute this exact command!
-- Replace the example UUID below with the actual UUID from your Supabase dashboard
-- Example only: INSERT INTO admin_users (user_id) VALUES ('123e4567-e89b-12d3-a456-426614174000');

-- You can add multiple admin users by repeating the above INSERT statement
-- with different UUIDs
```

## Setup Steps

1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the left menu
3. Click on the "New Query" button
4. Copy and paste the SQL code from this document
5. Click the "Run" button to execute the SQL query

**Note**: For large SQL blocks, it's better to run each section separately for more reliable execution.

**Important**: Follow these steps to set up the database and admin user:

1. Execute the SQL to create all tables (posts, projects, admin_users).

2. Create a user through the Supabase Auth UI (Authentication > Users > Invite user).

3. Get the UUID of your admin user from the Supabase dashboard.

4. Run the SQL to insert your admin user's UUID into the admin_users table.
   Replace the example UUID with your actual user's UUID from step 3:
   ```sql
   -- Example: Replace the UUID below with your actual user UUID
   INSERT INTO admin_users (user_id) VALUES ('123e4567-e89b-12d3-a456-426614174000');
   ```

5. Finally, insert the sample data for posts and projects.