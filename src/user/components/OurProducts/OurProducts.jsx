import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurProduct } from '../../redux/OurProduct/Action';
import { Link } from 'react-router-dom';
import DirectionAwareHover from '../DirectionAwareHover';
 // Import the DirectionAwareHover component

const OurProducts = () => {
  const dispatch = useDispatch();
  const { ourProduct } = useSelector((store) => store);
  const OurProduct = ourProduct.ourProducts || [];
  console.log(OurProduct);

  useEffect(() => {
    dispatch(getOurProduct());
  }, [dispatch]);

  const [activeButton, setActiveButton] = useState('Top');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const filteredProducts = OurProduct.filter((product) => product.type === activeButton);

  return (
    <div className="w-full bg-white" >
      <div className="max-w-7xl mx-auto py-8" data-aos='fade-up'>
        <h2 className=" text-center font-poppins font-semibold md:text-4xl text-2xl mt-[5rem] mb-4 ">Our Products</h2>
        <div className="flex justify-center space-x-5 mb-4" >
          <button
            className={`sm:px-4 sm:py-2 px-2 py-1 mr-2 rounded-md ${
              activeButton === 'Top' ? 'bg-[#BDE0FE] font-poppins' : 'bg-gray-200 text-gray-700 font-poppins'
            }`}
            onClick={() => handleButtonClick('Top')}
          >
            Top
          </button>
          <button
            className={`sm:px-4 sm:py-2 px-2 py-1 mr-2 rounded-md ${
              activeButton === 'Featured' ? 'bg-[#BDE0FE] font-poppins' : 'bg-gray-200 text-gray-700 font-poppins'
            }`}
            onClick={() => handleButtonClick('Featured')}
          >
            Featured
          </button>
          <button
            className={`sm:px-4 sm:py-2 px-2 py-1 mr-2 rounded-md ${
              activeButton === 'Max Discount' ? 'bg-[#BDE0FE] font-poppins' : 'bg-gray-200 text-gray-700 font-poppins'
            }`}
            onClick={() => handleButtonClick('Max Discount')}
          >
            Max Discount
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#BDE0FE] p-4 ">
          {filteredProducts.map((product) => (
            <Link to={product.link}>
            <DirectionAwareHover key={product.id} imageUrl={product.image}>
              <p className="mt-2 font-bold text-sm md:text-md">{product.title}</p>
              <p className="mt-2 font-bold text-xl text-[#BDE0FE]">{product.price}₹</p>
            </DirectionAwareHover>
            </Link>
          ))}
          <div className=' flex justify-center col-span-full'>
            <Link to='/products'>
              <button className=' bg-white text-xl font-poppins px-5 py-3 rounded-xl ' >Explore Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;