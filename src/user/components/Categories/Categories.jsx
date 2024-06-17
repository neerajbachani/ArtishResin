import React from 'react';
import './categories.css'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className=' bg-gray-50 py-2 md:mt-[7rem] mt-[2rem] ' >
      <div className='flex items-center justify-center  mt-[4rem]  space-x-5'>
        <div className='bg-[#5baef7] w-1 h-7'></div>
        <h1 className="font-poppins font-semibold md:text-4xl text-2xl">Categories</h1>
      </div>
      <div className='horizontal-scroll-container flex mt-[2rem] gap-10 mx-4 '>
   <div className=' flex-none ' >
    <Link className=' flex flex-col gap-2 ' to='/products?wallClock=resinWallClock' >
    <img
          className='rounded-full md:h-40 md:w-40 w-28 h-28 cursor-pointer   '
          loading='lazy'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714720046/Clock/wallClockCategory_wlmu9x.jpg'
          alt='Category 1'
        />
        <p className=' text-xl font-ovo text-center ' >Wall Clock</p>
    </Link>
   </div>
   <div className=' flex-none ' >
    <Link className=' flex flex-col gap-2 ' to='/products?namePlate=customizedNamePlate' >
    <img
          className='rounded-full md:h-40 md:w-40 w-28 h-28 cursor-pointer   '
          loading='lazy'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714721510/Name%20Plates/download_3_urhswu.png'
          alt='Category 1'
        />
        <p className=' text-xl font-ovo text-center ' >Name Plate</p>
    </Link>
   
   </div>
   <div className=' flex-none ' >
    <Link className=' flex flex-col gap-2 ' to='/products?varmalaPreservation=square12' >
    <img
          className='rounded-full md:h-40 md:w-40 w-28 h-28 cursor-pointer   '
          loading='lazy'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714735227/Varmala%20Preservation/18%27%20round/download_7_sc1o0u.png'
          alt='Category 1'
        />
        <p className=' text-xl font-ovo text-center ' >Varmala Preservation</p>
    </Link>
   
   </div>
   <div className=' flex-none ' >
    <Link className=' flex flex-col gap-2 ' to='/products?namePlate=customizedNamePlate' >
    <img
          className='rounded-full md:h-40 md:w-40 w-28 h-28 cursor-pointer   '
          loading='lazy'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714732507/Table/download_5_a90efq.png'
          alt='Category 1'
        />
        <p className=' text-xl font-ovo text-center ' >Resin Table</p>
    </Link>
   
   </div>
   <div className=' flex-none ' >
    <Link className=' flex flex-col gap-2 ' to='/products?navkarMantraFrame=presonalizedMantraFrame' >
    <img
          className='rounded-full md:h-40 md:w-40 w-28 h-28 cursor-pointer   '
          loading='lazy'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714722286/Navkar%20mantra/download_4_jtgbvn.png'
          alt='Category 1'
        />
        <p className=' text-xl font-ovo text-center ' >Mantra Frame</p>
    </Link>
   </div>
   <div className=' flex-none ' >
    <Link className=' flex flex-col gap-2 ' to='/products?varmalaPreservation=planter' >
    <img
          className='rounded-full md:h-40 md:w-40 w-28 h-28 cursor-pointer   '
          loading='lazy'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1713353614/Varmala%20Preservation/Planter/IMG_20230115_214758_079_os6rum.webp'
          alt='Category 1'
        />
        <p className=' text-xl font-ovo text-center ' >Planter</p>
    </Link>
   
   </div>
   <div className=' flex-none ' >
    <Link className=' flex flex-col gap-2 ' to='/products?geodeArt=geodeartedition' >
    <img
          className='rounded-full md:h-40 md:w-40 w-28 h-28 cursor-pointer   '
          loading='lazy'
          src='https://res.cloudinary.com/ducutbdvu/image/upload/v1717669098/IMG_20240531_113136-logo_1_hxcqii.jpg'
          alt='Category 1'
        />
        <p className=' text-xl font-ovo text-center ' >Geode Art</p>
    </Link>
   
   </div>   
      </div>
    </div>
  )
}

export default Categories;