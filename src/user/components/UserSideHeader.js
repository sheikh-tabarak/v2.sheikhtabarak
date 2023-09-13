import React, { useState } from "react";
import Logo from "../../assests/logo/logoicon.png";
import LogoGif from "../../assests/logo/logoicon.png";
import { Link } from "react-router-dom";

export default function UserSideHeader() {
  const [menu, setMenu] = useState(false);

  function clickMenu() {
    setMenu(!menu);
  }
  return (
    <header className="sticky top-0 z-10">
      <nav className="dark border-gray-200 px-4 lg:px-8 py-2 bg-[#0A192F] z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={"/"} className="flex items-center">
            <img
              src={LogoGif}
              className="h-10 sm:h-20 hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"
              alt="Sheikh Tabarak Logo"
            />
          </Link>

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
                ? " justify-between leading-10 items-right w-full lg:flex lg:w-auto lg:order-1"
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
                  className="scroll-smooth menu-font-in-SFMonoBold text-[13px] hover:text-[13px] py-2 "
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <span className="menu-font-span pr-1 text-[13px]">02.</span>
                <a
                  onClick={clickMenu}
                  href="#Experience"
                  className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px] py-2  "
                >
                  Experience
                </a>
              </li>
              <li>
                <span className="menu-font-span pr-1 text-[13px]">03.</span>
                <a
                  onClick={clickMenu}
                  href="#work"
                  className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px]  py-2  "
                >
                  Work
                </a>
              </li>
              <li>
                <span className="menu-font-span pr-1 text-[13px]">04.</span>
                <a
                  onClick={clickMenu}
                  href="#contact"
                  className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px]  py-2  "
                >
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
    </header>
  );
}
