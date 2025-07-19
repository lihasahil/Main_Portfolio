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
          date="April 2021 - April 2025"
          description="Collaborated on building healthcare web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).Gained hands-on experience in full stack development, API integration, and RESTful service creation.Contributed to front-end UI components and back-end server logic under senior developer guidance.Strengthened skills in Git, responsive design, and debugging within an agile team environment."
          skills={["React", "Express", "NodeJs", "MongoDB"]}
        />
        <Card
          icon={<FaUserGraduate />}
          title="V.S. Niketan Secondary School"
          subtitle={["Higher Secondary Education (10+2) "]}
          date="June 2018 - June 2020"
          description="Completed Higher Secondary Education with a focus on Mathematics, Physics, and Computer Science. Developed a strong foundation in problem-solving and analytical thinking. Participated in science exhibitions, projects, and developed a keen interest in technology and engineering."
          skills={[
            "Physics",
            "Chemistry",
            "Mathematics",
            "Computer Science",
            "Compulsary English",
            "Compulsary Maths",
          ]}
        />
        <Card
          icon={<FaUserGraduate />}
          title="V.S. Niketan Secondary School"
          subtitle={["Secondary Education Examination"]}
          date=" April 2017 - April 2018"
          description="Completed Education Examination with a strong focus on fundamental subjects such as Mathematics, Nepali, and English. Actively involved in extracurricular activities, sports, and leadership programs, which helped build a well-rounded skill set."
          skills={[
            "Science",
            "English",
            "Nepali",
            "Social Studies",
            "HPE",
            "Accounts",
          ]}
        />
      </div>
    </section>
  );
};

export default Education;
