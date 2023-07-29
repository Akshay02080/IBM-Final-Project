import "./Cards.css"
import React from "react";
import { BsFillBuildingsFill,BsFillPeopleFill,BsCalendarDateFill} from "react-icons/bs";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { AiFillEye } from "react-icons/ai";
function Cards(props)
{
    return(
        <div>
            <div className="card c1">
                 <div className="card-header">
                    <div className="image">
                        <img src={props.x.image} width="75px" height="75px" ></img>
                    </div>
                    
                    <div className="instute">
                        <h4>{props.x.hname}</h4>
                        <h5><BsFillBuildingsFill/>  &nbsp; {props.x.address}</h5>
                    </div>
                </div>
                
                <div className="card-body">
                    <div className="threethings">
                            <div className="d-flex">
                                <div className="m-2">
                                    <BsCalendarDateFill size={30}/>
                                </div>
                                <div>
                                    <h6>Registration Deadline</h6>
                                    <p>{props.x.date}</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="m-2">
                                    < AiFillEye size={30}/>
                                </div>
                                <div>
                                    <h6>Impressions</h6>
                                    <p> {props.x.impression}</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="m-2">
                                    <BsFillPeopleFill size={30}/>
                                </div>
                                <div>
                                    <h6>Team Size</h6>
                                    <p>{props.x.team} Members</p>
                                </div>
                            </div>

                    </div>
                    <h5 className="card-title">Stages and Timelines</h5>
                    <p className="card-text">{props.x.text}</p>
                    <button className="btn btn-primary">More details</button>
                </div>

            </div>

        </div>
    )
}
export default Cards;