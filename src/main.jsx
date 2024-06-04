import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Login from './component/Login';
import Error from './component/Error';
import Register from './component/Register';
import Banner from './component/Banner';
import AllArtcraftItems from './component/AllArtcraftItems';
import MyArtCraft from './component/MyArtCraft';
import AddCraftItem from './component/AddCraftItem';
import ViewDetails from './ViewDetails';
import Update from './Update';
import AuthProvider from './component/AuthProvider';
import Private from './component/Private';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <Banner></Banner>,
        loader:()=>fetch('http://localhost:5000/craft'),
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allac",
        element: <Private><AllArtcraftItems></AllArtcraftItems></Private>,
        loader:()=>fetch('http://localhost:5000/craft'),
      },
      {
        path: "/manc",
        element: <Private><MyArtCraft></MyArtCraft></Private>,
        loader:()=>fetch('http://localhost:5000/craft')
      },
      {
        path: "/aci",
        element: <Private><AddCraftItem></AddCraftItem></Private>,
      },
      {
        path: "/viewdetails",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/update/:id",
        element: <Private><Update></Update></Private>,
        loader:({params})=>fetch(`http://localhost:5000/craft/${params.id}`)
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
