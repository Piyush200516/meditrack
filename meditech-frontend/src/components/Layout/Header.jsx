import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, User, LogOut, Sun, Moon, MessageCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [notifications] = useState(3);
  const { toggleTheme, isDark } = useTheme();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
            MediTech AI
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* AI Chat Button */}
            <button className="p-2 hover:bg-blue-100 rounded-xl transition-colors group">
              <MessageCircle className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform" />
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Profile */}
            <div className="flex items-center gap-2 cursor-pointer group p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden md:block font-medium">{user?.name || 'User'}</span>
            </div>

            {/* Logout */}
            <button 
              onClick={logout}
              className="p-2 hover:bg-red-100 rounded-xl transition-colors text-red-600"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


