import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/header";
import ProjectArchive from "../data/projectsdata";
import Card from "../components/card";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

export default function SingleProject(props) {
   const location = useLocation();

const [ProjectIndex, setProjectIndex] = useState(0);
  
  useEffect(()=>{
    const FilterText = location.pathname.split("/")[3];
    FilterText !== undefined ? setProjectIndex(FilterText) : setProjectIndex(0);
  },[]);


  


  return (
    <>
      <div className="px-4 py-10 lg:px-36 lg:py-5 md:px-36 md:py-10">
        <div className="flex justify-between">
<div className="flex gap-2 justify-item-middle justify-items-middle justify-middle align-items-center">
<LiaAngleLeftSolid className="col text-[20px] leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]" />
   <h1 className="col text-[20px] leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]">
           Back the Archive List
          </h1>
</div>
       

          <div className="flex gap-4">

<Link onClick={()=>{ProjectIndex>0?setProjectIndex(ProjectIndex-1):console.log("No project back")}} to={"/archive/id/" + ProjectIndex} state={{ index: ProjectIndex }} >
 <div className="flex gap-2 justify-item-middle" >
               <LiaAngleLeftSolid className="col text-[20px] leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]" />
               <h1 className="col text-[20px] leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]">Previous </h1> 
            </div>
</Link>
           
<Link onClick={()=>{ProjectArchive.length>ProjectIndex+1?setProjectIndex(ProjectIndex+1):console.log("No project next")}} to={"/archive/id/" + ProjectIndex} state={{ index: ProjectIndex }} >
            <div className="flex gap-2">
              
            <h1 className="col text-[20px] leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]"> Next </h1> 
          
          <LiaAngleRightSolid className="col text-[20px]  tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[30px]" />
            </div>
            </Link> 

          </div>
       
        </div>
      
      </div>  <Card
            Title={ProjectArchive[ProjectIndex].title}
            image={ProjectArchive[ProjectIndex].project_image}
            technology={ProjectArchive[ProjectIndex].builtwith}
            description={ProjectArchive[ProjectIndex].description}
            projectLink={ProjectArchive[ProjectIndex].link}
            Github={ProjectArchive[ProjectIndex].github_link}
          />
    </>
  );
}
