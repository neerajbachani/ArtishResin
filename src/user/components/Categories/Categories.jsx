import React from 'react';
import './categories.css'

const Categories = () => {
  return (
    <>
      <div className='flex items-center justify-center md:mt-[7rem] mt-[4rem]  space-x-5'>
        <div className='bg-[#5baef7] w-1 h-7'></div>
        <h1 className="font-poppins font-semibold md:text-4xl text-2xl">Categories</h1>
      </div>
      <div className='horizontal-scroll-container flex items-center mt-[2rem] space-x-10'>
        <img
          className='rounded-full md:w-40 md:h-40 w-28 h-28 '
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714720046/Clock/wallClockCategory_wlmu9x.jpg'
          alt='Category 1'
        />
        <img
          className='rounded-full md:w-40 md:h-40 w-28 h-28'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714721510/Name%20Plates/download_3_urhswu.png'
          alt='Category 2'
        />
        <img
          className='rounded-full md:w-40 md:h-40 w-28 h-28'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714735227/Varmala%20Preservation/18%27%20round/download_7_sc1o0u.png'
          alt='Category 3'
        />
        <img
          className='rounded-full md:w-40 md:h-40 w-28 h-28'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714732507/Table/download_5_a90efq.png'
          alt='Category 3'
        />
        
        <img
          className='rounded-full md:w-40 md:h-40 w-28 h-28'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714722286/Navkar%20mantra/download_4_jtgbvn.png'
          alt='Category 4'
        />
        <img
          className='rounded-full md:w-40 md:h-40 w-28 h-28'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1713353614/Varmala%20Preservation/Planter/IMG_20230115_214758_079_os6rum.webp'
          alt='Category 5'
        />
        <img
          className='rounded-full md:w-40 md:h-40 w-28 h-28'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714733385/Geode/CreatorKit-AI_11_w2uo9d.jpg'
          alt='Category 6'
        />
       
      </div>
    </>
  )
}

export default Categories;