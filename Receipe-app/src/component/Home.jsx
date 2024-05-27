import React from 'react'
import Navbar from './Navbar'
import Popularslider from './Popularslider'
import Trendingslider from './Trendingslider'
import Banner from './Banner'
const Home = () => {
  return (
   <>
     <Navbar/>
     <Banner/>
      <Popularslider/>
      <Trendingslider/>
   </>
    
    
  )
}

export default Home
