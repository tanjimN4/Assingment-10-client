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
        element: <AllArtcraftItems></AllArtcraftItems>,
        loader:()=>fetch('http://localhost:5000/craft'),
      },
      {
        path: "/manc",
        element: <MyArtCraft></MyArtCraft>,
        loader:()=>fetch('http://localhost:5000/craft')
      },
      {
        path: "/aci",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/viewdetails",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
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