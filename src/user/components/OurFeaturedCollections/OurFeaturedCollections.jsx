import React from 'react'

const OurFeaturedCollections = () => {
  return (
    <>
    <div className=' max-w-5xl mx-auto'>
    <h2 className=" text-center font-poppins font-semibold md:text-4xl text-2xl mt-[5rem] mb-4 ">Our Products</h2>
    <div className=' py-5 grid md:grid-cols-3 grid-cols-2 gap-5 '>
        <div className=' flex flex-col gap-2 '>
            <img src='/products.jpg' className=' w-full h-[16rem] object-cover'/>
            <img src='/products.jpg' className=' w-full h-[16rem] object-cover'/>
        </div>
        <div>
        <img src='/products.jpg' className=' w-full h-[32.5rem] object-cover'/>
        </div>
        <div className=' flex md:flex-col col-span-2 md:col-span-1 md:gap-2 gap-5 '>
            <img src='/products.jpg' className=' w-full h-[16rem] object-cover'/>
            <img src='/products.jpg' className=' w-full h-[16rem] object-cover'/>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default OurFeaturedCollections