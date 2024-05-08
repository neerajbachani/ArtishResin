import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurBestSellerProduct } from '../redux/OurBestSeller/Action';
import { Link } from 'react-router-dom';


const OurBestSeller = () => {
  const dispatch = useDispatch();
  const { ourBestSellerProduct } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOurBestSellerProduct());
  }, [dispatch]);

 

  return (
    <>
     <div data-aos="fade-up">
 
        <div className=' flex   items-center justify-center md:mt-[7rem] mt-[4rem] space-x-5 '>
          <div className=' bg-[#5baef7] w-1 h-7 '></div>
        <h1 className="  font-poppins font-semibold md:text-4xl text-2xl     ">
          
        Our Best Seller
      </h1>
      </div>
      
      
     
    
      <div className="flex sm:flex-nowrap flex-wrap justify-center mt-[2rem] lg:gap-8 gap-5">
      
        {ourBestSellerProduct?.ourBestSellerProducts?.map((product) => (
          <div className=' flex flex-col '>
          <Link to={product?.link}>
          <div className="flex-col" key={product.id}>
            <img
              src={product.image}
              className="lg:w-[20rem] lg:h-[25rem] md:w-[25rem] md:h-[20rem] sm:w-[20rem] sm:h-[15rem] w-[10rem] h-[10rem] object-cover"
              alt={product.title}
            />
            <p className="text-center text-xs sm:text-sm md:text-md lg:text-xl mt-4 font-poppins">
              {product.title}
            </p>
            <p className="text-center text-xs sm:text-sm md:text-md lg:text-xl mt-1 font-poppins">
              Rs. {product.price}
            </p>
          </div>
          </Link>
       
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default OurBestSeller;