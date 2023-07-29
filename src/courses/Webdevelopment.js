import React from 'react'
import Verticalcards from './Verticalcards'
import LocalNavbar from './LocalNavbar'

function Webdevelopment() {
  let b={
    java:{
      image:"https://mindzy.in/wp-content/uploads/2022/06/web-dp-course1.jpg",
      cname:"Web Fundamentals",
      content:"This course provides a comprehensive introduction to the core concepts of digital  "
    },
    cpp:{
      image:"https://dz8fbjd9gwp2s.cloudfront.net/courses/5f5338c60cf2d7d974471146/5f5338c60cf2d7d974471146_scaled_cover.jpg?v=1",
      cname:"Frontend Development",
      content:"Front-end development focuses on the user interface and user experience of websites.",
    },
    python:{
      image:"https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/backendpython.png",
      cname:"Back-end Development",
      content:"Back-end development deals with server-side logic and database management. "
    },
    datast:{
      image:"https://i0.wp.com/masterprograming.com/wp-content/uploads/2020/03/What-is-Full-Web-Developer..jpg?fit=1280%2C720&ssl=1",
      cname:"Full stack Development",
      content:"Full-stack web development combines front-end and back-end skills, allowing participant"
    },
    cpro:{
      image:"https://training.digigrowhub.in/wp-content/uploads/2021/02/good-website-security-plan.jpg",
      cname:"web App security",
      content:"Web application security is crucial to protect websites and web applications from cyber"
    },
    
   }
  return (

    <div>
      {/* <LocalNavbar a="WebDevelopment"></LocalNavbar> */}
      <div className='row p-5'>
            
            <div className='col-lg-4 '>
            <Verticalcards x={b.python}></Verticalcards>
            </div>
            <div className='col-lg-4 '>
            <Verticalcards x={b.java}></Verticalcards>
            </div >
            <div className='col-lg-4 '>
            <Verticalcards x={b.cpp}></Verticalcards>
            </div>
        </div>
        <div className='row p-5'>
            
            <div className='col-lg-4 '>
            <Verticalcards x={b.cpro}></Verticalcards>
            </div>
            <div className='col-lg-4 '>
            <Verticalcards x={b.datast}></Verticalcards>
            </div>
            <div className='col-lg-4 '>
            <Verticalcards x={b.cpp}></Verticalcards>
            </div>
        </div>

    </div>
  )
}

export default Webdevelopment