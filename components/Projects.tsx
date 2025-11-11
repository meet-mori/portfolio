import React from 'react';
import { PROJECTS, ICONS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-orange-500 focus-visible:text-orange-500 group/link text-base"
              href={project.liveUrl || project.githubUrl || '#'}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{project.title} {ICONS.link}</span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{project.description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-400 ">{tag}</div>
              </li>
            ))}
          </ul>
        </div>
        <img
          alt={`${project.title} screenshot`}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          data-nimg="1"
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: 'transparent' }}
          src={project.imageUrl}
        />
      </div>
    </li>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-16" aria-label="Selected projects">
       <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 sm:mx-auto sm:w-full sm:px-0 sm:py-0 sm:opacity-0">
        <h2 className="text-2xl font-bold text-slate-100">Projects</h2>
      </div>
      <div>
        <ul className="group/list">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;