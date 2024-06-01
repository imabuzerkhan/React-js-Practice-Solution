import React from 'react'
import Navbar from './Navbar'
import Popularslider from './Popularslider'
import Trendingslider from './Trendingslider'
import Banner from './Banner'
import Footer from './Footer'
const Home = () => {
  return (
   <>
     <Navbar/>
     <Banner/>
      <Popularslider/>
      <Trendingslider/>
      <Footer/>
   </>
    
    
  )
}

export default Home
