"use client";
import React from "react";
import { Card } from "flowbite-react";
import { FaGithub, FaLink } from "react-icons/fa";
import projectgeneralimage from "../../assests/projects/projectgeneralimage.jpg";
import { Link } from "react-router-dom";
// import Image from 'next/image';

export default function NewCard(props) {
  return (
    <>
      <Card
        key={props.index}
        vertical
        className="bg-[#0A192F] border-[#8892B0]"
        renderImage={() => {return <img className="rounded-t-lg	" src={props.image ? props.image : projectgeneralimage} />}}
        // imgSrc={props.image ? props.image : projectgeneralimage}
      >
       
        <Link to={"/archive/id/" + props.index} state={{ index: props.index }}>
          <p className="col font-bold text-[18px]  tracking-tight text-[#CCD6F6] hover:text-[#4CD684] md:text-[40px] lg:text-[22px] font-[500] ">
            {props.Title}
          </p>
        </Link>

        {/* <p className="text-center lg:text-right bg-[#112240] p-5 rounded-[10px] text-[400] text-[12px] overflow-break tracking-tight text-[#8892B0] md:text-[15px] lg:text-[15px]">
          {props.description}
        </p> */}

        <div className="text-left">
          {/* {props.technology.split(",").map((CardData, i) => {
                    return (
                      <span
                        key={i}
                        className="p-1 skills-font-span text-[13px] text-[#CCD6F6]"
                      >
                        {i !== 0 && i < props.technology.length - 1 ? "-" : null}
                        {CardData}
                      </span>
                    );
                  })} */}
          {props.technology.split(",").map((value, i) => {
            return (
              <span
                key={i}
                className="p-1 skills-font-span text-[13px] text-[#CCD6F6]"
              >
                {i !== 0 && i < props.technology.length - 1 ? "-" : null}
                {value}
              </span>
            );
          })}
        </div>

        <div className="flex justify-between lg:justify-end lg:text-right gap-x-6 ">
          {props.projectLink ? (
            <a
              id="about"
              href={props.projectLink}
              className="w-full items-center flex gap-2 menu-button  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175
                      justify-center    py-3
            text-[10px] font-bold mb-4 tracking-tight text-[#8892B0] md:text-[13px] lg:text-[13px] lg:px-8 lg:py-3"
            >
              <FaLink />
              {/* <span> View Project</span> */}
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
              {/* Git hub Link */}
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
