import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-16" aria-label="Contact">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 max-w-xl mx-auto leading-relaxed text-slate-400">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
        </p>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="mt-8 inline-block bg-orange-600 text-white font-bold px-8 py-3 rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;