import React from 'react'
import WorkshopPoster from '../components/WorkshopPoster/WorkshopPoster'

const WorkshopPage = () => {
  return (
    <>
    <WorkshopPoster/>
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold font-ovo text-gray-900 sm:text-4xl">
            Steps to Join Our Resin Workshop
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl font-ovo text-gray-500">
            Follow these easy steps to explore the world of resin art and join our exciting workshop!
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Select Workshop</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Choose between our online or offline workshop options based on your preference and convenience.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Add to Cart</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Add your selected workshop to the cart to proceed with the booking process.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Check Out</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Review your cart and proceed to checkout to confirm your booking.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Provide Delivery Address</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Fill in your basic details and delivery address to ensure smooth communication and delivery (if applicable).
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Make Payment</p>
                </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Complete the payment process securely to confirm your booking for the resin workshop.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 7.78a11.955 11.955 0 01-8.618-3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Join the Workshop</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Once your payment is confirmed, you can join our exciting resin workshop and explore the world of resin art!
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div className=' text-center font-poppins lg:text-4xl mt-7 md:text-2xl sm:text-lg '>Workshop Gallery
    <div className="container md:max-w-[100rem] lg:max-w-[120rem] 2xl:max-w-[140rem] mx-auto flex flex-wrap md:flex-nowrap  px-5 py-2 lg:px-20 lg:pt-4 gap-2 md:gap-8 ">


<div className="-m-1 flex flex-wrap md:-m-2">
  <div className="flex w-1/2 flex-wrap">
    <div className="w-1/2 p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517877/IMG-20240606-WA0072_ttzkqz.jpg" />
       
    </div>
    <div className="w-1/2 p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517678/IMG-20240606-WA0101_qdg1ri.jpg" />
    </div>
    <div className="w-full p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517682/IMG-20240606-WA0124_zmwobu.jpg" />
    </div>
  </div>
  <div className="flex w-1/2 flex-wrap">
    <div className="w-full p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517681/IMG-20240606-WA0131_lwrotm.jpg" />
    </div>
    <div className="w-1/2 p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517873/IMG-20240606-WA0065_gefwif.jpg" />
    </div>
    <div className="w-1/2 p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517877/IMG-20240606-WA0067_feg3el.jpg" />
    </div>
  </div>
</div>

<div className="-m-1 flex flex-wrap md:-m-2">
  <div className="flex w-1/2 flex-wrap">
    <div className="w-1/2 p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517844/IMG-20240606-WA0005_boc9tf.jpg" />
    </div>
    <div className="w-1/2 p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517680/IMG-20240606-WA0119_h7bkvh.jpg" />
    </div>
    <div className="w-full p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517679/IMG-20240606-WA0097_pkspbv.jpg" />
    </div>
  </div>
  <div className="flex w-1/2 flex-wrap">
    <div className="w-full p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517678/IMG-20240606-WA0129_rynkhv.jpg" />
    </div>
    <div className="w-1/2 p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517679/IMG-20240606-WA0096_gnz9uf.jpg" />
    </div>
    <div className="w-1/2 p-1 md:p-2">
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1718517678/IMG-20240606-WA0126_r8e223.jpg" />
    </div>
  </div>
</div>

</div>
    </div>
              </>
          
            
  )
}

export default WorkshopPage