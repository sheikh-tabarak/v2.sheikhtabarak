import React from 'react'
import Card from './card'
import NewCard from './NewCard'
import { Link } from 'react-router-dom'
import ProjectArchive from '../data/projectsdata'

export default function FeaturedProjects() {
  return (
    <section id="">
    <div className="px-4 py-10 lg:px-36 lg:py-10 md:px-36 md:py-10">
      <div id="" className="flex pb-0">
        <h1 className="col menu-font-span text-[22px] ">3.</h1>
        <h1 className="col text-[20px] leading-8 font-bold tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]">
          Some Things I’ve Built.
        </h1>
      </div>

      <NewCard
        Title={ProjectArchive[1].title}
        image={ProjectArchive[1].project_image}
        technology={ProjectArchive[1].builtwith}
        description={ProjectArchive[1].description}
        projectLink={ProjectArchive[1].link}
        Github={ProjectArchive[1].github_link}
      />


      <Link className="text-center" to={"/archive/tech"}>
        <p className="menu-font-span hover:underline leading-6 md:leading-10 text-[14px] lg:text-[16px] pb-10 ">
          view the archive
        </p>
      </Link>
    </div>
  </section>
  )
}