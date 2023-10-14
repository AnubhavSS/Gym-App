

import React,{FC} from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import { Button, Stack, Typography,Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { searchData } from "../utils/types";

interface Target{
  exercise:searchData[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const SimilarTarget:FC<Target> = ({ exercise }) => {
  console.log(exercise, "ex");
  return (
    
 <Box flexDirection={'row'}>
    
      {exercise.map(item=>
        <Link
        key={item.id}
          href={`/exercise/${item?.id}`}
          className={styles.exerciseCard}
        >
          <Image
            src={item.gifUrl}
            alt={item.name}
            height={326}
            width={100}
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "130px",
            }}
          />

          <Typography
            ml="21px"
            color="#000"
            fontWeight="bold"
            sx={{ fontSize: { lg: "24px", xs: "20px" } }}
            mt="11px"
            pb="10px"
            textTransform="capitalize"
          >
            {item.name}
          </Typography>
        </Link>
     ) }
   </Box>

  );
};

export default SimilarTarget;
