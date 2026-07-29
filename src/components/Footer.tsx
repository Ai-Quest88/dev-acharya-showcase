
const Footer = () => {
  return (
    <footer className="py-6 bg-portfolio-navy border-t border-portfolio-lightestNavy/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-portfolio-slate text-sm font-mono">
              Designed & Built by Devesh Acharya
            </p>
            <p className="text-portfolio-slate text-xs mt-2">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
