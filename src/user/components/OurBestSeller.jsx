

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
      <div className="container mx-1 sm:mx-auto px-0 md:px-4 py-2 mt-[2rem]">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-black w-1 h-7 mr-4"></div>
        <h2 className="font-poppins font-semibold md:text-3xl lg:text-4xl text-2xl bg-gradient-to-r from-blue-500 to-black text-transparent bg-clip-text">
          Our Best Seller
        </h2>
      </div>
     

        <div className="relative">
          <button
            onClick={() => scroll(-300)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-blue-400 rounded-full p-3 shadow-md z-10 focus:outline-none hover:bg-blue-400 hover:text-white transition-all duration-300 hidden sm:block "
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
              <div key={product.id} className="flex-none  w-60 md:w-80 bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl  ">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src={product.image}
                    className="w-full h-full   object-cover transition-transform duration-500 hover:scale-105"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-blue-400 rounded-full p-3 shadow-md z-10 focus:outline-none hover:bg-blue-400 hover:text-white transition-all duration-300 hidden sm:block  "
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