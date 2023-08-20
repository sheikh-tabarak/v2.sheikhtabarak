import React from 'react'
import AllProjects from './allProjects'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CreateNewProject from './CreateNewProject';

export default function ManageProjects() {
  return (

    <Routes> 
    <Route path="/" element={<AllProjects />}></Route>
    <Route path="/new-project" element={<CreateNewProject />}></Route> 
  </Routes>
  )
}
