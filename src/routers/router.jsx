import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement:<error></error>,
    hydrateFallbackElement:(<div>
        loading.........
    </div>),
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:'/services',
          Component:Services
        }
        ,
        {
          path:'/about',
          Component:About,
        }
        ,
        {
          path:'/contact',
          Component:Contact
        }
    ]
  },
]);