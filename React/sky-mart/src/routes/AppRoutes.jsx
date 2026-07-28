import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";

// Later you'll create these pages
// import Cart from "../pages/Cart";
// import Wishlist from "../pages/Wishlist";

const router = createBrowserRouter([
  // Public Routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // Protected Routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },

          // Add these later
          // {
          //   path: "/cart",
          //   element: <Cart />,
          // },
          // {
          //   path: "/wishlist",
          //   element: <Wishlist />,
          // },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;