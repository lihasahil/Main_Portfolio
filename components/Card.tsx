"use client";

import React from "react";
import TypewriterSkills from "./TypeWriter";

interface Skill {
  name: string;
  icon?: string;
  link?: string;
}

interface ProgressionStep {
  designation: string;
  date: string;
  note?: string;
}

interface CareerProgression {
  initial: ProgressionStep;
  promotions?: ProgressionStep[];
}

interface CardProps {
  icons?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string[];
  date: string;
  score?: string;
  description: string;
  skills?: Skill[];
  projects?: { name: string; link: string }[];
  progression?: CareerProgression;
  website?: string;
  button?: {
    label: string;
    onClick: () => void;
  };
}

const Card: React.FC<CardProps> = ({
  icons,
  icon,
  title,
  subtitle,
  date,
  score,
  description,
  skills,
  projects,
  progression,
  website,
  button,
}) => {
  return (
    <div className="mx-3 text-text p-6 rounded-md border-dotted border-2 border-green-600 ">
      {/* Header: Icon + Title */}
      <div className="flex items-start gap-2 mb-4 w-full">
        <div className="flex flex-col justify-center w-full">
          <div className="flex gap-2 items-center">
            <div className="rounded-full text-base text-[#93DA97] w-10 h-10 flex items-center justify-center shrink-0">
              {icon ? icon : icons && <img src={icons} alt="" className="rounded-full object-contain" />}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>

          {subtitle && (
            <div className="text-sm">
              <TypewriterSkills skills={subtitle} className="text-sm" />
            </div>
          )}

          <p className="text-[#D2D0A0] text-xs">
            {date}{" "}
            {score && <span className="text-[#D2D0A0] text-xs">({score})</span>}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-text mb-4 leading-relaxed">{description}</p>

      {/* Career Progression (optional) */}
      {progression && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-[#93DA97] uppercase tracking-widest mb-3">
            Career Progression
          </h4>
          <div className="relative pl-4">
            {/* Vertical line */}
            <div className="absolute left-0 top-1 bottom-1 w-px bg-green-700 opacity-50" />

            {/* Initial role */}
            <div className="relative mb-3 pl-4">
              <span className="absolute -left-[5px] top-[5px] w-2.5 h-2.5 rounded-full border border-green-700 bg-[#1a1a1a]" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs bg-[#1a2e1a] border border-dashed border-green-800 text-green-600 py-0.5 px-2 rounded-md">
                  {/* Briefcase icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                  Joined
                </span>
                <span className="text-sm font-semibold text-text">
                  {progression.initial.designation}
                </span>
                <span className="text-[#D2D0A0] text-xs">
                  {progression.initial.date}
                </span>
              </div>
              {progression.initial.note && (
                <p className="text-xs text-text/60 mt-1 leading-relaxed">
                  {progression.initial.note}
                </p>
              )}
            </div>

            {/* Promotion steps */}
            {progression.promotions?.map((promo, i) => (
              <div key={i} className="relative mb-3 last:mb-0 pl-4">
                <span className="absolute -left-[5px] top-[5px] w-2.5 h-2.5 rounded-full border border-green-500 bg-[#93DA97]" />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs bg-green-900/40 border border-dashed border-green-700 text-[#93DA97] py-0.5 px-2 rounded-md">
                    {/* Arrow-up icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    Promoted
                  </span>
                  <span className="text-sm font-semibold text-text">
                    {promo.designation}
                  </span>
                  <span className="text-[#D2D0A0] text-xs">{promo.date}</span>
                </div>
                {promo.note && (
                  <p className="text-xs text-text/60 mt-1 leading-relaxed">
                    {promo.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects (optional) */}
      {projects && projects.length > 0 && (
        <div className="mb-4 text-sm mx-10">
          <h4 className="font-semibold mb-1">Projects I worked on:</h4>
          <ul className="list-disc flex flex-col sm:flex-row gap-4 list-inside text-text space-y-1">
            {projects.map((proj, i) => (
              <li key={i}>
                <a href={proj.link} target="_blank" className="hover:underline">
                  {proj.name}
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
            ),
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
