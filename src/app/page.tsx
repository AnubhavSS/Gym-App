"use client"
import {createTheme,ThemeProvider} from '@mui/material'
import Image from 'next/image'
import styles from './page.module.css'
import { Box } from '@mui/material'
import React,{useState} from 'react'
import HeroBanner from './components/HeroBanner'
import SearchExercises from './components/SearchExercises'
import Exercises from './components/Exercises'


// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary'];
  }

  interface PaletteOptions {
    blue?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    blue: {
      main: '#3073c9',
    },
  },
});

export default function Home() {
  const [bodyPart, setbodyPart] = useState('all')
  const [exercises, setexercises] = useState([])

  return (
    <ThemeProvider theme={theme}>
  <Box>
    <HeroBanner/>
    <SearchExercises setexercises={setexercises} bodyPart={bodyPart} setBodyPart={setbodyPart}/>
    <Exercises setexercises={setexercises} bodyPart={bodyPart} exercises={exercises}/>
  </Box>
  </ThemeProvider>
  )
}
