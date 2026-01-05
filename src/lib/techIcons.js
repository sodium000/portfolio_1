import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiNextdotjs,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFigma,
  SiRedux,
  SiVite
} from "react-icons/si";
import { FaReact, FaLock, FaMicrosoft, FaCreditCard, FaCloud } from "react-icons/fa";

export const techIcons = {
  "HTML": SiHtml5,
  "HTML/CSS": SiHtml5,
  "CSS": SiCss3,
  "CSS3": SiCss3,
  "JavaScript": SiJavascript,
  "javaScript": SiJavascript,
  "React": SiReact,
  "React.js": SiReact,
  "React-Router": FaReact,
  "TailwindCSS": SiTailwindcss,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  "Node.js": SiNodedotjs,
  "node.js": SiNodedotjs,
  "Express": SiExpress,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "Firebase": SiFirebase,
  "Firbase": SiFirebase,
  "Next.js": SiNextdotjs,
  "Git/GitHub": SiGithub,
  "GitHub": SiGithub,
  "Git": SiGit,
  "Figma": SiFigma,
  "Redux toolkit": SiRedux,
  "Redux": SiRedux,
  "C#": FaMicrosoft, // Using Microsoft icon as C# is a Microsoft technology
  "JWT": FaLock, // Using lock icon for JWT (security/authentication)
  "Jwt": FaLock,
  "JSON Web Token (JWT)": FaLock,
  "Vite": SiVite,
  "Vercel": FaCloud, // Using cloud icon for Vercel (deployment platform)
  "Stripe": FaCreditCard, // Using credit card icon for Stripe (payment)
};

export const getTechIcon = (techName) => {
  return techIcons[techName] || null;
};

