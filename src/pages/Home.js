import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
console.log("bodyPart===",bodyPart)
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises}
      setBodyPart={setBodyPart}
      bodyPart={bodyPart}
      />
      <Exercises
       exercises={exercises}
       setExercises={setExercises}
       bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home
