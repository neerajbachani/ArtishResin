import React, { useState } from 'react';

const OurProducts = () => {
  const [activeButton, setActiveButton] = useState('Top');

  const products = [
    {
      id: 1,
      image: '/path/to/product1.jpg',
      details: 'Rp. 129.000',
      type: 'Top',
    },
    {
      id: 4,
      image: '/path/to/product1.jpg',
      details: 'Rp. 129.000',
      type: 'Top',
    },
    {
      id: 5,
      image: '/path/to/product1.jpg',
      details: 'Rp. 129.000',
      type: 'Top',
    },
    {
      id: 6,
      image: '/path/to/product1.jpg',
      details: 'Rp. 129.000',
      type: 'Top',
    },
    {
      id: 7,
      image: '/path/to/product1.jpg',
      details: 'Rp. 129.000',
      type: 'Top',
    },
    {
      id: 8,
      image: '/path/to/product1.jpg',
      details: 'Rp. 129.000',
      type: 'Top',
    },
    {
      id: 2,
      image: '/path/to/product2.jpg',
      details: 'Rp. 139.000',
      type: 'Featured',
    },
    {
      id: 3,
      image: '/path/to/product3.jpg',
      details: 'Rp. 130.000',
      type: 'Max Discount',
    },
    // Add more products here
  ];

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const filteredProducts = products.filter((product) => product.type === activeButton);

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-8">
        <h2 className=" text-center font-poppins font-semibold md:text-4xl text-2xl mt-[5rem] mb-4 ">Our Products</h2>
        <div className="flex justify-center space-x-5 mb-4">
          <button
            className={`px-4 py-2 mr-2 rounded-md ${
              activeButton === 'Top' ? 'bg-[#BDE0FE] font-poppins' : 'bg-gray-200 text-gray-700 font-poppins'
            }`}
            onClick={() => handleButtonClick('Top')}
          >
            Top
          </button>
          <button
            className={`px-4 py-2 mr-2 rounded-md ${
              activeButton === 'Featured' ? 'bg-[#BDE0FE] font-poppins' : 'bg-gray-200 text-gray-700 font-poppins'
            }`}
            onClick={() => handleButtonClick('Featured')}
          >
            Featured
          </button>
          <button
            className={`px-4 py-2 mr-2 rounded-md ${
              activeButton === 'Max Discount' ? 'bg-[#BDE0FE] font-poppins' : 'bg-gray-200 text-gray-700 font-poppins'
            }`}
            onClick={() => handleButtonClick('Max Discount')}
          >
            Max Discount
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#BDE0FE] p-4 ">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-md p-4">
              <img src={product.image} alt={`Product ${product.id}`} className="w-full h-64 object-cover rounded-md" />
              <p className="mt-2 font-bold">{product.details}</p>
            </div>
          ))}
          <div className=' flex justify-center col-span-full'>
          <button className=' bg-white text-xl font-poppins px-5 py-3 rounded-xl ' >Explore Now</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default OurProducts;