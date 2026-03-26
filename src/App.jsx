import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('meditrack-logged-in')
    if (saved === 'true') {
      setIsLoggedIn(true)
      setCurrentPage('dashboard')
    }
  }, [])

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setCurrentPage('dashboard')
    localStorage.setItem('meditrack-logged-in', 'true')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('login')
    localStorage.removeItem('meditrack-logged-in')
  }

  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl shadow-2xl border border-slate-200/50 dark:bg-slate-900/80 dark:border-slate-800/50 rounded-3xl p-8 sm:p-10 ring-1 ring-accent/10">
            <div className="flex border-b border-slate-200/50 dark:border-slate-800/50 mb-8">
              <button
                onClick={() => setCurrentPage('login')}
                className={`flex-1 py-3 px-4 font-semibold text-lg transition-all duration-200 ${currentPage === 'login' ? 'border-b-2 border-accent text-accent shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
              >
                Login
              </button>
              <button
                onClick={() => setCurrentPage('signup')}
                className={`flex-1 py-3 px-4 font-semibold text-lg transition-all duration-200 ${currentPage === 'signup' ? 'border-b-2 border-accent text-accent shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
              >
                Sign up
              </button>
            </div>

            {currentPage === 'login' ? (
              <Login onSwitchToSignup={() => setCurrentPage('signup')} onLoginSuccess={handleLoginSuccess} />
            ) : (
              <Signup onSwitchToLogin={() => setCurrentPage('login')} />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isLoggedIn ? (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
              <div className="bg-white/80 backdrop-blur-xl shadow-2xl border border-slate-200/50 dark:bg-slate-900/80 dark:border-slate-800/50 rounded-3xl p-8 sm:p-10">
                <div className="flex border-b border-slate-200/50 dark:border-slate-800/50 mb-8">
                  <button onClick={() => setCurrentPage('login')} className={`flex-1 py-3 px-4 font-semibold text-lg transition-all duration-200 ${currentPage === 'login' ? 'border-b-2 border-sky-500 text-sky-600 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
                    Login
                  </button>
                  <button onClick={() => setCurrentPage('signup')} className={`flex-1 py-3 px-4 font-semibold text-lg transition-all duration-200 ${currentPage === 'signup' ? 'border-b-2 border-sky-500 text-sky-600 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
                    Sign up
                  </button>
                </div>
                {currentPage === 'login' ? (
                  <Login onSwitchToSignup={() => setCurrentPage('signup')} onLoginSuccess={handleLoginSuccess} />
                ) : (
                  <Signup onSwitchToLogin={() => setCurrentPage('login')} />
                )}
              </div>
            </div>
          </div>
        ) : <Navigate to="/dashboard" /> } />
        <Route path="/dashboard" element={<ProtectedRoute children={<Dashboard onLogout={handleLogout} />} />} >
          <Route index element={<DashboardHome />} />
          <Route path="add-medicine" element={<AddMedicine />} />
          <Route path="tracker" element={<Tracker />} />
<Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );

}

export default App


