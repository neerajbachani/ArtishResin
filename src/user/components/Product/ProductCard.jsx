import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const ProductCard = ({ product }) => {

  const { name, brand, image, price, discountedPrice, color, discount } = product;
  const navigate = useNavigate();

  return (
    <>
      {image ? (
        <div className='productCard transition-all cursor-pointer  '>
          <NavLink to={`/products/id/${product?._id}`}>
            <div className='sm:h-[20rem] relative sm:w-[17rem] h-[15rem] w-[11rem]'>
              <img
                className='h-full w-full object-cover absolute top-0 right-0 '
                src={image}
                alt=""
                loading="lazy"
              />
            </div>
          </NavLink>
          <div className='textPart bg-white mt-3 mb-3 '>
            <div>
              {/* <p className='font-bold opacity-60'>{brand}</p> */}
              <p className=' text-secondary-dark-color sm:text-xl text-lg font-poppins'>
                {name}
              </p>
              {/* <p className='font-semibold opacity-50'>{color}</p> */}
            </div>
            <div className='flex space-x-2 items-center'>
              <p className='font-semibold font-poppins text-primarycolor sm:text-2xl text-lg  '>
                ₹{discountedPrice}
              </p>
              <p className='opacity-50 line-through'>₹{price}</p>
              <p className=' font-semibold font-poppins text-[#219ebc]'>
                {discount}% off
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='productCard m-3 transition-all cursor-pointer '>
          <div className='h-[20rem] relative w-[17rem]'>
            <Skeleton variant="rectangular" sx={{ height: '20rem' , width: '17rem'}} />
          </div>
          <div className='textPart bg-white p-3 '>
            <div>
              <Skeleton variant="text" width={150} height={30} />
            </div>
            <div className='flex space-x-2 items-center'>
              <Skeleton variant="text" width={80} height={30} />
              <Skeleton variant="text" width={60} height={30} />
              <Skeleton variant="text" width={80} height={30} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;






