import Card from "../Card";

const Education = () => {
  return (
    <section id="education" className="border-t border-border px-6 sm:px-10 py-10">
      <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-1">
        Academic Background
      </p>
      <h2 className="text-xl font-semibold text-text">Education</h2>

      <div className="mt-2">
        <Card
          expandable
          icons="/icons/hcoe.png"
          title="Himalaya College of Engineering"
          subtitle={["Bachelor of Computer Engineering"]}
          date="Apr 2021 – Apr 2025"
          score="72%"
          description="Focused on software development, networking, and embedded systems. Completed practical projects in C/C++, data structures, and web development."
          skills={[
            { name: "C" },
            { name: "C++" },
            { name: "Data Structures & Algorithms" },
            { name: "Web Development" },
          ]}
        />

        <Card
          expandable
          icons="/icons/unnamed.png"
          title="V.S. Niketan Secondary School"
          subtitle={["Higher Secondary (10+2)"]}
          date="Jun 2018 – Jun 2020"
          score="Grade: A"
          description="Focused on Mathematics, Physics, and Computer Science. Strengthened problem-solving and analytical skills."
        />

        <Card
          expandable
          icons="/icons/unnamed.png"
          title="V.S. Niketan Secondary School"
          subtitle={["Secondary Education Examination"]}
          date="Apr 2017 – Apr 2018"
          score="Grade: A+"
          description="Completed secondary education with a solid academic foundation."
        />
      </div>
    </section>
  );
};

export default Education;
