import React, { useEffect } from "react";
import "../../styles/sheikhtabarak.css";
import UserSideHeader from "../components/UserSideHeader";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Experience from "../components/Experience";
import Card from "../components/card";
import Contact from "../components/Contact";
import Archive from "./Archive";
import { Link, Route, Routes } from "react-router-dom";
import SocialIcons from "../components/socialIcons";
import Footer from "../components/Footer";
import SingleProject from "./SingleProject";

export default function HomePage() {
  return (
    <>
      <div className="w-full bg-[#0A192F] ">
        <UserSideHeader />
        <div className="hidden lg:block">
          <SocialIcons />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <Experience />
                <Card />
                <Contact />
              </>
            }
          />
          <Route path="/archive/tech/*" element={<Archive />} />
          <Route path="/archive/id/*" element={<SingleProject />}></Route>

          {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
        </Routes>

        <div className=" lg:hidden">
          <SocialIcons />
        </div>

        <Footer />
      </div>
    </>
  );
}
