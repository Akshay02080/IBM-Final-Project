import { Outlet } from "react-router-dom";
import Sidenavbar2 from "./Sidenavbar2";
import "../components/Rootlayout.css"
function Rootlayout2()
{
    return(
        <div className="rootlayout1">
            <div className="side-bar">
                <Sidenavbar2></Sidenavbar2>
            </div>
            <div className="outlet1 container">
                <Outlet></Outlet>
            </div>

        </div>
    )
}
export default Rootlayout2;