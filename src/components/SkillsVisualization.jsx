import React, { useState, useEffect } from "react";
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiGithub,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const SkillsVisualization = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Top row technologies
  const topRowTechs = [
    { Icon: SiFigma, name: "Figma", color: "text-orange-500" },
    { Icon: SiReact, name: "React", color: "text-blue-400" },
    { Icon: FaCode, name: "Code", color: "text-blue-400" },
    { Icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
    { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { Icon: SiVite, name: "Vite", color: "text-purple-400" },
  ];

  // Second row technologies
  const secondRowTechs = [
    { Icon: SiNextdotjs, name: "Next.js", color: "text-gray-300" },
    { Icon: SiFirebase, name: "Firebase", color: "text-orange-400" },
    { Icon: SiExpress, name: "Express", color: "text-gray-300" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
    { Icon: SiBootstrap, name: "Bootstrap", color: "text-purple-400" },
  ];

  // Orbiting technologies - positioned around central ellipse
  const orbitingTechs = [
    { Icon: SiFigma, name: "Figma", angle: 0 },
    { Icon: SiGithub, name: "GitHub", angle: 45 },
    { Icon: FaCode, name: "Code", angle: 90 },
    { Icon: SiReact, name: "React", angle: 135 },
    { Icon: SiNextdotjs, name: "Next.js", angle: 180 },
    { Icon: SiNodedotjs, name: "Node.js", angle: 225 },
    { Icon: SiExpress, name: "Express", angle: 270 },
    { Icon: SiMongodb, name: "MongoDB", angle: 315 },
  ];

  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Mission Statement */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto px-4">
            I'm currently looking to join a{" "}
            <span className="text-primary font-bold">cross-functional</span> team
            that values improving people's lives through{" "}
            <span className="text-primary font-bold">accessible design</span>
          </p>
        </div>

        {/* Top Row Technologies */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 md:mb-8">
          {topRowTechs.map((tech, index) => (
            <div
              key={index}
              className="group relative opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-card/80 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center transition-all duration-300 hover:border-primary/60 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                <tech.Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              {/* Connection line */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Second Row Technologies */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 md:mb-12">
          {secondRowTechs.map((tech, index) => (
            <div
              key={index}
              className="group relative opacity-0 animate-fade-in"
              style={{
                animationDelay: `${(index + topRowTechs.length) * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-card/80 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center transition-all duration-300 hover:border-primary/60 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                <tech.Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              {/* Connection line */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-t from-primary/30 to-transparent opacity-50"></div>
            </div>
          ))}
        </div>

  
        <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer orbit */}
            <div 
              className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] border border-primary/20 rounded-full"
              style={{
                animation: 'spin-slow 20s linear infinite'
              }}
            >
              <div className="absolute w-full h-full border border-primary/10 rounded-full"></div>
            </div>

            <div 
              className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] border border-primary/20 rounded-full"
              style={{
                animation: 'spin-slow-reverse 25s linear infinite'
              }}
            >
              <div className="absolute w-full h-full border border-primary/10 rounded-full"></div>
            </div>
            <div 
              className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] border border-primary/20 rounded-full"
              style={{
                animation: 'spin-slow 15s linear infinite'
              }}
            ></div>
          </div>

          {/* Orbiting Icons */}
          {orbitingTechs.map((tech, index) => {
            const angleRad = (tech.angle * Math.PI) / 180;
            const radius = windowWidth < 640 ? 90 : windowWidth < 1024 ? 110 : 140;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            const containerSize = windowWidth < 640 ? 32 : windowWidth < 1024 ? 40 : 48;
            
            return (
              <div
                key={index}
                className="absolute group"
                style={{
                  transform: `translate(calc(50% + ${x}px - ${containerSize/2}px), calc(50% + ${y}px - ${containerSize/2}px))`,
                }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-card/90 backdrop-blur-md border-2 border-primary/40 flex items-center justify-center transition-all duration-300 hover:border-primary/80 hover:scale-125 hover:shadow-xl hover:shadow-primary/40">
                  <tech.Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
            );
          })}

          {/* Central Ellipse with Initials */}
          <div className="relative z-10">
            <div className="relative w-40 h-28 sm:w-48 sm:h-32 md:w-64 md:h-40 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-full border-2 border-primary/40 shadow-2xl shadow-primary/20 backdrop-blur-xl">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/20 rounded-full blur-xl"></div>
              
              {/* Central Symbol - Using initials RT */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary/90 drop-shadow-lg">
                TECH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsVisualization;

