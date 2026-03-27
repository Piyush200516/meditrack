import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import ServiceCard from './components/ServiceCard';
import { FaSearch, FaBell, FaChartPie, FaStethoscope, FaHeart, FaUserNurse, FaClipboardList, FaAmbulance, FaHospital } from 'react-icons/fa';
import './dashboard.css';

const services = [
  { name: '24x7 First Aid', description: 'Emergency response within minutes', icon: FaAmbulance },
  { name: 'Doctor Support', description: 'On-call specialist consultations', icon: FaStethoscope },
{ name: 'Elderly Care', description: 'Dedicated care for seniors', icon: FaUserNurse },
  { name: 'Home Nursing', description: 'Professional nursing at home', icon: FaHospital },
];

const stats = [
  { title: 'Upcoming Appointments', value: '02', change: 12, color: 'primary', icon: FaClipboardList },
  { title: 'Active Care Plans', value: '05', change: 8, color: 'secondary', icon: FaHeart },
  { title: 'Doctors Available', value: '12', change: 3, color: 'success' },
  { title: 'Total Nurses', value: '08', change: -2, color: 'danger' },
];

const appointments = [
  { title: 'Home Visit', time: 'Today, 11:00 AM', status: 'Confirmed', color: 'success' },
  { title: 'Follow-Up Checkup', time: 'Tomorrow, 10:30 AM', status: 'Scheduled', color: 'secondary' },
];

const healthStats = [
  { label: 'Blood Pressure', value: '120/80 mmHg', color: 'success' },
  { label: 'Blood Sugar', value: '110 mg/dL', color: 'warning' },
  { label: 'Heart Rate', value: '76 bpm', color: 'primary' },
  { label: 'Weight', value: '68 kg', color: 'secondary' },
];

const alerts = [
  '⚠️ Medication Reminder: 8:00 PM',
  '📍 Vital Check Alert: Check BP',
  '📝 Care Plan Update: Review details',
];

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [search, setSearch] = useState('');
  const [notifications, setNotifications] = useState(3);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    // Mock active nav based on path
    setActiveNav(window.location.pathname.includes('dashboard') ? 'dashboard' : activeNav);
  }, []);

  return (
    <div className="dashboard-wrapper custom-scrollbar min-h-screen">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} active={activeNav} />
      
      <div className="lg:ml-0 transition-all duration-300 lg:pl-0">
        {/* Header */}
        <header className="glass shadow-2xl border-b sticky top-0 z-30 p-6 animate-fade-in-up">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent drop-shadow-lg">
                Welcome Back, Rajesh!
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative glass p-3 rounded-2xl shadow-lg">
                <FaSearch className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search services, appointments..."
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
              <img 
                src="https://i.pravatar.cc/40?img=1" 
                alt="user" 
                className="w-12 h-12 rounded-2xl ring-2 ring-primary/30 hover:ring-primary/50 transition-all cursor-pointer shadow-lg hover:shadow-xl" 
              />
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

          {/* Services */}
          <section className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900 animate-fade-in-up">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </section>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-in-right">
            {/* Appointments */}
            <div className="glass shadow-2xl rounded-3xl p-8 lg:row-span-2">
              <div className="flex items-center gap-3 mb-6">
                <FaClipboardList className="text-2xl text-primary-500" />
                <h3 className="text-2xl font-black text-gray-900">My Appointments</h3>
              </div>
              <div className="space-y-4">
                {appointments.map((appt, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/50 transition-all cursor-pointer shadow-inner hover:shadow-glass">
                    <div>
                      <p className="font-bold text-lg text-gray-900">{appt.title}</p>
                      <p className="text-gray-600">{appt.time}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full font-semibold text-sm ${appt.color === 'success' ? 'bg-success/10 text-success ring-1 ring-success/30' : 'bg-secondary/10 text-secondary ring-1 ring-secondary/30'}`}>
                      {appt.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Stats */}
            <div className="glass shadow-2xl rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaChartPie className="text-2xl text-primary-500" />
                <h3 className="text-2xl font-black text-gray-900">Health Stats</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {healthStats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl bg-white/50 hover:bg-white shadow-sm hover:shadow-md transition-all">
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    <p className="text-2xl font-black text-gray-900 mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Alerts */}
            <div className="glass shadow-2xl rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaBell className="text-2xl text-warning-500" />
                <h3 className="text-2xl font-black text-gray-900">Care Alerts</h3>
              </div>
              <ul className="space-y-3">
                {alerts.map((alert, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-warning/10 rounded-xl border-l-4 border-warning/50 hover:bg-warning/20 transition-all cursor-pointer group">
                    <span className="text-lg mt-0.5">⚠️</span>
                    <span className="font-medium text-gray-800 group-hover:text-warning-700">{alert}</span>
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

