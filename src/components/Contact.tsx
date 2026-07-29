
import { Github, Linkedin, Mail } from "lucide-react";

interface ContactLinkProps {
  icon: React.ReactNode;
  label: string;
  handle: string;
  href: string;
}

const ContactLink = ({ icon, label, handle, href }: ContactLinkProps) => {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group bg-portfolio-lightNavy rounded-lg p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-portfolio-teal/50"
    >
      <div className="text-portfolio-teal mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-portfolio-lightestSlate mb-1 group-hover:text-portfolio-teal transition-colors duration-300">
        {label}
      </h3>
      <p className="font-mono text-sm text-portfolio-slate break-all">{handle}</p>
    </a>
  );
};

const Contact = () => {
  const links: ContactLinkProps[] = [
    {
      icon: <Github size={32} />,
      label: "GitHub",
      handle: "Ai-Quest88",
      href: "https://github.com/Ai-Quest88"
    },
    {
      icon: <Linkedin size={32} />,
      label: "LinkedIn",
      handle: "devesh-acharya",
      href: "https://linkedin.com/in/devesh-acharya-58925a8/"
    },
    {
      icon: <Mail size={32} />,
      label: "Email",
      handle: "devesh.acharya88@gmail.com",
      href: "mailto:devesh.acharya88@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-heading text-center">
          <span className="text-portfolio-teal font-mono text-xl mr-2">06.</span>
          Get In Touch
        </h2>

        <p className="text-center text-portfolio-slate mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations.
          Reach me directly on any of these.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {links.map(link => (
            <ContactLink key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
