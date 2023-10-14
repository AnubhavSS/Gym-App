'use client'

import React,{useState,useEffect} from 'react'
import { Box } from '@mui/material'
import { fetchData,options ,youtubeOptions} from '@/app/utils/fetchData'
import Detail from '@/app/components/Detail'
import ExerciseVideos from '@/app/components/ExerciseVideos'
import SimilarExercises from '@/app/components/SimilarExercises'
import { searchData } from '@/app/utils/types'


const ExerciseDetail = ({ params }: { params: { slug: string } }) => {

  const [exerciseDetail, setexerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
  const fetchExcersiseData=async()=>{
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${params.slug}`, options);
    setexerciseDetail(exerciseDetailData);

    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
    setExerciseVideos(exerciseVideosData.contents);

    const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, options);
    setTargetMuscleExercises(targetMuscleExercisesData);

    const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, options);
    setEquipmentExercises(equimentExercisesData);

  }
  fetchExcersiseData()
   
  }, [params.slug])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos}  name={exerciseDetail?.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail