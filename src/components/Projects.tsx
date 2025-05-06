import { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Filter
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      "id": 1,
      "title": "petCare",
      "description": "Tech-forward pet care platform that allows pet owners to easily book appointments, manage pet profiles, and streamline pet care services with a user-friendly interface.",
      "image": "/assets/Projects/petCare.png",
      "tags": ["React", "Node.js", "Express", "MongoDB"],
      "github": "https://github.com/mohitjaiswal28/petCare-V1",
      "demo": "https://petcare-mohitjaiswal.netlify.app/",
      "category": "web"
    },
    {
      id: 2,
      title: "AWS CI/CD Pipeline",
      description: "Deployed a Java application on AWS using a cloud-native approach, leveraging AWS services such as CloudFormation, CodeCommit, CodeBuild, CodeaDeploy, EC2, S3, Auto Scaling Group (ASG) and VPC for streamlined CI/CD pipeline.",
      image: "/assets/Projects/AWS Architecture Diagram.jpg",
      tags: ["AWS"],
      github: "https://github.com/mohitjaiswal28/AWS-CICD",
      category: "cloud",
    },
    {
      "id": 3,
      "title": "Role-Based Access Control (RBAC) System",
      "description": "Built a scalable RBAC system following a MVC architecture. Developed RESTful APIs for managing users, roles, and permissions, integrated seamlessly with the frontend.",
      "image": "/assets/Projects/RBAC.png",
      "tags": ['Angular', 'Node.js', 'MongoDB'],
      "github": "https://github.com/mohitjaiswal28/rbac-backend",
      "demo": "https://rbac-mohitjaiswal.netlify.app/",
      "category": "web"
    },
    {
      "id": 4,
      "title": "AWS Boto3 Scripts",
      "description": "A collection of Python scripts using Boto3 to interact with various AWS services such as EC2, S3, DynamoDB, IAM, RDS, and VPC. This repository demonstrates automation of common AWS tasks.",
      "image": "/assets/Projects/AWS Boto3.jpg",
      "tags": ["AWS", "Boto3", "Python", "Automation", "Cloud"],
      "github": "https://github.com/mohitjaiswal28/AWS-Boto3",
      "category": "cloud",
    },
    {
      "id": 5,
      "title": "mohitjaiswal-npm-package",
      "description": "An npm package created to print my public profile links in an interactive way. Installable via npm install mohitjaiswal.",
      "image": "/assets/Projects/npm.png",
      "tags": ["npm", "JavaScript", "npm", ],
      "github": "https://github.com/mohitjaiswal28/mohitjaiswal-npm-package",
      "category": "other"
    }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div
      className={`opacity-0 animate-fade-in ${isVisible ? 'animate-running' : 'animate-paused'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-card dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover-card h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>

          <p className="text-muted-foreground mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 bg-secondary dark:bg-gray-700 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6 md:px-12" ref={projectsRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">My Projects</h2>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex space-x-2 p-1 bg-secondary dark:bg-gray-800 rounded-lg">
            {["all", "web", "cloud", "other"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md capitalize transition-all ${filter === category
                  ? "bg-primary text-white shadow-md"
                  : "hover:bg-secondary-foreground/10"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${viewMode === "grid" ? "bg-primary text-white" : "bg-secondary dark:bg-gray-800"}`}
              aria-label="Grid view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              onClick={() => setViewMode("carousel")}
              className={`p-2 rounded-md ${viewMode === "carousel" ? "bg-primary text-white" : "bg-secondary dark:bg-gray-800"}`}
              aria-label="Carousel view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
                <path d="m22 17-4-5-4 5"></path>
                <path d="m6 17 4-5 4 5"></path>
              </svg>
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <Carousel className="w-full">
            <CarouselContent>
              {filteredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <ProjectCard project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mx-2" />
              <CarouselNext className="mx-2" />
            </div>
          </Carousel>
        )}

        <div className="mt-12 text-center opacity-0 animate-fade-in animate-delay-700" style={{ animationPlayState: isVisible ? 'running' : 'paused' }}>
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub repositories.
          </p>
          <a
            href="https://github.com/mohitjaiswal28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
