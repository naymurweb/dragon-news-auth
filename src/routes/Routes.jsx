import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../shared/Register";
import Details from "../pages/home/Details";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('/news.json')
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes><Details/></PrivateRoutes>,
      },
    ],
  },
]);

export default routes;
