import React, { useState, useEffect } from "react";

interface TypewriterSkillsProps {
  skills: string[];
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
    if (skills.length === 0) return;

    if (index === skills.length) {
      setIndex(0);
      return;
    }

    if (subIndex === skills[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1000);
      return () => clearTimeout(timeout);
    }

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
  }, [subIndex, index, reverse, skills]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <h2
      className={`text-green-500  font-medium  md:text-left mt-2 ${
        className ?? "text-lg text-center"
      }`}
      style={{ minHeight: "1.5em" }}
    >
      {skills.length > 0
        ? `${skills[index].substring(0, subIndex)}${blink ? "|" : " "}`
        : ""}
    </h2>
  );
};

export default TypewriterSkills;
