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
  <section id="skills" className="border-2 border-dotted border-green-600">
    {/* Section Title */}
    <h2 className="text-center text-2xl font-bold my-8 text-design">SKILLS</h2>

    {/* Skill Categories */}
    <div className=" m-8 flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {(SkillsInfo as SkillCategory[]).map((category) => (
        <div
          key={category.title}
          className="backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl 
          shadow-sm shadow-[#328E6E]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#3E5F44] mb-4 text-center">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-[#328E6E] rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-[#3E5F44]">
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
