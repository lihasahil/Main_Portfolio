import React, { useState, useEffect } from "react";

interface TypewriterSkillsProps {
  skills?: string[];
  className?: string;
}

const TypewriterSkills: React.FC<TypewriterSkillsProps> = ({
  skills,
  className,
}) => {
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [blink, setBlink] = useState<boolean>(true);
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    if (!skills || skills.length === 0) return;

    // Pause before starting next skill
    if (subIndex === 0 && index > 0 && !reverse) {
      const timeout = setTimeout(() => {
        setSubIndex(1);
      }, 500);
      return () => clearTimeout(timeout);
    }

    // When finished typing, start deleting
    if (subIndex === skills[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1000);
      return () => clearTimeout(timeout);
    }

    // When finished deleting, move to next skill
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % skills.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [index, subIndex, reverse, skills]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  const maxWidth =
    skills && skills.length > 0 ? Math.max(...skills.map((s) => s.length)) : 0;

  return (
    <div
      className={`text-[#93DA97] font-medium md:text-left mt-4 font-mono ${
        className ?? "text-lg text-center"
      }`}
      style={{
        height: "1.5em",
        width: `${maxWidth * 0.65}em`,
        display: "block",
        overflow: "hidden",
      }}
    >
      <span style={{ display: "block" }}>
        {skills && skills.length > 0
          ? `${skills[index].substring(0, subIndex)}${blink ? "|" : " "}`
          : "\u00A0"}
      </span>
    </div>
  );
};

export default TypewriterSkills;
