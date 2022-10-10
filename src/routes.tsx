import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";


const router = createBrowserRouter([
  {
    path: "/login", element: <Login />,
  }, {
    path: "/home", element: <Home />,
  },{
    path: "/signup", element: <Signup />,
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
