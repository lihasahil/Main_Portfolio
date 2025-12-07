import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../constant";

type Skill = {
  name: string;
  logo: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const Skills: React.FC = () => (
  <section id="skills" className="border-2 border-dotted  border-green-600">
    {/* Section Title */}
    <h2 className="text-center text-2xl font-bold mt-8 mb-4 text-design">
      SKILLS
    </h2>

    {/* Skill Categories */}
    <div className="mx-5 flex flex-col gap-1 lg:gap-5 py-5 justify-between">
      {(SkillsInfo as SkillCategory[]).map((category) => (
        <div
          key={category.title}
          className="backdrop-blur-md px-6 sm:px-10 py-8 mb-2  sm:py-6w-full  rounded-md border-green-600 border-2 border-dotted 
          "
        >
          <h3 className="text-xl font-semibold text-text mb-4 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 skill-inner-shadow self-end bg-skill-bg  border border-dashed border-skill-border rounded-3xl py-2 px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                  <span className="text-xs sm:text-sm text-text">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
