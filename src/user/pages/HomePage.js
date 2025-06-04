import React, { useEffect, useState } from "react";
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
import Experiences from "../../models/ExperienceClass";
import firebaseconnection from "../../models/connection";
import ProjectArchive from "../data/projectsdata";
import Page404 from "../components/Page404";
import NewCard from "../components/NewCard";
import FeaturedProjects from "../components/FeaturedProjects";
import { Helmet } from 'react-helmet';

export default function HomePage() {


  const [projects, setProjects] = useState([]);


  return (
    <>

     <Helmet>
        <title>Muhammad Tabarak - Second version of Muhammad Tabarak's Portfolio</title>
        <link rel="canonical" href="https://sheikhtabarak.me/" />
      </Helmet>

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

                <FeaturedProjects/>
             
                <Contact />
              </>
            }
          />
           <Route path="/*" element={<Page404/>} />
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
