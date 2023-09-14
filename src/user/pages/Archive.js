import React, { useEffect, useState } from "react";
// import {BiLinkExternal} from 'react-icons/bi'
import "../../styles/sheikhtabarak.css";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ProjectArchive from "../data/projectsdata";
import firebaseconnection from "../../models/connection";
import Project from "../../models/ProjectsClass";
import SingleProject from "./SingleProject";

export default function Archive(props) {
  const [Moredetails, setMoredetails] = useState(true);
  const history = useLocation();
  const [Tech, setTech] = useState("tech");

  const [projects, setProjects] = useState([]);
  const [refreshData, setrefreshData] = useState(false);

  useEffect(() => {
    const FilterText = history.pathname.split("/")[3];
    FilterText !== undefined ? setTech(FilterText) : setTech("");

    const fetchProjects = async () => {
      try {
        const collectionRef = firebaseconnection
          .firestore()
          .collection("projects");
        const snapshot = await collectionRef.get();

        const projectList = snapshot.docs.map((doc) => {
          const data = doc.data();
          return new Project(
            data.project_id,
            data.project_title,
            data.project_description,
            data.project_github,
            data.client_name,
            data.date_to_start,
            data.date_to_end,
            data.feature_image,
            data.project_link,
            data.builtsin
          );
        });

        setProjects(projectList);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [refreshData]);

  useEffect(() => {}, []);

  return (
    <div className="px-5 py-10 lg:px-36 lg:py-10 md:px-36 md:py-10">
      <div className="lg:justify-between  lg:flex	lg:items-end">
        <h1 className="text-[20px] font-bold  tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[60px]">
          Archive
        </h1>
        <ul className="py-5 lg:py-0 scrollbar-hide flex  skills-font-span whitespace-nowrap overflow-auto">
          <Link onClick={() => setTech("")} to={"/archive/tech"}>
            <li className="my-2 mr-2 min-w-min">
              <div
                className={
                  Tech === ""
                    ? "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-white bg-[#46c378]"
                    : "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-[#46c378] bg-teal-400/10"
                }
              >
                All
              </div>
            </li>
          </Link>
          <Link
            onClick={() => setTech("wordpress")}
            to={"/archive/tech/wordpress"}
          >
            <li className="my-2 mr-2 min-w-max">
              <div
                className={
                  Tech === "wordpress"
                    ? "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-white bg-[#46c378]"
                    : "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-[#46c378] bg-teal-400/10"
                }
              >
                Wordpress
              </div>
            </li>
          </Link>

          <Link onClick={() => setTech("reactjs")} to={"/archive/tech/reactjs"}>
            <li className="my-2 mr-2 min-w-max">
              <div
                className={
                  Tech === "reactjs"
                    ? "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-white bg-[#46c378]"
                    : "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-[#46c378] bg-teal-400/10"
                }
              >
                React js
              </div>
            </li>
          </Link>

          <Link onClick={() => setTech("flutter")} to={"/archive/tech/flutter"}>
            <li className="my-2 mr-2 min-w-max">
              <div
                className={
                  Tech === "flutter"
                    ? "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-white bg-[#46c378]"
                    : "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-[#46c378] bg-teal-400/10"
                }
              >
                Flutter
              </div>
            </li>
          </Link>

          <Link onClick={() => setTech("others")} to={"/archive/tech/others"}>
            <li className="my-2 mr-2 min-w-max">
              <div
                className={
                  Tech === "others"
                    ? "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-white bg-[#46c378]"
                    : "flex items-center rounded-[10px]  px-3 py-1.5 lg:px-5 lg:py-2 text-[10px] lg:text-[13px] font-medium leading-5 text-[#46c378] bg-teal-400/10"
                }
              >
                C++/Java/Others
              </div>
            </li>
          </Link>
        </ul>
      </div>
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
                className="px-2 py-2 lg:px-6 lg:py-3 min-w-max hidden lg:table-cell  lg:w-4/13"
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
            <Routes>

         

              <Route
                path={"/"}
                element={
                  <>
                    {projects.map((value, index) => {
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
                                {value.date_to_start}
                              </p>
                            </th>

                            
                            <Link
                          to={"/archive/id/" + value.project_id}
                          state={{ project: value }}
                        >
                          <td
                              className={
                                "align-middle px-2 py-2 lg:px-6 lg:py-3 w-6/13 lg:w-4/13"
                              }
                            >
                              <p className="align-middle py-1 px-2  col leading-5 lg:leading-7 md:leading-6  font-bold text-[14px] md:text-[16px]  lg:text-[17px] tracking-tight text-[#CCD6F6] font-[500] ">
                                {value.project_title}
                              </p>
                            </td>
                            
                            </Link>
                            
                            <td className="px-2 py-2 lg:px-6 lg:py-3  hidden lg:table-cell lg:w-2/13 ">
                              {value.client_name}
                            </td>
                            <td
                              className={
                                " flex-inline skills-font-span text-[12px] px-2 py-2 lg:px-6 lg:py-3 lg:w-4/13 hidden lg:table-cell "
                                // +
                                // "lg:w-4/13 hidden lg:table-cell"
                              }
                            >
                              <ul className="flex -translate-y-1.5 flex-wrap">
                                {value.builtsin.split(",").map((values, i) => {
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
                                {value.project_link !== "" ? (
                                  <Link
                                    target="blank"
                                    to={value.project_link}
                                    className="text-[#CCD6F6] hover:text-[#4CD684] "
                                  >
                                    <BiLinkExternal />
                                  </Link>
                                ) : (
                                  <></>
                                )}

                                {(value.project_github !== "" ||value.project_github!==undefined)?(
                                  <Link
                                    to={value.project_github}
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
                        </>
                      );
                    })}
                  </>
                }
              />

              <Route
                path={"/" + Tech}
                element={projects.map((value, index) => {
                  if (Tech.toLowerCase() === "others") {
                    if (
                      !value.builtsin.replace(/\s/g, "").includes("Reactjs") &&
                      !value.builtsin.replace(/\s/g, "").includes("Flutter") &&
                      !value.builtsin.replace(/\s/g, "").includes("Wordpress")
                    ) {
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
                                {value.date_to_start}
                              </p>
                            </th>

                            <td
                              className={
                                "align-middle px-2 py-2 lg:px-6 lg:py-3  "
                                // + "w-6/13 lg:w-4/13"
                              }
                            >
                              {/* <div className={Moredetails===true?" absolute bg-white p-[200]":"hidden bg-grey-200 p-[200]"}>Details here</div> */}

                              <p
                                // onMouseOver={()=>setMoredetails(!Moredetails)}
                                // onMouseOut={()=>setMoredetails(!Moredetails)}
                                className="align-middle py-1 px-2  col leading-5 lg:leading-7 md:leading-6  font-bold text-[14px] md:text-[16px]  lg:text-[17px] tracking-tight text-[#CCD6F6] font-[500] "
                              >
                                {value.project_title}
                              </p>
                            </td>
                            <td className="px-2 py-2 lg:px-6 lg:py-3  hidden lg:table-cell lg:w-2/13 ">
                              {value.client_name}
                            </td>
                            <td
                              className={
                                " flex-inline skills-font-span text-[12px] px-2 py-2 lg:px-6 lg:py-3  " +
                                "lg:w-4/13 hidden lg:table-cell"
                              }
                            >
                              <ul className="flex -translate-y-1.5 flex-wrap">
                                {value.builtsin.split(",").map((values, i) => {
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
                                "px-2 py-2 lg:px-6 lg:py-3   text-right"
                                // +"w-4/13 lg:w-2/13"
                              }
                            >
                              <p className="flex gap-x-4 col font-bold text-[18px] tracking-tight md:text-[22px] lg:text-[22px] font-[500] ">
                                {value.project_link !== "" ? (
                                  <Link
                                    target="blank"
                                    to={value.project_link}
                                    className="text-[#CCD6F6] hover:text-[#4CD684] "
                                  >
                                    <BiLinkExternal />
                                  </Link>
                                ) : (
                                  <></>
                                )}

                                {value.project_github !== "" ? (
                                  <Link
                                    to={value.project_github}
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
                        </>
                      );
                    }
                  } else {
                    if (
                      value.builtsin
                        .replace(/\s/g, "")
                        .toLowerCase()
                        .includes(Tech.toLowerCase())
                    ) {
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
                                {value.date_to_start}
                              </p>
                            </th>

                            <td
                              className={
                                "align-middle px-2 py-2 lg:px-6 lg:py-3  "
                                // + "w-6/13 lg:w-4/13"
                              }
                            >
                              {/* <div className={Moredetails===true?" absolute bg-white p-[200]":"hidden bg-grey-200 p-[200]"}>Details here</div> */}

                              <p
                                // onMouseOver={()=>setMoredetails(!Moredetails)}
                                // onMouseOut={()=>setMoredetails(!Moredetails)}
                                className="align-middle py-1 px-2  col leading-5 lg:leading-7 md:leading-6  font-bold text-[14px] md:text-[16px]  lg:text-[17px] tracking-tight text-[#CCD6F6] font-[500] "
                              >
                                {value.project_title}
                              </p>
                            </td>
                            <td className="px-2 py-2 lg:px-6 lg:py-3  hidden lg:table-cell lg:w-2/13 ">
                              {value.client_name}
                            </td>
                            <td
                              className={
                                " flex-inline skills-font-span text-[12px] px-2 py-2 lg:px-6 lg:py-3  " +
                                "lg:w-4/13 hidden lg:table-cell"
                              }
                            >
                              <ul className="flex -translate-y-1.5 flex-wrap">
                                {value.builtsin.split(",").map((values, i) => {
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
                                "px-2 py-2 lg:px-6 lg:py-3   text-right"
                                // +"w-4/13 lg:w-2/13"
                              }
                            >
                              <p className="flex gap-x-4 col font-bold text-[18px] tracking-tight md:text-[22px] lg:text-[22px] font-[500] ">
                                {value.project_link !== "" ? (
                                  <Link
                                    target="blank"
                                    to={value.project_link}
                                    className="text-[#CCD6F6] hover:text-[#4CD684] "
                                  >
                                    <BiLinkExternal />
                                  </Link>
                                ) : (
                                  <></>
                                )}

                                {value.project_github !== "" ? (
                                  <Link
                                    to={value.project_github}
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
                        </>
                      );
                    }
                  }
                })}
                loader={async ({ params }) => {
                  return setTech(params.Tech);
                }}
              />




             
            </Routes>
          </tbody>
        </table>
      </div>
    </div>
  );
}
