import React from 'react';
import SignupForm from './SignUpForm';
import LoginForm from './LoginForm';

const Template = ({ title, desc1, desc2, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 text-white">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          <span className="text-white">{desc1}</span>
          <br />
          <span className="text-blue-400 italic">{desc2}</span>
        </p>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
        {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
        </div>
      </div>
      <div className="md:w-1/2 relative hidden md:block">
        <img
          src="https://res.cloudinary.com/ducutbdvu/image/upload/v1718534837/file_rktbwo.jpg"
          alt="Featured"
          className="w-full h-auto object-cover rounded-lg shadow-2xl"
        />
        <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Template;