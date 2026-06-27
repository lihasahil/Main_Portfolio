import BlogPostRenderer from "@/components/blog/component/blog-post-renderer";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <BlogPostRenderer id={id} />;
}
