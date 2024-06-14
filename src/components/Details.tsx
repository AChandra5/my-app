/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";
import FormModal from "./FormModal";

function Details() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    "@media (max-width: 600px)": {
      display: "none",
    },
    "@media (min-width: 960px)": {
      width: "30%",
    },
  };

  return (
    <div className="details-container">
      <div className="intro-text">
        <div className="text-4xl name my-6 font-mono">Hi, I'm Akhi</div>
        <span className="text-xl mb-8">Hey there!</span>
        <div className="paragraph">
          &nbsp;I'm a passionate Front-End Developer with one year of hands-on
          experience in creating beautiful and responsive web interfaces. I
          specialize in turning ideas into visually appealing and user-friendly
          digital experiences using modern technologies like Next.js, React.js,
          JavaScript, and CSS. Also experienced MaterialUI, ChakraUi, Tail Wind
          and Boostrap which are industry booming front-end
          libraries/frameworks.
          <p>
            {" "}
            &nbsp;I thrive on solving challenges and continuously learning new
            skills to stay ahead in the ever-evolving world of web development.
            I have worked and been working with the integration to the back-end
            via RESTful APIs and GraphQL. Let's get started in learning and
            growing together!
          </p>
        </div>
        <div>
          <CustomButton handleOnClick={handleOpen} />
          <FormModal open={open} handleClose={handleClose} />
        </div>
      </div>
      <Box className="avatar-image" sx={style}>
        <img
          className="image"
          src={"/assets/akhil.jpeg"}
          // width={350}
          // height={500}
          alt="profile-picture"
        />
      </Box>
    </div>
  );
}

export default Details;
