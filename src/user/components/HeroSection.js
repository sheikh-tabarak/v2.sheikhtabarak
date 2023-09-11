import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ParallaxBanner } from 'react-scroll-parallax';



export default function HeroSection() {

    const [test, settest] = useState(false);
  return (

    
  <>
  
     <div className="px-10 py-10 lg:px-36 lg:py-10 md:px-36 md:py-10">
       
        <p className="menu-font-span leading-10 text-[16px] ">
          Hi, my name is
        </p>

        <h1 className="text-[20px] font-bold  tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[60px]">
          Muhammad Tabarak
        </h1>

        <h1 className="text-[20px] font-bold mb-4 tracking-tight text-[#8892B0] md:text-[40px] lg:text-[55px]">
          I build things for mobile and web
        </h1>

        <p className="text-[10px] lg:pr-[30rem] mb-4 tracking-tight text-[#8892B0] md:text-[24px] lg:text-[20px]">
          I’m a software engineer who is constantly seeking to enhance my skills
          and stay up-to-date with the latest technologies and trends in the
          industry.
        </p>

       
        <div className="mt-10 flex items-center justify-left gap-x-6">
          <Link  to={"/archive"}
          
          id="about"
            className="menu-button  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175
           px-5 py-3 
            text-[10px] font-bold mb-4 tracking-tight text-[#8892B0] md:text-[13px] lg:text-[13px] lg:px-12 lg:py-3"
          >
            Visit Archive
          </Link>
          
        </div>
      </div> 
      </>
  );
}
