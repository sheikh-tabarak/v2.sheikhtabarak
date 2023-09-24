import React from "react";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ArchiveTable(props) {
  return (
      <tr
        key={props.index}
        className="py-5 lg:py-10 border-b border-gray-700 hover:bg-[#112240] rounded-xl"
      >
        <th
          scope="row"
          className="px-2 py-2 lg:px-6 lg:py-3 font-medium  whitespace-nowrap text-white"
        >
          <p className="menu-font-span text-[13px] lg:text-[16px] ">
            {props.value.year}
          </p>
        </th>

        <td
          className={"items-center px-2 py-2 lg:px-6 lg:py-3 w-6/13 lg:w-4/13"}
        >
          <Link
            to={"/archive/id/" + props.index}
            state={{ index: props.index }}
          >
            <p className="py-1 px-2  col leading-5 lg:leading-7 md:leading-6  font-bold text-[14px] md:text-[16px]  lg:text-[17px] tracking-tight text-[#CCD6F6] font-[500] ">
              {props.value.title}
            </p>
          </Link>
        </td>

        <td className="px-2 py-2 lg:px-6 lg:py-3  hidden lg:table-cell lg:w-2/13 ">
          {props.value.madeat}
        </td>
        <td
          className={
            " flex-inline skills-font-span text-[12px] px-2 py-2 lg:px-6 lg:py-3 lg:w-4/13 hidden lg:table-cell "
          }
        >
          <ul className="flex -translate-y-1.5 flex-wrap">
            {props.value.builtwith.split(",").map((values, i) => {
              return (
                <li key={i} className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {values}
                  </div>
                </li>
              );
            })}
          </ul>
        </td>
        <td
          className={
            "px-2 py-2 lg:px-6 lg:py-3   text-right w-4/13 lg:w-2/13" +
            "w-4/13 lg:w-2/13"
          }
        >
          <p className="flex gap-x-4 col font-bold text-[18px] tracking-tight md:text-[22px] lg:text-[22px] font-[500] ">
            {props.value.project_link !== "" ? (
              <Link
                target="blank"
                to={props.value.project_link}
                className="text-[#CCD6F6] hover:text-[#4CD684] "
              >
                <BiLinkExternal />
              </Link>
            ) : (
              <></>
            )}

            {props.value.project_github !== "" ||
            props.value.project_github !== undefined ? (
              <Link
                to={props.value.project_github}
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
  );
}
