import React from "react"
import Cards from "./Cards"
import LocalNavbar from "../courses/LocalNavbar"
function Competetions()
{
    let a={
        x1:{
            hname:"App Beautification Competition",
            address:"Botanic Bazzar",
            image:"https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/64bfa9bd2913b_organisation_image-zEMib1Yjn31372619168y84hVXvj2k.png?d=110x110",
            date:"31 July 12:00AM IST",
            team:"3-5",
            impression:"12,135",
            text:"Welcome to Botanic Bazaar's App Beautification Competition! We are thrilled to announce the launch of our brand-new app, which aims to provide plant enthusiasts with a seamless and delightful shopping experience."
        },
        x2:{
            hname:"Out of Context: Web Hackathon",
            address:"WaysAhead Global Pvtltd",
            image:"https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/62d2d11cee950_logo.jpg?d=125x125",
            date:"10 Aug 12:00AM IST",
            team:"2-4",
            impression:"29,534",
            text:"This is a Problem Identification Round in specific industry sectors (elimination based). Participants are expected to choose any one industry as their focus from the ten industries mentioned in the description"

        },
        x3:{
            hname:"Ideathon, Flagship Innovation Challenge",
            address:"IIM Bangalore",
            image:"https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-64b8f00570344_nsrcel_ideathon_-_logo.png?d=125x125",
            date:"31 July 12:00AM IST",
            team:"3-5",
            impression:"12,135",
            text:"Welcome to Botanic Bazaar's App Beautification Competition! We are thrilled to announce"

        }

    }
    
    return (
        <div className="comp">
            {/* <LocalNavbar a="Competetions"></LocalNavbar> */}
            
            <Cards x={a.x2}></Cards>
            <Cards x={a.x3}></Cards>
            <Cards x={a.x1}></Cards>
            <Cards x={a.x2}></Cards>
            <Cards x={a.x3}></Cards>
            <Cards x={a.x1}></Cards>
        </div>
    )
}
export default Competetions