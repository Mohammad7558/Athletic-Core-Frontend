import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddEvent from "../Pages/AddEvent/AddEvent";
import PrivateRoutes from "./PrivateRoutes";
import AllEvents from "../Pages/AllEvents/AllEvents";
import Loader from "../components/Loader/Loader";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import MyBookings from "../Pages/MyBookings/MyBookings";
import ManageEvents from "../Pages/ManageEvents/ManageEvents";
import UpdateEvent from "../Pages/UpdateEvent/UpdateEvent";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/add-event',
        element: <PrivateRoutes><AddEvent/></PrivateRoutes>
      },
      {
        path: '/all-events',
        element: <AllEvents/>,
        hydrateFallbackElement: <Loader/>,
        loader: () => fetch('http://localhost:5000/all-events')
      },
      {
        path: '/event/:id',
        element: <PrivateRoutes><SingleEvent/></PrivateRoutes>,
        hydrateFallbackElement: <Loader/>,
      },
      {
        path: '/my-bookings',
        element: <PrivateRoutes><MyBookings/></PrivateRoutes>,
      },
      {
        path: '/manage-events',
        element: <PrivateRoutes><ManageEvents/></PrivateRoutes>
      },
      {
        path: '/update-event/:id',
        element: <PrivateRoutes><UpdateEvent/></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/event/${params.id}`),
        hydrateFallbackElement: <Loader/>
      }
    ]
  }
])