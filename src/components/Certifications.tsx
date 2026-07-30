
import { Award, GraduationCap } from "lucide-react";

const Certifications = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.), Computer Science",
      institution: "University of Rajasthan",
      duration: "2004 - 2008",
      type: "education"
    }
  ];

  const certifications = [
    {
      name: "MCPD: Enterprise Application Developer 3.5",
      issuer: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description: "Microsoft Certified Professional Developer for Enterprise Application Development using .NET Framework 3.5",
      type: "certification"
    },
    {
      name: "Accenture Certified Solution Developer",
      issuer: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
      description: "Certified solution developer credential covering enterprise software design and delivery",
      type: "certification"
    },
    {
      name: "Siemens Certified Application Developer",
      issuer: "Siemens",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
      description: "Application developer certification, including software engineering and design principles",
      type: "certification"
    },
    {
      name: "SumoLogic Certified Pro User",
      issuer: "Sumo Logic",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Sumo_Logic_Logo.svg",
      description: "Professional certification in log analytics and monitoring with Sumo Logic",
      type: "certification"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-portfolio-teal/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="reveal section-heading mb-16">
          <span className="text-portfolio-teal font-mono text-xl mr-2">05.</span>
          Education & Certifications
        </h2>
        
        {/* Horizontal Layout for Education and Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-6 flex items-center">
              <GraduationCap className="text-portfolio-teal h-6 w-6 mr-2" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="reveal group relative p-6 rounded-lg border border-portfolio-lightNavy bg-portfolio-lightNavy/30 hover:bg-portfolio-lightNavy/50 transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-teal/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="text-portfolio-teal h-6 w-6" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-portfolio-lightestSlate mb-2 group-hover:text-portfolio-teal transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    
                    <p className="text-sm font-mono text-portfolio-teal mb-3">
                      {edu.institution}
                    </p>
                    
                    <p className="text-sm text-portfolio-slate leading-relaxed">
                      {edu.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-6 flex items-center">
              <Award className="text-portfolio-teal h-6 w-6 mr-2" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="reveal group relative p-4 rounded-lg border border-portfolio-lightNavy bg-portfolio-lightNavy/30 hover:bg-portfolio-lightNavy/50 transition-all duration-300"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-teal/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  <div className="relative">
                    <div className="flex items-center mb-3">
                      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center p-1.5 mr-3 flex-shrink-0">
                        <img
                          src={cert.logo}
                          alt={`${cert.issuer} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-xs font-mono text-portfolio-teal">
                        {cert.issuer}
                      </p>
                    </div>

                    <h4 className="text-sm font-semibold text-portfolio-lightestSlate leading-snug group-hover:text-portfolio-teal transition-colors duration-300">
                      {cert.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
