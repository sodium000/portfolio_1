import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ToyTopia",
    description: "ToyTopia is a modern e-commerce platform for buying and selling toys. The application provides a seamless shopping experience with user authentication, product browsing, detailed toy information, and profile management.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "React", "TailwindCSS", "Firbase", "React-Router"],
    demoUrl: "https://toyshop-3fb8f.firebaseapp.com/",
    githubUrl: "https://github.com/sodium000/Toy_Topia",
  },
  {
    id: 2,
    title: "PlateShare",
    description: "PlateShare is a modern web application designed to connect food donors with those in need, reducing food waste and helping communities share resources.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://platshear.firebaseapp.com/",
    githubUrl: "https://github.com/sodium000/B12-A10-Future-Box-client-",
  },
  {
    id: 3,
    title: "ItemSell",
    description: "Hi! This is my small ItemSell web app built with Next.js. I’m still learning, so I wrote down the things that help me run and understand the project.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://next-froentend.vercel.app/",
    githubUrl: "https://github.com/sodium000/nextFroentend",
  },
  {
    id: 4,
    title: "Green Earth",
    description: "Plant a Tree, Grow a Future.Join our mission to plant 1 million trees and make the Earth greener for future generations.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://green-earth-assignment6-tonmoy.netlify.app/",
    // githubUrl: "",
  },
  {
    id: 5,
    title: "HERO.IO",
    description: "At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://app-hero-store.netlify.app/appdeatils/2",
    githubUrl: "https://github.com/sodium000/app_hero_store",
  },
  {
    id: 6,
    title: "Password Store Application",
    description:"Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["javaScript", "node.js", "React.js", "MongoDB"],
    demoUrl: "https://password-store-eosin.vercel.app/",
    githubUrl: "https://github.com/sodium000/passwordStore",
  },
  {
    id: 7,
    title: "Chat-Application",
    description:
      "A real-time live chat application enabling instant messaging between users.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://chat-application-xqlu.onrender.com",
    githubUrl: "https://github.com/sodium000/chat-application.git",
  },
  {
    id: 8,
    title: "Demo Quiz Page Application",
    description: "A beautiful roution page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://quiz-exam-application.vercel.app/",
    githubUrl: "https://github.com/sodium000/QuizExam-Application",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};