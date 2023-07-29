import React from 'react'
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineWork, MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css'

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg sticky-top navbarcommunity ">
        <img
        className='m-2'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7q_eGUqqV6MS_l9j8z5ZqLoi9ba9hfMxYg&usqp=CAU"
          alt=""
          width="60px"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ justifyContent: "space-evenly" }}
        >
          <div>
            <form className="form-inline my-2 my-lg-0">
            <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
          <div className="nav-item btn btny">
            <i className='fa fa-home fa-fw'></i>
            Home
          </div>
          <div className="nav-item btn btny">
          <i className="fa fa-users fa-fw"></i>
            My Network
          </div>
          <div className="nav-item btn btny">
          <i class="fa fa-briefcase fa-fw"></i>
            Jobs
          </div>
          <div className="nav-item btn btny">
            <AiFillMessage />
            Messaging
          </div>
          <div className="nav-item btn btny">
            <MdNotifications />
            Notifications
          </div>
          <div className="nav-item btn btny">
          <i class="fa fa-user fa-fw"></i>
            Your Profile
          </div>
        </div>
      </nav>
  )
}

export default Navbar