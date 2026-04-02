import { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  role: 'patient', // default patient
  isAuthenticated: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        role: 'patient',
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Persist to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('meditrack-auth');
    if (saved) {
      const { user, role } = JSON.parse(saved);
      dispatch({ type: 'LOGIN', payload: { user, role } });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('meditrack-auth', JSON.stringify(state));
  }, [state]);

  const login = (user, role) => {
    dispatch({ type: 'LOGIN', payload: { user, role } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('meditrack-auth');
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
