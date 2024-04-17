import {createBrowserRouter} from "react-router-dom";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import DefaultLayout from "./components/DefaultLayout";
import React from "react";
import GuestLayout from "./components/GuestLayout";
import {Navigate} from "react-router";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/users" />
      },
      {
        path: '/dashboard',
        element: <Users />
      },
      {
        path: '/users',
        element: <Users />
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },

])

export default router;
