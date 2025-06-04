import React, { useEffect } from 'react'
import Header from './components/header'
// import Hero from './components/hero'
import HeroSection from './components/HeroSection';
import { Routes, Route } from "react-router-dom";
// import Portfolio from './pages/portfolio';
import { useSelector } from 'react-redux';
// import AllProjects from './pages/AllProjects';
import HomePage from './pages/HomePage';






export default function Home() {

  const isLogin = useSelector((state)=>state.changeNumber);


  return (

<>
<Header/>
<Routes>
<Route path="/" element={<HomePage/>}></Route>
{/* <Route path="/projects/*" element={<AllProjects/>}></Route> */}
{/* <Route path="/portfolio" element={<Portfolio/>}></Route> */}
</Routes>
      
      
    

</>

  )
}
