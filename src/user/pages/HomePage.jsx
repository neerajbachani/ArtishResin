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
import LatestArrival from '../components/LatestArrival/LatestArrival';
import { useDispatch, useSelector } from 'react-redux';
import { getOurProduct } from '../redux/OurProduct/Action';

const HomePage = () => {
  useEffect(() => {
    aos.init({
      duration: 1000, 
    });
  }, []);

  const dispatch = useDispatch();
  const { ourProduct } = useSelector((store) => store);
  const latestProducts = ourProduct?.ourProducts?.filter(product => product.type !== "Workshop") || [];
  
  useEffect(() => {
    dispatch(getOurProduct());
  }, [dispatch]);

  return (
    <>
      <div className="max-w-screen-3xl mx-auto">
      <Toaster />
        <HeroSection />
        <OurBestSeller />
        <Categories/>
        <div className="flex items-center justify-center mt-10 md:mt-16 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-black w-1 h-7 mr-4"></div>
        <h2 className="font-poppins font-semibold md:text-3xl lg:text-4xl text-2xl bg-gradient-to-r from-blue-500 to-black text-transparent bg-clip-text">
          Latest Arrivals
        </h2>
      </div>
        <LatestArrival products = {latestProducts}/>
        <OurProducts />
        <WorkshopPoster />
        <OurFeaturedCollections />
        
        <Review/>
        <AboutUs />
       
       
      </div>
    </>
  );
};

export default HomePage;