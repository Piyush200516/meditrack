import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-gray-800 mb-4">Doctors Directory</h1><p className="text-xl text-gray-600">Coming Soon 🚀</p></div>} />
          <Route path="/services" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1><p className="text-xl text-gray-600">Coming Soon 🚀</p></div>} />
          <Route path="/about" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-gray-800 mb-4">About MediTech</h1><p className="text-xl text-gray-600">Coming Soon 🚀</p></div>} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Register Page */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
