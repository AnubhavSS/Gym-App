import React, { FC } from "react";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import styles from "../page.module.css";
const BodyPart: FC<any> = ({ item, setBodyPart, bodyPart }) => {
  console.log(item,"bP")
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #3073c9",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "200px",
              height: "200px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "200px",
              height: "200px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      className={styles.bodyPartcard}
    >
      <Image
        src={"/assets/dumbbell.png"}
        alt="dunmbBell"
        width={40}
        height={40}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
