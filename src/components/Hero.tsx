import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, FileUser } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const roles = ["Software Engineer", "Full-Stack Developer", "System Designer", "Problem Solver"];
    let current = 0;
    let index = 0;
    let isDeleting = false;
    let txt = "";

    const typeEffect = () => {
      const currentRole = roles[current];

      if (isDeleting) {
        txt = currentRole.substring(0, index - 1);
        index--;
      } else {
        txt = currentRole.substring(0, index + 1);
        index++;
      }

      if (typingRef.current) {
        typingRef.current.textContent = txt;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && index === currentRole.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pause at end
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        current = (current + 1) % roles.length;
        typeSpeed = 500; // Pause before new word
      }

      setTimeout(typeEffect, typeSpeed);
    };

    typeEffect();

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        const children = heroRef.current.children;
        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const speed = child.getAttribute('data-speed') || '0';
          const y = (scrollPosition * parseFloat(speed));
          child.style.transform = `translateY(${y}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-blue-900/20"></div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-3xl opacity-60 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative" ref={heroRef}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6" data-speed="0.1">
            <span className={`inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-700 transform ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
              I build things for the web
            </span>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
              Hi, I'm <span className="text-gradient">Mohit Jaiswal</span>
            </h1>

            <div className={`text-xl md:text-2xl font-medium text-muted-foreground h-8 transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
              I'm a  <span className="text-primary">Software Engineer</span>
            </div>

            <p className={`text-lg text-muted-foreground max-w-xl transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
              Software Engineer skilled in building scalable web applications and cloud solutions. Expertise in React, Angular, Node.js, AWS, and database technologies.
            </p>

            <div className={`flex space-x-4 pt-2 transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
              <a
                href="https://github.com/mohitjaiswal28"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary dark:bg-gray-800 hover:bg-primary/10 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/mohitjaiswal28"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary dark:bg-gray-800 hover:bg-primary/10 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mohitjaiswal2883@gmail.com"
                className="p-2 rounded-full bg-secondary dark:bg-gray-800 hover:bg-primary/10 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <div className={`pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}>
              <Button
                asChild
                className="rounded-lg shadow-lg hover:shadow-primary/25"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-lg border-primary text-primary hover:bg-primary/10 hover:text-primary dark:border-primary dark:text-primary"
              >
                <a href="/assets/Mohit_Jaiswal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-8 w-8" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center" data-speed="-0.1">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 animate-float">
                <img
                  src="/assets/Logo.png"
                  alt="Mohit Jaiswal"
                  className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="text-primary hover:text-primary/80 transition-colors" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section >
  );
};

export default Hero;
