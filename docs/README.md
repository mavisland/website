# Project Setup Documentation

This folder contains documents related to the setup and configuration of the project.

## Contents

- [Supabase Setup](./supabase-setup.md) - SQL queries to create Supabase database tables and sample data

## Main Technologies Used in the Project

- Next.js 14+
- TypeScript
- Tailwind CSS
- Shadcn UI
- Supabase

## Setup Steps

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Configure environment variables:
   Create a `.env.local` file and set the required variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Follow the steps in the [Supabase Setup](./supabase-setup.md) document to set up the Supabase database.

## Project Folder Structure

- `app/`: Next.js App Router structure
- `components/`: Reusable React components
- `lib/`: Helper functions and services
- `hooks/`: Custom React hooks
- `public/`: Static files
- `styles/`: Global style files
- `types/`: TypeScript type definitions
- `docs/`: Project documentation