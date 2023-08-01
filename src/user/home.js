import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import { Routes, Route } from "react-router-dom";
import Portfolio from './pages/portfolio';


export default function Home() {
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
