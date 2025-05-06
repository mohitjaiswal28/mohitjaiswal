import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-10 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-foreground mb-2">Mohit Jaiswal</h3>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary text-white mb-4 hover:bg-primary/90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>

            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Mohit Jaiswal. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://github.com/mohitjaiswal28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mohitjaiswal28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/mohitjaiswal28_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Get in Touch</h4>
              <div className="flex flex-col space-y-2">
                <a href="mailto:mohitjaiswal2883@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  mohitjaiswal2883@gmail.com
                </a>
                <a href="tel:+917741976522" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 774 400 2085
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
