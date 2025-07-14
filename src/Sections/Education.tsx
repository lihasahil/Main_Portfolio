import React from "react";
import Card from "../components/Card";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="border-2 border-dotted border-green-600 border-b-0"
    >
      <h1 className="text-center text-2xl font-bold my-8 text-design">
        EDUCATION
      </h1>
      <div className="flex flex-col space-y-8 pb-8 ">
        <Card
          icon={<FaUserGraduate />}
          title="Himalaya College of Enginerring"
          subtitle={["Bachelors of Computer Engineering"]}
          date="2025,June - Present"
          description="Collaborated on building healthcare web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).Gained hands-on experience in full stack development, API integration, and RESTful service creation.Contributed to front-end UI components and back-end server logic under senior developer guidance.Strengthened skills in Git, responsive design, and debugging within an agile team environment."
          skills={["React", "Express", "NodeJs", "MongoDB"]}
        />
        <Card
          icon={<FaUserGraduate />}
          title="V.S. Niketan Secondary School"
          subtitle={["Higher Secondary Education (10+2) "]}
          date="2025,June - Present"
          description="Collaborated on building healthcare web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).Gained hands-on experience in full stack development, API integration, and RESTful service creation.Contributed to front-end UI components and back-end server logic under senior developer guidance.Strengthened skills in Git, responsive design, and debugging within an agile team environment."
          skills={["React", "Express", "NodeJs", "MongoDB"]}
        />
        <Card
          icon={<FaUserGraduate />}
          title="V.S. Niketan Secondary School"
          subtitle={["Secondary Education Examination"]}
          date="2025,June - Present"
          description="Collaborated on building healthcare web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).Gained hands-on experience in full stack development, API integration, and RESTful service creation.Contributed to front-end UI components and back-end server logic under senior developer guidance.Strengthened skills in Git, responsive design, and debugging within an agile team environment."
          skills={["React", "Express", "NodeJs", "MongoDB"]}
        />
      </div>
    </section>
  );
};

export default Education;
