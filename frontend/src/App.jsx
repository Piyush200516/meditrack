import { BrowserRouter, Routes, Route } from "react-router-dom";

// Correct path (tumhare folder ke hisaab se)
import Home from "./Home/home";
import Login from "./Home/login"; // agar bana hai

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;