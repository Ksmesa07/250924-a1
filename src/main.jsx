import React from 'react'
import ReactDom from 'react-dom'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './page/Home.jsx'
import About from './page/About.jsx'
import Contact from './page/Contact.jsx'
import Menu from './page/Menu.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    Children:[
      {index:true,element:<Home/>},
      {path:"menu",element:<Menu/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
