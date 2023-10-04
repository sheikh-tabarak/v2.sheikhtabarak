import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoGif from "../../assests/logo/sheikhtabarak.gif";



export default function HeroSection() {

    const [test, settest] = useState(false);
  return (

    
  <>
  
     <div className="px-10  lg:px-36 lg:py-10 md:px-36 md:py-10">

     <div className="block lg:mt-0 lg:col-span-5 lg:hidden align-middle">
          <img
            className="motion-safe:animate-fadeIn"
            src={LogoGif}
            alt="mockup"
          />
        </div>
       
        <p className="text-center md:text-left lg:text-left menu-font-span leading-10 text-[16px] ">
          Hi, my name is
        </p>

        <h1 className="text-[30px] font-bold text-center md:text-left lg:text-left  tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[60px]">
          Muhammad Tabarak
        </h1>

        <h1 className="text-[23px] font-bold mb-4 text-center md:text-left lg:text-left tracking-tight text-[#8892B0] md:text-[40px] lg:text-[55px]">
          I build things for mobile and web
        </h1>

        <p className="text-[14px] lg:pr-[30rem] mb-4 tracking-tight text-[#8892B0] md:text-[24px] lg:text-[20px] text-center md:text-left lg:text-left">
          I’m a software engineer who is constantly seeking to enhance my skills
          and stay up-to-date with the latest technologies and trends in the
          industry.
        </p>

       
        <div className="mt-10 flex justify-center lg:justify-start md:justify-start gap-x-6">
          <Link  to={"/archive/tech"}
          
         
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
