import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Navbarh.css";
import Elogo from '../Images/Elogo.jpg'

function Navbarh() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          textcolor="#fff"
          expand={expand}
          className="header p-2"
        >
          <Container fluid>
            <div className="m-3">
              <a href="/">
                <img src={Elogo} alt="" width="70px" height="60px" className="rounded-circle" />
              </a>
            </div>
            <Navbar.Brand>
              <NavLink to="/" className="text-decoration-none text-white fs-1">
                ELEVATE HUB
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="collapse-nav">
              <Nav className="ms-auto p-3">
                <NavLink to="/" className="fa nav-link btn m-2">
                  <i className="fa fa-home fa-fw"></i>HOME
                </NavLink>
                <NavLink to="/courses" className="fa nav-link btn m-2">
                <i class="fa fa-graduation-cap fa-fw"></i>COURSES
                </NavLink>
                <NavLink to="/compete" className="fa nav-link btn m-2">
                <i class="fa fa-flag fa-fw"></i>
                  COMPETE
                </NavLink>
                <NavLink to="/mentoring" className="fa nav-link btn m-2">
                <i class="fa fa-bolt fa-fw"></i>MENTORSHIP
                </NavLink>
                <NavLink to="/community" className="fa nav-link btn m-2">
                <i className="fa fa-users fa-fw"></i>COMMUNITY
                </NavLink>
                <NavLink to="/login" className="fa nav-link btn m-2">
                <i class="fa fa-download fa-fw"></i>LOGIN
                </NavLink>
                <NavLink to="/signup" className="fa nav-link btn m-2">
                <i class="fa fa-user-plus fa-fw"></i>SIGNUP
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarh;
