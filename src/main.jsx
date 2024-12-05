import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Shared/Root';
import Home from './Components/Home/Home';
import Login from './Components/log/Login';
import Register from './Components/log/Register';
import MainContext from './Components/Context/MainContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
    <RouterProvider router={router} />
    </MainContext>
  </StrictMode>,
)
