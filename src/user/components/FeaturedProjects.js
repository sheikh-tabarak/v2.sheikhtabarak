import React from 'react'
import Card from './card'
import NewCard from './NewCard'
import { Link } from 'react-router-dom'
import ProjectArchive from '../data/projectsdata'

export default function FeaturedProjects() {
  return (
    <div className="px-4 py-10 lg:px-36 lg:py-12 md:px-36 md:py-10">
      <div className="px-4 py-10 ">
        <div id="" className="flex pb-0">
          <h1 className="col menu-font-span text-[22px] ">3.</h1>
          <h1 className="col text-[20px] pb-5 leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]">
            Some Things I’ve Built.
          </h1>
        </div>

        <div className="grid grid-cols-1 py-5 gap-5 lg:grid-cols-3 gap-5">
          {

          
          
          ProjectArchive.map((value, index) => (
            value.isfeatured==true?<NewCard
            index={index}
           
              Title={value.title}
              image={value.project_image}
              technology={value.builtwith}
              description={value.description}
              projectLink={value.link}
              Github={value.github_link}
            />:""
          ))}
        </div>

        <Link className="text-center" to={"/archive/tech"}>
          <p className="pt-5 menu-font-span hover:underline leading-6 md:leading-10 text-[14px] lg:text-[16px] pb-10 ">
            view the archive
          </p>
        </Link>
      </div>
      </div>
  
  );
}