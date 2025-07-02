import { createBrowserRouter } from "react-router";
import Loader from "../components/Loader/Loader";
import Main from "../Layout/Main";
import AddEvent from "../Pages/AddEvent/AddEvent";
import AllEvents from "../Pages/AllEvents/AllEvents";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ManageEvents from "../Pages/ManageEvents/ManageEvents";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Register from "../Pages/Register/Register";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import UpdateEvent from "../Pages/UpdateEvent/UpdateEvent";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Team from "../Pages/Team/Team";
import BlogPage from "../Pages/BlogPage/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: '/about',
        Component: AboutUs
      },
      {
        path: '/team',
        Component: Team
      },
      {
        path: '/blog',
        Component: BlogPage
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/add-event",
        element: (
          <PrivateRoutes>
            <AddEvent />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-events",
        element: <AllEvents />,
        hydrateFallbackElement: <Loader />,
        loader: () =>
          fetch("https://athletic-core-server-side.vercel.app/all-events"),
      },
      {
        path: "/event/:id",
        element: (
          <PrivateRoutes>
            <SingleEvent />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoutes>
            <MyBookings />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-events",
        element: (
          <PrivateRoutes>
            <ManageEvents />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-event/:id",
        element: (
          <PrivateRoutes>
            <UpdateEvent />
          </PrivateRoutes>
        ),

        hydrateFallbackElement: <Loader />,
      },
    ],
  },
]);
