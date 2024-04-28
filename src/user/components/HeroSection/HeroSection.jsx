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
              className="bg-no-repeat lg:h-[90vh] w-full h-[50vh] object-cover"
              src={heroSection.heroSections[currentImage]?.image}
              alt={heroSection.heroSections[currentImage]?.title}
            />
          </Link>
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
          autoPlayInterval={2000}
          disableButtonsControls
          disableDotsControls
          onSlideChanged= {nextImage}
        />
      </div>
    </>
  );
};

export default HeroSection;



