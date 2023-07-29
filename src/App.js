import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Rootlayoutmain from "./componentsvidhya/Rootlayoutmain";
import Home from "./componentsvidhya/Home"
import Login from "./componentsvidhya/Login";

import Logo from "./componentsvidhya/Logo";

import Mentoring from "./componentsvidhya/Mentoring";
import Practice from "./componentsvidhya/Practice";
import Jobs from "./componentsvidhya/Jobs";
import Courses from "./componentsvidhya/Courses";
import App3 from "./App3";

import Community from "./community/Community";
import Competetions from "./components/Competetions";
import Hackathons from "./components/Hackathons";
import Quizzes from "./components/Quizzes";
import Rootlayout from "./components/Rootlayout";
import Webdevelopment from "./courses/Webdevelopment";
import Programming from "./courses/Programming";
import Digitalmarketing from "./courses/Digitalmarketing";
import Communication from "./courses/Communication";
import Rootlayout2 from "./courses/Rootlayout2";
import { BiHome } from "react-icons/bi";
import Signup from "./componentsvidhya/Signup/Signup";


function App() {
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Rootlayoutmain/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/Login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Signup/>

        },
        {
          path:'/Logo',
          element:<Logo/>
        },
        {
          path:'/compete',
          element:<Rootlayout/>,
          children:[
            {
              path:'/compete',
              element:<Competetions/>
            },
            {
              path:'Hackathons',
              element:<Hackathons/>
            },
            {
              path:'Quizzes',
              element:<Quizzes/>
            }
          ]
        },
        {
          path:'/Mentoring',
          element:<App3/>
        },
        {
          path:'/Practice',
          element:<Practice/>
        },
        {
          path:'/community',
          element:<Community/>
        },
        {
          path:'/courses',
          element:<Rootlayout2/>,
          children:[
            {
              path:'/courses',
              element:<Programming/>
            },
            {
              path:'/courses/webdevelopment',
              element:<Webdevelopment/>
            },
            {
              path:'/courses/digitalmarketing',
              element:<Digitalmarketing/>
            },
            {
              path:'/courses/communication',
              element:<Communication/>
            }
          ]
        }
      ]
    }
  ]
)
  
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
