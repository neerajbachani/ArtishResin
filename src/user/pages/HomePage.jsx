import React from 'react'
import AboutUs from '../components/Aboutus/AboutUs'
import HeroSection from '../components/HeroSection/HeroSection'
import OurBestSeller from '../components/OurBestSeller'
import OurProducts from '../components/OurProducts/OurProducts'
import OurFeaturedCollections from '../components/OurFeaturedCollections/OurFeaturedCollections'
import WorkshopPoster from '../components/WorkshopPoster/WorkshopPoster'





const HomePage = () => {



  return (
    <>
    <div className=' max-w-screen-3xl mx-auto' >
     

      

        <HeroSection/>
      <OurBestSeller/>
      <OurProducts/>
      <OurFeaturedCollections/>
      <WorkshopPoster/>
      <AboutUs/>
       
    </div>
   
    </>
  )
}

export default HomePage