
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["home", "about", "skills", "projects"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${scrolled
        ? "py-4 dark:bg-gray-900/80 bg-white/80 backdrop-blur-md shadow-md"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-tight text-gradient"
          >
            Mohit Jaiswal
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className={`relative text-foreground transition-colors duration-300 
                    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary 
                    after:transition-all ${activeSection === link.href.substring(1)
                      ? "text-primary after:w-full"
                      : "hover:text-primary after:w-0 hover:after:w-full"
                    }`}
                >
                  {link.title}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`text-foreground transition-colors ${activeSection === link.href.substring(1)
                  ? "text-primary font-medium"
                  : "hover:text-primary"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
