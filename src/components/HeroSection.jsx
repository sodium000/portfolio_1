import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className=" relative px-4 flex flex-col items-center justify-center min-h-screen bg-hero-pattern bg-cover bg-center text-center"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Profile Picture Section */}
          <div className="order-2 md:order-1 opacity-0 animate-fade-in-delay-3">
            <div className="relative group">
              {/* Glowing background circle */}
              <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300 animate-pulse-subtle"></div>
              
              {/* Image container with gradient border */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
                <img 
                  src="/Users.jpg" 
                  alt="Raisul Islam Tonmoy" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative rings */}
              <div className="absolute -inset-2 rounded-full border-2 border-primary/20 animate-pulse-subtle"></div>
              <div className="absolute -inset-4 rounded-full border border-primary/10"></div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="order-1 md:order-2 flex-1 text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold traking-tight">
              <span className="opacity-0 animate-fade-in"> Hi,I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Raisul Islam
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Tonmoy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-4">
              I create stellar web experiences with modern technologies.
                Specializing in front-end and back-end development, I build interfaces that are
                both beautiful and functional.
            </p>
            <div className="pt-4 opacity-0  animate-fade-in-delay-6">
                <a href="#projects" className= "cosmic-button">
                    view my projects
                </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};

export default HeroSection;
