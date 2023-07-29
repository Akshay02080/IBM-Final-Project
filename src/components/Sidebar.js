import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillEdit} from "react-icons/ai";
import "./Sidebar.css"
import {MdOutlineQuiz,MdOutlineContentPasteSearch} from "react-icons/md"
import {FaPeopleGroup} from "react-icons/fa6"
import {GiConqueror,GiPodiumSecond} from "react-icons/gi"
function Sidebar(){
    return (
        <div className='sidebar'>
            <h3 > Compete</h3>
            <p><a href='/compete'> <GiPodiumSecond></GiPodiumSecond>Competetions</a></p>
            <p><a href='/compete/Hackathons'> <FaPeopleGroup></FaPeopleGroup> Hackathons</a></p>
            <p><a href='/compete/Quizzes'> <MdOutlineQuiz></MdOutlineQuiz> Quizzes</a></p>
            <p><a href='https://practice.geeksforgeeks.org/'> <MdOutlineContentPasteSearch></MdOutlineContentPasteSearch> Hiring Challenges</a></p>
            <p><a href='https://trainings.internshala.com/'>Internships</a></p>
            <p><a href='https://scholarships.gov.in/'>Scholarships</a></p>
        </div>
    )
}
export default Sidebar