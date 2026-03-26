import { createContext, useContext, useReducer, useEffect } from 'react';

const MedicineContext = createContext();

const medicineReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MEDICINE':
      return [...state, { ...action.payload, id: Date.now(), takenHistory: [] }];
    case 'TOGGLE_TAKEN':
      return state.map(med => 
        med.id === action.id 
          ? { ...med, taken: !med.taken, takenHistory: [...med.takenHistory, { date: new Date().toISOString().split('T')[0], taken: !med.taken }] }
          : med
      );
    case 'DELETE_MEDICINE':
      return state.filter(med => med.id !== action.id);
    case 'UPDATE_MEDICINE':
      return state.map(med => med.id === action.id ? { ...med, ...action.payload } : med);
    case 'SET_MEDS':
      return action.payload;
    default:
      return state;
  }
};

export const MedicineProvider = ({ children }) => {
  const [medicines, dispatch] = useReducer(medicineReducer, []);

  useEffect(() => {
    const saved = localStorage.getItem('meditrack-medicines');
    if (saved) dispatch({ type: 'SET_MEDS', payload: JSON.parse(saved) });
  }, []);

  useEffect(() => {
    localStorage.setItem('meditrack-medicines', JSON.stringify(medicines));
  }, [medicines]);

  const addMedicine = (medicine) => dispatch({ type: 'ADD_MEDICINE', payload: medicine });
  const toggleTaken = (id) => dispatch({ type: 'TOGGLE_TAKEN', id });
  const deleteMedicine = (id) => dispatch({ type: 'DELETE_MEDICINE', id });
  const updateMedicine = (id, updates) => dispatch({ type: 'UPDATE_MEDICINE', id, payload: updates });

  const todaysAdherence = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayMeds = medicines.filter(med => {
      const lastTaken = med.takenHistory[med.takenHistory.length - 1];
      return lastTaken && lastTaken.date === today;
    });
    return medicines.length > 0 ? Math.round((todayMeds.length / medicines.length) * 100) : 0;
  };

  return (
    <MedicineContext.Provider value={{ medicines, addMedicine, toggleTaken, deleteMedicine, updateMedicine, todaysAdherence }}>
      {children}
    </MedicineContext.Provider>
  );
};

export const useMedicines = () => {
  const context = useContext(MedicineContext);
  if (!context) throw new Error('useMedicines must be used within MedicineProvider');
  return context;
};

