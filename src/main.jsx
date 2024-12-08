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
import AllReview from './Components/AllReviews/AllReview';
import Details from './Components/Details/Details';
import AddReview from './Components/AddReview/Addreview';
import PrivateRoute from './Components/Context/PrivateRoute';
import MyReview from './Components/MyReview/MyReview';
import Update from './Components/MyReview/Update';
import Watchlist from './Components/WatchList/Watchlist';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path:'/allreview',
        element:<AllReview></AllReview>
      },
      {
        path:'/review/:id',
        element:<Details></Details>
      },
      {
        path:'/add_review',
        element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path:'/my_review',
        element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path:'/watchlist',
        element:<PrivateRoute><Watchlist></Watchlist></PrivateRoute>
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
