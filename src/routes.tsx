
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (

    <>
      <Router>
        <AuthProvider>
          <Routes>
            {/*<Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />*/}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path="/forgot-password" element={<ForgotPassword />} />*/}
          </Routes>
        </AuthProvider>
      </Router>
    </>

  );
}

export default App;

{/*const router = createBrowserRouter([
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

export default Router;*/}
