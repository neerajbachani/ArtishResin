
// import React, { useState, useEffect } from 'react';
// import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
// import { useSelector, useDispatch } from 'react-redux';
// import { getHeroSection } from '../../redux/HeroSection/Action';
// import { Link } from 'react-router-dom';
// import { Skeleton } from '@mui/material';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import LoadingBar from 'react-top-loading-bar';

// const HeroSection = ({ isOpen }) => {
//   const dispatch = useDispatch();
//   const { heroSection } = useSelector((store) => store);
//   const [progress, setProgress] = useState(0);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [loadedImages, setLoadedImages] = useState([]);

//   useEffect(() => {
//     setProgress(50);
//     dispatch(getHeroSection())
//       .then(() => {
//         setProgress(100);
//         setLoading(false);
//         setTimeout(() => {
//           setProgress(0);
//         }, 500);
//       })
//       .catch(() => {
//         setProgress(0);
//         setLoading(false);
//       });
//   }, [dispatch]);

//   useEffect(() => {
//     if (heroSection.heroSections && heroSection.heroSections.length > 0) {
//       preloadImages(heroSection.heroSections.map(section => section.image));
//     }
//   }, [heroSection.heroSections]);

//   const preloadImage = (src) => {
//     return new Promise((resolve) => {
//       const img = new Image();
//       img.src = src;
//       img.onload = resolve;
//     });
//   };
  

//   const preloadImages = (imageUrls) => {
//     Promise.all(imageUrls.map(url => preloadImage(url))).then(() => {
//       setLoadedImages(imageUrls);
//     });
//   };

//   const widthClass = isOpen
//     ? 'sm:max-w-[70vw] 2xl:max-w-[75vw] w-full mx-auto sm:ml-[15rem] md:ml-[22rem] transition-all duration-500'
//     : 'w-full md:mx-0  transition-all duration-500 ml-[0rem]';
//   const widthClas = isOpen ? 'mx-0' : 'md:mx-4';

//   const items = heroSection.heroSections.map((section, index) => (
//     <div key={index} className="item lg:px-16 px-0 ">
//       {loading || !loadedImages.includes(section.image) ? (
//         <Skeleton variant="rectangular" sx={{ minHeight: '70vh', width: '100%' }} />
//       ) : (
//         <>
//           <Link to={section.link}>
//             <img
//               className="bg-no-repeat lg:h-[70vh] w-[100vw] h-[35vh] object-cover relative"
//               src={section.image}
//               alt={section.title}
//             />
            
//           </Link>
//           <div className='absolute top-0'>
//             {/* <div className="relative mx-auto max-w-screen-xl px-8 pt-96 md:py-60 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
//               <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
//                 <h1 className="md:text-4xl text-xl text-[#f1e388] font-extrabold sm:text-5xl font-poppins">
//                   Where Art Meets Resin,
//                   <strong className="block text-xl font-extrabold text-rose-400 font-poppins">
//                     Creating Mesmerizing Masterpieces.
//                   </strong>
//                 </h1>
//                 <div className="mt-8 flex flex-wrap gap-4 text-center">
//                   <Link
//                     to={section.link}
//                     className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto font-poppins"
//                   >
//                     Explore Now
//                   </Link>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </>
//       )}
//     </div>
//   ));

//   const responsive = {
//     0: { items: 1 },
//     568: { items: 1 },
//     1024: { items: 1 },
//   };

//   const nextImage = () => {
//     setCurrentImage((currentImage + 1) % heroSection.heroSections.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((currentImage - 1 + heroSection.heroSections.length) % heroSection.heroSections.length);
//   };

//   return (
//     <>
//       <LoadingBar
//         color="#e63946"
//         progress={progress}
//         onLoaderFinished={() => setProgress(0)}
//       />
//       <div className={`${widthClass}  md:mt-[1rem] mt-[0rem]`}>
//         <AliceCarousel
//           mouseTracking
//           items={items}
//           responsive={responsive}
//           controlsStrategy="alternate"
//           infinite
//           autoPlay
//           autoPlayInterval={4000}
//           disableButtonsControls
//           disableDotsControls
//           onSlideChanged={nextImage}
//         />
//       </div>
//     </>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    setProgress(50);
    dispatch(getHeroSection())
      .then(() => {
        setProgress(100);
        setLoading(false);
        setTimeout(() => setProgress(0), 500);
      })
      .catch(() => {
        setProgress(0);
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    if (heroSection.heroSections && heroSection.heroSections.length > 0) {
      preloadImages(heroSection.heroSections.map(section => section.image));
    }
  }, [heroSection.heroSections]);

  const preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
    });
  };

  const preloadImages = (imageUrls) => {
    Promise.all(imageUrls.map(url => preloadImage(url))).then(() => {
      setLoadedImages(imageUrls);
    });
  };

  const widthClass = isOpen
    ? 'sm:max-w-[70vw] 2xl:max-w-[75vw] w-full mx-auto sm:ml-[15rem] md:ml-[22rem] transition-all duration-500'
    : 'w-full md:mx-0 transition-all duration-500 ml-[0rem]';

  const renderHeroItem = (section) => (
    <div className="item mb-2">
      {loading || !loadedImages.includes(section.image) ? (
        <Skeleton variant="rectangular" sx={{ height: { xs: '30vh', sm: '50vh', md: '70vh' }, width: '100%' }} />
      ) : (
        <Link to={section.link}>
          <img
            className="bg-no-repeat w-full object-cover relative"
            style={{
              height: 'calc(25vh + (90vh - 25vh) * ((100vw - 320px) / (1920px - 320px)))',
              minHeight: '25vh',
              maxHeight: '90vh'
            }}
            src={section.image}
            alt={section.title}
          />
        </Link>
      )}
    </div>
  );

  const mobileItems = [];
  const desktopItems = [];

  heroSection.heroSections.forEach((section, index) => {
    // Desktop view (1 image per slide)
    desktopItems.push(renderHeroItem(section));

    // Mobile view (2 images per slide)
    if (index % 2 === 0) {
      const mobileSlide = (
        <div key={`mobile-${index}`} className="flex flex-col">
          {renderHeroItem(section)}
          {index + 1 < heroSection.heroSections.length && renderHeroItem(heroSection.heroSections[index + 1])}
        </div>
      );
      mobileItems.push(mobileSlide);
    }
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <>
      <LoadingBar
        color="#e63946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className={`${widthClass}  mt-[0rem]`}>
        {/* <div className="md:hidden">
          <AliceCarousel
            mouseTracking
            items={mobileItems}
            responsive={responsive}
            controlsStrategy="alternate"
            infinite
            autoPlay
            autoPlayInterval={4000}
            disableButtonsControls
            disableDotsControls
          />
        </div> */}
        <div className="block h-[30vh] xxs:h-[40vh] xs:h-[50vh] sm:h-auto ">
          <AliceCarousel
            mouseTracking
            items={desktopItems}
            responsive={responsive}
            controlsStrategy="alternate"
            infinite
            autoPlay
            autoPlayInterval={4000}
            disableButtonsControls
            disableDotsControls
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;






