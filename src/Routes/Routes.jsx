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
        loader: ({params}) => fetch(`http://localhost:5000/event/${params.id}`)
      }
    ]
  }
])