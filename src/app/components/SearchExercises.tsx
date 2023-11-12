"use client";
import React, { useState, useEffect ,FC} from "react";
import { Box, Stack, Button, Typography, TextField } from "@mui/material";
import styles from "../page.module.css";
import { fetchData, options } from "../utils/fetchData";
import { searchData } from "../utils/types";
import HorizontalScroll from "./HorizontalScroll";

interface SearchEx{
  bodyPart:string;
  setexercises: (exercise: string) => void;
  setBodyPart: (exercise: string) => void;
}

const SearchExercises:FC<SearchEx> = ({bodyPart,setBodyPart,setexercises}) => {
  const [search, setsearch] = useState<string>("");

const [bodyParts, setbodyParts] = useState<Array<string>>([])

useEffect(() => {
const fetchExercisesData=async()=>{
  const bodyPartsData=await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",options);
  setbodyParts(['all',...bodyPartsData])
  console.log(bodyPartsData,'hello')
}
fetchExercisesData()
}, [])


  const handleSearch = async () => {
    if (search) {
      const exercises = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
        options
      );
 
      const searchedExercise = exercises.filter(
        (item: searchData) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setsearch('')
      setexercises(searchedExercise)
    }
  };
  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb={"50px"}
        textAlign={"center"}
        color={"#3073c9"} 
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb={"72px"}>
        <Stack direction={"row"} ml={2} mr={2}>
          <TextField
            value={search}
            onChange={(e) => {
              setsearch(e.target.value.toLowerCase());
            }}
            sx={{
              
              width: "80vw",
              backgroundColor: "#fff",
             
            }}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className={styles.searchBtn}
            sx={{
              bgcolor: "#FF2625",
              color: "#FFF",
              textTransform: "none",
              width: "8vw",
              fontSize: "17px",
              height: "56px",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Stack>
      </Box>

      <Box sx={{position:"relative",width:"100%",p:'20px'}}>
<HorizontalScroll data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
