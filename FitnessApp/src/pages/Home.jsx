import React from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../Component/HeroBanner'
import SearchExercise from '../Component/SearchExercise'
import Exercise from '../Component/Exercise'
const Home = () => {
  return (
    <div>
      <Box>
        <HeroBanner/>
        <SearchExercise/>
        <Exercise/>
      </Box>
    </div>
  )
}

export default Home
