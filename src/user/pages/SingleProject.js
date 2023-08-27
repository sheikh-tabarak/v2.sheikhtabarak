import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/header';

export default function SingleProject(props) {


 
    const location = useLocation(); 
      console.log(location.state.project)
  return (
    <>
    <h6 className='text-color:black'>Id: {location.state.project.project_id}</h6>
    <h6 className='text-color:black'>Title: {location.state.project.project_title}</h6>
    <h6 className='text-color:black'>Budget: {location.state.project.project_budget}</h6>
    <h6 className='text-color:black'>date_to_start: {location.state.project.date_to_start}</h6>
    <h6 className='text-color:black'>date_to_end: {location.state.project.date_to_end}</h6>
    <h6 className='text-color:black'>feature_image: {location.state.project.feature_image}</h6>
    <h6 className='text-color:black'>project_description: {location.state.project.project_description}</h6>
    <h6 className='text-color:black'>project_link: {location.state.project.project_link}</h6>
    <h6 className='text-color:black'>builtsin: {location.state.project.builtsin}</h6>
    <h6 className='text-color:black'>client_name: {location.state.project.client_name}</h6>

    

    

  
    </>
    
  )
}
