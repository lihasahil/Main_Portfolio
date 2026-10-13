import type { Metadata } from "next";
import BlogList from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on React, Next.js, Node.js and TypeScript by Sahil Shrestha: performance, architecture and real-world web development tips.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", type: "website" },
};

export default function BlogPage() {
  return <BlogList />;
}
