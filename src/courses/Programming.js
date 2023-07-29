import React from 'react'
import Verticalcards from './Verticalcards'
import LocalNavbar from './LocalNavbar'

function Programming() {
  let b={
    java:{
      image:"https://www.aqskill.com/wp-content/uploads/2021/06/3865795.jpg",
      cname:"Java Programming",
      content:"Learn the fundamentals of Java programming and unlock the power of this versatile language."
    },
    cpp:{
      image:"https://klic.mkcl.org/user/pages/images/courses/KLiC-C++-Programming-2023.jpg",
      cname:"C++ Programming",
      content:"Embark on a journey to become a proficient C++ programmer with our comprehensive course."
    },
    python:{
      image:"https://contentstatic.techgig.com/thumb/msid-80255871,width-460,resizemode-4/Beginner-tips-to-become-a-successful-Python-developer.jpg?88712",
      cname:"Python Programming",
      content:"Discover the power and versatility of Python, one of the most popular and beginner-friendly"
    },
    datast:{
      image:"https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg",
      cname:"Data Structures",
      content:"Unlock the secrets of efficient programming with our DSA Masterclass."
    },
    cpro:{
      image:"https://media.geeksforgeeks.org/wp-content/uploads/20230506112814/C-Programming-Language.png",
      cname:"c Programming",
      content:"Dive into the world of C programming, the foundation of modern programming languages."
    },
    
   }
  return (
    <div >
        {/* <LocalNavbar a="Programming"></LocalNavbar> */}
        <div className='row p-5'>
            
            <div className='col-lg-4 '>
            <Verticalcards x={b.java}></Verticalcards>
            </div>
            <div className='col-lg-4 '>
            <Verticalcards x={b.cpp}></Verticalcards>
            </div>
            <div className='col-lg-4 '>
            <Verticalcards x={b.python}></Verticalcards>
            </div>
        </div>
        <div className='row p-5'>
            
            <div className='col-lg-4 '>
            <Verticalcards x={b.cpro}></Verticalcards>
            </div>
            <div className='col-lg-4 '>
            <Verticalcards x={b.datast}></Verticalcards>
            </div>
           
        </div>

    </div>
  )
}

export default Programming