
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would be replaced with actual form submission logic
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-heading text-center">
          <span className="text-portfolio-teal font-mono text-xl mr-2">05.</span>
          Get In Touch
        </h2>
        
        <p className="text-center text-portfolio-slate mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea,
          or just want to say hi, feel free to reach out to me using the form below.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-portfolio-lightestSlate mb-1">
                Name
              </label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightestSlate focus-visible:ring-portfolio-teal focus-visible:ring-offset-portfolio-navy"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-portfolio-lightestSlate mb-1">
                Email
              </label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightestSlate focus-visible:ring-portfolio-teal focus-visible:ring-offset-portfolio-navy"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-portfolio-lightestSlate mb-1">
              Subject
            </label>
            <Input 
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightestSlate focus-visible:ring-portfolio-teal focus-visible:ring-offset-portfolio-navy"
              placeholder="What is this about?"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-portfolio-lightestSlate mb-1">
              Message
            </label>
            <Textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightestSlate focus-visible:ring-portfolio-teal focus-visible:ring-offset-portfolio-navy resize-none"
              placeholder="Your message here..."
            />
          </div>
          
          <div className="text-center">
            <Button 
              type="submit"
              className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal px-12"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
