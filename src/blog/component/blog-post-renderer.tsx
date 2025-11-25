import React from "react";
import { useParams } from "react-router";
import blogData from "../data/data.json";

interface Block {
  type: string;
  text?: string;
  items?: string[];
  language?: string;
  src?: string;
}

interface Blog {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  type: string;
  content: Block[];
}

const BlogPostRenderer: React.FC = () => {
  const { id } = useParams();
  const post = (blogData as Blog[]).find((p) => p.id === id);

  if (!post) return <div className="p-6">Post not found.</div>;

  return (
    <section
      className="border-2 border-dotted mx-30 pt-20 border-green-600 border-t-0 p-2"
    >
      <div className="max-w-3xl mx-auto p-6 flex flex-col space-y-6">
        <h1 className="text-center text-2xl font-bold my-4 text-design">
          {post.title}
        </h1>
        <p className="text-gray-500 text-center mb-4">{post.date}</p>

        {post.content.map((block, i) => {
          switch (block.type) {
            case "heading":
              return (
                <h2 key={i} className="text-xl font-semibold mt-4 mb-2">
                  {block.text}
                </h2>
              );
            case "paragraph":
              return (
                <p key={i} className="leading-relaxed text-gray-700 mb-4">
                  {block.text}
                </p>
              );
            case "list":
              return (
                <ul key={i} className="list-disc pl-6 mb-4">
                  {block.items?.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            case "code":
              return (
                <pre
                  key={i}
                  className="bg-gray-900 text-white p-4 rounded-xl mb-4 overflow-x-auto"
                >
                  <code>{block.text}</code>
                </pre>
              );
            case "quote":
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-gray-400 pl-4 italic mb-4"
                >
                  {block.text}
                </blockquote>
              );
            case "image":
              return (
                <img
                  key={i}
                  src={block.src}
                  alt=""
                  className="rounded-xl mb-4 w-full"
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

export default BlogPostRenderer;
