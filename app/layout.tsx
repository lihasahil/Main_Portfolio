import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Sahil Shrestha | Full Stack Developer Portfolio",
  description:
    "Full-stack developer specializing in React, Node.js & TypeScript. Explore my projects and web development expertise.",
  keywords: [
    "Sahil Shrestha",
    "Portfolio",
    "React Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "Web Developer",
    "TypeScript",
  ],
  authors: [{ name: "Sahil Shrestha" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.sahilshrestha2003.com.np",
    title: "Sahil Shrestha | Full Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in React, Node.js & TypeScript. Explore my projects and web development expertise.",
    images: ["https://www.sahilshrestha2003.com.np/preview.png"],
    siteName: "Sahil Shrestha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Shrestha | Full Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in React, Node.js & TypeScript. Explore my projects and web development expertise.",
    images: ["https://www.sahilshrestha2003.com.np/preview.png"],
  },
  alternates: {
    canonical: "https://www.sahilshrestha2003.com.np",
  },
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
