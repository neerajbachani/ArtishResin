import React from 'react'
import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  TruckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { navigation } from "../../../Config/navigationMenu";
// import AuthModal from "../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { deepPurple } from "@mui/material/colors";
import { getUser, logout } from "../../redux/Auth/Action";
import { getCart } from "../../redux/Cart/Action";
import SearchBar from '../SearchBar/SearchBar';
import { Phone } from '@mui/icons-material';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth,cart } = useSelector((store) => store);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const location=useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const MenuItems = ({ to,  label, children,  }) => {
    return (
      <li className="group relative">
        <Link to={to} className="block py-2 px-4  text-gray-700 hover:text-blue-500 transition-colors duration-300">
          {label}
        </Link>
        {children && (
          <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block">
            <ul className="py-2  ">
              {children}
            </ul>
          </div>
        )}
      </li>
    );
  };
  
  const SubMenuItem = ({ to, label }) => (
    <li>
      <Link to={to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-300">
        {label}
      </Link>
    </li>
  );


  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(getCart(jwt));
    }
  }, [jwt]);
  
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
    navigate('/signup')
  };
  const handleClose = () => {
    setOpenAuthModal(false);
   
  };



  useEffect(() => {
    if (auth.user){ 
      handleClose();
    }
    if( auth.user?.role!=="admin" && (location.pathname==="/signup" || location.pathname==="/signin")){
      navigate(-1)
    }
  }, [auth.user]);

  const handleLogout = () => {
    handleCloseUserMenu();
    logout(dispatch)
  };
  const handleMyOrderClick=()=>{
    handleCloseUserMenu()
    navigate("/account/order")
  }
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium font-poppins text-xl "
      >
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>Home</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium font-poppins text-lg"
      >
        <NavLink to="/products" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>
          Products
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium font-poppins text-lg"
      >
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>Gallery</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium font-poppins text-lg"
      >
        <NavLink to="/workshop" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>Resin Workshop</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium font-poppins text-lg"
      >
        <NavLink to="/about-us" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>About Us</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium font-poppins text-lg"
      >
        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>Contact Us</NavLink>
      </Typography>
    </ul>
  );


  return (
  
  

    <div className="bg-white pb-0 ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
              
                <button className="space-y-6 border-t border-[gray] px-4 py-6">
                <div className="block">{navList}</div>
                <div className=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign-in
                    </Button>
                  )}
                </div>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative max-w-screen-2xl mx-auto bg-[white]">
        <nav aria-label="Top" className="mx-auto">
          <div className="">
            <div className="flex h-16 items-center px-4">
            

              {/* Logo */}
              <div className=" flex lg:ml-0 ">
                <Link to="/">
                 <img src='https://res.cloudinary.com/ducutbdvu/image/upload/v1714309586/Clock/Artish_kwozcv.png' className=' w-[8rem] h-[6rem] mt-4'/>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full items-center">
                <div className="container mx-auto mt-3">
          {navList}
          </div>
                  
                  
                  
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center mt-3">
               

                {/* Search */}
                <div className="flex lg:ml-3 mb-4 ">
                  <p className=" text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchBar/>
                  </p>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign-in
                    </Button>
                  )}
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                    onClick={() => navigate("/cart")}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cart.cart?.totalItem}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        

      </header>
      <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          <nav className="hidden lg:block z-30 ">
            <ul className="flex space-x-4 font-poppins text-lg ">
           
              <MenuItems to="/collections/premium-acrylic-wall-art" label="Premium Acrylic Wall Art" />
              <MenuItems to="/collections/wall-clock" label="Wall Clock">
                <SubMenuItem to="/collections/roman-numeral-clock" label="Roman Numeral Clock" />
                <SubMenuItem to="/collections/flower-design-wall-clock" label="Flower Design Wall Clock" />
                <SubMenuItem to="/collections/modern-wall-clocks" label="Modern Wall Clocks" />
                {/* Add more SubMenuItems as needed */}
              </MenuItems>
              <MenuItems to="/collections/wall-art" label="Metal Wall Art">
                <SubMenuItem to="/collections/animal-wall-art" label="Animal Wall Art" />
                <SubMenuItem to="/collections/bird-wall-art" label="Bird Wall Art" />
                <SubMenuItem to="/collections/clip-wall-art" label="Clip Wall Art" />
                {/* Add more SubMenuItems as needed */}
              </MenuItems>
              <MenuItems to="/collections/acrylic-wall-art" label="Acrylic Wall Art">
                <SubMenuItem to="/collections/abstract-wall-art" label="Abstract Wall Art" />
                <SubMenuItem to="/collections/vastu-wall-art" label="Vastu Wall Art" />
                <SubMenuItem to="/collections/spiritual-acrylic-wall-art" label="Spiritual Wall Art" />
                {/* Add more SubMenuItems as needed */}
              </MenuItems>
              <MenuItems to="/collections/resin-wall-art" label="Resin Wall Art" />
              <MenuItems to="/collections/acrylic-frame" label="Acrylic Frame" />
              <MenuItems to="https://customize.the-next-decor.com/customize" label="Customize Your Photo" />
            </ul>
          </nav>
        </div>
      </div>
     
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white shadow-md"
          >
            <ul className="py-4">
              <MenuItems to="/" label="Home" />
              <MenuItems to="/collections/premium-acrylic-wall-art" label="Premium Acrylic Wall Art" />
              <MenuItems to="/collections/wall-clock" label="Wall Clock" />
              <MenuItems to="/collections/wall-art" label="Metal Wall Art" />
              <MenuItems to="/collections/acrylic-wall-art" label="Acrylic Wall Art" />
              <MenuItems to="/collections/resin-wall-art" label="Resin Wall Art" />
              <MenuItems to="/collections/acrylic-frame" label="Acrylic Frame" />
              <MenuItems to="https://customize.the-next-decor.com/customize" label="Customize Your Photo" />
              <MenuItems to="/products" label="All Products" />
<MenuItems to="/workshops" label="Workshops" />
<MenuItems to="/gallery" label="Gallery" />
<MenuItems to="/about-us" label="About Us" />
<MenuItems to="/contact" label="Contact" />

              {auth.user ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign-in
                    </Button>
                  )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
     
    </header>
      {/* <AuthModal handleClose={handleClose} open={openAuthModal} /> */}
       
    
  </div>
    
  );
}





