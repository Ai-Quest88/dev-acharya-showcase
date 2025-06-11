
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
            Senior Quality Engineer with over 17 years of experience in the technology industry, specializing in quality assurance, 
            test automation, and leading technical teams to deliver robust software solutions across financial services and enterprise applications. 
            Currently exploring the exciting intersection of AI and quality engineering to revolutionize testing and software reliability approaches.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Core Competencies</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Testing Frameworks</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Selenium</li>
                <li>• Cypress</li>
                <li>• Playwright</li>
                <li>• TestNG</li>
                <li>• Jest</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Programming Languages</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• JavaScript</li>
                <li>• Python</li>
                <li>• Java</li>
                <li>• C#</li>
                <li>• TypeScript</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Tools & Technologies</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• API Testing</li>
                <li>• REST Assured</li>
                <li>• CI/CD</li>
                <li>• Docker</li>
                <li>• AWS</li>
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
                    <span>2023 - Present</span>
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
                <li>• Mentoring engineering teams in quality best practices</li>
                <li>• Developing AI-powered testing solutions to enhance quality processes</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Senior Test Engineer</h4>
                  <p className="text-gray-700 font-medium">Fluent Commerce</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>2021 - 2023</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Designed and implemented comprehensive test automation strategies</li>
                <li>• Led quality assurance for e-commerce platform solutions</li>
                <li>• Established CI/CD pipelines for automated testing</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Quality Assurance Lead</h4>
                  <p className="text-gray-700 font-medium">Commonwealth Bank of Australia</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>2018 - 2021</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Managed quality assurance for banking applications</li>
                <li>• Implemented automated testing for mobile and web platforms</li>
                <li>• Collaborated with development teams on quality standards</li>
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
                    <span>2007 - 2018</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Developed enterprise software solutions</li>
                <li>• Led technical teams in agile development environments</li>
                <li>• Established quality engineering practices across projects</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Key Certifications</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul className="text-gray-700 space-y-2">
                <li>• AWS Certified Solutions Architect</li>
                <li>• Certified Scrum Master (CSM)</li>
                <li>• ISTQB Advanced Level Test Manager</li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-700 space-y-2">
                <li>• Microsoft Azure Fundamentals</li>
                <li>• Selenium WebDriver Certification</li>
                <li>• Agile Testing Certification</li>
              </ul>
            </div>
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
