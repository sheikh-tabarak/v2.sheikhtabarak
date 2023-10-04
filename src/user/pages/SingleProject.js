import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/header";
import ProjectArchive from "../data/projectsdata";
import Card from "../components/card";
import projectgeneralimage from "../../assests/projects/projectgeneralimage.jpg";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import NewCard from "../components/NewCard";
import { FaGithub, FaLink } from "react-icons/fa";
import SinglePageCard from "../components/SinglePageCard";

export default function SingleProject(props) {
  const location = useLocation();

  const [ProjectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const FilterText = location.pathname.split("/")[3];
    FilterText !== undefined ? setProjectIndex(FilterText) : setProjectIndex(0);
  }, []);

  return (
    <>
      <div className="px-4 py-10 lg:px-36 lg:py-5 md:px-36 md:py-10">
        <div className="flex justify-between pb-5">
          <Link to={"/archive/tech"}>
            <div className="flex gap-2 items-center">
              <LiaAngleLeftSolid className="col text-[20px] leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]" />
              <h1 className="col text-[20px] leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]">
                Back the Archive List
              </h1>
            </div>
          </Link>

          <div className="flex gap-4"></div>
        </div>
        <SinglePageCard
          index={ProjectIndex}
          isfeatured={ProjectArchive[ProjectIndex].isfeatured}
          Title={ProjectArchive[ProjectIndex].title}
          image={ProjectArchive[ProjectIndex].project_image}
          technology={ProjectArchive[ProjectIndex].builtwith}
          description={ProjectArchive[ProjectIndex].description}
          projectLink={ProjectArchive[ProjectIndex].link}
          Github={ProjectArchive[ProjectIndex].github_link}
          year={ProjectArchive[ProjectIndex].year}
        />{" "}
      </div>
    </>
  );
}
