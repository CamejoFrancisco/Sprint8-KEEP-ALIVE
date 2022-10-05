import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/login", element: <Login />,
  }, {
    path: "/home", element: <Home />,
  }, {
    path: "/", element: <Navigate to="/login"></Navigate>
  }
]);

const Router = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default Router;
