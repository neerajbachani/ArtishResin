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
 
 
        <div className=' flex   items-center justify-center md:mt-[7rem] mt-[4rem] space-x-5 '>
          <div className=' bg-[#5baef7] w-1 h-7 '></div>
        <h1 className="  font-poppins font-semibold md:text-5xl text-2xl     ">
          
        Our Best Seller
      </h1>
      </div>
      
      
     
    
      <div className="flex sm:flex-nowrap flex-wrap justify-center mt-[2rem] lg:gap-8 gap-5">
      
        {ourBestSellerProduct?.ourBestSellerProducts?.map((product) => (
          <div className=' flex flex-col '>
          <Link to={product?.link}>
          <div className="flex-col" key={product.id}>
          <div class="h-min overflow-hidden rounded-md">
            <img
              src={product.image}
              className="lg:w-[13rem] hover:scale-125 transition-all duration-500 cursor-pointer lg:h-[15rem] md:w-[25rem] md:h-[20rem] sm:w-[20rem] sm:h-[15rem] w-[10rem] h-[12rem] object-cover  "
              alt={product.title}
            />
            </div>
            <p className="text-center text-xs sm:text-sm md:text-md lg:text-xl mt-4 font-poppins ">
              {product.title}
            </p>
            {/* <p className="text-center text-xs sm:text-sm md:text-md lg:text-xl mt-1 font-poppins">
              Rs. {product.price}
            </p> */}
          </div>
          </Link>
       
          </div>
        ))}
        {/* <div class="text-center m-20 border-2 rounded-md">
  <div class="h-min overflow-hidden rounded-md">
    <img class="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
  </div>
  <h3 class="text-3xl py-4">Our Mission</h3>
  <span class="text-lg text-gray-700"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo earum quos voluptatum tempore quis exercitationem, ad officiis dolorum temporibus veritatis quod itaque repellendus molestiae culpa laboriosam, cupiditate voluptate. Eius, placeat! </span>
</div> */}
      </div>
      
    </>
  );
};

export default OurBestSeller;