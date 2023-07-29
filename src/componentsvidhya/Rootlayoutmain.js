import React from 'react'
import Navbarh from './Navbarh'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import '../App.css'

function Rootlayoutmain() {
  return (
    <div className='hm'>
        <Navbarh/>
        <Outlet/>
    </div>
  )
}

export default Rootlayoutmain