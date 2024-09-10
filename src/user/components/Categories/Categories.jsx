import React, { useState, useEffect } from 'react';
import './categories.css'
import { Link } from 'react-router-dom';

const categoryData = [
  { to: '/products?wallClock=resinWallClock', img: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1714720046/Clock/wallClockCategory_wlmu9x.jpg', name: 'Wall Clock' },
  { to: '/products?namePlate=customizedNamePlate', img: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1714721510/Name%20Plates/download_3_urhswu.png', name: 'Name Plate' },
  { to: '/products?varmalaPreservation=square12', img: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1714735227/Varmala%20Preservation/18%27%20round/download_7_sc1o0u.png', name: 'Varmala Preservation' },
  { to: '/products?namePlate=customizedNamePlate', img: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1714732507/Table/download_5_a90efq.png', name: 'Resin Table' },
  { to: '/products?navkarMantraFrame=presonalizedMantraFrame', img: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1714722286/Navkar%20mantra/download_4_jtgbvn.png', name: 'Mantra Frame' },
  { to: '/products?varmalaPreservation=planter', img: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1713353614/Varmala%20Preservation/Planter/IMG_20230115_214758_079_os6rum.webp', name: 'Planter' },
  { to: '/products?geodeArt=geodeartedition', img: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1717669098/IMG_20240531_113136-logo_1_hxcqii.jpg', name: 'Geode Art' },
];

const CategorySkeleton = () => (
  <div className='flex-none animate-pulse'>
    <div className='flex flex-col gap-2'>
      <div className='rounded-full md:h-40 md:w-40 w-28 h-28 bg-gray-300'></div>
      <div className='h-6 bg-gray-300 rounded w-20 mx-auto'></div>
    </div>
  </div>
);

const Categories = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='py-2 mt-[2rem] '>
        <div className="flex items-center justify-center md:mt-16 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-black w-1 h-7 mr-4"></div>
        <h2 className="font-poppins font-semibold md:text-3xl lg:text-4xl text-2xl bg-gradient-to-r from-blue-500 to-black text-transparent bg-clip-text">
          Shop By Category
        </h2>
      </div>
      <div className='horizontal-scroll-container flex mt-[2rem] gap-10 mx-4'>
        {loading ? (
          // Skeleton loader
          Array(7).fill().map((_, index) => <CategorySkeleton key={index} />)
        ) : (
          // Actual content
          categoryData.map((category, index) => (
            <div key={index} className='flex-none'>
              <Link className='flex flex-col gap-2' to={category.to}>
                <div className='h-min overflow-hidden rounded-full'>
                  <img
                    className='rounded-full md:h-40 md:w-40 sm:w-28 sm:h-28 w-24 h-24 hover:scale-125 transition-all duration-500 cursor-pointer'
                    loading='eager'
                    src={category.img}
                    alt={`Category ${index + 1}`}
                  />
                </div>
                <p className='md:text-xl text-sm font-poppins text-balance  text-center'>{category.name}</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Categories;