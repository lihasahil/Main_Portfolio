import Card from "../components/Card";
import ReactLogo from "../assets/tech_logo/reactjs.png";
import ExpressLogo from "../assets/tech_logo/express.png";
import NodeLogo from "../assets/tech_logo/nodejs.png";
import MongoLogo from "../assets/tech_logo/mongodb.png";
const Experience = () => {
  return (
    <section
      id="experience"
      className="border-2 border-dotted border-green-600 border-t-0 border-b-0 p-2 pb-5"
    >
      <h1 className="text-center text-2xl font-bold my-8 text-design">
        EXPERIENCE
      </h1>

      <Card
        icons="/icons/logo.svg"
        title="Upchaar Nepal"
        subtitle={["Software Developer Intern"]}
        date="2025,June - Present"
        description="Collaborated on building healthcare web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).Gained hands-on experience in full stack development, API integration, and RESTful service creation.Contributed to front-end UI components and back-end server logic under senior developer guidance.Strengthened skills in Git, responsive design, and debugging within an agile team environment."
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
    </section>
  );
};

export default Experience;
