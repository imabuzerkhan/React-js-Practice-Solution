import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Bannerpicture from '../assets/images/Bannerpicture.avif' 
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#fffff"
        fontWeight={800}
        fontSize="26px"
        fontFamily="monospace"
      >
        Brothers Fitness Center
      </Typography>
      <Typography
        fontWeight={700}
        fontFamily="fantasy"
        letterSpacing={6}
        color="#FF2625"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Smile , Sweat <br /> and Repeat
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "20px", xs: "15px" } }}
        fontFamily="sans-serif"
        marginBottom={3}
      >
        Check out the most effective Exercise for men and women
      </Typography>
      <Button variant="contained" color="error" href="#exercise" >
        Explore More Features
      </Button>
      <img src={Bannerpicture} alt="Gymboy" />
    </Box>
  );
};

export default HeroBanner;
