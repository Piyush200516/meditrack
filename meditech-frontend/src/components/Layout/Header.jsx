import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, User, LogOut, Sun, Moon, MessageCircle, ChevronDown, Settings, HelpCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [notifications] = useState(3);
  const [showProfile, setShowProfile] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl shadow-lg border-b border-gray-200/50 dark:border-slate-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text drop-shadow-lg hover:scale-105 transition-transform">
            MediTech AI
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Notifications */}
            <div className="relative group">
              <button className="p-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-2xl transition-all backdrop-blur-sm border border-gray-200/50 dark:border-slate-800/50 hover:border-blue-500/30">
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg">
                    {notifications}
                  </span>
                )}
              </button>
            </div>

            {/* AI Quick Actions */}
            <button className="p-3 hover:bg-blue-50 dark:hover:bg-blue-950/50 rounded-2xl transition-all group border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-500/50">
              <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform" />
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-2xl transition-all group border border-gray-200/50 dark:border-slate-800/50 hover:border-blue-500/50 hover:shadow-md"
              title="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-2xl transition-all group border border-gray-200/50 dark:border-slate-800/50 hover:border-blue-500/50 hover:shadow-md"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden lg:block">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{user?.name || 'User'}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">{user?.role || 'patient'}</p>
                </div>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-56 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-slate-800/50 py-2">
                  <div className="px-4 py-3 border-b border-gray-200/50 dark:border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{user?.name || 'User'}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100 rounded-xl transition-colors">
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100 rounded-xl transition-colors">
                      <HelpCircle className="w-4 h-4" />
                      Help & Support
                    </button>
                  </div>
                  <button 
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-xl transition-colors font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

