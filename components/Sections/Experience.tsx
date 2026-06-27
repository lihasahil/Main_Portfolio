import Card from "../Card";

const ReactLogo = "/tech_logo/reactjs.png";
const ExpressLogo = "/tech_logo/express.png";
const NodeLogo = "/tech_logo/nodejs.png";
const MongoLogo = "/tech_logo/mongodb.png";
const NextLogo = "/tech_logo/nextjs.png";
const PostgresLogo = "/tech_logo/postgre.png";
const DockerLogo = "/tech_logo/docker.png";
const TsLogo = "/tech_logo/typescript.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-2 border-dotted border-green-600 border-t-0 border-b-0 p-2 pb-5"
    >
      <h1 className="text-center text-2xl font-bold my-8 text-design">
        EXPERIENCE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
        <Card
          icons="/icons/logo.png"
          title="NextWaveAi"
          subtitle={["Full Stack Developer"]}
          date="2025,December - Present"
          description="Worked as a Full Stack Developer, in SASS projects handling multiple client projects with team collaboration."
          progression={{
            initial: {
              designation: "Full Stack Developer Intern",
              date: "2025, December",
              note: "Worked as a Full Stack Developer Intern, contributing to the design and development of scalable web applications.",
            },
            promotions: [
              {
                designation: "Junior Full Stack Developer",
                date: "2026, March",
                note: "Promoted to full-time role, taking ownership of feature development and system architecture.",
              },
            ],
          }}
          skills={[
            { name: "NextJs", icon: NextLogo, link: "https://nextjs.org/" },
            {
              name: "Typescript",
              icon: TsLogo,
              link: "https://www.typescriptlang.org/",
            },
            {
              name: "PostgresSql",
              icon: PostgresLogo,
              link: "https://www.postgresql.org/",
            },
            {
              name: "Docker",
              icon: DockerLogo,
              link: "https://www.docker.com/",
            },
          ]}
        />

        <Card
          icons="/icons/logo.svg"
          title="Upchaar Nepal"
          subtitle={["Software Developer Intern"]}
          date="2025,June - 2025,December"
          description="Collaborated on building healthcare web applications.Gained hands-on experience in full stack development, API integration, and RESTful service creation.Contributed to front-end UI components and back-end server logic under senior developer guidance.Strengthened skills in Git, responsive design, and debugging within an agile team environment."
          progression={{
            initial: {
              designation: "Software Developer Intern",
              date: "2025, June",
            },
          }}
          projects={[
            {
              name: "Diagnostic Protal",
              link: "https://diagnostic.upchaarnepal.com/",
            },
            {
              name: "Clinic Protal",
              link: "https://clinic.upchaarnepal.com/",
            },
            {
              name: "Pharmacy Protal",
              link: "https://pharmacy.upchaarnepal.com/",
            },
          ]}
          skills={[
            { name: "React", icon: ReactLogo, link: "https://react.dev/" },
            {
              name: "Express",
              icon: ExpressLogo,
              link: "https://expressjs.com/",
            },
            {
              name: "NodeJs",
              icon: NodeLogo,
              link: "https://nodejs.org/en/download",
            },
            {
              name: "MongoDB",
              icon: MongoLogo,
              link: "https://www.mongodb.com/?msockid=0bbd28e608f06d592dba3bce09026ca9",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
