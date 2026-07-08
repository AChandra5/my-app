import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import FormModal from './FormModal';
import { useState } from 'react';

const pages = [
  { label: 'Work', href: '#work' },
  { label: 'Connect', href: null },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page: { label: string; href: string | null }) => {
    handleCloseNavMenu();
    if (page.href) {
      const el = document.querySelector(page.href);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setOpenModal(true);
    }
  };

  return (
    <>
      <AppBar
        position='fixed'
        elevation={0}
        sx={{
          backgroundColor: 'rgba(7, 7, 12, 0.72)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 80px rgba(0,0,0,0.15)',
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 86 }, gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '16px',
                  display: 'grid',
                  placeItems: 'center',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #22d3ee)',
                  boxShadow: '0 20px 60px rgba(139,92,246,0.25)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1rem',
                }}
              >
                A
              </Box>
              <Box>
                <Typography
                  component='a'
                  href='#home'
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontWeight: 700,
                    letterSpacing: '.04em',
                    fontSize: '1rem',
                    display: 'block',
                  }}
                >
                  Akhil Chandra
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Front-end builder & UI storyteller
                </Typography>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='open navigation menu'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                slotProps={{
                  paper: {
                    sx: {
                      backgroundColor: '#101018',
                      color: '#f5f5f7',
                      border: '1px solid rgba(255,255,255,0.08)',
                      mt: 1,
                    },
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.label}
                    onClick={() => handlePageClick(page)}
                    sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}
                  >
                    {page.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 2.5,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={() => handlePageClick(page)}
                  sx={{
                    color: 'white',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    letterSpacing: '.02em',
                    borderRadius: '12px',
                    px: 0,
                    '&:hover': {
                      color: '#22d3ee',
                      background: 'transparent',
                    },
                  }}
                >
                  {page.label}
                </Button>
              ))}
              <Button
                onClick={() => setOpenModal(true)}
                sx={{
                  px: 2,
                  py: 1,
                  fontFamily: 'var(--font-mono)',
                  color: '#fff',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  textTransform: 'none',
                  borderRadius: '999px',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                  },
                }}
              >
                Contact
              </Button>
              <IconButton
                component='a'
                href='https://github.com/AChandra5?tab=repositories'
                target='_blank'
                rel='noopener noreferrer'
                sx={{ color: 'white', '&:hover': { color: '#22d3ee' } }}
                aria-label='GitHub'
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <FormModal open={openModal} handleClose={() => setOpenModal(false)} />
    </>
  );
}

export default NavBar;


