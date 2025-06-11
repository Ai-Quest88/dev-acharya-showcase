
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "MCPD: Enterprise Application Developer 3.5",
      issuer: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description: "Microsoft Certified Professional Developer for Enterprise Application Development using .NET Framework 3.5"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-portfolio-teal/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="reveal section-heading mb-16">
          <span className="text-portfolio-teal font-mono text-xl mr-2">02.</span>
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="reveal group relative p-6 rounded-lg border border-portfolio-lightNavy bg-portfolio-lightNavy/30 hover:bg-portfolio-lightNavy/50 transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-teal/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 mr-4">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Award className="text-portfolio-teal h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-portfolio-lightestSlate mb-2 group-hover:text-portfolio-teal transition-colors duration-300">
                  {cert.name}
                </h3>
                
                <p className="text-sm font-mono text-portfolio-teal mb-3">
                  {cert.issuer}
                </p>
                
                <p className="text-sm text-portfolio-slate leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
