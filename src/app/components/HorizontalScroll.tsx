import React, { FC } from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

import ExerciseCard from "./ExerciseCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {

desktop: {
  breakpoint: { max: 3000, min: 1024 },
  items: 6
},
tablet: {
  breakpoint: { max: 1024, min: 464 },
  items: 3
},
mobile: {
  breakpoint: { max: 464, min: 0 },
  items: 1
}
};

const HorizontalScroll: FC<Array<string> | any> = ({
  data,
  bodyPart,
  setBodyPart,
  isBodyParts
}) => {



  return (
    <Carousel responsive={responsive} focusOnSelect={true} >
      {data.map((item: any) => (
        <Box
          key={item.id || item}
          m={"0 40px"}
        >
         {<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> }
        </Box>
      ))}
</Carousel>
  );
};

export default HorizontalScroll;
