import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { Linkedin, Github, Instagram } from "lucide-react";

// Custom X (Twitter) Icon Component
const XIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-10">
          {/* About Section */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-primary">Raisul Islam Tonmoy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              MERN Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/raisul-islam-tonmoy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/sodium000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="X (Twitter)"
              >
                <XIcon size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#hero"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-primary/10 mt-0.5">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <a
                  href="mailto:raisultonmoy.dev@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                >
                  raisultonmoy.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-primary/10">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <a
                  href="tel:+8801930050425"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +8801930050425
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-primary/10 mt-0.5">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <span className="text-muted-foreground">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Raisul Islam Tonmoy. All rights reserved.
            </p>
            <a
              href="#hero"
              className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};