import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Code,
  FileCode,
  Palette,
  Blocks,
  Brain,
  Server,
  Database,
  Terminal,
  PenTool,
  GitBranch,
  Layers,
  Box,
  Languages,
  BadgeCheck,
  LayoutGrid,
  Workflow,
  Clock,
  Users,
  PenSquare,
  LineChart,
  ChartArea,
  Cloud,
  FileType
} from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimateSkills(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const technicalSkills = [
    { name: "React", icon: <Code className="h-6 w-6" /> },
    { name: "Angular", icon: <Blocks className="h-6 w-6" /> },
    { name: "TypeScript", icon: <FileType className="h-6 w-6" /> },
    { name: "Node.js", icon: <Server className="h-6 w-6" /> },
    { name: "Express", icon: <Database className="h-6 w-6" /> },
    { name: "GraphQL", icon: <ChartArea className="h-6 w-6" /> },
    { name: "PostgreSQL", icon: <Database className="h-6 w-6" /> },
    { name: "Git", icon: <GitBranch className="h-6 w-6" /> },
    { name: "REST", icon: <Server className="h-6 w-6" /> },
    { name: "AWS", icon: <Cloud className="h-6 w-6" /> },
  ];

  const designSkills = [
    { name: "Scalable System Design", icon: <LayoutGrid className="h-6 w-6" /> },
    { name: "Responsive Design", icon: <Layers className="h-6 w-6" /> },
    { name: "Wireframing", icon: <PenSquare className="h-6 w-6" /> },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Brain className="h-6 w-6" /> },
    { name: "Communication", icon: <Languages className="h-6 w-6" /> },
    { name: "Teamwork", icon: <Users className="h-6 w-6" /> },
    { name: "Time Management", icon: <Clock className="h-6 w-6" /> },
    { name: "Adaptability", icon: <Workflow className="h-6 w-6" /> },
    { name: "Leadership", icon: <BadgeCheck className="h-6 w-6" /> },
    { name: "Critical Thinking", icon: <Brain className="h-6 w-6" /> },
    { name: "Analytics", icon: <LineChart className="h-6 w-6" /> },
  ];

  const renderSkillGrid = (skills: any[]) => (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-6 ${animateSkills ? 'animate-fade-in' : 'opacity-0'}`}>
      {skills.map((skill, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-card dark:bg-gray-800/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 mb-3">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{skill.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-secondary/20 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto" ref={skillsRef}>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          My Skills
        </h2>

        <Tabs defaultValue="technical" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary dark:bg-gray-800">
              <TabsTrigger value="technical" className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span className="hidden sm:inline">Technical</span>
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Design</span>
              </TabsTrigger>
              <TabsTrigger value="soft" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span className="hidden sm:inline">Soft Skills</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="space-y-8">
            <TabsContent
              value="technical"
              className="opacity-0 animate-fade-in mt-0"
              style={{ animationPlayState: activeTab === "technical" ? "running" : "paused" }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Technical Skills</h3>
                <p className="text-muted-foreground mb-4">Technologies and tools I work with</p>
                {renderSkillGrid(technicalSkills)}
              </div>
            </TabsContent>

            <TabsContent
              value="design"
              className="opacity-0 animate-fade-in mt-0"
              style={{ animationPlayState: activeTab === "design" ? "running" : "paused" }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Design Skills</h3>
                <p className="text-muted-foreground mb-4">Design tools and principles I apply</p>
                {renderSkillGrid(designSkills)}
              </div>
            </TabsContent>

            <TabsContent
              value="soft"
              className="opacity-0 animate-fade-in mt-0"
              style={{ animationPlayState: activeTab === "soft" ? "running" : "paused" }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Soft Skills</h3>
                <p className="text-muted-foreground mb-4">Professional qualities and attributes</p>
                {renderSkillGrid(softSkills)}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
