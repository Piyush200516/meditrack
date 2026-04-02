import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./componet/Login.jsx";
import Signup from "./componet/Signup.jsx";
import ForgotPassword from "./componet/ForgotPassword.jsx";
import Dashboard from "./componet/Dashboard.jsx";
import AdminDashboard from "./componet/AdminDashboard.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const { role } = useAuth();
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
<Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/dashboard" element={role === 'admin' ? <AdminDashboard /> : <Dashboard />} />


        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;