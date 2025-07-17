import React, { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Redux toolkit", level: 50, category: "tools" },

  // Familiar With
  { name: "C#", level: 90, category: "extra" },
  { name: "Firebase", level: 80, category: "extra" },
  { name: "NextAuth.js", level: 60, category: "extra" },
  { name: "JSON Web Token (JWT)", level: 50, category: "extra" },
  { name: "Data structures and algorithms", level: 75, category: "extra" },
];
const category = ["all","frontend", "backend","tools","extra"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.sort((a,b)=>b.level-a.level).filter((skill)=> activeCategory === "all" || skill.category === activeCategory);
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {category.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize", 
                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-1">
                <h3 className="font-semibold text-sm">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
