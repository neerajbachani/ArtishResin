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
      <h1 className="text-center font-poppins font-semibold md:text-4xl text-2xl mt-[7rem] max-w-screen-2xl mx-auto ">
        Our Best Seller
      </h1>
      <div className="flex sm:flex-nowrap flex-wrap justify-center mt-[2rem] gap-5">
      
        {ourBestSellerProduct?.ourBestSellerProducts?.map((product) => (
          <Link to={product?.link}>
          <div className="flex-col" key={product.id}>
            <img
              src={product.image}
              className="lg:w-[25rem] lg:h-[30rem] md:w-[25rem] md:h-[20rem] sm:w-[20rem] sm:h-[15rem] w-[10rem] h-[10rem] object-cover"
              alt={product.title}
            />
            <p className="text-center text-xs sm:text-sm md:text-md lg:text-xl mt-4">
              {product.title}
            </p>
            <p className="text-center text-xs sm:text-sm md:text-md lg:text-xl mt-1">
              Rs. {product.price}
            </p>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default OurBestSeller;