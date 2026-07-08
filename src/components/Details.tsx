import React, { useState } from 'react';
import CustomButton from './CustomButton';
import FormModal from './FormModal';

const skills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'MUI',
  'Tailwind',
  'Chakra UI',
  'GraphQL',
  'React Native',
];

function Details() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleViewWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='home' className='hero-section container-page'>
      <div className='hero-panel fade-up'>
        <div className='hero-copy'>
          <span className='eyebrow'>Hey there, welcome</span>
          <h1 className='hero-heading'>
            I&apos;m Akhil Chandra, a{' '}
            <span className='gradient-text'>Front-End Developer</span>
          </h1>
          <div className='hero-role'>crafting immersive experiences with elegant motion</div>

          <div className='hero-highlights'>
            <div className='highlight-pill'>4 years building polished digital products</div>
            <div className='highlight-pill'>Modern UI systems, animations, and vivid layouts</div>
            <div className='highlight-pill'>Designing accessible experiences for fast-growing brands</div>
          </div>

          <p className='hero-paragraph'>
            I create memorable web experiences that feel premium, polished, and fast. I combine clean interaction design with performance-first engineering to help ideas stand out.
          </p>
          <p className='hero-paragraph' style={{ marginTop: '1.5rem' }}>
            I enjoy turning ambitious product goals into pixel-perfect interfaces, from marketing pages to interactive dashboards and creative portfolio experiences.
          </p>

          <div className='hero-badges'>
            {skills.map((skill) => (
              <span key={skill} className='skill-chip'>
                {skill}
              </span>
            ))}
          </div>

          <div className='hero-actions'>
            <CustomButton handleOnClick={handleOpen} />
            <button type='button' className='ghost-link' onClick={handleViewWork}>
              See my work &rarr;
            </button>
            <FormModal open={open} handleClose={handleClose} />
          </div>
        </div>
      </div>

      <aside className='hero-aside fade-up'>
        <div className='aside-card'>
          <span className='aside-pill'>Design</span>
          <h3>Minimal motion, maximum clarity</h3>
          <p>Elegant interfaces that feel both refined and effortless to use.</p>
        </div>
        <div className='aside-card'>
          <span className='aside-pill'>Performance</span>
          <h3>Fast load, smooth interactions</h3>
          <p>Built for performance with polished micro-interactions and thoughtful structure.</p>
        </div>
        <div className='aside-card'>
          <span className='aside-pill'>Growth</span>
          <h3>Scale-ready UI systems</h3>
          <p>Reusable components and crisp visual hierarchy designed to grow with your product.</p>
        </div>
      </aside>
    </section>
  );
}

export default Details;
