import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Components/Products/Products.jsx";
import Home from "./Components/Home/Home.jsx";
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import SignUp from './Components/SignUp/Sign-up';
import cartProductLoader from "./loader/loader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Products></Products>
      },
      {
        path: '/shop',
        element: <Products></Products>
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: cartProductLoader
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
