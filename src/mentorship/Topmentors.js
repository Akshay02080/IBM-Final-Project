import React from "react";
import "./Topmentors.css";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import Mentorscard from "./Mentorscard";

function Topmentors() {
  // let b={

  //     x2:"https://c8.alamy.com/comp/D2ENPC/happy-male-teacher-with-textbooks-in-classroom-D2ENPC.jpg",
  //     x3:"https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/63ea11b8ad849.jpg?d=240x240",
  //     x4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBMc-zPQZNVjxD9xj5pORkdp1lX95Ld_U9A&usqp=CAU",
  //     x4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGAdjVyVfsBdcgTMyZMMoAKJRi28U-gMNN860myUe9tZQ9s0RxbjHvLFVmXGc1TxwIBs&usqp=CAU",
  //     x5:"https://thumbs.dreamstime.com/b/portrait-young-male-teacher-background-school-blackboard-teacher-s-day-knowledge-day-back-to-school-study-159722312.jpg",
  //     x6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJD2mcGU7EZC7EL3myXxtRxR18dfBUa1G9-g&usqp=CAU"
  // }
  let names = {
    a1: {
      name: "Ashish Tripathy",
      desc: "Senior Data Scientist at LinkedIn | Ex SAP, WNS, Wipro",
      x1: "https://c8.alamy.com/comp/D2ENPC/happy-male-teacher-with-textbooks-in-classroom-D2ENPC.jpg",
    },
    a2: {
      name: "Srilekha V",
      desc: "SDE @JP Morgan Chase | Ex PayPal | Deep Learning ",
      x1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJD2mcGU7EZC7EL3myXxtRxR18dfBUa1G9-g&usqp=CAU",
    },
    a3: {
      name: "Aravindh",
      desc: "Senior Data Scientist at LinkedIn | Ex SAP, WNS, Wipro",
      x1: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/641068b502991.webp?d=240x240",
    },
    a4: {
      name: "Rajesh",
      desc: "SDE @JP Morgan Chase | Ex PayPal | Deep Learning | Computer Vision",
      x1: "https://thumbs.dreamstime.com/b/portrait-young-male-teacher-background-school-blackboard-teacher-s-day-knowledge-day-back-to-school-study-159722312.jpg",
    },
  
  };
  return (
    <div>
      <div className="container topmentors">
        <h1>
          <BsFillEmojiSunglassesFill></BsFillEmojiSunglassesFill>Top Mentors
        </h1>
        <h4>
          Looking for the best of the best? Here're the top-rated mentors by the
          learners' community.
        </h4>
      </div>
      <div className="d-flex justify-content-center">
        <div>
          <button className="btn btn btn-outline-warning m-3">
            Technology
          </button>
        </div>
        <div>
          <button className="btn btn btn-outline-warning m-3">
            Management
          </button>
        </div>
        <div>
          <button className="btn btn btn-outline-warning m-3">Beneral</button>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-lg-3">
          <Mentorscard x={names.a1}></Mentorscard>
        </div>
        <div className="col-lg-3">
          <Mentorscard x={names.a2}></Mentorscard>
        </div>
        <div className="col-lg-3">
          <Mentorscard x={names.a3}></Mentorscard>
        </div>
        <div className="col-lg-3">
          <Mentorscard x={names.a4}></Mentorscard>
        </div>
      </div>
      <div class="container21">
        <p class="mentor-paragraph">
          Mentors hold a pivotal role in education, guiding students on their
          academic journey and beyond. Their wisdom, support, and encouragement
          enrich the learning experience, fostering critical thinking and
          personal growth. By serving as role models, mentors instill values,
          ignite curiosity, and build strong, trusting relationships, leaving a
          lasting impact that extends far beyond the classroom, shaping students
          into empowered and compassionate individuals ready to navigate the
          complexities of the world.
        </p>
      </div>
    </div>
  );
}

export default Topmentors;
