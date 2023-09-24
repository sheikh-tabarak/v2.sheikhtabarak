import React, { useEffect, useState } from "react";
// import {BiLinkExternal} from 'react-icons/bi'
import "../../styles/sheikhtabarak.css";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ProjectArchive from "../data/projectsdata";
import firebaseconnection from "../../models/connection";
import Project from "../../models/ProjectsClass";
import SingleProject from "./SingleProject";
import ArchiveTable from "../components/ArchiveTable";
import FeaturedProjects from "../components/FeaturedProjects";
import NewCard from "../components/NewCard";

export default function Archive(props) {
  const [Moredetails, setMoredetails] = useState(true);
  const history = useLocation();
  const [Tech, setTech] = useState("tech");

  const [projects, setProjects] = useState([]);
  const [refreshData, setrefreshData] = useState(false);
  const [isTabular, setisTabular] = useState(true);

  useEffect(() => {
    const FilterText = history.pathname.split("/")[3];
    FilterText !== undefined ? setTech(FilterText) : setTech("");

    // const fetchProjects = async () => {
    //   try {
    //     const collectionRef = firebaseconnection
    //       .firestore()
    //       .collection("projects");
    //     const snapshot = await collectionRef.get();

    //     // const projectList = snapshot.docs.map((doc) => {
    //     //   const data = doc.data();
    //     //   return new Project(
    //     //     data.project_id,
    //     //     data.project_title,
    //     //     data.project_description,
    //     //     data.project_github,
    //     //     data.client_name,
    //     //     data.date_to_start,
    //     //     data.date_to_end,
    //     //     data.feature_image,
    //     //     data.project_link,
    //     //     data.builtwith
    //     //   );
    //     // });

    //     setProjects(projectList);
    //   } catch (error) {
    //     console.error("Error fetching projects:", error);
    //   }
    // };

    // fetchProjects();
  }, [refreshData]);

  // useEffect(() => {}, []);

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
      <p className="menu-font-span leading-6 md:leading-10 text-[14px] lg:text-[16px] pb-4 ">
        A big list of things I’ve worked on
      </p>

      <div className="flex justify-between mb-4 px-4  py-2 rounded-[5px]  bg-[#112240] ">
        <p className="text-[16px] leading-8 text-[#8892B0] rounded-[5px]">
          Change Layout
        </p>

        <div className="flex gap-5 items-center text-[16px] leading-8  rounded-[5px]">
          <Link
            onClick={() => {
              setisTabular(false);
            }}
          >
            <p className={isTabular ? "text-[#8892B0]" : "text-[#4CD684]"}>
              <FiGrid />
            </p>
          </Link>

          <Link
            onClick={() => {
              setisTabular(true);
            }}
          >
            <p className={isTabular ? "text-[#4CD684]" : "text-[#8892B0]"}>
              <FaList />
            </p>
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left  text-gray-400">
          {isTabular == true ? (
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
          ) : (
            <></>
          )}
          <tbody
            className={
              isTabular == true
                ? "border-radius: 20px"
                : "border-radius: 20px grid grid-cols-1 gap-5 lg:grid-cols-3 "
            }
          >
            <Routes>
              <Route
                path={"/"}
                element={
                  <>
                    {ProjectArchive.map((value, index) => {
                      return isTabular == true ? (
                        <ArchiveTable index={index} value={value} />
                      ) : (
                        <NewCard
                          Title={value.title}
                          image={value.project_image}
                          technology={value.builtwith}
                          description={value.description}
                          projectLink={value.link}
                          Github={value.github_link}
                          index={index}
                        />
                      );
                    })}
                  </>
                }
              />

              <Route
                path={"/" + Tech}
                element={ProjectArchive.map((value, index) => {
                  if (Tech.toLowerCase() === "others") {
                    if (
                      !value.builtwith.replace(/\s/g, "").includes("Reactjs") &&
                      !value.builtwith.replace(/\s/g, "").includes("Flutter") &&
                      !value.builtwith.replace(/\s/g, "").includes("Wordpress")
                    ) {
                      return isTabular == true ? (
                        <ArchiveTable index={index} value={value} />
                      ) : (
                        <NewCard
                          Title={value.title}
                          image={value.project_image}
                          technology={value.builtwith}
                          description={value.description}
                          projectLink={value.link}
                          Github={value.github_link}
                          index={index}
                        />
                      );
                    }
                  } else {
                    if (
                      value.builtwith
                        .replace(/\s/g, "")
                        .toLowerCase()
                        .includes(Tech.toLowerCase())
                    ) {
                      return isTabular == true ? (
                        <ArchiveTable index={index} value={value} />
                      ) : (
                        <NewCard
                          Title={value.title}
                          image={value.project_image}
                          technology={value.builtwith}
                          description={value.description}
                          projectLink={value.link}
                          Github={value.github_link}
                          index={index}
                        />
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
