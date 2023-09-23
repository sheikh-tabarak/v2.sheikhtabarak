import React from "react";
import Footer from "./Footer";
import UserSideHeader from "./UserSideHeader";
import SocialIcons from "./socialIcons";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      {/* <div className="w-full bg-[#0A192F] ">
        <UserSideHeader />
        <div className="hidden lg:block">
          <SocialIcons />
        </div> */}

        <div className="max-h-full w-full pt-3 py-auto grid justify-center items-stretched">
       <p className=" skills-font-span font-bold text-[150px] text-[#4CD684]">404</p>
       <p className="text-[20px] leading-8 font-bold mb-10 tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px] text-center">Page Not Found </p>
       
       <Link  to={"/"}         
          className="flex menu-button  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175
         justify-center
          text-[10px] font-bold mb-4 tracking-tight text-[#8892B0] md:text-[13px] lg:text-[13px] py-5"
        >
       Go Home
        </Link>
        </div>

        {/* <Footer />
      </div> */}
    </>
  );
}
