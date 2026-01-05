

import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram, BsTwitch, BsTwitterX } from "react-icons/bs";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-12 md:py-16 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 md:space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:raisultonmoy.dev@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    raisultonmoy.dev@gmail.com 
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+8801930050425"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +8801930050425
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Dhaka, Bangladesh
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/raisul-islam-tonmoy/" target="_blank">
                  <LiaLinkedin />
                </a>
                <a href="#" target="_blank">
                  <BsTwitterX />
                </a>
                <a href="#" target="_blank">
                  <BsInstagram />
                </a>
                <a href="#" target="_blank">
                  <BsTwitch />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-lg shadow-xs">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6"> Send a Message</h3>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  placeholder="Raisul Islam Tomnoy"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm sm:text-base"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};