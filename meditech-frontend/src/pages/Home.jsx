import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaIdCard, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const { patient, logout } = useAuth();
  const navigate = useNavigate();

  if (!patient) {
    return null; // Protected by ProtectedRoute
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 lg:p-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <FaUser className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Welcome back, {patient.name}!
              </h1>
              <p className="text-xl text-gray-600">Patient ID: #{patient.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FaTachometerAlt className="w-5 h-5" />\n              Go to Dashboard
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-red-600 transition-all duration-300"
            >
              <FaSignOutAlt className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10 lg:p-16"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Your Profile</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FaUser className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Full Name</h3>
                <p className="text-2xl font-black text-blue-600">{patient.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FaIdCard className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Email Address</h3>
                <p className="text-lg font-mono text-emerald-700 break-all">{patient.email}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/dashboard"
                  className="block w-full p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all text-center"
                >
                  <FaTachometerAlt className="w-6 h-6 inline mr-2" />\n                  View Dashboard
                </Link>
                <Link
                  to="/patient/appointments"
                  className="block w-full p-4 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all text-center"
                >
                  Upcoming Appointments
                </Link>
                <Link
                  to="/patient/reports"
                  className="block w-full p-4 border-2 border-green-200 text-green-700 font-semibold rounded-xl hover:bg-green-50 hover:border-green-300 transition-all text-center"
                >
                  Medical Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Welcome Message */}
      <div className="max-w-2xl mx-auto mt-16 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to manage your health?</h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Your session is secure and persists across browser refreshes using localStorage. 
            All registered patients can log in with their credentials.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <FaTachometerAlt className="w-5 h-5" />\n            Enter Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

