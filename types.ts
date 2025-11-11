import React from 'react';

export interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
    value: string;
    label: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}