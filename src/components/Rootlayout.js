import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Rootlayout.css"
function Rootlayout()
{
    return(
        <div className="rootlayout1">
            <div className="side-bar">
                <Sidebar/>
            </div>
            <div className="outlet1">
                <Outlet/>
            </div>

        </div>
    )
}
export default Rootlayout;