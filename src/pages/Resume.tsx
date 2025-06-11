
import { ArrowLeft, Download, Mail, Phone, MapPin, Globe, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-black print:bg-white">
      {/* Header with navigation - hidden in print */}
      <div className="print:hidden bg-portfolio-navy p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
          <Button
            onClick={handlePrint}
            className="bg-portfolio-teal text-white hover:bg-portfolio-teal/90"
          >
            <Download className="h-4 w-4 mr-2" />
            Download/Print
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto p-8 bg-white">
        {/* Header */}
        <header className="text-center mb-8 border-b-2 border-gray-300 pb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Devesh Acharya</h1>
          <h2 className="text-xl text-gray-600 mb-4">Senior Quality Engineer</h2>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>devesh.acharya@email.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+61 XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Sydney, Australia</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span>linkedin.com/in/devesh-acharya</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed">
            Senior Quality Engineer at Macquarie Group with over 17 years of experience in the technology industry. 
            I specialize in quality assurance, test automation, and leading technical teams to deliver robust software solutions 
            across financial services and enterprise applications. Currently exploring the exciting intersection of AI and quality engineering 
            to revolutionize how we approach testing and software reliability.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Core Competencies</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Test Automation</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Playwright</li>
                <li>• Cypress</li>
                <li>• Selenium</li>
                <li>• Serenity</li>
                <li>• Jest</li>
                <li>• BDD</li>
                <li>• API Testing</li>
                <li>• REST Assured</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Programming</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• C#</li>
                <li>• Java</li>
                <li>• JavaScript</li>
                <li>• TypeScript</li>
                <li>• Python</li>
                <li>• HTML/CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• .NET Core</li>
                <li>• Spring Boot</li>
                <li>• Node.js</li>
                <li>• Azure</li>
                <li>• AWS</li>
                <li>• Docker</li>
                <li>• CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Professional Experience</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Senior Quality Engineer</h4>
                  <p className="text-gray-700 font-medium">Macquarie Group</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Jan 2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="h-3 w-3" />
                    <span>Sydney, Australia</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Leading quality assurance initiatives across fintech projects</li>
                <li>• Implementing automated testing frameworks for critical financial systems</li>
                <li>• Collaborating with cross-functional teams to ensure product quality</li>
                <li>• Developing quality metrics and reporting mechanisms</li>
                <li>• Mentoring junior engineers in quality best practices</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Automation Test Lead</h4>
                  <p className="text-gray-700 font-medium">Commonwealth Bank</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Mar 2022 - Jan 2023</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Led test automation strategy for banking applications</li>
                <li>• Designed and implemented automated testing frameworks</li>
                <li>• Managed a team of test automation engineers</li>
                <li>• Reduced testing cycle time by 40% through automation improvements</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Senior Quality Assurance Engineer</h4>
                  <p className="text-gray-700 font-medium">Fluent Commerce</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Oct 2019 - Feb 2022</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Developed and maintained test automation frameworks for e-commerce platforms</li>
                <li>• Implemented BDD approaches using Cucumber and Gherkin</li>
                <li>• Conducted performance testing on high-traffic commerce systems</li>
                <li>• Improved test coverage by 60% through systematic test planning</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Test Automation Lead</h4>
                  <p className="text-gray-700 font-medium">Macquarie Group</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Jun 2018 - Oct 2019</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Led testing initiatives for financial services applications</li>
                <li>• Established automated testing infrastructure and CI/CD pipelines</li>
                <li>• Trained and mentored quality engineers on automation best practices</li>
                <li>• Implemented shift-left testing methodologies</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Quality Assistance Tech Lead</h4>
                  <p className="text-gray-700 font-medium">Ansarada</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Apr 2016 - Jun 2018</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Provided technical leadership for QA team in a SaaS environment</li>
                <li>• Developed test strategies for data room and M&A software products</li>
                <li>• Implemented test automation frameworks using Selenium and JavaScript</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Senior Software Engineer</h4>
                  <p className="text-gray-700 font-medium">Accenture</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Jun 2009 - Oct 2011</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Developed enterprise software solutions for global clients</li>
                <li>• Implemented test-driven development practices</li>
                <li>• Collaborated with cross-functional teams in an agile environment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Education</h3>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Bachelor of Engineering</h4>
            <p className="text-gray-700">Computer Science & Engineering</p>
            <p className="text-sm text-gray-600">Graduated with Distinction</p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Certifications</h3>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">MCPD: Enterprise Application Developer 3.5</h4>
            <p className="text-gray-700">Microsoft</p>
            <p className="text-sm text-gray-600">Microsoft Certified Professional Developer for Enterprise Application Development using .NET Framework 3.5</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-300">
          <p>This resume was generated from my portfolio website. Visit my full portfolio for more details about my work and projects.</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
