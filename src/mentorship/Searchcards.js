import React from 'react'
import "./Searchcard.css"
import { AiOutlineArrowRight } from "react-icons/ai";
function Searchcards(props) {
  return (
    <div>
        <div className=" searchcard"  style={{ backgroundImage: `url(${props.x.x1})` }} >
            <div className="card-body">
                <h5 className="card-title mt-2">{props.x.text}</h5> 
                <p className='explore '><a > Explore More<AiOutlineArrowRight></AiOutlineArrowRight></a></p>
            </div>
        </div>
    </div>
  )
}

export default Searchcards