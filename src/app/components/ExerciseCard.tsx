import React, { FC } from "react";
import Link from "next/link";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../page.module.css";
import { searchData } from "../utils/types";

const ExerciseCard: FC<searchData | any> = ({ exercise }) => {

  return (
    <Link href={`/exercise/${exercise?.id}`} className={styles.exerciseCard}>
      <Image
        src={exercise.gifUrl}
        alt={exercise.name}
        height={326}
        width={100}
        style={{display:'flex',justifyContent:"center", marginLeft:'130px'}}
      />
      <Stack direction={"row"}>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
