import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-light border-t border-dark-lighter py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" className="text-zinc-400 hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-zinc-400 hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="/contact" className="text-zinc-400 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Salik Ansari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
