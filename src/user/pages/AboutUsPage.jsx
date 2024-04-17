import React from 'react'

import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  return (
    <div>
  
        {/* About Banner */}
        <section className=" mt-10 ">
          <img src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710614079/s254093505207171772_p406_i15_w4696_diinow.webp" alt="" className=" h-[20rem] object-cover  w-full" />
        </section>


        <div className=' md:mt-16 mt-10 ' >
          <h1 className=' text-4xl  text-secondary-dark-color font-poppins font-semibold text-center ' >Transform Your Space with Resin Art</h1>
          <h2 className=' max-w-[85rem] mt-5 mx-auto text-xl tracking-wide text-secondary-dark-color font-poppins font-normal text-center' >Dive into a World of Harmony and Inclusivity. Every resin piece is crafted with care, ensuring it speaks to your style and satisfaction.</h2>

          <div className=' mt-28 flex gap-10   md:gap-20 flex-wrap justify-center' >
            <div className=' border-2 border-primarycolor border-dotted md:px-10 md:py-7 px-7 py-5 rounded-lg flex flex-col gap-  ' >
              <p className=' md:text-5xl text-3xl  font-poppins font-bold text-primarycolor text-center ' > +3K </p>
              <p className=' md:text-2xl text-xl font-poppins font-medium text-primarycolor text-center ' > Products Delivered </p>

            </div>
            <div className=' border-2 border-primarycolor border-dotted md:px-10 md:py-7 px-7 py-5 rounded-lg flex flex-col gap-2  ' >
              <p className=' md:text-5xl text-3xl font-poppins font-bold text-primarycolor text-center ' > +1K</p>
              <p className=' md:text-2xl text-xl font-poppins font-medium text-primarycolor text-center ' > Satisfied Customers </p>

            </div>
            <div className=' border-2 border-primarycolor border-dotted md:px-10 md:py-7 px-7 py-5 rounded-lg flex flex-col gap-2  ' >
              <p className=' md:text-5xl text-3xl font-poppins font-bold text-primarycolor text-center ' > +3.5k </p>
              <p className=' md:text-2xl text-xl font-poppins font-medium text-primarycolor text-center ' >Products in Stock </p>

            </div>


          </div>
          <div>

          </div>
        </div>

        <div className=' bg-[#edede9] mt-36 block  md:flex py-28  items-center  ' >

          <div className=' w-[50rem] ' >
            <img className='  h-[30rem] lg:h-[40rem] w-[100%]  object-cover hidden md:block  ' src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710568440/GeodeArt1_veiuki.jpg" />
          </div>

          <div className=' md:max-w-2xl mx-10 ' >
            <h1 className='text-5xl  text-secondary-dark-color font-poppins font-semibold md:text-left text-center' >About Us</h1>
            <p className='text-xl mt-10 text-secondary-dark-color font-poppins font-thin md:text-left text-center' >Established in 2023, our Resin Gift Store stands as a digital beacon for aficionados of unique, delicate, and captivating resin creations. Fusing the elegance of resin art with artisanal craftsmanship, we proudly highlight "Made In India" ingenuity in our curated collection. From contemporary resin canvases to evocative wall pieces and intricate wire designs, each piece resonates with durability and a distinct charm. We find great joy in anticipating the delight you'll experience as you delve into our resin treasures, wishing for each artwork to illuminate your space and spark genuine appreciation. As we grow, our commitment remains unwavering: to bring you the finest in resin artistry while championing the rich tapestry of Indian craftsmanship.</p>
          </div>

        </div>
        <div>
          <p className='text-xl max-w-[110rem] mx-auto mt-28 text-secondary-dark-color font-poppins font-normal  text-center'>Our product demonstrates how something like a metal-designed incarnation can bring harmony to your space. The catalogs of our products are truly designed by The Next Decor experts, narrating their expertise and skills at a glance. We give you a plethora of options to decorate your spaces irrespective of mood and experiences that without any budget-exploiting reasons.</p>
          <div className=' mt-20 flex max-w-[100rem] mx-auto justify-between gap-20  '>
            <img className='w-[30rem] h-[30rem] object-cover hidden md:block' src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710614079/s254093505207171772_p406_i15_w4696_diinow.webp" />
            <div>
              <h1 className='md:text-4xl text-3xl  text-secondary-dark-color font-poppins font-semibold md:text-left text-center '>Our Mission and Vision</h1>
              <ul className=' mt-20 space-y-7  ' >
                <li className='md:text-2xl text-xl text-secondary-dark-color font-poppins font-normal ' >
                  To enable Indian consumers to renovate their spaces with a unique set of home decor items.

                </li>

                <li className='md:text-2xl text-xl text-secondary-dark-color font-poppins font-normal' >
                  To provide an extensive range of home decor products at budget-friendly prices.

                </li>

                <li className='md:text-2xl text-xl text-secondary-dark-color font-poppins font-normal' >
                  To hold quality, innovation, and exclusivity as the pillar to continue our adventurous journey.

                </li>
                <li className='md:text-2xl text-xl  text-secondary-dark-color font-poppins font-normal' >To establish a unique perspective among shoppers, edge competitiveness, and be recognized as the best home decor brand in India</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=' flex flex-col justify-between'>

        
        <div className="container md:max-w-[100rem] lg:max-w-[120rem] 2xl:max-w-[140rem] mt-28 mx-auto flex flex-wrap md:flex-nowrap  px-5 py-2 lg:px-20 lg:pt-24 gap-2 md:gap-8 ">


          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710614079/s254093505207171772_p406_i15_w4696_diinow.webp" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710568440/GeodeArt1_veiuki.jpg" />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710614079/s254093505207171772_p406_i15_w4696_diinow.webp" />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710568440/GeodeArt1_veiuki.jpg" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710614079/s254093505207171772_p406_i15_w4696_diinow.webp" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710568440/GeodeArt1_veiuki.jpg" />
              </div>
            </div>
          </div>

          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710614079/s254093505207171772_p406_i15_w4696_diinow.webp" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710568440/GeodeArt1_veiuki.jpg" />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710614079/s254093505207171772_p406_i15_w4696_diinow.webp" />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710568440/GeodeArt1_veiuki.jpg" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710614079/s254093505207171772_p406_i15_w4696_diinow.webp" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1710568440/GeodeArt1_veiuki.jpg" />
              </div>
            </div>
          </div>
          
        </div>
        <Link to='/gallery' className=" relative inline-flex items-center justify-center md:px-9 px-2 py-1  overflow-hidden font-medium font-poppins text-indigo-600 transition duration-300 border border-secondary-dark-color ease-out rounded-full shadow-md   group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#fff] duration-300 -translate-x-full bg-primarycolor group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease md:text-2xl text-lg text-primarycolor">Explore Gallery</span>
<span className="relative invisible">Explore Gallery</span>
</Link>
        </div>


        

        


       
      </div>
  )
}

export default AboutUsPage