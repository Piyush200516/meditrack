import React from 'react';
import { FaUserMd, FaHeartbeat, FaUserNurse, FaClipboardList } from 'react-icons/fa';

const StatsCard = ({ title, value, change, color = 'primary', icon }) => {
  const IconComponent = icon || FaUserMd; // Default icons
  const getColorClasses = (type) => {
    const base = 'text-white shadow-lg';
    switch(type) {
      case 'green': return `${base} bg-gradient-to-r from-success-500 to-success-600 ring ring-success/30`;
      case 'red': return `${base} bg-gradient-to-r from-danger-500 to-danger-600 ring ring-danger/30`;
      case 'blue': return `${base} bg-gradient-to-r from-blue-500 to-blue-600 ring ring-blue/30`;
      case 'primary': 
      default: return `${base} bg-gradient-to-r from-primary-500 to-primary-600 ring ring-primary/30`;
    }
  };

  const colorClass = getColorClasses(color);
  const valueColor = color === 'green' ? 'text-success-600' : color === 'red' ? 'text-danger-600' : 'text-primary-600';
  const badgeColor = color === 'green' ? 'bg-success-100 text-success-700' : color === 'red' ? 'bg-danger-100 text-danger-700' : 'bg-primary-100 text-primary-700';

  return (
    <div className="group relative glass shadow-glass hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-2xl p-6 border border-white/30 animate-fade-in-up hover:ring-4 ring-primary/10">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClass}`}>
          <IconComponent className="text-2xl" />
        </div>
        <span className={`text-sm font-medium px-2 py-1 rounded-full bg-${color}-100 text-${color}-700`}>
          +{change}%
        </span>
      </div>
      <p className="text-gray-600 text-sm font-medium uppercase tracking-wide">{title}</p>
      <h3 className="text-3xl font-black text-gray-900 mt-1 drop-shadow-md group-hover:text-primary-600 transition-colors">
        {value}
      </h3>
    </div>
  );
};

export default StatsCard;

