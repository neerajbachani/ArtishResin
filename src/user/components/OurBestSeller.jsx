// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getOurBestSellerProduct } from '../redux/OurBestSeller/Action';
// import { Link } from 'react-router-dom';


// const OurBestSeller = () => {
//   const dispatch = useDispatch();
//   const { ourBestSellerProduct } = useSelector((store) => store);

//   useEffect(() => {
//     dispatch(getOurBestSellerProduct());
//   }, [dispatch]);

 

//   return (
//     <>
 
 
//         <div className=' flex   items-center justify-center md:mt-[7rem] mt-[4rem] space-x-5 '>
//           <div className=' bg-[#5baef7] w-1 h-7 '></div>
//         <h1 className="  font-poppins font-semibold md:text-5xl text-2xl     ">
          
//         Our Best Seller
//       </h1>
//       </div>
      
      
     
    
//       <div className="flex sm:flex-nowrap flex-wrap justify-center mt-[2rem] lg:gap-8 gap-5">
      
//         {ourBestSellerProduct?.ourBestSellerProducts?.map((product) => (
//           <div className=' flex flex-col '>
//           <Link to={product?.link}>
//           <div className="flex-col" key={product.id}>
//           <div class="h-min overflow-hidden rounded-md">
//             <img
//               src={product.image}
//               className="lg:w-[13rem] hover:scale-125 transition-all duration-500 cursor-pointer lg:h-[15rem] md:w-[25rem] md:h-[20rem] sm:w-[20rem] sm:h-[15rem] w-[10rem] h-[12rem] object-cover  "
//               alt={product.title}
//             />
//             </div>
//             <p className="text-center text-xs sm:text-sm md:text-md lg:text-xl mt-4 font-poppins ">
//               {product.title}
//             </p>
//             {/* <p className="text-center text-xs sm:text-sm md:text-md lg:text-xl mt-1 font-poppins">
//               Rs. {product.price}
//             </p> */}
//           </div>
//           </Link>
       
//           </div>
//         ))}
//         {/* <div class="text-center m-20 border-2 rounded-md">
//   <div class="h-min overflow-hidden rounded-md">
//     <img class="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
//   </div>
//   <h3 class="text-3xl py-4">Our Mission</h3>
//   <span class="text-lg text-gray-700"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo earum quos voluptatum tempore quis exercitationem, ad officiis dolorum temporibus veritatis quod itaque repellendus molestiae culpa laboriosam, cupiditate voluptate. Eius, placeat! </span>
// </div> */}
//       </div>
      
//     </>
//   );
// };

// export default OurBestSeller;

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOurBestSellerProduct } from '../redux/OurBestSeller/Action';
import { FaWhatsapp } from "react-icons/fa6";

const OurBestSeller = () => {
  const dispatch = useDispatch();
  const { ourBestSellerProduct } = useSelector((store) => store);
  const sliderRef = useRef(null);

  useEffect(() => {
    dispatch(getOurBestSellerProduct());
  }, [dispatch]);

  const scroll = (scrollOffset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollOffset;
    }
  };

  const handleWhatsAppClick = (productLink) => {
    const text = encodeURIComponent(`I'm interested in this product. Can you provide more details? ${window.location.origin}${productLink}`);
    window.open(`https://wa.me/9429350252?text=${text}`, '_blank');
  };

  return (
    <section className="bg-gray-50 sm:py-12 md:py-16 py-10">
      <div className="container mx-1 sm:mx-auto px-0 md:px-4">
      <div className="flex items-center justify-center md:mt-16 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-black w-1 h-7 mr-4"></div>
        <h2 className="font-poppins font-semibold md:text-3xl lg:text-4xl text-2xl bg-gradient-to-r from-blue-500 to-black text-transparent bg-clip-text">
          Our Best Sellers
        </h2>
      </div>

        <div className="relative">
          <button
            onClick={() => scroll(-300)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-blue-400 rounded-full p-3 shadow-md z-10 focus:outline-none hover:bg-blue-400 hover:text-white transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth gap-8  px-4 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ourBestSellerProduct?.ourBestSellerProducts?.map((product) => (
              <div key={product.id} className="flex-none  w-52 sm:w-60 md:w-80 bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
                <div className=" h-56 sm:h-64 md:h-80 overflow-hidden">
                  <img
                    src={product.image}
                    className="w-full h-[90%] sm:h-full   object-cover transition-transform duration-500 hover:scale-105"
                    alt={product.title}
                  />
                </div>
                <div className="md:p-6 p-2">
                  <h3 className="md:text-xl text-lg font-semibold font-poppins text-black truncate mb-4">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <Link 
                      to={product?.link}
                      className="sm:px-6 px-2 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 text-sm font-medium"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleWhatsAppClick(product.link)}
                      className="p-2 bg-green-600 text-white rounded-full hover:bg-green-400 transition-colors duration-300"
                      aria-label="Contact on WhatsApp"
                    >
                      <FaWhatsapp className=' text-xl sm:text-3xl text-white' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(300)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-blue-400 rounded-full p-3 shadow-md z-10 focus:outline-none hover:bg-blue-400 hover:text-white transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center items-center mt-12">
          <Link 
            to="/products" 
            className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurBestSeller;