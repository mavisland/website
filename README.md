# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website serves as a professional showcase for a software developer specializing in PHP, Laravel, Next.js, and modern web technologies.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-black?style=flat-square)

## Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle support with system preference detection
- **SEO Optimized**: Built-in metadata configuration for better search engine visibility
- **Component Library**: Leverages shadcn/ui components for a consistent design system
- **Analytics**: Integrated with Vercel Analytics for visitor tracking
- **Accessibility**: Designed with accessibility in mind

## Pages

- **Home**: Feature showcase with hero section, featured projects, skills, latest blog posts
- **About**: Developer background and personal information
- **Projects**: Portfolio of development projects with detailed case studies
- **Blog**: Articles and technical content
- **Contact**: Contact form and contact information
- **Uses**: Information about tools and technologies used

## Tech Stack

### Core
- **Next.js**: React framework for production
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Supabase**: Database, authentication, and storage

### UI Components
- **shadcn/ui**: Beautifully designed components built with Radix UI and Tailwind CSS
- **Radix UI**: Accessible and unstyled UI components
- **Lucide React**: Beautiful and consistent icon set

### Form Handling
- **React Hook Form**: Form state management and validation
- **Zod**: TypeScript-first schema validation

### Additional Libraries
- **date-fns**: Date utility library
- **next-themes**: Theme management
- **Geist Font**: Typography
- **Recharts**: Data visualization
- **Vercel Analytics**: Website analytics

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/mavisland/website.git

# Navigate to the project directory
cd website

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Start the development server
pnpm dev
```

The application will be available at http://localhost:3000

### Database Setup

For database setup and sample data, follow the instructions in the [Supabase setup documentation](./docs/supabase-setup.md).

### Build

```bash
# Create a production build
pnpm build

# Start the production server
pnpm start
```

## Project Structure

```
├── app/                  # Next.js app directory (pages and routes)
├── components/           # Reusable UI components
│   ├── ui/               # shadcn/ui components
├── docs/                 # Documentation and setup guides
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and shared code
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## Customization

1. Update personal information in `app/layout.tsx` metadata
2. Replace placeholder images in the `public` directory
3. Modify content in page components to reflect your personal information
4. Customize theme colors in `components.json`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)