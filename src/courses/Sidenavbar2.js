import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillEdit} from "react-icons/ai";
import "../components/Sidebar.css"
import { TbDeviceDesktopCode} from "react-icons/tb";
import {FaReact} from "react-icons/fa";
import {BsGraphUpArrow} from "react-icons/bs";
import {BiSolidGroup} from "react-icons/bi";
function Sidenavbar2(){
    return (
        <div className='sidebar text-center'>
            <h3 > Courses</h3>
            <p><a href='/courses'><TbDeviceDesktopCode></TbDeviceDesktopCode>  Programming</a></p>
            <p><a href='/courses/webdevelopment'><FaReact></FaReact>  Webdevelopment</a></p>
            <p><a href='/courses/digitalmarketing'><BsGraphUpArrow></BsGraphUpArrow>  Digitalmarketing</a></p>
            <p><a href='/courses/communication'> <BiSolidGroup></BiSolidGroup>  Communication Skills</a></p>

        </div>
    )
}
export default Sidenavbar2