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
    <section id="experience" className="px-6 sm:px-10 py-10">
      <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-1">
        Work History
      </p>
      <h2 className="text-xl font-semibold text-text">Experience</h2>

      <div className="mt-2">
        <Card
          expandable
          icons="/icons/logo.png"
          title="NextWaveAi"
          subtitle={["Full Stack Developer"]}
          date="Dec 2025 – Present"
          description="Working on SaaS projects handling multiple client engagements with team collaboration, focusing on scalable architecture and feature ownership."
          progression={{
            initial: {
              designation: "Full Stack Developer Intern",
              date: "Dec 2025",
              note: "Contributing to design and development of scalable web applications.",
            },
            promotions: [
              {
                designation: "Junior Full Stack Developer",
                date: "Mar 2026",
                note: "Promoted to full-time role with ownership of feature development and system architecture.",
              },
            ],
          }}
          skills={[
            { name: "Next.js", icon: NextLogo, link: "https://nextjs.org/" },
            { name: "TypeScript", icon: TsLogo, link: "https://www.typescriptlang.org/" },
            { name: "PostgreSQL", icon: PostgresLogo, link: "https://www.postgresql.org/" },
            { name: "Docker", icon: DockerLogo, link: "https://www.docker.com/" },
          ]}
        />

        <Card
          expandable
          icons="/icons/logo.svg"
          title="Upchaar Nepal"
          subtitle={["Software Developer Intern"]}
          date="Jun 2025 – Dec 2025"
          description="Built healthcare web applications across frontend and backend. Integrated REST APIs, contributed UI components, and worked in an agile team environment."
          progression={{
            initial: {
              designation: "Software Developer Intern",
              date: "Jun 2025",
            },
          }}
          projects={[
            { name: "Diagnostic Portal", link: "https://diagnostic.upchaarnepal.com/" },
            { name: "Clinic Portal", link: "https://clinic.upchaarnepal.com/" },
            { name: "Pharmacy Portal", link: "https://pharmacy.upchaarnepal.com/" },
          ]}
          skills={[
            { name: "React", icon: ReactLogo, link: "https://react.dev/" },
            { name: "Express", icon: ExpressLogo, link: "https://expressjs.com/" },
            { name: "Node.js", icon: NodeLogo, link: "https://nodejs.org/" },
            { name: "MongoDB", icon: MongoLogo, link: "https://www.mongodb.com/" },
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
