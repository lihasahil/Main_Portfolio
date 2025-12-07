import React from "react";
import TypewriterSkills from "./TypeWriter";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Skill {
  name: string;
  icon?: string;
  link?: string;
}

interface CardProps {
  icons: string;
  title: string;
  subtitle?: string[];
  date: string;
  score?: string;
  description: string;
  skills?: Skill[];
  projects?: { name: string; link: string }[];
  website?: string;
  button?: {
    label: string;
    onClick: () => void;
  };
}

const Card: React.FC<CardProps> = ({
  icons,
  title,
  subtitle,
  date,
  score,
  description,
  skills,
  projects,
  website,
  button,
}) => {
  return (
    <div className="mx-3 text-text p-6 rounded-md border-dotted border-2 border-green-600 ">
      {/* Header: Icon + Title */}
      <div className="flex items-start gap-2 mb-4">
        <div className="flex flex-col justify-center">
          {title === "Upchaar Nepal" ? (
            <div className="flex gap-2 -ml-10 justify-center items-center">
              <div className="rounded-full text-base text-[#93DA97] w-10 h-10 flex items-center justify-center">
                <img
                  src={icons}
                  alt=""
                  className="rounded-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ) : (
            <div className="flex gap-2 justify-center items-center">
              <div className="rounded-full text-base text-[#93DA97] w-10 h-10 flex items-center justify-center">
                <img
                  src={icons}
                  alt=""
                  className="rounded-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          )}

          {subtitle && (
            <p className="text-sm">
              <TypewriterSkills skills={subtitle} className="text-sm" />
            </p>
          )}

          <p className="text-[#D2D0A0] text-xs">
            {date}{" "}
            {score && <span className="text-[#D2D0A0] text-xs">({score})</span>}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-text mb-4 leading-relaxed">{description}</p>

      {/* Projects (optional) */}
      {projects && projects.length > 0 && (
        <div className="mb-4 text-sm mx-10">
          <h4 className="font-semibold mb-1">Projects I worked on:</h4>
          <ul className="list-disc list-inside text-text space-y-1">
            {projects.map((proj, i) => (
              <li key={i}>
                <a
                  href={proj.link}
                  target="_blank"
                  className=" hover:underline"
                >
                  {proj.name}
                  <FaExternalLinkAlt className="inline ml-4 w-3 h-3 text-text" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) =>
            skill.link ? (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs bg-skill-bg cursor-pointer border border-dashed border-skill-border py-1 px-2 rounded-md skill-inner-shadow self-end text-text"
              >
                {skill.icon && (
                  <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                )}
                <span>{skill.name}</span>
              </a>
            ) : (
              <div
                key={index}
                className="inline-flex items-center gap-2 text-xs bg-skill-bg cursor-pointer border border-dashed  border-skill-border py-1 px-2 rounded-md skill-inner-shadow self-end text-text"
              >
                {skill.icon && (
                  <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                )}
                <span>{skill.name}</span>
              </div>
            )
          )}
        </div>
      )}

      {/* Website Link */}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 hover:underline text-sm"
        >
          Visit Website
        </a>
      )}

      {/* Button (optional) */}
      {button && (
        <button
          onClick={button.onClick}
          className="mt-4 px-5 py-2.5 text-sm font-semibold cursor-pointer text-white bg-[#5E936C] rounded-full shadow-md hover:bg-[#93DA97] hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          {button.label}
        </button>
      )}
    </div>
  );
};

export default Card;
