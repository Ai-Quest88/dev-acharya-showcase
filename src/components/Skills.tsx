import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, Cloud, TestTube } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => {
  return (
    <Card className="bg-portfolio-lightNavy border-portfolio-lightestNavy overflow-hidden hover:border-portfolio-teal/50 transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-portfolio-teal">{icon}</div>
          <h3 className="text-lg font-semibold text-portfolio-lightestSlate">{title}</h3>
        </div>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-portfolio-navy px-3 py-1 rounded-full text-sm font-mono text-portfolio-lightSlate"
            >
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["C#", "Java", "JavaScript", "TypeScript", "Python", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: [".NET Core", "ASP.NET", "Spring Boot", "Node.js", "Express", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["SQL Server", "Oracle", "PostgreSQL", "MongoDB", "Redis", "Entity Framework"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: ["Azure", "Azure DevOps", "AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "Test Automation & AI",
      icon: <TestTube size={24} />,
      skills: ["Selenium", "Cypress", "Playwright", "Playwright MCP", "AI Test Generation", "TestNG", "Jest", "API Testing"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-portfolio-navy">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">
          <span className="text-portfolio-teal font-mono text-xl mr-2">03.</span>
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
