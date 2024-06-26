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
import ArtCraftCategories from './component/ArtCraftCategories';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <Banner></Banner>,
        loader:()=>fetch('https://assingment-10-server-delta.vercel.app/craft'),
      },
      {
        path:'/',
        element:<ArtCraftCategories></ArtCraftCategories>,
        loader:()=>fetch('https://assingment-10-server-delta.vercel.app/craft2')
      }
      ,
      
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
        loader:()=>fetch('https://assingment-10-server-delta.vercel.app/craft'),
      },
      {
        path: "/manc",
        element: <Private><MyArtCraft></MyArtCraft></Private>,
        loader:()=>fetch('https://assingment-10-server-delta.vercel.app/craft')
      },
      {
        path: "/aci",
        element: <Private><AddCraftItem></AddCraftItem></Private>,
      },
      {
        path: "/viewdetails/:_id",
        element: <ViewDetails></ViewDetails>,
        loader:()=>fetch('https://assingment-10-server-delta.vercel.app/craft')
      },
      {
        path: "/update/:id",
        element: <Private><Update></Update></Private>,
        loader:({params})=>fetch(`https://assingment-10-server-delta.vercel.app/craft/${params.id}`)
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
