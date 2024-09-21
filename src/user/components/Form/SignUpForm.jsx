import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { getUser, register } from '../../redux/Auth/Action';
import LoadingBar from 'react-top-loading-bar';
import { Toaster, toast } from 'react-hot-toast';

const InputField = ({ label, type, name, value, onChange, placeholder, icon: Icon, onIconClick }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
      {label}<sup className="text-red-500">*</sup>
    </label>
    <div className="relative">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      {Icon && (
        <span className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 cursor-pointer">
          <Icon onClick={onIconClick} />
        </span>
      )}
    </div>
  </div>
);

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [progress, setProgress] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [dispatch, auth.jwt]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setProgress(100);
    try {
      await dispatch(register(userData));
      setProgress(0);
      setIsLoggedIn(true);
      toast.success('Account created successfully');
      
      const previousPage = document.referrer;
      if (previousPage.includes('/unauthorized')) {
        navigate('/');
      } else {
        navigate(-1, { replace: true });
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('An error occurred. Please try again.');
      setProgress(0);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <Toaster />
      <LoadingBar color="#4F46E5" progress={progress} />
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
        </div>
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Enter Email Address"
        />
        <InputField
          label="Create Password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          icon={showPassword ? AiOutlineEye : AiOutlineEyeInvisible}
          onIconClick={() => setShowPassword(!showPassword)}
        />
        <InputField
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          icon={showConfirmPassword ? AiOutlineEye : AiOutlineEyeInvisible}
          onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Create Account
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{' '}
        <Link to="/signin" className="text-indigo-600 hover:text-indigo-800">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
