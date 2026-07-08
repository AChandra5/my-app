import React from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';

interface Project {
  title: string;
  description: string;
  href: string;
  tags: string[];
  emoji: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'From My Bones',
    description:
      'A personal poetry portfolio — a quiet corner of the web for sharing original writing, built with a focus on typography and mood over noise.',
    href: 'https://from-my-bones.vercel.app',
    tags: ['Next.js', 'Poetry', 'Portfolio'],
    emoji: '🕊️',
    gradient: 'linear-gradient(135deg, #7c3aed, #db2777)',
  },
  {
    title: 'InfoRush',
    description:
      'A content platform serving quick, digestible knowledge on tech, finance and sports — think fast reads on gadgets, IPL and everything in between.',
    href: 'https://www.theinforush.com',
    tags: ['Content', 'Tech & Finance', 'Sports'],
    emoji: '⚡',
    gradient: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
  },
  {
    title: 'More on GitHub',
    description:
      'A growing collection of experiments, side projects and open-source contributions. Always tinkering with something new.',
    href: 'https://github.com/AChandra5?tab=repositories',
    tags: ['Open Source', 'Experiments'],
    emoji: '🧪',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
];

function Projects() {
  return (
    <section id='work' className='section container-page'>
      <div className='section-header fade-up'>
        <span className='eyebrow'>Previous work</span>
        <h2 className='section-title'>Things I&apos;ve built</h2>
        <p className='section-subtitle'>
          A few live projects I&apos;ve shipped and shaped from the ground up.
        </p>
      </div>

      <div className='projects-grid'>
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target='_blank'
            rel='noopener noreferrer'
            className='project-card fade-up'
          >
            <div className='project-card-media' style={{ background: project.gradient }}>
              <span>{project.emoji}</span>
            </div>
            <div className='project-card-body'>
              <div className='project-card-title'>
                {project.title}
                <NorthEastIcon />
              </div>
              <p className='project-card-desc'>{project.description}</p>
              <div className='project-card-tags'>
                {project.tags.map((tag) => (
                  <span key={tag} className='project-tag'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
