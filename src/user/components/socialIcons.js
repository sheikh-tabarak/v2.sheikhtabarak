import React from "react";
import { FaBehance,FaGithub,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Link } from "react-router-dom";

export default function SocialIcons() {
  return (
    <>
      <div className=" hidden justify-between leading-10 items-right w-full lg:flex lg:w-auto lg:order-1  fixed bottom-0 left-8 ">
        <ul className="pt-4">
          {/* <!-- Behance --> */}

          <Link to={"https://www.behance.net/sheikhtabarak"} target="blank">
            <li className="py-3">
              <FaBehance className="h-6 w-6 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175" />
            </li>
          </Link>

          {/* <!-- Fiverr --> */}
          <Link to={"https://www.fiverr.com/sheikhtabarak"} target="blank">
            <li className="py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-6 w-6 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g
                  fillOpacity="1"
                  transform="matrix(2.32442 0 0 2.32442 -1572.046 -1430.084)"
                >
                  <path
                    fillRule="nonzero"
                    stroke="none"
                    d="M852.395 659.912c0 10.145-8.224 18.369-18.368 18.369-10.145 0-18.368-8.224-18.368-18.369 0-10.144 8.224-18.368 18.368-18.368 10.144 0 18.368 8.224 18.368 18.368z"
                    transform="translate(-51.824 -40.799) scale(1.06015)"
                  ></path>
                  <path d="M707.681 811.286c-.104-.275-.174-7.024-.154-14.724l.036-14.29h15.365c-.142-20.473.143-41.237 0-61.71l-8.365-.056-8-.056-.277-14.693-.277-14.694h16.919v-8.75c0-20.493 12.229-32.887 33.404-38.192 12.976-2.649 20.01-1.859 33.23-1.558l.276 15.75.275 15.75h-8.775c-13.539 0-17.496 3.276-17.529 12.748v4.25h88.254v91.21h14.748s-.044-.089 0 2.04c.232 11.337-.109 13.412 0 26.975-.326.325-16.349-.05-35.297 0h-34.451V782.27h15v-61.806c-13.94.163-35.815.081-48.254 0-.95 23.367-.552 33.9 0 61.806 5.584.212 11.169-.184 16.754 0l.275 14.791.275 14.224h-36.62c-20.142 0-36.707.275-36.812 0z"></path>
                </g>
              </svg>
            </li>
          </Link>
          {/* <!-- Upwork --> */}
          <Link to={"https://www.fiverr.com/sheikhtabarak"} target="blank">
          <li className="py-3">
          
              <SiUpwork className="h-6 w-6 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175" />
         
          </li>
          </Link>
          {/* <!-- Github --> */}
          <Link to={"https://www.fiverr.com/sheikhtabarak"} target="blank">
          <li className="py-3">
            <a href="https://google.com ">
             <FaGithub  className="h-6 w-6 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"/>
            </a>
          </li>
          </Link>
          <li className="py-3">
            <a href="https://google.com ">
              {/* <!-- Linkedin --> */}
              <FaLinkedinIn className="h-6 w-6 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"/>
            </a>
          </li>
          <li className="py-3">
            <a href="https://google.com ">
              {/* <!-- Instagram --> */}
              <FaInstagram className="h-6 w-6 fill-[#CCD6F6;] hover:fill-[#4CD684;]  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175"/>
            </a>
          </li>

          <li className="pt-8 flex justify-center">
            <div className="item-center align-center h-[100px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
          </li>
        </ul>
      </div>

      <div className="hidden fixed leading-10 items-right w-full lg:flex lg:w-auto lg:order-1 bottom-0 -right-28  bg-grey-700 ">
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
    </>
  );
}
