import { Button, keyframes } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 18px rgba(139, 92, 246, 0.35);
  }
  50% {
    box-shadow: 0 0 34px rgba(236, 72, 153, 0.4);
  }
  100% {
    box-shadow: 0 0 18px rgba(139, 92, 246, 0.35);
  }
`;

const CustomButton = ({ handleOnClick }: any) => {
  return (
    <Button
      variant='contained'
      sx={{
        padding: '14px 26px',
        fontWeight: '600',
        fontSize: '18px',
        animation: `${glowAnimation} 4s ease-in-out infinite`,
        background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        textTransform: 'none',
        fontFamily: 'var(--font-mono, monospace)',
        borderRadius: '10px',
        transition: 'transform 0.25s ease, background 0.25s ease',
        '&:hover': {
          background: 'linear-gradient(135deg, #7c3aed, #db2777)',
          color: '#ffffff',
          transform: 'translateY(-2px)',
        },
        '@media (max-width: 600px)': {
          fontSize: '15px',
          padding: '12px 20px',
        },
      }}
      endIcon={
        <ArrowForwardIosIcon
          sx={{
            fontSize: '0.85rem',
            '@media (max-width: 600px)': {
              display: 'none',
            },
          }}
        />
      }
      onClick={handleOnClick}
    >
      Let&apos;s get started
    </Button>
  );
};

export default CustomButton;
