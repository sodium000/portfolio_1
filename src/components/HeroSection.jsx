import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className=" relative px-4 flex flex-col items-center justify-center min-h-screen bg-hero-pattern bg-cover bg-center text-center"
    >
      <div className="container max-w0-4xl mx-auto text-center z-10">

      <div className="space-y-4">
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
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-delay-4">
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

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
    <ArrowDown className="h-5 w-5 text-primary"/>
    </div>
    </section>
  );
};

export default HeroSection;
