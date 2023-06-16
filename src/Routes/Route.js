import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";

import AdminRoute from "./AdminRoute/AdminRoute";

import Modal from "../Pages/Dashboard/Modal/Modal";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Dashboard/Profile/Profile";
import DashBoard from "../Pages/Dashboard/DashBoard";

import Assets from "../Pages/Dashboard/Assets/Assets";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/type",
        element: (
          <AdminRoute>
            <Modal></Modal>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <DashBoard></DashBoard>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <AdminRoute>
            <Profile></Profile>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/assets",
        element: (
          <AdminRoute>
            <Assets></Assets>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
