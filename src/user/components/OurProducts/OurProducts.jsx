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
    <div class="container mx-auto px-4 mt-[4rem] md:mt-[6rem] overflow-x-auto ">
  <div class="flex gap-8 md:gap-20 pb-4 md:pb-0">
    <div class="w-[21rem] md:w-2/3 flex-shrink-0">
      <div class="image-content">
        <Link to=''>
          <img 
            src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1722341334/CUSTOMIZED_1_racbvw.png" 
            alt="Wall Art" 
            className="w-full h-[12rem] object-cover md:h-[20rem] lg:h-[25rem] md:max-w-screen-lg rounded-lg shadow-md"
          />
          </Link>
     
      </div>
    </div>
    
    <div class="w-[21rem] md:w-2/3 flex-shrink-0">
      <div class="image-content">
        <Link to="/">
          <img 
            src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1722344013/download_13_jpk95k.png" 
            alt="Customized Acrylic" 
            class="w-full h-[12rem] object-cover md:h-[20rem] lg:h-[25rem] md:max-w-screen-lg rounded-lg shadow-md"
          />
        </Link>
      </div>
    </div>
  </div>
</div>
  );
};

export default OurProducts;