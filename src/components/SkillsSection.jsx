import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { getTechIcon } from "../lib/techIcons";

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
    <section id="skills" className="py-12 md:py-16 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 px-2">
          {category.map((cat, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(cat);
              }}
              className={cn(
                "px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300 capitalize font-medium", 
                activeCategory === cat 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105" 
                  : "bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {filteredSkills.map((skill, key) => {
            const Icon = getTechIcon(skill.name);
            return (
              <Card
                key={key}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                      )}
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="w-full bg-secondary/50 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-primary/80 h-2.5 rounded-full origin-left transition-all duration-1000 ease-out shadow-sm"
                      style={{ width: skill.level + "%" }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
