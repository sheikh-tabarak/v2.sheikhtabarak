import React, { useState } from "react";
import Logo from "../../assests/logo/logoicon.png";
import LogoGif from "../../assests/logo/logoicon.png";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { useEffect } from "react";
import { useRef } from "react";
import Resume from "../../assests/resume.pdf";
import NewCard from "./NewCard";

export default function UserSideHeader() {
  const [menu, setMenu] = useState(false);

  function clickMenu() {
    setMenu(!menu);
  }

  // useEffect(()=>{

  //   function closeMenu() {
  //     setMenu(false);
  //   }

  //   document.body.addEventListener('click'  ,closeMenu)

  //   },[!menu])

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
            <p className="text-[17px]">
              <RiMenu3Fill />
            </p>
          </button>
          <div
            className={
              menu
                ? "w-full relative  leading-10 items-right  lg:flex lg:w-auto lg:order-1  "
                : " hidden justify-between leading-10 items-right w-full lg:flex lg:w-auto lg:order-1   "
            }
            id="mobile-menu-2"
          >
            <ul className="flex text-center lg:text-left flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
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
                  href="/#experience"
                  className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px] py-2  "
                >
                  Experience
                </a>
              </li>
              <li>
                <span className="menu-font-span pr-1 text-[13px]">03.</span>
                <a
                  onClick={clickMenu}
                  href="/#work"
                  className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px]  py-2  "
                >
                  Work
                </a>
              </li>
              <li>
                <span className="menu-font-span pr-1 text-[13px]">04.</span>
                <a
                  onClick={clickMenu}
                  href="/#contact"
                  className="menu-font-in-SFMonoBold text-[13px] hover:text-[13px]  py-2  "
                >
                  Contact
                </a>
              </li>

              <li className="mt-5 lg:mt-0 hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-17">
                <a
                  onClick={clickMenu}
                  href={Resume}
                  //  rel="noopener noreferrer"
                  target="_blank"
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
