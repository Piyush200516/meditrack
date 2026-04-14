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
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check patient on init
    const storedPatient = localStorage.getItem('patient');
    
    if (storedPatient) {
      setPatient(JSON.parse(storedPatient));
    }
    setLoading(false);
  }, []);

  const login = (patientData) => {
    localStorage.setItem('patient', JSON.stringify(patientData));
    setPatient(patientData);
    navigate('/home', { replace: true });
  };

  const logout = () => {
    localStorage.removeItem('patient');
    setPatient(null);
    navigate('/login');
  };

  const value = {
    patient,
    loading,
    login,
    logout,
    isAuthenticated: !!patient,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

