import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "../../assests/projects/spothub.png";
import projectgeneralimage from "../../assests/projects/projectgeneralimage.jpg";

export default function Card(props) {
  // const test = "React js, Firebase ";
  return (
    <section id="">
      <div className="px-4 py-2 lg:px-36 lg:py-0 md:px-36 md:py-10">
        <div className="lg:grid grid-col-7 gap-4 md:py-10 lg:my-0">
          <div className="col-span-0 lg:col-start-1 lg:col-end-5 py-0 border border-[#4CD684] rounded-lg shadow ">
            <img
              className="rounded-lg w-[100%] h-[100%]"
              src={props.image ? props.image : projectgeneralimage}
              alt="product image"
            />
          </div>
          <div className="ml-0 col-start-1 col-end-8 lg:col-end-8 lg:col-span-3  lg:-ml-40 content-center lg:content-center ">
            <div className="">
              
              
              
              <div className="shadow lg:px-10 py-0 sm: md:py-10 text-center lg:text-right ">
              
             {
              props.isfeatured==true?
              <p className="pt-3 skills-font-span text-[13px] text-[#4CD684]">
                  Featured Project
                </p>:""
             }   

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
                        {i !== 0 && i < props.technology.length - 1 ? "- " : null}
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
              </div>






            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
