import React from 'react'
import SingleProject from './SingleProject'
import { Routes,Route } from 'react-router-dom'
import PortfolioList from '../../admin/pages/PortfolioList'

export default function AllProjects() {
  return (
    <Routes>
<Route path="/" element={<PortfolioList/>}></Route>
<Route path="/*" element={<SingleProject/>}></Route>
</Routes>
  )
}
