import React from "react";
import "../../styles/sheikhtabarak.css";
import UserSideHeader from "../components/UserSideHeader";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Experience from "../components/Experience";

export default function HomePage() {
 
  return (
    <>
    <div className="w-full bg-[#0A192F] "> 
    
    <UserSideHeader/>
  <HeroSection/>
   <AboutSection/> 
   <Experience/>
 

    </div>
    
    </>
    );
}