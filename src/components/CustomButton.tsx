/* eslint-disable react/no-unescaped-entities */
import { Button, keyframes } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const glowAnimation = keyframes`
 0% {
    box-shadow: 0 0 20px rgba(237, 237, 237, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(237, 237, 237, 0.3);
  }
  100% {
    box-shadow: 0 0 20px rgba(237, 237, 237, 0);
  }
`

const CustomButton = ({handleOnClick}: any) => {
  return (
    <Button
      variant="contained"
      sx={{
        padding: "15px",
        fontWeight: "500",
        fontSize: "25px",
        margin: "80px 0px 0px 0px",
        // boxShadow: "0 0 20px rgba(0, 255, 0, 0.6)",
        // transition: "box-shadow 0.3s ease",
        animation: `${glowAnimation} 4s ease-in-out infinite`,
        background: '#444444',
        textTransform: 'none',
        fontFamily: 'monospace',
        borderRadius: '10px',
        "&:hover": {
            background: '#EDEDED',
            color: '#000000'
        },
        "@media (max-width: 600px)": {
          width: '50%',
          fontSize: "15px",
          padding: "10px",
          background: '#444444'
        }
      }}
      endIcon={<ArrowForwardIosIcon sx = {{
        "@media (max-width: 600px)": {
          display: 'none'
        }
      }}/>}
    onClick={handleOnClick}
    >
      Let's get started
    </Button>
  );
};

export default CustomButton;
