import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layout/Root/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Career from './Pages/Career/Career';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/", 
        element:<Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path: "/career",
        element: <Career></Career>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)









