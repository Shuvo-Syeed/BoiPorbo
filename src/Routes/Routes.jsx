import React from 'react'
import { createBrowserRouter } from "react-router";
import App from '../App.jsx';
import Root from '../Components/Pages/Root/Root.jsx';
import Error from '../Components/Pages/ErrorPage/Error.jsx';
import Home from '../Components/Pages/Home/Home.jsx';
export const router = createBrowserRouter([
  {
   path: "/",
   element: <Root />,
   errorElement: <Error />,
   children: [
    {
      index: true,
      element:<Home/>,
      path:'/'
  },
]
  },]);