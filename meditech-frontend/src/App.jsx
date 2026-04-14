import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import GlobalLayout from "./components/Layout/GlobalLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import PatientAppointments from "./pages/PatientAppointments";
import PatientReports from "./pages/PatientReports";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route element={<GlobalLayout />}>
              {/* Patient Routes */}
              <Route path="patient/dashboard" element={
                <ProtectedRoute>
                  <PatientDashboard />
                </ProtectedRoute>
              } />
              <Route path="patient/appointments" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <PatientAppointments />
                </ProtectedRoute>
              } />
              <Route path="patient/reports" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <PatientReports />
                </ProtectedRoute>
              } />
              <Route path="patient/*" element={<Navigate to="dashboard" replace />} />
              {/* Keep other roles for future */}
              <Route path="doctor/*" element={
                <ProtectedRoute>
                  <div>Doctor Dashboard - Coming Soon</div>
                </ProtectedRoute>
              } />

              {/* Hospital Admin */}
              <Route path="hospital/*" element={
                <ProtectedRoute>
                  <div>Hospital Admin - Coming Soon</div>
                </ProtectedRoute>
              } />

              {/* Super Admin */}
              <Route path="super/*" element={
                <ProtectedRoute>
                  <div>Super Admin - Coming Soon</div>
                </ProtectedRoute>
              } />
            </Route>
            <Route path="/dashboard" element={<Navigate to="/patient/dashboard" replace />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

