import React from 'react'
import { useState } from 'react'
import AboutUs from '../components/Aboutus/AboutUs'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import HeroSection from '../components/HeroSection/HeroSection'
import TrendingProducts from '../components/TrendingProducts/TrendingProducts'


import RawMaterials from '../components/RawMaterials/RawMaterials'




const HomePage = () => {



  return (
    <>
    <div className=' max-w-screen-3xl mx-auto ' >
     

      

        <HeroSection/>
      
      <TrendingProducts/>
      <FeaturedProducts/>
   
      <RawMaterials/>
      <AboutUs/>
       
    </div>
   
    </>
  )
}

export default HomePage