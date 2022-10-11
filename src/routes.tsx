
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (

    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path="/forgot-password" element={<ForgotPassword />} />*/}
          </Routes>
        </AuthProvider>
      </Router>
    </>

  );
}

export default App;

