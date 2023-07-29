import React from 'react'
import Verticalcards from './Verticalcards'
import LocalNavbar from './LocalNavbar'

function Communication() {
  let b={
    java:{
      image:"https://d8it4huxumps7.cloudfront.net/uploads/images/courses/2304/banners/648738d5cd869_1101x435__1_.jpg",
      cname:"Public Speaking",
      content:"This course focuses specifically on leveraging social media platforms for marketing "
    },
    cpp:{
      image:"https://i0.wp.com/academiamag.com/wp-content/uploads/2022/07/ezgif-2-9201bb53b2-1.jpg?fit=1920%2C1080&ssl=1",
      cname:"Business Communication",
      content:"This course provides a comprehensive introduction to the core concepts of digital marketing.",
    },
    python:{
      image:"https://www.wordstream.com/wp-content/uploads/2021/07/affiliate-marketing-header_0-1.png",
      cname:"Intercultural Communication",
      content:"Affilate marketing is essential for building brand authority and driving audience "
    },
    datast:{
      image:"https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg",
      cname:"Mass Communication",
      content:"Unlock the secrets of efficient programming with our DSA Masterclass."
    },
    cpro:{
      image:"https://media.geeksforgeeks.org/wp-content/uploads/20230506112814/C-Programming-Language.png",
      cname:"Social Media Communication",
      content:"Email marketing remains a powerful tool for customer acquisition and retention."
    },
    
   }
  return (
    <div>
        {/* <LocalNavbar a="Communication Skills"></LocalNavbar> */}
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
            <Verticalcards x={b.python}></Verticalcards>
            </div>
            <div className='col-lg-4 '>
            <Verticalcards x={b.cpp}></Verticalcards>
            </div>
            <div className='col-lg-4 '>
            <Verticalcards x={b.cpro}></Verticalcards>
            </div>
        </div>
    </div>
  )
}

export default Communication