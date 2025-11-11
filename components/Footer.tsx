import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center pt-12 pb-12">
      <p className="text-sm text-slate-500">
        Coded in Visual Studio Code. Built with React, TypeScript, and Tailwind CSS.
        <br />
        &copy; {new Date().getFullYear()} Meet Mori. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
