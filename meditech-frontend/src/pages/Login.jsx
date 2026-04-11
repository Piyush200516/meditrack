import { useState } from 'react';
import { FaUserMd, FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock API response (replace with axios call later)
    setTimeout(() => {
      const mockToken = 'mock-jwt-token';
      const mockUser = { id: 1, name: 'John Doe', email };
      login(mockToken, mockUser, role);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 p-4">
      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white p-10">
          <h1 className="text-3xl font-bold mb-4 text-center">MediTech System</h1>
          <p className="text-center text-sm mb-6">AI Powered Healthcare Platform</p>
          <div className="space-y-3 text-sm">
            <p>✔ Secure Authentication</p>
            <p>✔ AI Health Assistant</p>
            <p>✔ Real-Time Consultation</p>
            <p>✔ Smart Data Management</p>
          </div>
        </div>

        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Login to MediTech</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-2 block">Email</label>
              <div className="flex items-center bg-white rounded-xl border px-3 py-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm text-gray-600 mb-2 block">Password</label>
              <div className="flex items-center bg-white rounded-xl border px-3 py-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Don't have an account? <Link to="/register" className="text-blue-600 hover:underline font-medium">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

