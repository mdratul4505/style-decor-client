import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";

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
        }
    ]
  },
]);