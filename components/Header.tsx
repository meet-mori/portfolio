import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-6 md:px-12 py-6">
      <div className="flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-slate-100 hover:text-orange-500 transition-colors">{PERSONAL_INFO.name}</a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-slate-400 hover:text-orange-500 transition-colors pb-1 border-b-2 border-transparent hover:border-orange-500">About</a>
          <a href="#skills" className="text-slate-400 hover:text-orange-500 transition-colors pb-1 border-b-2 border-transparent hover:border-orange-500">Skills</a>
          <a href="#projects" className="text-slate-400 hover:text-orange-500 transition-colors pb-1 border-b-2 border-transparent hover:border-orange-500">Projects</a>
          <a href="#contact" className="text-slate-400 hover:text-orange-500 transition-colors pb-1 border-b-2 border-transparent hover:border-orange-500">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;