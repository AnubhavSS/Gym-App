"use client"

import React,{useEffect,useState,FC} from 'react'
import { Pagination } from '@mui/material'
import {Box,Stack,Typography} from '@mui/material'
import { fetchData,options } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import { searchData } from '../utils/types'

interface Exerc {
  setexercises: (exercise: any) => void;
  bodyPart: string;
  exercises: searchData[];
}

const Exercises:FC<Exerc> = ({setexercises,exercises,bodyPart}) => {

  const [currentPage, setcurrentPage] = useState<number>(1)
  const exercisesPerPage=9

    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate=(e: any,value:number)=>{
    setcurrentPage(value);

    window.scrollTo({ top: 2000, behavior: 'smooth' });
  }

  useEffect(() => {
    const fetchExercisesData=async()=>{
      let exercisesData=[]
      if(bodyPart==='all')
      {
        exercisesData= await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
          options)
      }
      else{
        exercisesData= await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`,
          options)
      }
      setexercises(exercisesData)
    }

    fetchExercisesData()
  }, [bodyPart]) // eslint-disable-line no-use-before-define
  
  return (
    <Box id="exercises" sx={{mt:{lg:'110px'}}} p={'20px'} mt={'50px'}>
      <Typography variant='h4' mb={'46px'} color={"#3073c9"}>
        Showing Results
      </Typography>
      <Stack direction={'row'} sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap={'wrap'} justifyContent={'center'}>
{
  currentExercises.map((item,index)=>(
    // <Typography>{item.name}</Typography>
    <ExerciseCard key={index} exercise={item}/>
  ))
}
      </Stack>

      <Stack mt={'100px'} bgcolor={'rgba(256,256,256,0.9)'} marginX={'auto'} borderRadius={'25px'} width={'fit-content'} alignItems={'center'}  padding={2} > 
{exercises.length>9 && <Pagination  color="primary" shape='rounded' variant='outlined' defaultPage={1}  count={Math.ceil(exercises.length/exercisesPerPage)} page={currentPage} onChange={paginate} size='large'/>}
      </Stack>
    </Box>
  )
}

export default Exercises