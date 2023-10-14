"use client"
import React,{FC} from 'react'
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScroll from './HorizontalScroll';
import SimilarTarget from './SimilarTarget';
import { searchData } from '../utils/types';

interface Similar{
  targetMuscleExercises:searchData[];
  equipmentExercises:searchData[];
}

const SimilarExercises:FC<Similar> = ({ targetMuscleExercises, equipmentExercises }) => {
 

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography textAlign={'center'} sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length > 0 && <SimilarTarget exercise={targetMuscleExercises} /> }
    </Stack>
    <Typography textAlign={'center'} sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length > 0 && <SimilarTarget exercise={equipmentExercises} /> }
    </Stack>
  </Box>
  )
}

export default SimilarExercises