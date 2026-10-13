import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostRenderer from "@/components/blog/component/blog-post-renderer";
import blogData from "@/components/blog/data/data.json";
import { AUTHOR, SITE_URL } from "@/lib/seo";

interface Post {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

const posts = blogData as Post[];

export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.id}`,
      title: post.title,
      description: post.description,
      publishedTime: new Date(post.date).toISOString(),
      authors: [AUTHOR],
      tags: post.tags,
      images: ["/preview.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/preview.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    keywords: post.tags.join(", "),
    image: `${SITE_URL}/preview.png`,
    url: `${SITE_URL}/blog/${post.id}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.id}`,
    author: { "@id": `${SITE_URL}/#person`, "@type": "Person", name: AUTHOR },
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogPostRenderer id={id} />
    </>
  );
}
