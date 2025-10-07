import React from 'react'
import { createBrowserRouter } from "react-router";
import App from '../App.jsx';
import Root from '../Components/Pages/Root/Root.jsx';
import Error from '../Components/Pages/ErrorPage/Error.jsx';
import Home from '../Components/Pages/Home/Home.jsx';
import About from '../Components/Pages/About/About.jsx';
import BookDetails from '../Components/Pages/BookDetails/BookDetails.jsx';
import ReadList from '../Components/Pages/ReadList/ReadList.jsx';
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
  {
    path:'/about',
    element:<About/>

  },
  {
    path:'/readList',
     loader:()=>fetch('/booksData.json'),
    element:<ReadList/>
  },
  {
    path:'/bookDetails/:id',
    loader:()=>fetch('/booksData.json'),
    element:<BookDetails/>

  }
]
  },]);