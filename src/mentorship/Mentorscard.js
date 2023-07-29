import React from 'react'
import "./Mentorcard.css"
function Mentorscard(props) {
  return (
    <div>
        <div className="card mcard" >
        <div className='photobackground'>
        <img className=" imgcard" src={props.x.x1}  width="240px" height="180px" alt="Card image cap"/>
        </div>
        <div className="card-body text-center">
            <h6>{props.x.name}</h6>
            <p className="card-text">{props.x.desc}</p>
        </div>
        </div>
    </div>
  )
}

export default Mentorscard