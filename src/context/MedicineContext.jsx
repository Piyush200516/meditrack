import { createContext, useContext, useReducer, useEffect } from 'react';

// Types
const Medicine = {
  id: 'string',
  name: 'string',
  dosage: 'string',
  frequency: 'string',
  startDate: 'string',
  endDate: 'string',
  notes: 'string',
  isActive: 'boolean'
};

// Initial state
const initialState = {
  medicines: [
    {
      id: '1',
      name: 'Paracetamol',
      dosage: '500mg',
      frequency: 'Every 6 hours',
      startDate: '2024-01-01',
      endDate: '2024-01-10',
      notes: 'For fever',
      isActive: true
    },
    {
      id: '2',
      name: 'Vitamin D3',
      dosage: '1000 IU',
      frequency: 'Daily',
      startDate: '2024-01-01',
      endDate: null,
      notes: 'Daily supplement',
      isActive: true
    }
  ],
  loading: false,
  error: null
};

// Reducer
const medicineReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'ADD_MEDICINE':
      return {
        ...state,
        medicines: [action.payload, ...state.medicines]
      };
    case 'UPDATE_MEDICINE':
      return {
        ...state,
        medicines: state.medicines.map(m =>
          m.id === action.payload.id ? action.payload : m
        )
      };
    case 'DELETE_MEDICINE':
      return {
        ...state,
        medicines: state.medicines.filter(m => m.id !== action.payload)
      };
    case 'SET_MEDICINES':
      return { ...state, medicines: action.payload };
    default:
      return state;
  }
};

// Context
const MedicineContext = createContext();

// Provider
export const MedicineProvider = ({ children }) => {
  const [state, dispatch] = useReducer(medicineReducer, initialState);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('meditrack-medicines', JSON.stringify(state.medicines));
  }, [state.medicines]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('meditrack-medicines');
    if (saved) {
      dispatch({ type: 'SET_MEDICINES', payload: JSON.parse(saved) });
    }
  }, []);

  const addMedicine = (medicine) => {
    dispatch({ type: 'ADD_MEDICINE', payload: {
      ...medicine,
      id: Date.now().toString()
    }});
  };

  const updateMedicine = (medicine) => {
    dispatch({ type: 'UPDATE_MEDICINE', payload: medicine });
  };

  const deleteMedicine = (id) => {
    dispatch({ type: 'DELETE_MEDICINE', payload: id });
  };

  const value = {
    ...state,
    addMedicine,
    updateMedicine,
    deleteMedicine,
    dispatch
  };

  return (
    <MedicineContext.Provider value={value}>
      {children}
    </MedicineContext.Provider>
  );
};

// Custom hook
export const useMedicines = () => {
  const context = useContext(MedicineContext);
  if (!context) {
    throw new Error('useMedicines must be used within MedicineProvider');
  }
  return context;
};

