import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import GlobalLayout from "./components/Layout/GlobalLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Role Routes */}
            <Route element={<GlobalLayout />}>
              {/* Patient */}
              <Route path="/patient/*" element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <div>Patient Dashboard - Coming Soon</div>
                </ProtectedRoute>
              } />

              {/* Doctor */}
              <Route path="/doctor/*" element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <div>Doctor Dashboard - Coming Soon</div>
                </ProtectedRoute>
              } />

              {/* Hospital Admin */}
              <Route path="/hospital/*" element={
                <ProtectedRoute allowedRoles={['hospital']}>
                  <div>Hospital Admin - Coming Soon</div>
                </ProtectedRoute>
              } />

              {/* Super Admin */}
              <Route path="/super/*" element={
                <ProtectedRoute allowedRoles={['super']}>
                  <div>Super Admin - Coming Soon</div>
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

