import React from 'react';
import { PERSONAL_INFO, USER_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <p className="text-2xl text-slate-100">Hello.</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mt-2">I'm {PERSONAL_INFO.name.split(' ')[0]}</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-300 mt-4">{PERSONAL_INFO.title}</h2>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href="#contact" className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors">Get a project?</a>
            <a href="#" target="_blank" className="border border-orange-600 text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-600 hover:text-white transition-colors">My Resume</a>
          </div>
        </div>
        <div className="relative flex justify-center mt-10 md:mt-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-orange-600/50"></div>
          </div>
          <img src={USER_IMAGE_URL} alt="Meet Mori" className="relative w-60 h-60 md:w-72 md:h-72 object-cover rounded-full z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;