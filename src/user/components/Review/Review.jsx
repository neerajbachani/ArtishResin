// import React from 'react';
// import './review.css';

// const testimonialData = [
//   {
//     rating: 5,
//     text: '"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."',
//     name: 'Leslie Alexander',
//     title: 'Freelance React Developer',
//     avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
//   },
//   {
//     rating: 5,
//     text: "'Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.'",
//     name: 'Jacob Jones',
//     title: 'Digital Marketer',
//     avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
//   },
//   {
//     rating: 5,
//     text: '"I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish."',
//     name: 'Jenny Wilson',
//     title: 'Graphic Designer',
//     avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png',
//   },
//   {
//     rating: 5,
//     text: '"This is a testimonial text. Amazing service and top-notch quality!"',
//     name: 'John Doe',
//     title: 'Software Engineer',
//     avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-3.png',
//   },
//   {
//     rating: 5,
//     text: '"Highly recommend to anyone who wants to boost their online presence. The results speak for themselves!"',
//     name: 'Jane Smith',
//     title: 'Entrepreneur',
//     avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-2.png',
//   },
// ];

// const Review = () => {
//   return (
//     <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 overflow-hidden ">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center">
//           <div className="text-center">
//             <p className="text-lg font-medium text-gray-600 font-pj">2,157 people have said how good Rareblocks</p>
//             <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
//           </div>

//           <div className="mt-8 text-center md:mt-16 md:order-3">
//             <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check all 2,157 reviews </a>
//           </div>

//           <div className="relative mt-10 md:mt-24 md:order-2">
//             <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
//               <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ "background": "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
//             </div>

//             <div className="relative overflow-hidden">
//               <div className="testimonial-slider">
//                 {testimonialData.concat(testimonialData).map((testimonial, index) => (
//                   <div key={index} className="testimonial-card">
//                     <div className="flex flex-col overflow-hidden shadow-xl">
//                       <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
//                         <div className="flex-1">
//                           <div className="flex items-center">
//                             {Array.from({ length: testimonial.rating }, (_, i) => (
//                               <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                               </svg>
//                             ))}
//                           </div>

//                           <blockquote className="flex-1 mt-8">
//                             <p className="text-lg leading-relaxed text-gray-900 font-pj font-ovo">{testimonial.text}</p>
//                           </blockquote>
//                         </div>

//                         <div className="flex items-center mt-8">
//                           <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={testimonial.avatar} alt="" />
//                           <div className="ml-4">
//                             <p className="text-base font-bold text-gray-900 font-pj">{testimonial.name}</p>
//                             <p className="mt-0.5 text-sm font-pj text-gray-600">{testimonial.title}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Review;
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import './review.css'

const ReviewStory = ({ image, review }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={toggleFullScreen}>
        <div className="md:w-24 md:h-24 h-20 w-20 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
          <img
            src={image}
            alt="Review"
            className="w-full h-full object-cover rounded-full border-2 border-white"
          />
        </div>
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={toggleFullScreen}
        >
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <img
              src={image}
              alt="Review"
              className="w-52 h-60 object-cover mx-auto mb-4"
            />
            <p className="text-center">{review}</p>
          </div>
        </div>
      )}
    </>
  );
};

const Review = () => {
  const reviews = [
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596023/IMG-20240802-WA0013_abjx1h.jpg', review: 'Great product! Highly recommended.' },

    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595996/IMG-20240802-WA0020_zsdk7z.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596016/IMG-20240802-WA0005_vlbgom.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595998/IMG-20240802-WA0017_itjnzx.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595996/IMG-20240802-WA0018_m4iuir.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596027/IMG-20240802-WA0014_araytw.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595996/IMG-20240802-WA0021_lcuair.jpg', review: 'Excellent service and quality.' }, 
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596021/IMG-20240802-WA0009_ywyxbr.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722595996/IMG-20240802-WA0019_hk5obv.jpg', review: 'Excellent service and quality.' },

    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596027/IMG-20240802-WA0015_dp47zl.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596028/IMG-20240802-WA0016_bcxrvy.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596022/IMG-20240802-WA0012_maox7a.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596022/IMG-20240802-WA0010_pz7lw4.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596016/IMG-20240802-WA0006_v95q2m.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596016/IMG-20240802-WA0004_bqnsur.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596017/IMG-20240802-WA0008_gwidtv.jpg', review: 'Excellent service and quality.' },
    { image: 'https://res.cloudinary.com/ducutbdvu/image/upload/v1722596017/IMG-20240802-WA0007_hby7zr.jpg', review: 'Excellent service and quality.' },
    
    // Add more reviews as needed
  ];

  return (
    <>
      <div className='flex items-center justify-center mt-16 space-x-5'>
        <div className='bg-[#5baef7] w-1 h-7'></div>
        <h1 className="font-poppins font-semibold md:text-4xl lg:text-5xl text-2xl">Their Words, Our Pride</h1>
      </div>
      <div className="overflow-x-auto hideScroll  whitespace-nowrap p-4 mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="inline-block mr-4">
            <ReviewStory image={review.image} review={review.review} />
          </div>
        ))}
      </div>
      <div className="flex gap-5 items-center justify-center mt-4">
        <FcGoogle className=' w-12 h-12 md:w-20 md:h-20  ' />
        <div className='flex flex-col'>
        <div className=' flex items-center gap-2'>
          <p className=' font-medium text-lg'>4.9</p>
          
          <div className="flex space-x-1">
      <svg
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
      <svg
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
      <svg
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
      <svg
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
      <svg
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
    </div>
    </div>
    <a href='https://g.co/kgs/H8pAfND' className=' text-base underline text-center cursor-pointer font-poppins text-[#1a0dab]'>View All Reviews</a>
   
        </div>
       
      </div>
    </>
  );
};

export default Review;



