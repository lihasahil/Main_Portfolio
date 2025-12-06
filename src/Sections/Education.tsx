import Card from "../components/Card";

const Education = () => {
  return (
    <section
      id="education"
      className="border-2 border-dotted border-green-600 border-b-0 p-2"
    >
      <h1 className="text-center text-2xl font-bold my-8 text-design">
        EDUCATION
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 pb-8">
        <Card
          icons="/icons/hcoe.png"
          title="Himalaya College of Engineering"
          subtitle={["Bachelors of Computer Engineering"]}
          date="April 2021 - April 2025"
          description="Completed a Bachelor’s degree in Computer Engineering, gaining in-depth knowledge of software development, computer architecture, networking, and embedded systems, along with practical experience in problem-solving and project implementation."
          skills={[
            { name: "C" },
            { name: "C++" },
            { name: "Data structures and Algorithm" },
            { name: "Web Development" },
          ]}
          score="Percentage: 72%"
        />
        <Card
          icons="/icons/unnamed.png"
          title="V.S. Niketan Secondary School"
          subtitle={["Higher Secondary Education (10+2) "]}
          date="June 2018 - June 2020"
          description="Completed Higher Secondary Education with a focus on Mathematics, Physics, and Computer Science. Developed a strong foundation in problem-solving and analytical thinking. Participated in science exhibitions, projects, and developed a keen interest in technology and engineering."
          skills={[
            { name: "Physics" },
            { name: "Chemistry" },
            { name: "Mathematics" },
            { name: "Computer Science" },
            { name: "Compulsary English" },
            { name: "Compulsary Maths" },
          ]}
          score="GPA: 3.27"
        />
        <div className="sm:col-span-2">
          <Card
            icons="/icons/unnamed.png"
            title="V.S. Niketan Secondary School"
            subtitle={["Secondary Education Examination"]}
            date="April 2017 - April 2018"
            score="GPA: 3.65"
            description="Completed Education Examination with a strong focus on fundamental subjects such as Mathematics, Nepali, and English. Actively involved in extracurricular activities, sports, and leadership programs, which helped build a well-rounded skill set."
            skills={[
              { name: "Science" },
              { name: "English" },
              { name: "Nepali" },
              { name: "Social Studies" },
              { name: "HPE" },
              { name: "Accounts" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
