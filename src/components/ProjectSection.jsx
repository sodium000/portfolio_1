import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { getTechIcon } from "../lib/techIcons";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "PlateShare",
    description: "PlateShare is a modern web application designed to connect food donors with those in need, reducing food waste and helping communities share resources.",
    image: "/projects/PlateShear.png",
    tags: ["HTML", "CSS", "React", "TailwindCSS", "Firbase", "React-Router","Node.js","Express.js","Jwt", "MongoDB"],
    demoUrl: "https://platshear.web.app/",
    githubUrl: "https://github.com/sodium000/B12-A10-Future-Box-client-",
  },
  {
    id: 2,
    title: "E-tuitionBD",
    description: "E-tuitionBD is a modern web application designed to connect students with tutors.The application provides a seamless learning experience, detailed course information, and profile management.",
    image: "/projects/etutionbd.png",
    tags: ["HTML", "CSS", "React", "TailwindCSS", "Firbase", "React-Router","Node.js","Express.js","Jwt", "MongoDB"],
    demoUrl: "https://etutionbd-8fb07.web.app/",
    githubUrl: "https://github.com/sodium000/E-tuitionBD-client",
  },
  {
    id: 3,
    title: "ToyTopia",
    description: "ToyTopia is a modern e-commerce platform for buying and selling toys.The application provides a seamless shopping  product browsing, detailed toy information, and profile management.",
    image: "/projects/toytopia.png",
    tags: ["HTML", "CSS", "React", "TailwindCSS", "Firbase", "React-Router", "MongoDB"],
    demoUrl: "https://toyshop-3fb8f.firebaseapp.com/",
    githubUrl: "https://github.com/sodium000/Toy_Topia",
  },
  {
    id: 4,
    title: "ItemSell",
    description: "Hi! This is my small ItemSell web app built with Next.js. I'm still learning, so I wrote down the things that help me run and understand the project.",
    image: "/projects/ItemSell.png",
    tags: ["HTML", "CSS", "React","Next.js", "TailwindCSS", "Firbase", "React-Router","Node.js","Express.js","Jwt", "MongoDB"],
    demoUrl: "https://item-sell.vercel.app/",
    githubUrl: "https://github.com/sodium000/nextFroentend",
  },
  {
    id: 5,
    title: "Green Earth",
    description: "Plant a Tree, Grow a Future.Join our mission to plant 1 million trees and make the Earth greener for future generations.",
    image: "/projects/greenEarth.png",
    tags: ["HTML", "CSS", "React", "TailwindCSS"],
    demoUrl: "https://green-earth-assignment6-tonmoy.netlify.app/",
    // githubUrl: "",
  },
  {
    id: 6,
    title: "HERO.IO",
    description: "At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.",
    image: "/projects/Apphero.png",
    tags: ["HTML", "CSS", "React", "TailwindCSS"],
    demoUrl: "https://app-hero-store.netlify.app/appdeatils/2",
    githubUrl: "https://github.com/sodium000/app_hero_store",
  },
  {
    id: 7,
    title: "Password Store Application",
    description:"Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["javaScript", "node.js", "React.js", "MongoDB"],
    demoUrl: "https://password-store-eosin.vercel.app/",
    githubUrl: "https://github.com/sodium000/passwordStore",
  },
  {
    id: 8,
    title: "Chat-Application",
    description:
      "A real-time live chat application enabling instant messaging between users.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://chat-application-xqlu.onrender.com",
    githubUrl: "https://github.com/sodium000/chat-application.git",
  },
  {
    id: 9,
    title: "Demo Quiz Page Application",
    description: "A beautiful roution page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://quiz-exam-application.vercel.app/",
    githubUrl: "https://github.com/sodium000/QuizExam-Application",
  }
];

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  // Calculate the projects to display for current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of projects section smoothly
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="projects" className="py-12 md:py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-1 sm:gap-2 mb-3 md:mb-4">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Projects </span>
            </h2>
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary animate-pulse" />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentProjects.map((project, index) => {
            const TechIcon = getTechIcon(project.tags[0]);
            return (
              <div
                key={project.id}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <Card
                  className="group relative overflow-hidden border-2 border-border/30 bg-card/80 backdrop-blur-xl hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 h-full flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 pointer-events-none"></div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                    />
                    
                    {/* Overlay with project info on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs text-muted-foreground font-medium mb-2">View Project</p>
                        <div className="flex gap-2">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors flex items-center gap-1.5"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={12} />
                            Live Demo
                          </a>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 rounded-md bg-secondary text-foreground text-xs font-medium hover:bg-secondary/80 transition-colors flex items-center gap-1.5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={12} />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4 pt-6 relative z-10">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 flex-1">
                        {project.title}
                      </CardTitle>
                      {TechIcon && (
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <TechIcon className="h-5 w-5 text-primary flex-shrink-0" />
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-4 flex-1 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => {
                        const Icon = getTechIcon(tag);
                        return (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs flex items-center gap-1.5 px-2.5 py-1 bg-secondary/50 hover:bg-secondary transition-colors group-hover:scale-105 duration-300"
                          >
                            {Icon && <Icon className="h-3 w-3 opacity-70" />}
                            <span className="font-medium">{tag}</span>
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 pb-6 relative z-10">
                    <div className="flex gap-3 w-full">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                        <span className="text-sm">Demo</span>
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn"
                          aria-label="View source code"
                        >
                          <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={cn(
                  "px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2",
                  currentPage === 1
                    ? "border-border/30 text-muted-foreground cursor-not-allowed opacity-50"
                    : "border-primary/30 text-foreground hover:border-primary/50 hover:bg-primary/10 hover:scale-105"
                )}
                aria-label="Previous page"
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={cn(
                      "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg text-sm sm:text-base font-medium transition-all duration-300",
                      currentPage === page
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110"
                        : "bg-card border border-border/30 text-foreground hover:border-primary/50 hover:bg-primary/10 hover:scale-105"
                    )}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={cn(
                  "px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2",
                  currentPage === totalPages
                    ? "border-border/30 text-muted-foreground cursor-not-allowed opacity-50"
                    : "border-primary/30 text-foreground hover:border-primary/50 hover:bg-primary/10 hover:scale-105"
                )}
                aria-label="Next page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Page Info */}
            <p className="text-sm text-muted-foreground">
              Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, projects.length)} of {projects.length} projects
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 group relative overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sodium000"
          >
            <span className="relative z-10 flex items-center gap-2">
              Check My Github 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};