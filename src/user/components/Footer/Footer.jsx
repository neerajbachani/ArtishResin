// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
// import { BsPinterest } from 'react-icons/bs';

// function Footer() {
//   const socialMediaIcons = [
//     {
//       icon: FaInstagram,
//       alt: "instagram",
//       link: "https://www.instagram.com/artish_isha?igsh=MXdkb2p3d3lraWM4dA=="
//     },
//     {
//       icon: BsPinterest,
//       alt: "pinteres",
//       link: "https://pin.it/JIJM5nO"
//     },
//     {
//       icon: FaFacebook,
//       alt: "facebook",
//       link: "https://www.facebo.com/share/ToQb7nY7Vw7wDAtc/?mibextid=qi2Omg"
//     },
//     {
//       icon: FaYoutube,
//       alt: "youtube",
//       link: "https://youtube.com/@Resin?si=jKxMDNKgKbL9EnGj"
//     }
//   ];
//   return (
//     <>
//       <footer className=" mt-[5rem] ">
//         <div className="container sm:px-5  sm:py-4 px-1 py-2">
//           <div className="flex justify-between flex-col sm:flex-row  items-center md:items-start  sm:gap-[5rem] text-left">
//             <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
//               <img
//                 src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714309586/Clock/Artish_kwozcv.png'
//                 alt="footer_logo"
//                 className="w-[18rem]"
//               />
           
//               <p className="text-[15px] font-medium text-[#646464]">
//               Resin treasures crafted uniquely, each piece a heartfelt reflection of your story, bringing joy and memories to life.
//               </p>
//               <div className="flex gap-7  text-[#646464] justify-center md:justify-start">
              
//               {socialMediaIcons.map(({ icon: Icon, alt, link }, index) => (
//                   <a
//                     key={index}
//                     href={link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white transition-all duration-300 flex items-center justify-center"
//                   >
//                     <Icon size={24} />
//                   </a>
//                 ))}
                
//               </div>
              
//             </div>

//             <div className="flex flex-col gap-8 relative">
//               <p className="text-[22px] font-bold footer-main">Quick Links</p>

//               <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

//               <Link to='/products' className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 All Products
//               </Link>
//               <Link to='/workshop' className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Workshop
//               </Link>
//               <Link to='/gallery' className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Gallery
//               </Link>
//               <Link to='/about-us' className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 About Us
//               </Link>
//               <Link to='/contact-us'  className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Contact us
//               </Link>
//             </div>

//             <div className="flex flex-col gap-8 relative max-w-[13rem] ">
//               <p className="text-[22px] font-bold footer-main">Quick Links </p>

//               <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

//               <Link to='/products?resin=opalArt' className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Opal Art
//               </Link>
//               <Link to='/products?resin=wallArt' className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Wall Art
//               </Link>
//               <Link to='/products?resin=mantraFrame' className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Mantra Frame
//               </Link>
//               <Link to='/products?resin=nameplate' className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//               Name Plate 
//               </Link>
//               <Link to='/products?varmalaPreservation=unevenRound' className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Varmala Preservation
//               </Link>
//             </div>

       
            
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;

import React from 'react'

const Footer = () => {
  return (
    <div class="flex w-full  bg-white">

<footer class="w-full text-gray-700 bg-gray-100 body-font">
    <div
        class="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <img src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714309586/Clock/Artish_kwozcv.png' />
            </a>
            <p class="mt-2 text-sm text-gray-500">Explore the World of Resin Art</p>
            <div class="mt-4">
                <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                            </path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                            </path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </div>
        <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Quick Links</h2>
                <nav class="mb-10 list-none">
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">Wall Clock</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">Varmala Preservation</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">Geode Art</a>
                    </li>
                </nav>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Quick Links</h2>
                <nav class="mb-10 list-none">
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">Wall Art</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">Mantra Frame</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">Name Plate</a>
                    </li>
                </nav>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Workshop
                </h2>
                <nav class="mb-10 list-none">
                
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">Book a Workshop</a>
                    </li>
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">Contact for Workshop Details</a>
                    </li>
                </nav>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                <nav class="mb-10 list-none">
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
                    </li>
                   
                    <li class="mt-3">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-900">9429350252</a>
                    </li>
                </nav>
            </div>
        </div>
    </div>
</footer>

</div>
  )
}

export default Footer





