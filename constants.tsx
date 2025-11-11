import React from 'react';
import { Project, Service, Stat, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Meet Mori",
  title: "Software Developer",
  bio: "I build robust and scalable applications with expertise in MEAN stack, .NET, NestJS, and PostgreSQL.",
  about: [
    "I started my software journey with a passion for creating things from scratch. Through that, I learned to love the process of creating performant and scalable software. Since then, this has led me to software development as it fulfills my love for learning and building things.",
    "My experience at Tatvasoft has allowed me to contribute to diverse projects, honing my skills in full-stack development. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects."
  ],
  email: "meet.mori@example.com",
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ]
};

export const USER_IMAGE_URL = "https://picsum.photos/seed/meetmori/400/400";

const skillIconClass = "h-14 w-14 mx-auto mb-3 text-slate-400 group-hover:text-orange-500 transition-colors";
export const SKILLS_DATA: Skill[] = [
  {
    name: 'Angular',
    icon: <svg className={skillIconClass} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Angular</title><path fill="currentColor" d="M12 0l9.5 3.09-1.54 12.3L12 24l-7.96-8.61L2.5 3.09zM12 4.41l5.18 1.68-1.03 8.21L12 19.38l-4.15-5.08-1.03-8.21z"/><path fill="currentColor" d="M12 4.41l-6.18 10.08L12 19.38V4.41z"/></svg>
  },
  {
    name: 'Node.js',
    icon: <svg className={skillIconClass} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path fill="currentColor" d="M11.72 17.584c-1.392 0-2.52-.96-2.52-2.352 0-1.2.864-2.04 2.616-2.04h.24v-1.128c0-.624-.312-.96-.936-.96-.456 0-.84.216-.96.528l-1.368-.672c.264-.84.984-1.392 2.376-1.392 1.584 0 2.544.84 2.544 2.712v3.432h-1.032v-.6h-.144c-.288.456-.912.72-1.584.72zm.12-3.48c-.576 0-1.008.312-1.008.84 0 .528.432.84 1.008.84.6 0 1.056-.336 1.056-.912v-.768h-.216c-.288 0-.528 0-.84.024zM16.43 17.584c-1.2 0-1.896-.744-1.896-1.728 0-.96.696-1.68 1.896-1.68 1.152 0 1.8.696 1.8 1.68 0 .984-.648 1.728-1.8 1.728zm0-1.008c.312 0 .504-.264.504-.624 0-.36-.192-.6-.504-.6-.312 0-.504.24-.504.6 0 .36.192.624.504.624zM22.839 9.335l-1.104-1.104-1.32 1.32c-.12-.048-.264-.096-.408-.12L20.27 3h-2.16l-.288 6.407c-.12-.024-.264-.024-.384-.024-1.128 0-2.208.384-2.928 1.104l-1.32-1.32-1.128 1.128 1.32 1.32c-.096.12-.168.24-.24.384L6.947 12H13.4v.335a4.234 4.234 0 01-1.032.264l-1.32-1.32-1.128 1.128 1.32 1.32c-.048.144-.096.288-.12.432L3.83 14.435H3V12h.299L12 3.287 9.335 1.161 11.453 0l11.388 11.388-1.104 2.112-1.32-1.32c.12.048.264.096.408.12L22.13 18h2.16l.288-6.407c.12.024.264.024.384.024 1.128 0 2.208-.384 2.928-1.104l1.32 1.32 1.128-1.128-1.32-1.32c.096-.12.168-.24.24-.384l6.407 6.407H18v-5.565a4.234 4.234 0 011.032-.264l1.32 1.32 1.128-1.128-1.32-1.32c.048-.144.096-.288.12-.432l6.407-6.407H24v2.544l-8.713-8.713L18 20.27v-5.657l-1.404-.264-1.32 1.32-1.128-1.128 1.32-1.32c-.216-.408-.504-.768-.84-1.056l-6.407 6.407H12v-2.16l6.407-6.407a3.54 3.54 0 01-.264-1.032l-1.32 1.32-1.128-1.128 1.32-1.32c-.144-.048-.288-.096-.432-.12L14.435 3.83V3h2.544l8.713 8.713L9.737 18H15.4v1.404l1.32-1.32 1.128 1.128-1.32 1.32c.408.216.768.504 1.056.84l6.407-6.407V24h2.16l-6.407-6.407a3.54 3.54 0 011.032.264l1.32-1.32 1.128 1.128-1.32 1.32z"/></svg>
  },
  {
    name: 'MongoDB',
    icon: <svg className={skillIconClass} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path fill="currentColor" d="M15.179 2.052c-1.12-.46-2.52-.77-4.1-.77-5.06 0-9.08 4.09-9.08 9.15s4.02 9.15 9.08 9.15c1.58 0 2.98-.31 4.1-.77.19-.08.3-.3.22-.49l-1.39-3.26c-.08-.19-.3-.3-.49-.22a6.11 6.11 0 0 1-2.44.54c-2.8 0-4.99-2.24-4.99-5.04S9.159 5.312 12 5.312c.98 0 1.88.29 2.44.54.19.08.41-.03.49-.22l1.39-3.26c.08-.18-.03-.41-.22-.49z"/></svg>
  },
  {
    name: '.NET',
    icon: <svg className={skillIconClass} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>.NET</title><path fill="currentColor" d="M12.227 0C5.335 0 0 5.488 0 12.235c0 6.63 5.335 11.765 12.227 11.765 2.12 0 4.12-.59 5.92-1.54l-1.12-2.12c-1.34.69-2.85.98-4.8.98-4.42 0-8.2-3.56-8.2-7.98s3.78-7.98 8.2-7.98c1.94 0 3.46.3 4.8.98l1.12-2.12c-1.8-.94-3.8-1.54-5.92-1.54zm5.1 3.51c-1.8-.93-3.8-1.53-5.92-1.53-2.12 0-4.12.6-5.92 1.53l.9 1.93c1.54-.73 3.16-1.12 5.02-1.12 1.86 0 3.48.4 5.02 1.12l.9-1.93zm2.53 2.76l.9-1.82c-1.15-.7-2.4-1.2-3.73-1.6l-.7 2c1.17.34 2.3.8 3.53 1.42zM4.14 6.27L3.24 4.45c-1.33.4-2.58.9-3.73 1.6l.7 2c1.23-.62 2.36-1.08 3.53-1.42zM21.86 11c-.3-1.4-.76-2.73-1.32-3.95l-1.72.9c.47 1.05.85 2.2 1.12 3.45h-15.9c.27-1.25.65-2.4 1.12-3.45l-1.72-.9c-.56 1.22-1.02 2.55-1.32 3.95H21.86zm-19.72 2h19.86c-.3 1.4-.76 2.73-1.32 3.95l-1.72-.9c.47-1.05.85-2.2 1.12-3.45h-15.9c.27 1.25.65 2.4 1.12 3.45l-1.72.9c-.56-1.22-1.02-2.55-1.32-3.95zm2.54 5.73l.9 1.82c-1.15.7-2.4 1.2-3.73 1.6l-.7-2c1.17-.34 2.3-.8 3.53-1.42zm14.84 0c1.23.62 2.36 1.08 3.53 1.42l-.7 2c-1.33-.4-2.58-.9-3.73-1.6l.9-1.82zm-9.52 2.76l.9 1.93c1.54.73 3.16 1.12 5.02 1.12 1.86 0 3.48-.4 5.02-1.12l.9 1.93c-1.8.93-3.8 1.53-5.92 1.53-2.12 0-4.12-.6-5.92-1.53z"/></svg>
  },
  {
    name: 'NestJS',
    icon: <svg className={skillIconClass} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>NestJS</title><path fill="currentColor" d="M22.44 11.23L12.75 2.1a1.27 1.27 0 00-1.52 0L1.56 11.23a1.26 1.26 0 00.75 2.18h1.46v-1.45l8.23-7.16 8.24 7.16v1.45h1.45a1.26 1.26 0 00.75-2.18zM12 4.1l6.73 5.85-6.73 5.86-6.73-5.86zM3.46 14.88l.21.19c.43.39.91.73 1.41 1.03l.2.11.2.12c.38.22.77.42 1.17.59l.21.09c.8.34 1.62.61 2.47.8l.19.05c1.28.28 2.58.44 3.89.44s2.61-.16 3.89-.44l.19-.05c.85-.19 1.67-.46 2.47-.8l.21-.09c.4-.17.79-.37 1.17-.59l.2-.12.2-.11c.5-.3.98-.64 1.41-1.03l.21-.19a1.26 1.26 0 00-1.5-1.94l-.2.18c-.37.34-.78.64-1.21.89l-.2.11-.2.11c-.36.2-.72.38-1.1.54l-.2.09c-.76.32-1.54.57-2.35.75l-.19.04c-1.2.26-2.42.4-3.66.4s-2.46-.14-3.66-.4l-.19-.04c-.81-.18-1.59-.43-2.35-.75l-.2-.09c-.38-.16-.74-.34-1.1-.54l-.2-.11-.2-.11c-.43-.25-.84-.55-1.21-.89l-.2-.18a1.26 1.26 0 10-1.5 1.94z"/></svg>
  },
  {
    name: 'PostgreSQL',
    icon: <svg className={skillIconClass} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>PostgreSQL</title><path fill="currentColor" d="M12.01,23.59c-4.9,0-8.48-2.69-8.48-7.23V5.58h4.5v10.51c0,2.1,1.38,3.22,3.98,3.22,2.5,0,3.95-1.12,3.95-3.22V5.58h4.47v10.78c0,4.53-3.58,7.23-8.42,7.23Zm8.81-17.84V.41h-4.47V5.75Z"/></svg>
  },
  {
    name: 'React',
    icon: <svg className={skillIconClass} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><circle cx="12" cy="12" r="2" fill="currentColor"/><path fill="none" stroke="currentColor" strokeWidth="1.5" d="M12,22 C17.522847,22 22,17.522847 22,12 C22,6.4771525 17.522847,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.522847 6.4771525,22 12,22 Z M12,22 C17.522847,22 22,17.522847 22,12 C22,6.4771525 17.522847,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.522847 6.4771525,22 12,22 Z" transform="rotate(60 12 12)"/><path fill="none" stroke="currentColor" strokeWidth="1.5" d="M12,22 C17.522847,22 22,17.522847 22,12 C22,6.4771525 17.522847,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.522847 6.4771525,22 12,22 Z M12,22 C17.522847,22 22,17.522847 22,12 C22,6.4771525 17.522847,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.522847 6.4771525,22 12,22 Z" transform="rotate(120 12 12)"/></svg>
  },
  {
    name: 'TypeScript',
    icon: <svg className={skillIconClass} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path fill="currentColor" d="M1.5 0 h 21 v 21 h-21 z M 3.03 1.53 h 17.94 v 17.94 h -17.94 z M 4.88 4.6 h 12.3 v 2.2 h -4.9 v 10.1 h -2.5 V 6.8 H 4.88 Z M 16.5 17.9h2.6v2.5h-2.6z"/></svg>
  },
];


const serviceIconClass = "h-7 w-7";
export const SERVICES: Service[] = [
    {
        name: "Website Development",
        description: "Creating responsive and dynamic websites from scratch.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={serviceIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    },
    {
        name: "App Development",
        description: "Building scalable and efficient backend applications.",
        icon: <svg xmlns="http://www.w.org/2000/svg" className={serviceIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6.13a2.46 2.46 0 01.3-1.2A2.46 2.46 0 0110.87 3h2.26c1.2 0 2.27.83 2.57 2 .3 1.17-.5 2.3-1.7 2.3H13" /></svg>
    },
    {
        name: "Website Hosting",
        description: "Managing and deploying applications on the cloud.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={serviceIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.99A5.002 5.002 0 1012 3a5.002 5.002 0 00-5 5.001V15z" /></svg>
    },
];

export const STATS: Stat[] = [
    { value: "120+", label: "Completed Projects" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "5+", label: "Years of Experience" },
];


export const PROJECTS: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with a custom CMS, product management, and Stripe integration. Built with Next.js and Tailwind CSS for a seamless shopping experience.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "https://picsum.photos/seed/project1/400/250",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "A web application for visualizing complex datasets using D3.js and React. Features interactive charts, real-time data updates, and a user-friendly interface.",
    tags: ["React", "D3.js", "Firebase", "Data Viz"],
    imageUrl: "https://picsum.photos/seed/project2/400/250",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative project management tool inspired by Trello and Asana. Implemented features like drag-and-drop task boards, real-time updates, and user authentication.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: "https://picsum.photos/seed/project3/400/250",
    liveUrl: "#",
    githubUrl: "#",
  },
    {
    title: "AI-Powered Content Generator",
    description: "A web app that leverages the Gemini API to generate creative content, from blog posts to social media captions. Features a sleek, modern UI for an intuitive user experience.",
    tags: ["React", "Gemini API", "TypeScript", "Vite"],
    imageUrl: "https://picsum.photos/seed/project4/400/250",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const iconClass = "h-6 w-6";
export const ICONS = {
    github: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    twitter: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>,
    link: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>
};