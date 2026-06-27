import type { Metadata } from "next";
import BlogList from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog | Sahil Shrestha",
};

export default function BlogPage() {
  return <BlogList />;
}
