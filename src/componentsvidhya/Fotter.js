import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Fotter.css";
import { MdCastForEducation } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";

function Fotter() {
  let navigate = useNavigate();
  let st = "<Popular Technologies/>";
  let st2 = "<learning Platforms/>";
  return (
    <div>
      <div className=" d-flex bg-dark ">
        <div className=" row">
          <div className="col-sm-5 col-lg-6 p-5 " style={{ color: "white" }}>
            <div className="row">
              <div className="col-lg-4">
                <div className="card w-100">
                  <AiFillAppstore className="w-50 h-50 m-auto" />
                </div>
              </div>
            </div>
            <ul>
              <li>
                <a
                className="text-decoration-none text-white"
                  href="https://www.google.com/search?rlz=1C1RXQR_enIN991IN991&sxsrf=AB5stBhL1xpBZYNePF276dOYXokJDQZd1Q:1690387434472&q=Web+design&si=ACFMAn86XkhxzOC35jo3k1ec_mUa4PwHgnEtN6tbGWMWaJ9RArTzYzPI8ldT3IDWn6n3RP6Qk8rA93AuajQI4-7mqW-azd3toSF0-Ck1ojNVWCOt7h3gdl2mqB4dICGOzqXp3yEEdl9DI5fJowc4piN2mInhazwafRO29GAqbhL24_pqaIrWfAm3icvm7SiDkqOkjbIthH2X_z2_wRIdGoKmNGush0-KiFt5Z2QjC39W_KEFY8eYOSdtKp-KB0P-PUnue32Hq6TMt35uk_0C77Cm8jvVAh1xdGZicVir9P3I8Dl27kS0zPo%3D&sa=X&ved=2ahUKEwj0w8H036yAAxVrumMGHX
          5iAWUQxA16BAhVEAU"
                >
                  web development
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/search?rlz=1C1RXQR_enIN991IN991&sxsrf=AB5stBjr3W_ald3hJNVypgwBC2xMJ2a00w:1690388071840&q=Azure+DevOps+Podcast&stick=H4sIAAAAAAAAAONgFmJQ4tVP1zc0zDBONrSsSi_SYljEKuJYVVqUquCSWuZfU
          KwQkJ-SnFhcsoOVEQCblFMzLwAAAA&sa=X&ved=2ahUKEwjtybek4qyAAxU73TgGHcY3BXAQxA16BAhHEAU"
                >
                  Devops
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/search?rlz=1C1RXQR_enIN991IN991&sxsrf=AB5stBhL1xpBZYNePF276dOYXokJDQZd1Q:1690387434472&q=Web+design&si=ACFMAn86XkhxzOC35jo3k1ec_mUa4PwHgnEtN6tbGWMWaJ9RArTzYzPI8ldT3IDWn6n3RP6Qk8rA93AuajQI4-7mqW-azd3toSF0-Ck1ojNVWCOt7h3gdl2mqB4dICGOzqXp3yEEdl9DI5fJowc4piN2mInhazwafRO29GAqbhL24_pqaIrWfAm3icvm7SiDkqOkjbIthH2X_z2_wRIdGoKmNGush0-KiFt5Z2QjC39W_KEFY8eYOSdtKp-KB0P-PUnue32Hq6TMt35uk_0C77Cm8jvVAh1xdGZicVir9P3I8Dl27kS0zPo%3D&sa=X&ved=2ahUKEwj0w8H036yAAxVrumMGHX
          5iAWUQxA16BAhVEAU"
                >
                  Cloud technologies
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/search?rlz=1C1RXQR_enIN991IN991&sxsrf=AB5stBjr3W_ald3hJNVypgwBC2xMJ2a00w:1690388071840&q=Azure+DevOps+Podcast&stick=H4sIAAAAAAAAAONgFmJQ4tVP1zc0zDBONrSsSi_SYljEKuJYVVqUquCSWuZfU
          KwQkJ-SnFhcsoOVEQCblFMzLwAAAA&sa=X&ved=2ahUKEwjtybek4qyAAxU73TgGHcY3BXAQxA16BAhHEAU"
                >
                  Data Science
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-5 col-lg-6 p-5 ">
            <div className="card w-25 m-3">
              <MdCastForEducation className="w-50 h-50 m-auto" />
            </div>
            <h1 className="m-3" style={{ color: "white" }}>
              {st2}
            </h1>
            <div className="row m-1">
              <div className="col-lg-6">
                <button
                  type="click"
                  onClick={() => navigate("/Learning")}
                  className="btnn btn "
                >
                  <div className="card d-block w-75 h-50 m-auto">
                    <img
                      className="mt-3"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFz4_Sxj8Cvueik7Lda-EdsLpme0MgZnQX6Uxl8LaiBg&s"
                      alt=""
                      width={100}
                    />
                    Learing
                  </div>
                </button>
              </div>

              <div className="col-lg-6">
                <button
                  type="click"
                  onClick={() => navigate("/Learning")}
                  className="btnn btn "
                >
                  <div className="card d-block w-75 h-50 m-auto">
                    <img
                      className="mt-3"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFz4_Sxj8Cvueik7Lda-EdsLpme0MgZnQX6Uxl8LaiBg&s"
                      alt=""
                      width={100}
                    />
                    Learing
                  </div>
                </button>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="col-lg-6">
                <button
                  type="click"
                  onClick={() => navigate("/Learning")}
                  className="btnn btn "
                >
                  <div className="card d-block w-75 h-50 m-auto">
                    <img
                      className="mt-3"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFz4_Sxj8Cvueik7Lda-EdsLpme0MgZnQX6Uxl8LaiBg&s"
                      alt=""
                      width={100}
                    />
                    Learing
                  </div>
                </button>
              </div>

              <div className="col-lg-6">
                <button
                  type="click"
                  onClick={() => navigate("/Learning")}
                  className="btnn btn "
                >
                  <div className="card d-block w-75 h-50 m-auto">
                    <img
                      className="mt-3"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFz4_Sxj8Cvueik7Lda-EdsLpme0MgZnQX6Uxl8LaiBg&s"
                      alt=""
                      width={100}
                    />
                    Learing
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
