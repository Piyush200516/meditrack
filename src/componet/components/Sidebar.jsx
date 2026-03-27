import React from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaCog, FaHeadset, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, onToggle, active }) => {
  const navItems = [
    { icon: FaTachometerAlt, label: 'Dashboard', href: '/dashboard' },
    { icon: FaCalendarAlt, label: 'Appointments', href: '/appointments' },
    { icon: FaCog, label: 'Services', href: '/services' },
    { icon: FaHeadset, label: 'Support', href: '/support' },
  ];

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-md p-2 rounded-xl shadow-lg border"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-0 lg:inset-auto z-40 transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 h-screen bg-gradient-to-b from-primary-500 to-primary-700 shadow-2xl border-r`}>
        <div className="p-6 flex flex-col h-full">
          <h1 className="text-2xl font-bold text-white mb-8 drop-shadow-lg animate-fade-in-up">
            ⚕️ MediTrack
          </h1>
          <nav className="flex-1 space-y-2">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                    active === item.label.toLowerCase()
                      ? 'bg-white/20 backdrop-blur-sm text-white shadow-glass'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="text-xl group-hover:scale-110" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
      
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;

