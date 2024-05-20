import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import User from "./User.jsx";
import Github from "./Github.jsx";
import {githubInfoLoader} from "./NGithub.jsx"


const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
path : "",
element : <Home/>
      },
      {
        path : "About",
        element: <About/>
      },
      {
        path : "Contact",
        element : <Contact/>
      },{
        path : "user/:userid",
        element : <User/>
      },
      {
        
        path : "github",
        element : <Github/>,
        loader:githubInfoLoader
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
// <Route path="/ " Element={<App />}/>
//       <Route path=" " Element={<Home />} />
//       <Route path="About " Element={<About />} />
//       <Route path="Contact " Element={<Contact />} />
//     </Routes>
    
    
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
