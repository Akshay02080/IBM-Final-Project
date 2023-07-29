/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Community.css";
import Navbar from "./Navbar";
import Sidebarcommunity from "./Sidebarcommunity";
import MiddleCol from "./MiddleCol";
import LastCol from "./LastCol";


function Community() {
  return (
    <div className="com12"> 
      {/* <Navbar/> */}
      <div className="parent row">
        <div className="child col-lg-3 sticky">
          {/* Sidebar Starts */}
          <Sidebarcommunity/>
          {/* Sidebar Ends */}
        </div>
        <div className="child1 col-lg-6 p-5 ">
          <MiddleCol/>
        </div>
        <div className="child col-lg-3 p-5 ">
          <LastCol/>
        </div>
      </div>
    </div>
  );
}

export default Community;