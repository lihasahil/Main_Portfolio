export type Skill = {
  name: string;
  logo: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const SkillsInfo: SkillCategory[] = [
  {
    title: "Development",
    skills: [
      { name: "JavaScript", logo: "/tech_logo/javascript.png" },
      { name: "ReactJS", logo: "/tech_logo/reactjs.png" },
      { name: "Redux", logo: "/tech_logo/redux.png" },
      { name: "NextJS", logo: "/tech_logo/nextjs.png" },
      { name: "Tailwind", logo: "/tech_logo/tailwindcss.png" },
      { name: "GSAP", logo: "/tech_logo/gsap.png" },
      { name: "ShadcnUI", logo: "/icons/shadcn.png" },
      { name: "NodeJS", logo: "/tech_logo/nodejs.png" },
      { name: "ExpressJS", logo: "/tech_logo/express.png" },
      { name: "MongoDB", logo: "/tech_logo/mongodb.png" },
      { name: "PostgreSQL", logo: "/tech_logo/postgre.png" },
      { name: "TypeScript", logo: "/tech_logo/typescript.png" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: "/tech_logo/git.png" },
      { name: "GitHub", logo: "/tech_logo/github.png" },
      { name: "VSCode", logo: "/tech_logo/vscode.png" },
      { name: "Postman", logo: "/tech_logo/postman.png" },
      { name: "Compass", logo: "/tech_logo/mc.png" },
      { name: "Vercel", logo: "/tech_logo/vercel.png" },
    ],
  },
];
