import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import styles from "../page.module.css";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position={"relative"}
      p={"20px"}
    >
      <Stack sx={{flexDirection:{md:"row",xs:'column'},justifyContent:'space-evenly'}} >
        <Box>
          <Typography color={"#3073c9"} fontSize={"26px"} fontWeight={"600"}>
            Fitness Club
          </Typography>
          <Typography
            className={styles.glow}
            fontWeight={700}
            mb={"23px"}
            mt={"30px"}
            sx={{ fontSize: { lg: "54px", xs: "40px" } }}
          >
            Sweat, Smile <br /> and Repeat
          </Typography>
          <Typography
            fontSize={"22px"}
            lineHeight={"35px"}
            mb={2}
            color={"#3073c9"}
          >
            Checkout most effective exercises
          </Typography>
          <Button
            variant="contained"
            href="#exercises"
            sx={{ backgroundColor: "#3073c9", padding: "10px" }}
          >
            Explore Exercises
          </Button>
        </Box>
        <Image
          src={"/assets/man.png"}
          alt="heroBanner"
          width={600}
          height={600}
          className={styles.heroBannerImg}
        />
      </Stack>
      <Typography
        fontWeight={600}
        fontSize={"200px"}
        color={"#3073c9"}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
    </Box>
  );
};

export default HeroBanner;
