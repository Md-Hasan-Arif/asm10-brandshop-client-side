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
import UpdateProduct from './Components/My Card/Update Product/UpdateProduct.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import ProductDetails from './Second components/Product Details/ProductDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/BrandDetails/:brandName",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch(`http://localhost:5000/addProduct`)
      },
      {
        path: "/productsDetails/:id",
        element: <ProductDetails></ProductDetails>,
        
        loader: () => fetch(`http://localhost:5000/addProduct`)
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myCard',
        element: <MyCard></MyCard>,
        loader: () => fetch("http://localhost:5000/saveProduct")
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/addProduct/${params._id}`)
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
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
