import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import MedicineList from './MedicineList.jsx'
import AdherenceChart from './AdherenceChart.jsx'
import Footer from './Footer.jsx'
import { useMedicines } from '../context/MedicineContext.jsx'

const Dashboard = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { todaysAdherence, medicines } = useMedicines();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900/20 font-['Inter'] text-slate-900 dark:text-slate-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" 
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden lg:ml-64">
          {/* Header */}
          <Header onLogout={onLogout} setSidebarOpen={setSidebarOpen} />
          
          {/* Main area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl">
            <Outlet />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

