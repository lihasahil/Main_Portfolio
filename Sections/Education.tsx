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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0 pb-4">
        {/* First card */}
        <Card
          icons="/icons/hcoe.png"
          title="Himalaya College of Engineering"
          subtitle={["Bachelors of Computer Engineering"]}
          date="April 2021 - April 2025"
          description="Focused on software development, networking, and embedded systems; completed practical projects in C/C++ and web development."
          skills={[
            { name: "C" },
            { name: "C++" },
            { name: "Data Structures & Algorithms" },
            { name: "Web Development" },
          ]}
          score="Percentage: 72%"
        />

        {/* Second and third cards */}
        <div className="flex flex-col gap-4 md:col-span-1 lg:col-span-2">
          <Card
            icons="/icons/unnamed.png"
            title="V.S. Niketan Secondary School"
            subtitle={["Higher Secondary Education (10+2)"]}
            date="June 2018 - June 2020"
            description="Focused on Mathematics, Physics, and Computer Science; strengthened problem-solving and analytical skills."
            score="GPA: 3.27"
          />

          <Card
            icons="/icons/unnamed.png"
            title="V.S. Niketan Secondary School"
            subtitle={["Secondary Education Examination"]}
            date="April 2017 - April 2018"
            description="Completed Secondary Education with a solid academic foundation."
            score="GPA: 3.65"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
