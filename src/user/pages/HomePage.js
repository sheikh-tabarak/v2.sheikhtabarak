import React from "react";
import "../../styles/sheikhtabarak.css";
import UserSideHeader from "../components/UserSideHeader";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Experience from "../components/Experience";
import Card from "../components/card";
import Contact from "../components/Contact";
import Archive from "./Archive";

export default function HomePage() {
  return (
    <>
      <div className="w-full bg-[#0A192F] ">
        <UserSideHeader />

        <Archive/>
        {/* <HeroSection />
        <AboutSection />
        <Experience />
        <Card />
        <Contact /> */}

      </div>
    </>
  );
}
