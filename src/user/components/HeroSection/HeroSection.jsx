import React, { useState, useEffect } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { getHeroSection } from '../../redux/HeroSection/Action';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import LoadingBar from 'react-top-loading-bar';

const HeroSection = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { heroSection } = useSelector((store) => store);
  const [progress, setProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProgress(50);
    dispatch(getHeroSection())
      .then(() => {
        setProgress(100);
        setLoading(false);
        setTimeout(() => {
          setProgress(0);
        }, 500);
      })
      .catch(() => {
        setProgress(0);
        setLoading(false);
      });
  }, [dispatch]);

  const widthClass = isOpen
    ? 'sm:max-w-[70vw] 2xl:max-w-[75vw] w-full mx-auto sm:ml-[15rem] md:ml-[22rem] transition-all duration-500'
    : 'w-full md:mx-0  transition-all duration-500 ml-[0rem]';
  const widthClas = isOpen ? 'mx-0' : 'md:mx-4';

  const items = [
    <div key={currentImage} className="item">
      {loading ? (
        <Skeleton variant="rectangular" sx={{ minHeight: '80vh', width: '100%' }} />
      ) : (
        <>
          <Link to={heroSection.heroSections[currentImage]?.link}>
            <img
            loading='lazy'

              className="bg-no-repeat lg:h-[90vh] w-full h-[70vh] object-cover relative"
              src={heroSection.heroSections[currentImage]?.image}
              alt={heroSection.heroSections[currentImage]?.title}
            />
            <div
    class="absolute inset-0 bg-white/25 sm:bg-transparent sm:from-white/60 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "
  ></div>
          </Link>
          <div className=' absolute top-0'>
          <div
    className="relative mx-auto max-w-screen-xl px-8 py-64 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl text-[#fefae0] font-extrabold sm:text-5xl font-poppins ">
      Where Art Meets Resin, 

        <strong class="block font-extrabold text-rose-400 font-poppins ">Creating Mesmerizing Masterpieces. </strong>
      </h1>

      {/* <p class="mt-4 max-w-lg sm:text-lg/relaxed text-[#5ab2ff] font-poppins ">
      Crafted from mesmerizing resin, with captivating artistry, transforming your walls into a stunning showcase of time and beauty.
      </p> */}

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to={heroSection.heroSections[currentImage]?.link}
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto font-poppins "
        >
          Explore Now
        </Link>

      
      </div>
    </div>
  </div>
  </div>
        </>
      )}
    </div>
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % heroSection.heroSections.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + heroSection.heroSections.length) % heroSection.heroSections.length);
  };

  return (
    <>
      <LoadingBar
        color="#e63946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className={`${widthClass}  md:mt-[1rem] mt-[0rem] `}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          autoPlay
          autoPlayInterval={4000}
          disableButtonsControls
          disableDotsControls
          onSlideChanged= {nextImage}
        />
      </div>
    </>
  );
};

export default HeroSection;



