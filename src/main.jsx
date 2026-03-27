import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MedicineProvider } from './context/MedicineContext.jsx';

createRoot(document.getElementById('root')).render(
// <StrictMode> - commented to suppress DevTools console message (optional)
//     <MedicineProvider>
//       <App />
//     </MedicineProvider>
//   </StrictMode>,
  <MedicineProvider>
    <App />
  </MedicineProvider>,
);

