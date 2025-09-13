import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";
import { Suspense } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tanju Yıldız - Full Stack Developer",
    template: "%s | Tanju Yıldız",
  },
  description:
    "Portfolio of Tanju Yıldız, a passionate software developer specializing in PHP, Laravel, Next.js, and modern web technologies.",
  keywords: [
    "Tanju Yıldız",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Laravel",
    "Next.js",
    "PHP",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Tanju Yıldız" }],
  creator: "Tanju Yıldız",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tanjuyildiz.com",
    title: "Tanju Yıldız - Full Stack Developer",
    description:
      "Portfolio of Tanju Yıldız, a passionate software developer specializing in PHP, Laravel, Next.js, and modern web technologies.",
    siteName: "Tanju Yıldız's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanju Yıldız - Full Stack Developer",
    description:
      "Portfolio of Tanju Yıldız, a passionate software developer specializing in PHP, Laravel, Next.js, and modern web technologies.",
    creator: "@yildiztanju",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`font-sans ${dmSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ScrollToTop />
            <Toaster />
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
