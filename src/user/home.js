import React, { useEffect } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import { Routes, Route } from "react-router-dom";
import Portfolio from './pages/portfolio';
import { useSelector } from 'react-redux';






export default function Home() {

  const isLogin = useSelector((state)=>state.changeNumber);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   // const loggedInUser = localStorage.getItem("authenticated");
  //   if (!isLogin) {
  //     navigate("/login")
  //   }
  // }, []);


  return (

<>
<Header/>
<Routes>
<Route path="/" element={<Hero/>}></Route>
<Route path="/portfolio" element={<Portfolio/>}></Route>
</Routes>
      
      
    

</>

  )
}
