
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact">
       <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact</h2>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 max-w-xl mx-auto leading-relaxed">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
        </p>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="mt-8 inline-block bg-teal-400/10 text-teal-300 font-medium px-6 py-3 rounded-md hover:bg-teal-400/20 transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
