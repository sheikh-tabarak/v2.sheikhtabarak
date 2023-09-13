import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "../../assests/projects/spothub.png";

export default function Card() {
  const test = "React js, Firebase ";
  return (
    <section id="">
      <div className="px-4 py-10 lg:px-36 lg:py-10 md:px-36 md:py-10">
        <div id="" className="flex pb-0">
          <h1 className="col menu-font-span text-[22px] ">3.</h1>
          <h1 className="col text-[20px] leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]">
            Some Things I’ve Built.
          </h1>
          {/* <hr className="h-px mx-8 my-12 bg-gray-400 border-1 dark:bg-gray-700" /> */}
        </div>

        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-0 lg:col-start-1 lg:col-end-5 py-0 md:py-10 lg:my-10 ">
            <Link>
            {/* <iframe className="w-full h-full rounded-[20px]" src="https://spothub.sheikhtabarak.me"></iframe> */}
              <div className="w-full h-full bg-contain bg-center bg-[#2B374E]   hover:opacity-100  bg-no-repeat bg-[url('https://v4.brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/272cf/halcyon.png')]]">
                {/* <img className="w-full h-full " src={Image} alt="" /> */}
              </div>
            </Link>
          </div>
          <div className=" ml-0 col-start-1 col-end-8 lg:col-end-8 lg:col-span-3  lg:-ml-40">
            <div className="">
              {/* <img className='w-full h-full' src="https://v4.brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/272cf/halcyon.png" alt="" /> */}

              <div className="shadow lg:px-10 py-0 sm: md:py-10 text-center lg:text-right ">
                <p className="skills-font-span text-[13px] text-[#4CD684]">
                  Featured Project
                </p>

                <p className="py-1 px-2 col font-bold text-[18px] leading-8 mb-4 tracking-tight text-[#CCD6F6] hover:text-[#4CD684] md:text-[40px] lg:text-[22px] font-[500] ">
                  <Link>Halcyon Theme</Link>
                </p>

                <p className="text-center lg:text-right bg-[#112240] p-5 rounded-[10px] text-[400] text-[12px] overflow-break tracking-tight text-[#8892B0] md:text-[15px] lg:text-[15px]">
                  Having struggled with understanding how the Spotify OAuth flow
                  works, I made the course I wish I could have had.
                  <br />
                  Unlike tutorials that only cover a few concepts and leave you
                  with half-baked GitHub repositories, this course covers
                  everything from explaining the principles of REST APIs to
                  implementing Spotify's OAuth flow and fetching API data in a
                  React app. By the end of the course, you’ll have an app
                  deployed to the internet you can add to your portfolio.
                </p>

                <div className="py-3 text-center lg:text-right">
                  {test.split(",").map((value, i) => {
                    return (
                      <span
                        key={i}
                        className="p-1 skills-font-span text-[13px] text-[#CCD6F6]"
                      >
                        {i !== 0 && i < test.length - 1 ? "-" : null}
                        {value}
                      </span>
                    );
                  })}
                </div>

                <div className="flex justify-end lg:text-right gap-x-6 my-5 ">
                  <a
                    id="about"
                    href="#"
                    className=" flex gap-2 menu-button  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175
           px-5 py-3 
            text-[10px] font-bold mb-4 tracking-tight text-[#8892B0] md:text-[13px] lg:text-[13px] lg:px-8 lg:py-3"
                  >
                    <FaLink />
                    <span> View Project</span>
                  </a>

                  <a
                    id="about"
                    href="#"
                    className=" flex gap-2 menu-button  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175
           px-2 py-3 
            text-[10px] font-bold mb-4 tracking-tight text-[#8892B0] md:text-[13px] lg:text-[13px] lg:px-8 lg:py-3"
                  >
                    <FaGithub />
                    Git hub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>    
        
        <Link className="text-center" to={"/archive"}>
        <p className="menu-font-span hover:underline leading-6 md:leading-10 text-[14px] lg:text-[16px] pb-10 ">
          view the archive
        </p>
      </Link>
      </div>

  
    </section>
  );
}
