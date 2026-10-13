import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import AppShell from "@/components/app-shell";
import {
  AUTHOR,
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  personJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sahil Shrestha | Full Stack Developer (React, Next.js, Node.js)",
    template: "%s | Sahil Shrestha",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Sahil Shrestha",
    "Portfolio",
    "Full Stack Developer",
    "Full Stack Developer Nepal",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Freelance Web Developer",
    "Remote Web Developer",
    "Hire Web Developer",
  ],
  authors: [{ name: AUTHOR, url: SITE_URL }],
  creator: AUTHOR,
  publisher: AUTHOR,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Sahil Shrestha | Full Stack Developer Portfolio",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/preview.png",
        alt: "Sahil Shrestha - Full Stack Developer Portfolio",
      },
    ],
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Shrestha | Full Stack Developer Portfolio",
    description: DEFAULT_DESCRIPTION,
    images: ["/preview.png"],
  },
  alternates: {
    canonical: "/",
    languages: { en: "/", "x-default": "/" },
  },
  category: "technology",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sahil Shrestha",
  },
  icons: {
    icon: "/fav.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <ThemeProvider>
          <AppShell>{children}</AppShell>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
