import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import './review.css'

const ReviewItem = ({ item }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={toggleFullScreen}>
        <div className="md:w-24 md:h-24 h-20 w-20 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt="Review"
              className="w-full h-full object-cover rounded-full border-2 border-white"
            />
          ) : (
            <video
              src={item.src}
              className="w-full h-full object-cover rounded-full border-2 border-white"
            />
          )}
        </div>
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={toggleFullScreen}
        >
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt="Review"
                className="w-52 h-60 object-cover mx-auto mb-4"
              />
            ) : (
              <video
                src={item.src}
                controls
                className="w-52 h-60 object-cover mx-auto mb-4"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Review = () => {
  const reviewItems = [
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596023/IMG-20240802-WA0013_abjx1h.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595996/IMG-20240802-WA0020_zsdk7z.jpg' },
    { type: 'video', src: 'https://res.cloudinary.com/ducutbdvu/video/upload/v1727005501/VID-20240920-WA0011_kn2olr.mp4' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596016/IMG-20240802-WA0005_vlbgom.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595998/IMG-20240802-WA0017_itjnzx.jpg' },
    { type: 'video', src: 'https://res.cloudinary.com/ducutbdvu/video/upload/v1727005494/VID-20240920-WA0012_xx3rxp.mp4' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595996/IMG-20240802-WA0018_m4iuir.jpg' },
  
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596027/IMG-20240802-WA0014_araytw.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595996/IMG-20240802-WA0021_lcuair.jpg' },
    { type: 'video', src: 'https://res.cloudinary.com/ducutbdvu/video/upload/v1727005468/VID-20240922-WA0008_jsi5iu.mp4' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596021/IMG-20240802-WA0009_ywyxbr.jpg' },
   
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595996/IMG-20240802-WA0019_hk5obv.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596027/IMG-20240802-WA0015_dp47zl.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596028/IMG-20240802-WA0016_bcxrvy.jpg' },
    
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596022/IMG-20240802-WA0012_maox7a.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596022/IMG-20240802-WA0010_pz7lw4.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596016/IMG-20240802-WA0006_v95q2m.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596016/IMG-20240802-WA0004_bqnsur.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596017/IMG-20240802-WA0008_gwidtv.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596017/IMG-20240802-WA0007_hby7zr.jpg' },
  ];

  return (
    <>
      <div className='flex items-center justify-center mt-16 space-x-5'>
        <div className='bg-[#5baef7] w-1 h-7'></div>
        <h1 className="font-poppins font-semibold md:text-4xl lg:text-5xl text-2xl">Their Words, Our Pride</h1>
      </div>
      <div className="overflow-x-auto hideScroll whitespace-nowrap p-4 mt-4">
        {reviewItems.map((item, index) => (
          <div key={index} className="inline-block mr-4">
            <ReviewItem item={item} />
          </div>
        ))}
      </div>
      <div className="flex gap-5 items-center justify-center mt-4">
        <FcGoogle className='w-12 h-12 md:w-20 md:h-20' />
        <div className='flex flex-col'>
          <div className='flex items-center gap-2'>
            <p className='font-medium text-lg'>4.9</p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                  stroke="#FFD700"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              ))}
            </div>
          </div>
          <a href='https://g.co/kgs/H8pAfND' className='text-base underline text-center cursor-pointer font-poppins text-[#1a0dab]'>View All Reviews</a>
        </div>
      </div>
    </>
  );
};

export default Review;


