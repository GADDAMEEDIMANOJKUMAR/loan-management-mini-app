import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Otp from "./Pages/Otp";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import { initUsers } from "./Utils/Storage";
import { usersData } from "./Data/users";

function App() {
  useEffect(() => {
    initUsers(usersData);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
