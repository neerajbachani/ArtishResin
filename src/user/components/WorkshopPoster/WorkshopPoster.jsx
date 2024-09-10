import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const WorkshopPoster = () => {
  const navigate = useNavigate()
  const handleButton = () => {
    navigate('/workshop')
  }
  return (
    <>
      <div className="relative max-w-screen-2xl mx-auto mt-[5rem]">
        <div className="absolute w-full h-[50vh] bg-black opacity-70"></div>
        <img
          src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710614079/s254093505207171772_p406_i15_w4696_diinow.webp"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#BDE0FE] text-4xl font-bold"
        >
          <TypeAnimation
            sequence={['Join Now!', 2000, 'Exciting Workshop Event', 2000]}
            wrapper="span"
            className="inline-block font-poppins"
            repeat={Infinity}
          />
        </div>
        <div className=' absolute bottom-[2%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <button onClick={handleButton} className=' text-white bg-[#2e9eff] hover:bg-black hover:text-[#BDE0FE] transition duration-500 ease-in-out text-xl rounded-xl font-poppins px-5 py-2 '>Join Our Workshop</button>
        </div>
        
      </div>
    </>
  );
};

export default WorkshopPoster;
