'use client';
import React from "react";
import { Card } from "flowbite-react";
import { FaGithub, FaLink } from "react-icons/fa";
import projectgeneralimage from "../../assests/projects/projectgeneralimage.jpg";


export default function NewCard(props) {
  return (
    <>
    <Card vertical
     className="bg-[#0A192F]"
    imgSrc={props.image ? props.image : projectgeneralimage}
    >
      {/* <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>Noteworthy technology acquisitions 2021</p>
      </h5>
      
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </p> */}


      {/* <div className="shadow lg:px-10 py-0 sm: md:py-10 text-center lg:text-right "> */}
                <p className="pt-3 skills-font-span text-[13px] text-[#4CD684]">
                  Featured Project
                </p>

                <p className="py-1 px-2 col font-bold text-[18px] leading-8 mb-4 tracking-tight text-[#CCD6F6] hover:text-[#4CD684] md:text-[40px] lg:text-[22px] font-[500] ">
                  {props.Title}
                </p>

                <p className="text-center lg:text-right bg-[#112240] p-5 rounded-[10px] text-[400] text-[12px] overflow-break tracking-tight text-[#8892B0] md:text-[15px] lg:text-[15px]">
                  {props.description}
                </p>

                <div className="py-3 text-center lg:text-right">
                  {props.technology.split(",").map((value, i) => {
                    return (
                      <span
                        key={i}
                        className="p-1 skills-font-span text-[13px] text-[#CCD6F6]"
                      >
                        {i !== 0 && i < props.technology.length  - 1 ? "-" : null}
                        {value}
                      </span>
                    );
                  })}
                </div>

                <div className="flex justify-between lg:justify-end lg:text-right gap-x-6 my-5 ">
                  {props.projectLink ? (
                    <a
                      id="about"
                      href={props.projectLink}
                      className="w-full items-center flex gap-2 menu-button  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175
                      justify-center    py-3
            text-[10px] font-bold mb-4 tracking-tight text-[#8892B0] md:text-[13px] lg:text-[13px] lg:px-8 lg:py-3"
                    >
                      <FaLink />
                      <span> View Project</span>
                    </a>
                  ) : (
                    ""
                  )}

                  {props.Github ? (
                    <a
                      id="about"
                      href={props.Github}
                      className="w-full items-center flex gap-2 menu-button  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175
                      justify-center  py-3
            text-[10px] font-bold mb-4 tracking-tight text-[#8892B0] md:text-[13px] lg:text-[13px] lg:px-8 lg:py-3"
                    >
                      <FaGithub />
                      Git hub Link
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              {/* </div> */}

    </Card>
    </>
  );
}
