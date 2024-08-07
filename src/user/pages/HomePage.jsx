import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import AboutUs from '../components/Aboutus/AboutUs';
import HeroSection from '../components/HeroSection/HeroSection';
import OurBestSeller from '../components/OurBestSeller';
import OurProducts from '../components/OurProducts/OurProducts';
import OurFeaturedCollections from '../components/OurFeaturedCollections/OurFeaturedCollections';
import WorkshopPoster from '../components/WorkshopPoster/WorkshopPoster';
import { Toaster } from 'react-hot-toast';
import Categories from '../components/Categories/Categories';
import Review from '../components/Review/Review'

const HomePage = () => {
  useEffect(() => {
    aos.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>
      <div className="max-w-screen-3xl mx-auto">
      <Toaster />
        <HeroSection />
        <OurBestSeller />
        <OurProducts />
        <Categories/>
        <WorkshopPoster />
        <OurFeaturedCollections />
        
        <Review/>
        <AboutUs />
      </div>
    </>
  );
};

export default HomePage;