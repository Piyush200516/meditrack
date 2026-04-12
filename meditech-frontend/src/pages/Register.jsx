import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('📤 Sending register request:', formData);
      
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      console.log('✅ Register success:', data);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      console.error('❌ Register error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 p-4">
      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white p-10">
          <h1 className="text-3xl font-bold mb-4 text-center">Join MediTech</h1>
          <p className="text-center text-sm mb-6">Smart Healthcare Platform with AI & Microservices</p>
          <div className="space-y-3 text-sm">
            <p>✔ AI Health Assistant</p>
            <p>✔ Easy Appointment Booking</p>
            <p>✔ Secure Medical Records</p>
            <p>✔ Real-Time Consultation</p>
          </div>
        </div>

        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Create Account</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-2 block">Full Name</label>
              <div className="flex items-center bg-white rounded-xl border px-3 py-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-2 block">Email</label>
              <div className="flex items-center bg-white rounded-xl border px-3 py-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm text-gray-600 mb-2 block">Register As</label>
              <select 
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="hospital">Hospital Admin</option>
                <option value="super">Super Admin</option>
              </select>
            </div>

            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl mb-6">
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {loading ? 'Creating Account...' : 'Register'}
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline font-medium">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

