import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home.jsx";
import Login from "./Home/login.jsx";
import SingUp from "./Home/sing-up.jsx";
import About from "./Home/about.jsx";
import Forgot from "./Home/forgot.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SingUp />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Forgot Password Page */}
        <Route path="/forgot" element={<Forgot />} />

        {/* Fallback */}
        <Route path="*" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-gray-900">MediTrack - Page Not Found</h1><a href="/" className="text-blue-600">Go Home</a></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
