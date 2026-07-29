
import RobotAnimation from "./RobotAnimation";

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-portfolio-navy">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-portfolio-teal/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="reveal section-heading mb-16">
          <span className="text-portfolio-teal font-mono text-xl mr-2">01.</span>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3 reveal">
            <div className="space-y-6 text-lg">
              <p className="reveal">
                I'm Devesh — an AI Application Engineer and Quality Lead Engineer at Macquarie Group.
                Seventeen years in technology, now spent building production applications with AI on a foundation of quality engineering.
              </p>

              <p className="reveal [animation-delay:150ms] [animation-fill-mode:both]">
                My path: developer at Accenture and Siemens, then automation lead across Commonwealth Bank, Ansarada,
                Fluent Commerce, Qantas Loyalty and Macquarie — designing test frameworks and leading quality engineering teams in financial services.
              </p>

              <p className="reveal [animation-delay:300ms] [animation-fill-mode:both]">
                Today I build with AI, not just test with it — shipping products like AIQE and FinSight using Claude Code,
                agentic workflows and MCP integrations. Everything I build ships with quality engineered in.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 reveal">
            <div className="relative group md:sticky md:top-28">
              <div className="absolute -inset-2 bg-gradient-to-r from-portfolio-teal/20 to-purple-500/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden w-full max-w-md mx-auto bg-portfolio-navy border border-portfolio-lightNavy p-4">
                <div className="aspect-square bg-portfolio-navy">
                  <RobotAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
