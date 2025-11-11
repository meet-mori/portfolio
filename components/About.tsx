import React from 'react';
import { PERSONAL_INFO, SERVICES, STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-16" aria-label="About me">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-slate-100 mb-8">What I do</h3>
            <div className="space-y-8">
                {SERVICES.map(service => (
                    <div key={service.name} className="flex items-start space-x-4">
                        <div className="text-orange-500 mt-1">{service.icon}</div>
                        <div>
                            <h4 className="font-semibold text-slate-200">{service.name}</h4>
                            <p className="text-slate-400 text-sm mt-1">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">About me</h2>
            {PERSONAL_INFO.about.map((p, i) => <p key={i} className="mb-4 text-slate-400">{p}</p>)}
            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                {STATS.map(stat => (
                    <div key={stat.label}>
                        <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
                        <p className="text-slate-400 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;