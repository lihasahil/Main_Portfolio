"use client";

import React from "react";
import { useRouter } from "next/navigation";
import blogData from "./data/data.json";
import { BookOpen } from "lucide-react";
import Card from "../Card";

const BlogList: React.FC = () => {
  const router = useRouter();

  return (
    <section
      id="blog"
      className="border border-border mx-5 sm:mx-30 min-h-screen border-t-0 pt-20 p-2"
    >
      <h1 className="text-center text-2xl font-bold my-8 text-design">BLOG</h1>
      <div className="flex flex-col space-y-8 pb-8">
        {blogData.map((post) => (
          <div key={post.id} className="cursor-pointer group">
            <Card
              icon={<BookOpen size={16} />}
              title={post.title}
              date={post.date}
              description={post.description}
              skills={post.tags?.map((tag) => ({ name: tag })) || []}
              button={{
                label: "Read More â†’",
                onClick: () => router.push(`/blog/${post.id}`),
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
