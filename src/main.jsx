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
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import TermCondition from './TermCondition/TermCondition';
import AuthProvider from './Provider/AuthProvider';                        
import NewsDetails from './Pages/NewsDetails/NewsDetails';
import NewsCategory from './Pages/NewsCategory/NewsCategory';
import PrivateRoutes from './layout/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/career",
        element: <Career></Career>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/terms&condition",
        element: <TermCondition></TermCondition>
      },
      {
        path:"/detail/:_id",
        element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
        loader: () => fetch('/news.json')
      },
      {
        path: "/category/:category_id",
        element: <NewsCategory></NewsCategory>,
        loader: () => fetch('/news.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)









