import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './Components/Header/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import AddProduct from './Components/Add Product/AddProduct.jsx';
import MyCard from './Components/My Card/MyCard.jsx';

import Login from './Components/Authentication/Login.jsx';
import SignUp from './Components/Authentication/SignUp.jsx';
import BrandDetails from './Components/Brand Details/BrandDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/BrandDetails",
        element:<BrandDetails></BrandDetails>,
        
      },
      {
        path:'/addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/myCard',
        element:<MyCard></MyCard>,
        loader: ()=> fetch("http://localhost:5000/addProduct")
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/footer',
        element:<Footer></Footer>
      },
    ]
    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
