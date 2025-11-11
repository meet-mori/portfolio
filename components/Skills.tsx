import React from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-16" aria-label="My tech stack">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">My Tech Stack</h2>
        <p className="max-w-2xl mx-auto text-slate-400 mb-12">
          A collection of the primary technologies and tools I use in my day-to-day development.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
        {SKILLS_DATA.map((skill) => (
          <div key={skill.name} className="group flex flex-col items-center justify-center p-4 rounded-lg bg-slate-800/30 transition-all duration-300 border-b-2 border-transparent hover:border-orange-500 hover:bg-slate-800/60 hover:scale-105">
            {skill.icon}
            <p className="text-md font-semibold text-slate-300 group-hover:text-white transition-colors">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;