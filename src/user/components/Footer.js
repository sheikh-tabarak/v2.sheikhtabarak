import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCopyright } from 'react-icons/fa'

export default function Footer() {
  return (
    <section>
    
    <Link className="menu-font-in-SFMonoBold text-[10px] lg:text-[13px] py-2 flex gap-2 content-between justify-center" to="https://github.com/sheikh-tabarak/sheikhtabarak"  target="blank">
     
     Designed & Built by Muhammad Tabarak
  
  </Link>
  <Link to={"/"} className="menu-font-in-SFMonoBold  text-[10px] lg:text-[13px] pb-5 flex gap-2 content-between justify-center "><FaRegCopyright className="self-center	"/>
  2023 Copyrights | All Rights Reserved</Link> </section>
  )
}
