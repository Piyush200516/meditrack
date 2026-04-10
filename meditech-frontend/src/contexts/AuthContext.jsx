import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check token on init
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedRole && storedUser) {
      setUser(JSON.parse(storedUser));
      setRole(storedRole);
    }
    setLoading(false);
  }, []);

  const login = (token, userData, userRole) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('role', userRole);
    setUser(userData);
    setRole(userRole);
    
    // Redirect based on role
    const rolePath = userRole === 'patient' ? '/patient/dashboard' :
                     userRole === 'doctor' ? '/doctor/dashboard' :
                     userRole === 'hospital' ? '/hospital/dashboard' :
                     '/super/dashboard';
    navigate(rolePath, { replace: true });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    setUser(null);
    setRole(null);
    navigate('/login');
  };

  const value = {
    user,
    role,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    hasRole: (allowedRoles) => allowedRoles.includes(role),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

