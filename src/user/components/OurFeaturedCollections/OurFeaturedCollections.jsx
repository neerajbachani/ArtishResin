import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurFeaturedProduct } from '../../redux/OurFeaturedProduct/Action';
import  DirectionAwareHover  from '../DirectionAwareHover';
import { Link } from 'react-router-dom';

const OurFeaturedCollections = () => {
  const dispatch = useDispatch();
  const { ourFeaturedProduct } = useSelector((store) => store);
  const featuredProducts = ourFeaturedProduct.ourFeaturedProducts || [];

  useEffect(() => {
    dispatch(getOurFeaturedProduct());
  }, [dispatch]);

  return (
    <>
  
      <div className='max-w-5xl mx-auto' >
      <div className=' flex   items-center justify-center md:mt-[7rem] mt-[4rem] space-x-5 '>
          <div className=' bg-[#5baef7] w-1 h-7 '></div>
        <h1 className="  font-poppins font-semibold md:text-4xl text-2xl     ">
          
        Our Featured
      </h1>
      </div>
        <div className='py-5 grid md:grid-cols-3 grid-cols-2 gap-5' >
          <div className='flex flex-col gap-2'>
            {featuredProducts.length > 0 && (
              <DirectionAwareHover imageUrl={featuredProducts[0].image} className='w-full h-[16rem] object-cover'>
                <p className='font-poppins' >{featuredProducts[0].title}</p>
              </DirectionAwareHover>
            )}
            {featuredProducts.length > 1 && (
              <DirectionAwareHover imageUrl={featuredProducts[1].image} className='w-full h-[16rem] object-cover'>
                
                <p className='font-poppins'>{featuredProducts[1].title}</p>
              </DirectionAwareHover>
            )}
          </div>
          <div>
            {featuredProducts.length > 2 && (
              <DirectionAwareHover imageUrl={featuredProducts[2].image} className='w-full h-[32.5rem] object-cover'>
              
                <p className='font-poppins'>{featuredProducts[2].title}</p>
              </DirectionAwareHover>
            )}
          </div>
          <div className='grid grid-flow-col md:flex md:flex-col col-span-2 md:col-span-1 md:gap-2 gap-5'>
            {featuredProducts.length > 3 && (
              <DirectionAwareHover imageUrl={featuredProducts[3].image} className='w-full h-[16rem] object-cover'>
                <p className='font-poppins'>{featuredProducts[3].title}</p>
              </DirectionAwareHover>
            )}
            {featuredProducts.length > 4 && (
              <Link to={featuredProducts[4].link} className=' cursor-pointer'>
                <DirectionAwareHover imageUrl={featuredProducts[4].image}  className='w-full h-[16rem] object-cover'>
                <p className='font-poppins'>{featuredProducts[4].title}</p>
              </DirectionAwareHover>
              </Link>
            
            )}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default OurFeaturedCollections;