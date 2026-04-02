import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import ServiceCard from './components/ServiceCard';
import MedicineQuickAdd from './components/MedicineQuickAdd';
import HealthChart from './components/HealthChart';
import { useMedicines } from '../context/MedicineContext';

import { FaSearch, FaBell, FaChartPie, FaStethoscope, FaHeart, FaUserNurse, FaClipboardList, FaAmbulance, FaHospital, FaMoon, FaSun, FaUserCircle, FaPills, FaSyringe, FaTabletAlt } from 'react-icons/fa';
import './dashboard.css';

const mockHealthData = [
  { date: 'Mon', bp: 120 },
  { date: 'Tue', bp: 118 },
  { date: 'Wed', bp: 122 },
  { date: 'Thu', bp: 119 },
  { date: 'Fri', bp: 121 },
  { date: 'Sat', bp: 117 },
];

const mockSparkData = {
  primary: 'M10 10 L25 12 L40 8 L55 14 L70 11 L85 15 L95 13',
  secondary: 'M10 12 L25 14 L40 10 L55 13 L70 11 L85 12 L95 14',
};

const appointments = [
  { title: 'Home Visit', time: 'Today, 11:00 AM', status: 'Confirmed', color: 'success' },
  { title: 'Follow-Up Checkup', time: 'Tomorrow, 10:30 AM', status: 'Scheduled', color: 'secondary' },
];


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [search, setSearch] = useState('');
  const [notifications, setNotifications] = useState(3);
  const [isDark, setIsDark] = useState(false);
  const { medicines } = useMedicines();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', newDark.toString());
  };

  useEffect(() => {
    const savedDark = localStorage.getItem('darkMode') === 'true';
    setIsDark(savedDark);
    if (savedDark) {
      document.documentElement.classList.add('dark');
    }
    setActiveNav(window.location.pathname.includes('dashboard') ? 'dashboard' : activeNav);
  }, []);

  const stats = [
    { title: 'Upcoming Appointments', value: '02', change: 12, color: 'primary', icon: FaClipboardList, sparkData: mockSparkData.primary },
    { title: 'Active Medicines', value: medicines.filter(m => m.isActive).length.toString(), change: 8, color: 'success', icon: FaPills, sparkData: mockSparkData.secondary },
    { title: 'Doctors Available', value: '12', change: 3, color: 'secondary', icon: FaStethoscope },
    { title: 'Reminders Today', value: '03', change: -2, color: 'warning', icon: FaTabletAlt },
  ];

  const services = [
    { name: 'Medicine Tracker', description: 'Track your daily medications', icon: FaPills },
    { name: 'Refill Reminders', description: 'Never miss a refill', icon: FaSyringe },
    { name: 'Doctor Consults', description: 'Quick video consultations', icon: FaStethoscope },
    { name: 'Health Reports', description: 'Generate detailed reports', icon: FaChartPie },
  ];

  const dynamicAlerts = [
    '⚠️ Take Paracetamol now',
    '📍 Check BP - High reading',
    `📝 ${medicines[0]?.name || 'Medicine'} dose due`,
  ];


  return (
    <div className="dashboard-wrapper custom-scrollbar min-h-screen">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} active={activeNav} />
      
      <div className="lg:ml-0 transition-all duration-300 lg:pl-0">
        {/* Header */}
        <header className="glass shadow-2xl border-b sticky top-0 z-30 p-6 animate-fade-in-up">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent drop-shadow-lg">
                Welcome Back!
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative glass p-3 rounded-2xl shadow-lg">
                <FaSearch className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search medicines, appointments..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="absolute inset-0 p-3 -m-3 bg-transparent outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
              <button className="relative p-3 glass rounded-2xl shadow-lg hover:scale-105 transition-all">
                <FaBell className="text-xl text-gray-700" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-danger text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse-soft">
                    {notifications}
                  </span>
                )}
              </button>
              <button 
                onClick={toggleDarkMode}
                className="p-3 glass rounded-2xl shadow-lg hover:scale-105 transition-all"
                title="Toggle Dark Mode"
              >
                {isDark ? <FaSun className="text-xl text-yellow-400" /> : <FaMoon className="text-xl text-gray-700" /> }
              </button>
              <div className="relative group">
                <img 
                  src="https://i.pravatar.cc/40?img=1" 
                  alt="Profile" 
                  className="w-12 h-12 rounded-2xl ring-2 ring-primary/30 hover:ring-primary/50 transition-all cursor-pointer shadow-lg hover:shadow-xl" 
                />
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-2xl py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
                  <a href="/#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-t">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-6 lg:p-10 space-y-8">
          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            {stats.map((stat, idx) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Quick Add & Services */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <MedicineQuickAdd />
            <div className="lg:col-span-3">
              <section className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white animate-fade-in-up">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((service, idx) => (
                    <ServiceCard key={service.name} {...service} />
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-in-right">
            {/* Appointments */}
            <div className="glass shadow-2xl rounded-3xl p-8 lg:row-span-2">
              <div className="flex items-center gap-3 mb-6">
                <FaClipboardList className="text-2xl text-primary-500" />
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">My Appointments</h3>
              </div>
              <div className="space-y-4">
                {appointments.map((appt, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all cursor-pointer shadow-inner hover:shadow-glass">
                    <div>
                      <p className="font-bold text-lg text-gray-900 dark:text-white">{appt.title}</p>
                      <p className="text-gray-600 dark:text-gray-400">{appt.time}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full font-semibold text-sm ${appt.color === 'success' ? 'bg-success/10 text-success ring-1 ring-success/30' : 'bg-secondary/10 text-secondary ring-1 ring-secondary/30'}`}>
                      {appt.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Trends */}
            <div className="glass shadow-2xl rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaChartPie className="text-2xl text-primary-500" />
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Health Trends</h3>
              </div>
              <HealthChart data={mockHealthData} dataKey="bp" />
            </div>

            {/* Care Alerts */}
            <div className="glass shadow-2xl rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaBell className="text-2xl text-warning-500" />
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Care Alerts</h3>
              </div>
              <ul className="space-y-3">
                {dynamicAlerts.map((alert, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-warning/10 rounded-xl border-l-4 border-warning/50 hover:bg-warning/20 dark:hover:bg-warning/30 transition-all cursor-pointer group">
                    <span className="text-lg mt-0.5">⚠️</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-warning-700">{alert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

