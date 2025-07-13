import React from "react";
import TypewriterSkills from "./TypeWriter";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string[];
  date: string;
  score?: string;
  description: string;
  skills: string[];
  projects?: string[];
  website?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  subtitle,
  date,
  score,
  description,
  skills,
  projects,
  website,
}) => {
  return (
    <div className="mx-5 text-black p-6 sm:p-8 rounded-xl shadow-sm shadow-green-400">
      {/* Header: Icon + Title */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex flex-col justify-center">
          <div className="flex gap-5 justify-center items-center">
            <div className="rounded-full bg-green-50 p-5 text-2xl text-green-400">
              {icon}
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
          </div>

          <p className="text-sm text-purple-400">
            <TypewriterSkills skills={subtitle} className="text-sm" />
          </p>
          <p>{date}</p>
          <p>{score}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[#5adbb5] text-white text-sm px-3 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Projects (optional) */}
      {projects && projects.length > 0 && (
        <div className="mb-2">
          <h4 className="font-semibold mb-1">Projects:</h4>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            {projects.map((proj, i) => (
              <li key={i}>{proj}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Website Link (optional) */}
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
    </div>
  );
};

export default Card;
