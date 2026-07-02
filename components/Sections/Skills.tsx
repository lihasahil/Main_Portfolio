import { SkillsInfo } from "@/constant";

type Skill = { name: string; logo: string };
type SkillCategory = { title: string; skills: Skill[] };

const SPEEDS = [22, 28, 18, 25, 20, 30];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 sm:px-10 py-10">
      <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-1">
        Tech Stack
      </p>
      <h2 className="text-xl font-semibold text-text mb-8">Skills</h2>

      <div className="space-y-4">
        {(SkillsInfo as SkillCategory[]).map((category, idx) => {
          // 4 copies so content always overflows the container width
          const items = [
            ...category.skills,
            ...category.skills,
            ...category.skills,
            ...category.skills,
          ];
          const speed = SPEEDS[idx % SPEEDS.length];

          return (
            <div
              key={category.title}
              className="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <p className="text-xs font-medium text-secondary sm:w-32 shrink-0">
                {category.title}
              </p>

              {/* Fade mask on edges, overflow hidden */}
              <div
                className="flex-1 overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
                }}
              >
                <div
                  className="flex gap-2 w-max"
                  style={{
                    animation: `marquee ${speed}s linear infinite`,
                  }}
                >
                  {items.map((skill, i) => (
                    <span
                      key={`${skill.name}-${i}`}
                      className="inline-flex items-center gap-1.5 text-xs bg-bg-card border border-border px-2.5 py-1 rounded text-secondary whitespace-nowrap"
                    >
                      <img
                        src={skill.logo}
                        alt=""
                        className="w-3.5 h-3.5 object-contain"
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
