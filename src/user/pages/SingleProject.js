import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/header';

export default function SingleProject(props) {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);



 
    const location = useLocation(); 
      console.log(location.state.project)
  return (
    <>

    <div>This is testing single Project </div>
    <p className='text-[#ffffff]'>Id: {location.state.project.project_id}</p>
    <p className='text-[#ffffff]'>Title: {location.state.project.project_title}</p>
    <p className='text-[#ffffff]'>Github: {location.state.project.project_github}</p>
    <p className='text-[#ffffff]'>date_to_start: {location.state.project.date_to_start}</p>
    <p className='text-[#ffffff]'>date_to_end: {location.state.project.date_to_end}</p>
    <p className='text-[#ffffff]'>feature_image: {location.state.project.feature_image}</p>
    <p className='text-[#ffffff]'>project_description: {location.state.project.project_description}</p>
    <p className='text-[#ffffff]'>project_link: {location.state.project.project_link}</p>
    <p className='text-[#ffffff]'>builtsin: {location.state.project.builtsin}</p>
    <p className='text-[#ffffff]'>client_name: {location.state.project.client_name}</p>


    <section id="about" className=" motion-safe:animate-fadeIn">
      <div className=" grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12 lg:px-36 md:px-36 md:py-10">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="">
            <div className="flex">
          
              <h1 id="" className="col text-[26px] leading-8 font-bold mb-4 tracking-tight text-[#CCD6F6] md:text-[28px] lg:text-[35px]">
             {location.state.project.project_title}
              </h1>
            </div>

           

            <p className="text-[14px] lg:pr-[2rem]  tracking-tight text-[#8892B0] md:text-[18px] lg:text-[18px]">
            {location.state.project.project_description}
            </p>


            <>
 
  <div className="lg:flex">
        <div className="col-span-5 pr-10">
       

        </div>

        <div className="lg:pr-10">
    
        </div>
    </div>
  
</>



            <a id="Experience" href="#" className="hidden mt-5 md:hidden lg:inline-flex justify-between items-center py-1 px-1 pr-4 mb-7  ring-1 ring-[#CCD6F6] hover:ring-[#4CD684] text-sm rounded-full  text-white  hover:bg-grey-200" role="alert">
            <span className=" text-xs bg-[#4CD684] rounded-full text-[#0A192F] px-4 py-1.5 mr-3">fiverr.com/sheikhtabarak</span> <span className=" menu-font-in-SFMonoBold text-sm font-medium">Level two Seller</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>


          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:block align-middle">

        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow  bg-[#112240]">
  <a href="#">
    <img
      className="  rounded-t-lg"
      src="https://firebasestorage.googleapis.com/v0/b/sheikhtabarak-1019.appspot.com/o/spothub.png?alt=media&token=5bcf0bb7-1e59-4efd-9723-4b0027bd1283"
      alt="product image"
    />
  </a>
  <div className="px-2 pb-5">
    <a href="#">
      {/* <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      </h5> */}
    </a>
    <div className="flex items-center mt-2.5 mb-5">
      <svg
        className="w-4 h-4 text-yellow-300 mr-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 mr-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 mr-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 mr-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
        5.0
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">
        $599
      </span>
      <a
        href="#"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to cart
      </a>
    </div>
  </div>
</div>

          {/* <img
            className="motion-safe:animate-fadeIn"
            src="https://firebasestorage.googleapis.com/v0/b/sheikhtabarak-1019.appspot.com/o/spothub.png?alt=media&token=5bcf0bb7-1e59-4efd-9723-4b0027bd1283"
            alt="mockup"
          />

<h2 className="text-[14px] lg:pr-[2rem] my-3 tracking-tight text-[#8892B0] md:text-[18px] lg:text-[18px]">
 Here the project is built with these technologies:  {location.state.project.builtsin}
  </h2>  */}
        </div>
      </div>
    </section>






    </>
    
  )
}






