import React, { useState } from "react";
// import {BiLinkExternal} from 'react-icons/bi'
import "../../styles/sheikhtabarak.css";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProjectArchive from "../data/projects";

export default function Archive() {
  const [Moredetails, setMoredetails] = useState(true);

  return (
    <div className="px-5 py-10 lg:px-36 lg:py-10 md:px-36 md:py-10">
      <h1 className="text-[20px] font-bold  tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[60px]">
        Archive
      </h1>
      <p className="menu-font-span leading-6 md:leading-10 text-[14px] lg:text-[16px] pb-10 ">
        A big list of things I’ve worked on
      </p>

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left  text-gray-400">
          <thead className="">
            <tr className="font-[700] text-[14px] lg:text-[18px] w-3/13 lg:w-1/13">
              <th scope="col" className="px-2 py-2 lg:px-6 lg:py-3 ">
                Year
              </th>
              <th
                scope="col"
                className="px-2 py-2 lg:px-6 lg:py-3 w-6/13 lg:w-4/13"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-2 py-2 lg:px-6 lg:py-3   lg:table-cell	 hidden lg:w-2/13"
              >
                Made at
              </th>
              <th
                scope="col"
                className="px-2 py-2 lg:px-6 lg:py-3    lg:table-cell hidden lg:w-4/13"
              >
                Built with
              </th>
              <th
                scope="col"
                className="px-2 py-2 lg:px-6 lg:py-3   w-4/13 lg:w-2/13"
              >
                Link{" "}
              </th>
            </tr>
          </thead>

          <tbody className="border-radius: 20px">
            {ProjectArchive.map((value, index) => {

              return (

                <>
                <tr
                  key={index}
                  className="py-5 lg:py-10 border-b border-gray-700 hover:bg-[#112240] rounded-xl"
                >
                  <th
                    scope="row"
                    className="px-2 py-2 lg:px-6 lg:py-3 font-medium  whitespace-nowrap text-white"
                  >
                    <p className="menu-font-span text-[13px] lg:text-[16px] ">
                      {value.year}
                    </p>
                  </th>

                  <td className="align-middle px-2 py-2 lg:px-6 lg:py-3  w-6/13 lg:w-4/13">
                    {/* <div className={Moredetails===true?" absolute bg-white p-[200]":"hidden bg-grey-200 p-[200]"}>Details here</div> */}

                    <p
                      // onMouseOver={()=>setMoredetails(!Moredetails)}
                      // onMouseOut={()=>setMoredetails(!Moredetails)}
                      className="align-middle py-1 px-2  col leading-5 lg:leading-7 md:leading-6  font-bold text-[14px] md:text-[16px]  lg:text-[17px] tracking-tight text-[#CCD6F6] font-[500] "
                    >
                      {value.title}
                    </p>
                  </td>
                  <td className="px-2 py-2 lg:px-6 lg:py-3  hidden lg:table-cell lg:w-2/13 ">
                    {value.madeat}
                  </td>
                  <td className=" flex-inline skills-font-span text-[12px] px-2 py-2 lg:px-6 lg:py-3 hidden lg:table-cell lg:w-4/13">
                 

                  {value.builtwith.split(",").map((values, i) => {
                    
                    return (
<span  key={i} className="my-1.5 mr-2 items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {values}
                      </span>
                      
                    );
                  })}
                    

                    
                  </td>
                  <td className="px-2 py-2 lg:px-6 lg:py-3  w-4/13 lg:w-2/13 text-right">
                    <p className="flex gap-x-4 col font-bold text-[18px] tracking-tight md:text-[22px] lg:text-[22px] font-[500] ">
                      {value.link !== "" ? (
                        <Link
                          target="blank"
                          to={value.link}
                          className="text-[#CCD6F6] hover:text-[#4CD684] "
                        >
                          <BiLinkExternal />
                        </Link>
                      ) : (
                        <></>
                      )}

                      {value.github_link !== "" ? (
                        <Link
                          to={value.github_link}
                          target="blank"
                          className="text-[#CCD6F6] hover:text-[#4CD684] "
                        >
                          <BiLogoGithub />
                        </Link>
                      ) : (
                        <></>
                      )}
                    </p>
                  </td>
                </tr>

                <tr>
Details will go fere

                </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
