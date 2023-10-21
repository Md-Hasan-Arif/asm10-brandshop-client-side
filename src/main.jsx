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
import PrivateRoute from './routes/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/BrandDetails/:brandName",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch(` https://my-10-server-kclfptc8o-md-hasan-arifs-projects.vercel.app/addProduct`)
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(` https://my-10-server-kclfptc8o-md-hasan-arifs-projects.vercel.app/addProduct/${params._id}`)
      },
      {
        path: "/productsDetails/:id",
        
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        
        loader: () => fetch(` https://my-10-server-kclfptc8o-md-hasan-arifs-projects.vercel.app/addProduct`)
      },
      {
        path: '/addProduct',
        element:<PrivateRoute> <AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCard',
        element: <PrivateRoute><MyCard></MyCard></PrivateRoute>,
        loader: () => fetch(" https://my-10-server-kclfptc8o-md-hasan-arifs-projects.vercel.app/saveProduct")
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
