"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  button?: { label: string; onClick: () => void };
  expandable?: boolean;
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
  expandable = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const [locked, setLocked] = useState(false);
  const isOpen = hovered || locked;

  const header = (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        {(icon || icons) && (
          <div className="w-9 h-9 rounded-md border border-border bg-bg-card flex items-center justify-center shrink-0 overflow-hidden p-1">
            {icon ? (
              <span className="text-secondary">{icon}</span>
            ) : (
              <img src={icons} alt="" className="w-full h-full object-contain" />
            )}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-text truncate">{title}</h3>
          {subtitle && subtitle[0] && (
            <p className="text-xs text-secondary mt-0.5">{subtitle[0]}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="text-right">
          <p className="text-xs text-secondary tabular-nums whitespace-nowrap">{date}</p>
          {score && <p className="text-xs text-secondary mt-0.5">{score}</p>}
        </div>
        {expandable && (
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-secondary"
          >
            <ChevronDown size={14} />
          </motion.span>
        )}
      </div>
    </div>
  );

  const details = (
    <>
      <p className="text-sm text-secondary leading-relaxed mb-4 pl-12">{description}</p>

      {progression && (
        <div className="pl-12 mb-4">
          <div className="border-l-2 border-border pl-3 space-y-2">
            <div>
              <span className="text-xs font-medium text-text">
                {progression.initial.designation}
              </span>
              <span className="text-xs text-secondary ml-2">{progression.initial.date}</span>
              {progression.initial.note && (
                <p className="text-xs text-secondary mt-0.5 leading-relaxed">
                  {progression.initial.note}
                </p>
              )}
            </div>
            {progression.promotions?.map((promo, i) => (
              <div key={i}>
                <span className="text-xs text-secondary mr-1.5">↑</span>
                <span className="text-xs font-medium text-text">{promo.designation}</span>
                <span className="text-xs text-secondary ml-2">{promo.date}</span>
                {promo.note && (
                  <p className="text-xs text-secondary mt-0.5 leading-relaxed">
                    {promo.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {projects && projects.length > 0 && (
        <div className="pl-12 mb-4 flex flex-wrap gap-3">
          {projects.map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary hover:text-text underline underline-offset-2 decoration-border transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {proj.name} ↗
            </a>
          ))}
        </div>
      )}

      {skills && skills.length > 0 && (
        <div className="pl-12 flex flex-wrap gap-1.5">
          {skills.map((skill, i) =>
            skill.link ? (
              <a
                key={i}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-bg-card border border-border px-2 py-1 rounded text-secondary hover:text-text hover:border-text/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {skill.icon && <img src={skill.icon} alt="" className="w-3.5 h-3.5" />}
                {skill.name}
              </a>
            ) : (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs bg-bg-card border border-border px-2 py-1 rounded text-secondary"
              >
                {skill.icon && <img src={skill.icon} alt="" className="w-3.5 h-3.5" />}
                {skill.name}
              </span>
            )
          )}
        </div>
      )}

      {website && (
        <div className="pl-12 mt-3">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-secondary hover:text-text underline underline-offset-2 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {website} ↗
          </a>
        </div>
      )}

      {button && (
        <div className="pl-12 mt-4">
          <button
            onClick={(e) => { e.stopPropagation(); button.onClick(); }}
            className="btn-ghost h-8 px-3 text-xs"
          >
            {button.label}
          </button>
        </div>
      )}
    </>
  );

  if (!expandable) {
    return (
      <div className="py-8 border-t border-border">
        {header}
        <div className="mt-3">{details}</div>
      </div>
    );
  }

  return (
    <div
      className="py-6 border-t border-border cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setLocked((v) => !v)}
    >
      {header}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3">{details}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
