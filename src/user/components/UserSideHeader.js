import React, { useState } from "react";
import Logo from "../../assests/logo/logoicon.png";
import LogoGif from "../../assests/logo/sheikhtabarak.gif";

export default function UserSideHeader() {
  const [menu, setMenu] = useState(false);

  function clickMenu() {
    setMenu(!menu);
  }
  return (
    <header className="sticky top-0 z-50">

      <nav className="dark border-gray-200 px-4 lg:px-8 py-2 bg-[#0A192F]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src={LogoGif}
              className="h-10 sm:h-20 hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"
              alt="Sheikh Tabarak Logo"
            />
          </a>
       

          <button
            onClick={clickMenu}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
        
            className={
              menu
                ?
                 " justify-between leading-10 items-right w-full lg:flex lg:w-auto lg:order-1"
                : " hidden justify-between leading-10 items-right w-full lg:flex lg:w-auto lg:order-1"
            }
            id="mobile-menu-2"
          >
            <ul className=" flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <span className="menu-font-span pr-1 text-[13px]">01.</span>
                <a
                onClick={clickMenu}
                  href="/#about"
                  className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px] py-2 "
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <span className="menu-font-span pr-1 text-[13px]">02.</span>
                <a
                onClick={clickMenu}
                href="#Experience" className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px] py-2  ">
                Experience
                </a>
              </li>
              <li>
                <span className="menu-font-span pr-1 text-[13px]">03.</span>
                <a 
                onClick={clickMenu}
                href="#work" className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px]  py-2  ">
                  Work
                </a>
              </li>
              <li>
                <span className="menu-font-span pr-1 text-[13px]">04.</span>
                <a
                onClick={clickMenu}
                href="#contact" className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px]  py-2  ">
                  Contact
                </a>
              </li>
           

              <li className="hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-17">
                <a

onClick={clickMenu}
                  href="#"
                  className="menu-button px-12 py-3 hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175 "
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=" hidden justify-between leading-10 items-right w-full lg:flex lg:w-auto lg:order-1  fixed bottom-0 left-8 z-50">
        <ul className="pt-4">
          <li className="py-3">
            <a href="https://google.com ">
              {/* <!-- Facebook --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </li>

          <li className="py-3">
            <a href="https://google.com ">
              {/* <!-- Github --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </li>
          <li className="py-3">
            <a href="https://google.com ">
              {/* <!-- Linkedin --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </li>
          <li className="py-3">
            <a href="https://google.com ">
              {/* <!-- Instagram --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </li>

          <li className="py-3">
            <a href="https://google.com ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </li>
          <li className="pt-8 flex justify-center">
            <div className="item-center align-center h-[100px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
          </li>
        </ul>
      </div>

      <div className="hidden fixed leading-10 items-right w-full lg:flex lg:w-auto lg:order-1 bottom-0 -right-28 z-50 bg-grey-700 ">
        <ul className="">
          <li className="">
            <div className=" rotate-90 pr-32 hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175">
              {/* <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7  ring-1 ring-[#CCD6F6] hover:ring-[#4CD684] text-sm rounded-full  text-white  hover:bg-grey-200" role="alert">
            <span className=" text-xs bg-[#4CD684] rounded-full text-[#0A192F] px-4 py-1.5 mr-3">fiverr.com/sheikhtabarak</span> <span className=" menu-font-in-SFMonoBold text-sm font-medium">Level two Seller</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a> */}
              <a
                href="mailto:admin@sheikhtabarak.me"
                className="menu-font-in-SFMonoBold py-2 "
                aria-current="page"
              >
                admin@sheikhtabarak.me
              </a>
            </div>
          </li>

          <li className="pt-8 flex justify-center">
            <div className="item-center align-center h-[100px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50">
              {" "}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
