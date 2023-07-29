import React from 'react'

function Sidebarcommunity() {
  return (
    <div className=" p-5">
            <div
              className="sidebar_top card text-center"
              style={{ width: "18rem" }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8kRHxAhwVSYMgg5WQ1CQ4Xog3EUQkPUFkA&usqp=CAU"
                className="card-img-top"
                alt=""
              />
              <span>
                <img
                  src="https://image.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-260nw-640011838.jpg"
                  alt=""
                  width="60px"
                  height="55px"
                  style={{ borderRadius: "50%", marginTop: "-25px" }}
                />
              </span>
              <div className="card-body text-center">
                <p>Jake</p>
                <p>jake_smiles</p>
              </div>
            </div>
            <div
              className="sidebar_stats card p-2 mt-1"
              style={{ width: "18rem" }}
            >
              <div className="sidebar_stat p-2 d-flex">
                <li>Who viewed you</li>
                <span className="ms-auto" style={{ color: "blue" }}>
                  2543
                </span>
              </div>
              <div className="sidebar_stat p-2 d-flex">
                <li>Views on Post</li>
                <span className="ms-auto" style={{ color: "blue" }}>
                  2843
                </span>
              </div>
            </div>
            <div
              className="sidebar_bottom card p-2 mt-1"
              style={{ width: "18rem" }}
            >
              <ul>
                <h5>Recent</h5>
                <li>
                  <p>reactjs</p>
                </li>
                <li>
                  <p>programming</p>
                </li>
                <li>
                  <p>software Engineering</p>
                </li>
                <li>
                  <p>design</p>
                </li>
                <li>
                  <p>developer</p>
                </li>
              </ul>
            </div>
          </div>
  )
}

export default Sidebarcommunity