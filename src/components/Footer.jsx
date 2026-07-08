import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CustomButton from './CustomButton';
import FormModal from './FormModal';

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer id='contact' className='container-page'>
      <div className='contact-cta fade-up'>
        <span className='eyebrow'>Collaboration starts here</span>
        <h2 className='section-title'>Ready to bring your next idea to life?</h2>
        <p className='section-subtitle' style={{ margin: '0 auto 32px', maxWidth: '680px' }}>
          Whether you want a polished landing page, a rich product experience, or a brand-refreshing UI, I&apos;m happy to chat and build something special together.
        </p>
        <CustomButton handleOnClick={() => setOpen(true)} />
        <FormModal open={open} handleClose={() => setOpen(false)} />
      </div>
      <div className='footer-bar'>
        <span>&copy; {new Date().getFullYear()} Akhil Chandra. Crafted with Next.js and care.</span>
        <div className='footer-socials'>
          <a
            href='https://github.com/AChandra5?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <GitHubIcon fontSize='small' />
          </a>
          <a href='#' onClick={(e) => { e.preventDefault(); setOpen(true); }} aria-label='Email'>
            <EmailIcon fontSize='small' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
