import React from "react";
import blogData from "./data/data.json";
import Card from "../components/Card";
import { FaBlog } from "react-icons/fa";
import { useNavigate } from "react-router";

const BlogList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      id="blog"
      className="border-2 border-dotted border-green-600 mx-5 sm:mx-30 min-h-screen border-t-0 pt-20 p-2"
    >
      <h1 className="text-center text-2xl font-bold my-8 text-design">BLOG</h1>
      <div className="flex flex-col space-y-8 pb-8">
        {blogData.map((post) => (
          <div key={post.id} className="cursor-pointer group">
            <Card
              icon={<FaBlog />}
              title={post.title}
              date={post.date}
              description={post.description}
              skills={post.tags || []}
              button={{
                label: "Read More →",
                onClick: () => navigate(`/blog/${post.id}`),
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
