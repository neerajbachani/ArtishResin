import { Fragment, useRef, useState } from "react";
import React from 'react'
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  
} from "@heroicons/react/20/solid";

import Pagination from "@mui/material/Pagination";

import { filters, sortOptions } from "./Filters";
import ProductCard from "./ProductCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  findProducts,
  // findProductsByCategory,
} from "../../redux/Product/Action";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import LoadingBar from 'react-top-loading-bar';

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const param = useParams();
  const { product } = useSelector((store) => store);
  console.log(product)
  const loadingBarRef = useRef(null);
  // console.log(product)
  const location = useLocation();
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);

  const handleLoderClose = () => {
    setIsLoaderOpen(false);
  };
  

  // const filter = decodeURIComponent(location.search);
  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const colorValue = searchParams.get("color");
  const resinValue = searchParams.get("resin");
  const digitalArtValue = searchParams.get("digitalArt");
  const jewelValue = searchParams.get("jewel");
  const resinRawMaterialsValue = searchParams.get("resinRawMaterials");
  const lippanArtValue = searchParams.get("lippanArt");
  const businessValue = searchParams.get("business");
  const geodeArtValue = searchParams.get("geodeArt");
  const vintageValue = searchParams.get("vintage");
  const festivalSpecialValue = searchParams.get("festivalSpecial");
  const sizeValue = searchParams.get("size");

  const discount = searchParams.get("discount");
  const sortValue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");



  const handleSortChange = (value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("sort", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };
  const handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  useEffect(() => {

    loadingBarRef.current.continuousStart(); 
   
    const data = {
      // category: param.lavelThree,
      colors: colorValue || [],
      resin: resinValue || [],
      digitalArt: digitalArtValue || [],
      jewel: jewelValue || [],
      resinRawMaterials: resinRawMaterialsValue || [],
      festivalSpecial: festivalSpecialValue || [],
      lippanArt: lippanArtValue || [],
      geodeArt: geodeArtValue || [],
      vintage: vintageValue || [],
      business: businessValue || [],
      sizes: sizeValue || [],
      
      minDiscount: discount || 0,
   
      pageNumber: pageNumber ,
      pageSize: 12,
      stock: stock,
    };
    dispatch(findProducts(data))
    .then(() => {
      loadingBarRef.current.complete(); // Complete the loading bar
    })
    .catch(() => {
      loadingBarRef.current.complete(); // Complete the loading bar even if an error occurs
    });
  }, [
    // param.lavelThree,
    
    colorValue,
    resinValue,
    digitalArtValue,
    jewelValue,
    resinRawMaterialsValue,
    businessValue,
    festivalSpecialValue,
    lippanArtValue,
    vintageValue,
    geodeArtValue,
    sizeValue,
    discount,
    sortValue,
    pageNumber,
    stock,
  ]);

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);

    let filterValues = searchParams.getAll(sectionId);

    if (filterValues.length > 0 && filterValues[0].split(",").includes(value)) {
      filterValues = filterValues[0]
        .split(",")
        .filter((item) => item !== value);
      if (filterValues.length === 0) {
        searchParams.delete(sectionId);
      }
      console.log("includes");
    } else {
      // Remove all values for the current section
      // searchParams.delete(sectionId, value);
      filterValues.push(value);
    }

    if (filterValues.length > 0)
      searchParams.set(sectionId, filterValues.join(","));

    // history.push({ search: searchParams.toString() });
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  
  return (
    <div className="bg-[#fff] -z-20 ">
      <LoadingBar ref={loadingBarRef} />
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden "
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[#000] bg-opacity-25 " />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-[#fff] py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900 text-secondary-dark-color ">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6 text-secondary-dark-color" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                        // open={false}
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium font-poppins text-primarycolor text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center font-poppins text-secondary-dark-color"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      onChange={() =>
                                        handleFilter(option.value, section.id)
                                      }
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                      // onClick={()=>handleFilter(option.value,section.id)}
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className=" px-4 lg:px-10 ">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 font-poppins text-secondary-dark-color ">
              Product
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                {/* <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div> */}

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <p
                              onClick={() => handleSortChange(option.query)}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm cursor-pointer"
                              )}
                            >
                              {option.name}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                {/* <Squares2X2Icon className="h-5 w-5" aria-hidden="true" /> */}
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only text-xl ">Filters</span>
                <FunnelIcon className="h-5 w-5 " aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only font-poppins text-secondary-dark-color">
              Products
            </h2>

            <div>
              <h2 className="py-5 font-semibold opacity-60 text-xl hidden lg:block font-poppins text-secondary-dark-color">Filters</h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                {/* Filters */}
                <form className="hidden lg:block shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md p-5">
                  {filters.map((section) => (
                    <Disclosure
                      // defaultOpen={false}
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium  text-secondary-dark-color font-poppins text-lg">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5 text-secondary-dark-color"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5 text-secondary-dark-color"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center text-secondary-dark-color font"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    onChange={() =>
                                      handleFilter(option.value, section.id)
                                    }
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                 
                </form>

                {/* Product grid */}
                <div className="lg:col-span-4 w-full ">
                  <div className="flex flex-wrap justify-evenly shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white py-5 rounded-md ">
                    {product?.products?.content?.map((item) => (
                      <ProductCard product={item} key={item.id} />
                     
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* pagination section */}
        <section className="w-full px-[3.6rem]">
          <div className="mx-auto px-4 py-5 flex justify-center shadow-lg border rounded-md">
            <Pagination
              count={product.products?.totalPages}
              color="primary"
              className=" "
              onChange={handlePaginationChange}
              
            />
          </div>
        </section>

        {/* {backdrop} */}
        {/* <section>
         <BackdropComponent open={isLoaderOpen}/>
        </section> */}
      </div>
    </div>
  );
}


