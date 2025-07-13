import React from "react";
import Card from "../components/Card";
import { FaBriefcase } from "react-icons/fa";
const Experience = () => {
  return (
    <section className="border-2 border-dotted border-blue-500 border-t-0 p-5">
      <h1 className="text-center text-2xl font-bold my-8 text-design">
        EXPERIENCE
      </h1>
      <Card
        icon={<FaBriefcase />}
        title="Upachaar Nepal"
        subtitle={["Software Developer Intern"]}
        date="2025,June - Present"
        description="Collaborated on building healthcare web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).Gained hands-on experience in full stack development, API integration, and RESTful service creation.Contributed to front-end UI components and back-end server logic under senior developer guidance.Strengthened skills in Git, responsive design, and debugging within an agile team environment."
        skills={["React", "Express", "NodeJs", "MongoDB"]}
      />
    </section>
  );
};

export default Experience;
