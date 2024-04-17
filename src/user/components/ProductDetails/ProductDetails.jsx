import { useEffect, useRef, useState } from 'react'
import React from 'react'
import DeptAndSearch from '../DepartmentAndSearch/DeptAndSearch'
import WhatsAppButton from './Whatsapp'
import { Link, useNavigate } from 'react-router-dom'
import { addItemToCart, getCart } from "../../redux/Cart/Action"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { findProductById } from '../../redux/Product/Action'
import rectangle35 from '../../../assets/rectangle-35@2x.png'
import rectangle36 from '../../../assets/rectangle-36@2x.png'
import rectangle34 from '../../../assets/rectangle-34@2x.png'

// import ProductReviewCard from '../ProductReviewCard/ProductReviewCard'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import LoadingBar from 'react-top-loading-bar';

export default function ProductDetails() {
  const [open, setOpen] = React.useState(false);

  const { product } = useSelector((store) => store);
  const { cart } = useSelector((store) => store);
  console.log(cart)
  const { productId } = useParams();
  const jwt = localStorage.getItem('jwt');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const data = { productId: productId, jwt };
    setProgress(20); // Set the initial progress value
    dispatch(findProductById(data))
      .then(() => setProgress(100)) // Set the progress to 100% when data is fetched
      .catch(() => setProgress(100)) // Set the progress to 100% even if an error occurs
      .finally(() => {
        // Delay before hiding the loading bar
        setTimeout(() => {
          setProgress(0);
          loadingBarRef.current.complete()
        }, 500);
      });
      dispatch(getCart(jwt))
  }, [productId, dispatch, jwt]);

  console.log(product.product?.name);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAddToCart = () => {
    const data = { productId: productId };
    console.log(data);
    dispatch(addItemToCart({ data, jwt }));
    navigate('/cart');
  };

  const handleBuyNoW = () => {
    const data = { productId: productId };
    console.log(data);
    dispatch(addItemToCart({ data, jwt }));
    navigate('/checkout?step=2');
  };

  const [selectedTab, setSelectedTab] = useState('highlight');
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  let totalRating = 0;
  let averageRating = 0;

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    if (isOpen2) setIsOpen2(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    if (isOpen1) setIsOpen1(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    if (isOpen2 || isOpen1) {
      setIsOpen1(false);
      setIsOpen2(false);
    }
  };

  
      
    
  return (
   
    <div className="bg-white">
       
      <DeptAndSearch />
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        ref={loadingBarRef}
      />
      
      <div className="grid-col-3">

        {/* Image gallery */}
        <div className=' flex flex-col md:flex-row   lg:max-w-7xl  mx-5  sm:mx-20 pt-10 mb-10 col-span-1 '>
          <div className=" py-auto ">
            <div className=" sm:overflow-hidden sm:rounded-lg">
            <button type="button" onClick={() => setOpen(true)}>
            <img
                src={`${product.product?.image}`}
                alt='product_detail'
                className="h-[30rem] w-[25rem] object-cover "
              />
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: `${product.product?.image}`,
            alt: "image 1",
            width: 3840,
            height: 2560,
          },
          // ...
        ]}
      />
              
            </div>
          </div>

          {/* Product info */}
          <div className=" max-w-2xl px-4 pb-16 pt-10 sm:px-6 w-full col-span-1   lg:pl-20 lg:pb-24 lg:pt-16">

            <div className=' ' >

              <h1 className="text-3xl font-bold tracking-tight text-secondary-dark-color font-poppins sm:text-5xl">{product.product?.name}</h1>

            </div>


            {/* Options */}
            <div className="mt-4 lg:row-span-3 ">
              <h2 className="sr-only">Product information</h2>
              <p className="text-4xl tracking-tight font-bold text-primarycolor font-poppins">{product.product?.discountedPrice}₹ <span className=' text-[#808080] font-thin  text-3xl ml-5 line-through font-poppins ' >{product.product?.price}₹</span> </p>
              <p className=' mt-10 text-xl text-primarycolor font-poppins ' >You Save: {product.savedprice} <span>({product.product?.discount}%)</span> </p>


              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} htmlFor={`star${star}`}>
                      <input type="radio" id={`star${star}`} name="rating" className="sr-only" />
                      <svg
                        className="w-5 h-5 text-primarycolor me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </label>
                  ))}
                  <p className="ms-1 text-md font-medium text-gray-500 dark:text-gray-400 font-poppins ">4.95</p>
                  <p className="ms-1 text-md font-medium text-gray-500 dark:text-gray-400 font-poppins">out of</p>
                  <p className="ms-1 text-md font-medium text-gray-500 dark:text-gray-400 font-poppins">5</p>
                  <p className="ms-1 text-md font-medium text-[#808080] font-poppins">(117 reviews)</p>

                </div>


              </div>

              <div className=' mt-10 ' >
                <h3 className="sr-only font-poppins">Description</h3>
                <div className="mt-4">
                  <ul role="list" className=" list-none space-y-2 pl-4 text-md">

                    <li className="text-gray-400">
                      <span className="text-gray-600 font-poppins text-xl ">{product.product?.description1}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600 font-poppins text-xl ">{product.product?.description2}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600 font-poppins text-xl ">{product.product?.description3}</span>
                    </li>
                  </ul>
                </div>
              </div>


              <form className="mt-5 ">
                <div className="mb-5">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 font-poppins text-xl font-medium text-[#808080] dark:text-white"
                  >
                    *Note
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full h-[5rem] p-4 text-gray-900 pb-24 text-sm font-poppins border border-light-text-color rounded-md "
                    placeholder="Share your desired changes or customizations in your note. "
                  />
                </div>
              </form>

              <button
                onClick={handleAddToCart}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3  font-medium  bg-primarycolor hover:bg-light-text-color  transition duration-500 text-2xl font-poppins "
              >
                Add to Cart
              </button>


              <button
              onClick={handleBuyNoW}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3  font-medium   hover:bg-secondary-dark-color hover:text-light-bg-color  transition duration-500 text-2xl font-poppins "
              >
                Buy Now
              </button>

            </div>

            <div className=' flex justify-end mt-5 ' >


              <div>

                <WhatsAppButton />
              </div>
            </div>
          </div>
        </div>



      </div>



      <div className='' >
        {/*   */}
        <div className="relative max-w-4xl mx-auto flex flex-col gap-5  ">
          <div className=' flex justify-between '>
            <p className='text-2xl text-primarycolor font-poppins font-semibold underline-offset-2 underline' >Details</p>
            <button
              onClick={toggleDropdown1}
              className="bg-gray-dark/5 p-2 rounded-lg focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 13 7"
                className={`${isOpen1 ? 'rotate-0' : 'rotate-180'}`}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.207 6.707a1 1 0 01-1.414 0l-5-5A1 1 0 012.207.293L6.5 4.586 10.793.293a1 1 0 111.414 1.414l-5 5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>



          {isOpen1 && (
            <div className="relative top-full left-0 bg-white rounded-lg  w-full">
              {/* Dropdown content */}
              <div className="flex flex-col gap-5 p-5">
                <div className="flex flex-wrap gap-3 lg:gap-5">
                  {/* Dropdown item 1 */}
                  <div className="flex w-full gap-[0.625rem] items-start">

                    <div className="grow w-full">


                      <ul className=' text-xl text-secondary-dark-color font-poppins' dangerouslySetInnerHTML={{ __html: product.product?.details }} />

                    </div>
                  </div>
                  {/* End of Dropdown item 1 */}
                </div>
                {/* End of Dropdown content */}
              </div>
            </div>
          )}
          <div className=' bg-secondarycolor w-full h-[0.1rem]'></div>
          <div className=' flex justify-between '>
            <p className='text-2xl text-primarycolor font-poppins font-semibold underline-offset-2 underline'>Delivery & Returns</p>
            <button
              onClick={toggleDropdown2}
              className="bg-gray-dark/5 p-2 rounded-lg focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 13 7"
                className={`${isOpen2 ? 'rotate-0' : 'rotate-180'}`}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.207 6.707a1 1 0 01-1.414 0l-5-5A1 1 0 012.207.293L6.5 4.586 10.793.293a1 1 0 111.414 1.414l-5 5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {isOpen2 && (
            <div className="relative top-full left-0 bg-white  rounded-lg mt-2 w-full">
              {/* Dropdown content */}
              <div className="flex flex-col gap-5 px-5">
                <div className="flex flex-wrap gap-3 lg:gap-5">
                  {/* Dropdown item 1 */}
                  <div className="flex w-full gap-[0.625rem] items-start">

                    <div className="grow">
                      <h6 className=" text-xl font-bold font-poppins text-secondary-dark-color  lg:text-h6">
                        SHIPPING
                      </h6>
                      <ul className='text-lg py-2 font-poppins text-secondary-dark-color list-disc'>
                        <li>Orders are shipped within <span className=' mx-1 font-semibold '>6-7 working days.</span> </li>
                        <li>Order having Custom products are <span className=' mx-1 font-semibold'>shipped within 8-10 days</span></li>
                        <li>Delivery takes another <span className=' mx-1 font-semibold'>5-10 working days</span>  after shipment.</li>
                        {/* <li>In-store pick-up is available when order status is updated to Ready to Pick-up</li> */}
                      </ul>
                      <h6 className="mt-2 text-xl font-bold font-poppins text-secondary-dark-color  lg:text-h6">RETURNS & EXCHANGES</h6>
                      <ul className='text-lg py-2 font-poppins text-secondary-dark-color list-disc'>
                        <li><span className=' font-poppins font-semibold' >No addition, No changes, No return and No Exchange</span> are done once the order is confirmed  </li>

                        {/* <li>In-store pick-up is available when order status is updated to Ready to Pick-up</li> */}
                      </ul>
                    </div>
                  </div>
                  {/* End of Dropdown item 1 */}
                </div>
                {/* End of Dropdown content */}
              </div>
            </div>
          )}
          <div className='  bg-secondarycolor w-full h-[0.1rem]'></div>

          {/* <div className=' flex justify-between '>
            <p className='text-2xl text-primarycolor font-poppins font-semibold underline-offset-2 underline'>Ratings & Reviews</p>
            <button
              onClick={toggleDropdown3}
              className="bg-gray-dark/5 p-2 rounded-lg focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 13 7"
                className={`${isOpen3 ? 'rotate-0' : 'rotate-180'}`}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.207 6.707a1 1 0 01-1.414 0l-5-5A1 1 0 012.207.293L6.5 4.586 10.793.293a1 1 0 111.414 1.414l-5 5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div> */}

          
            
          
          <div className='  bg-secondarycolor w-full h-[0.1rem]'></div>

          <div className=' flex justify-between '>
            <p className='text-2xl text-primarycolor font-poppins font-semibold underline-offset-2 underline'>Similar Products</p>
            <button
              onClick={toggleDropdown3}
              className="bg-gray-dark/5 p-2 rounded-lg focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 13 7"
                className={`${isOpen3 ? 'rotate-0' : 'rotate-180'}`}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.207 6.707a1 1 0 01-1.414 0l-5-5A1 1 0 012.207.293L6.5 4.586 10.793.293a1 1 0 111.414 1.414l-5 5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {isOpen3 && (
            <div className="relative top-full left-0 bg-white  rounded-lg mt-2 w-full">
              {/* Dropdown content */}
              <div className="flex flex-col gap-5 px-5">
                <div className="flex flex-wrap gap-3 lg:gap-5">
                  {/* Dropdown item 1 */}
                  <div className="flex w-full gap-[0.625rem] items-start">

                    <div className="grow">
                      <h6 className=" text-xl font-bold font-poppins text-secondary-dark-color  lg:text-h6">
                        SHIPPING
                      </h6>
                    </div>
                  </div>
                  {/* End of Dropdown item 1 */}
                </div>
                {/* End of Dropdown content */}
              </div>
            </div>
          )}
          <div className='  bg-secondarycolor w-full h-[0.1rem]'></div>




        </div>





      </div>

      <div className="flex mt-[7rem] space-x-[1.1rem] md:space-x-[2rem] justify-between ssm:ml-[1.9rem] ssm:mr-[1.8rem] mr-[1rem]
         ml-[1rem]  ">
        <div className="flex flex-col  items-center">
          <img src={rectangle34} alt="Returns & Exchanges" className=" w-8 h-8 md:w-[4.16rem] md:h-[4.16rem] 
  ssm:w-[3.68rem] 
  ssm:h-[3.68rem] lg:h-14 lg:w-14 " />
          <p className="text-black text-[1.2rem] font-poppins md:text-[1.7rem]  font-normal leading-normal ssm:text-[1.5rem]
   mt-2 lg:text-2xl text-secondary-dark-color  ">Offers & Gifts</p>
          <div className="flex flex-col">
            <p className="text-black font-poppins  text-[0.9rem] mt-1 text-center ssm:text-[1rem] md:text-[1.2rem]   header-info-subtext lg:text-xl text-primarycolor  ">
            Explore exclusive offers on a wide range 
            </p>
            <p className=' text-center text-primarycolor font-poppins text-[0.9rem] ssm:text-[1rem] md:text-[1.2rem] lg:text-xl '>of gifts for every occasion</p>

          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src={rectangle35} alt="Fast Shipping" className="w-8 h-8 ssm:w-[3.68rem] 
  ssm:h-[3.68rem] md:w-[4.16rem] md:h-[4.16rem] lg:h-14 lg:w-14  " />
          <p className="text-black font-kurale font-normal md:text-[1.7rem] leading-normal mt-2 ssm:text-[1.5rem]  text-[1.2rem] lg:text-2xl text-secondary-dark-color font-poppins  ">Fast Shipping</p>
          <p className="text-black font-kurale  mt-1 text-center header-info-subtext ssm:text-[1rem]
             md:text-[1.2rem]  text-[0.9rem] text-primarycolor font-poppins lg:text-xl ">
            Experience lightning-fast delivery, ensuring 
          </p>
          <p className=' text-primarycolor font-poppins text-center  ssm:text-[1rem] font-kurale   text-[0.9rem] md:text-[1.2rem] lg:text-xl '>your orders reach you in no time</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={rectangle36} alt="Support 24/7" className="w-8 h-8 ssm:w-[3.68rem] 
  ssm:h-[3.68rem] md:w-[4.16rem] md:h-[4.16rem] lg:h-14 lg:w-14  " />
          <p className="text-black font-kurale  font-normal md:text-[1.7rem] leading-normal mt-2 header-info-text text-[1.2rem] ssm:text-[1.5rem] lg:text-2xl text-secondary-dark-color font-poppins   ">Support 24/7</p>
          <p className="text-black font-kurale  mt-1 text-center header-info-subtext ssm:text-[1rem] 
            md:text-[1.2rem] lg:text-xl text-[0.9rem] text-primarycolor font-poppins  ">
            Enjoy peace of mind with our dedicated 24/7 
          </p>
          <p className=' text-primarycolor font-poppins text-center text-[0.9rem] ssm:text-[1rem] font-kurale  md:text-[1.2rem] lg:text-xl '>support team always at your service</p>
        </div>
      </div>



      {/* <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Reviews</h3>

        {product.reviews && product.reviews.length > 0 ? (
          <div>
            <p className="text-lg font-medium mb-2">Total Reviews: {product.reviews.length}</p>
            <p className="text-lg font-medium mb-4">Average Rating: {averageRating.toFixed(1)} / 5</p>

            <div className="space-y-4">
              {product.reviews.map((review, index) => (
                <div key={index} className="border p-4 rounded">
                  <p className="text-lg font-semibold">{review.reviewerName}</p>
                  <p className="text-gray-600">Rating: {review.rating}/5</p>
                  <p className="mt-2">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-lg font-medium text-gray-500">No reviews yet.</p>
        )}

      </div> */}
      {/* <SimilarProducts  products={productsData} selectedSubCategory={product.subCategory} selectedProductId={selectedProductId}  /> */}
    </div>
  )
}
