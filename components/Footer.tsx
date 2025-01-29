import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-light border-t border-dark-lighter py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/salikansari6"
              className="text-zinc-400 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/salikansari6/"
              className="text-zinc-400 hover:text-primary transition-colors"
            >
              LinkedIn
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
