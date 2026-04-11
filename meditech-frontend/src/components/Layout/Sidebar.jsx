import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Calendar, FileText, MapPin, CreditCard, User, Hospital, Users, Bell, BarChart3, MessageCircle 
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = () => {
  const { role } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  const patientNav = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/patient/dashboard' },
    { icon: Calendar, label: 'Appointments', path: '/patient/appointments' },
    { icon: MessageCircle, label: 'AI Chatbot', path: '/patient/ai-chat' },
    { icon: FileText, label: 'Reports', path: '/patient/reports' },
    { icon: MapPin, label: 'Nearby Hospitals', path: '/patient/map' },
    { icon: CreditCard, label: 'Payments', path: '/patient/payments' },
    { icon: User, label: 'Profile', path: '/patient/profile' },
  ];

  const doctorNav = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/doctor/dashboard' },
    { icon: Calendar, label: 'Appointments', path: '/doctor/appointments' },
    { icon: Users, label: 'Patients', path: '/doctor/patients' },
    { icon: FileText, label: 'Prescriptions', path: '/doctor/prescriptions' },
    { icon: BarChart3, label: 'Analytics', path: '/doctor/analytics' },
    { icon: CreditCard, label: 'Earnings', path: '/doctor/earnings' },
  ];

  const hospitalNav = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/hospital/dashboard' },
    { icon: Users, label: 'Doctors', path: '/hospital/doctors' },
    { icon: Users, label: 'Patients', path: '/hospital/patients' },
    { icon: Hospital, label: 'Beds', path: '/hospital/beds' },
    { icon: BarChart3, label: 'Analytics', path: '/hospital/analytics' },
  ];

  const superNav = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/super/dashboard' },
    { icon: Users, label: 'Users', path: '/super/users' },
    { icon: Hospital, label: 'Hospitals', path: '/super/hospitals' },
    { icon: BarChart3, label: 'Analytics', path: '/super/analytics' },
    { icon: Bell, label: 'Notifications', path: '/super/notifications' },
  ];

  const navItems = role === 'patient' ? patientNav :
                   role === 'doctor' ? doctorNav :
                   role === 'hospital' ? hospitalNav :
                   superNav;

  return (
    <aside className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-r border-gray-200/50 dark:border-slate-800/50 h-screen transition-all duration-300 w-72 lg:w-80 hover:w-80">
      <div className="p-6 flex items-center gap-4 border-b border-gray-200/50 dark:border-slate-800/50">
        <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text drop-shadow-lg">
          {role ? role.charAt(0).toUpperCase() + role.slice(1) + ' Panel' : 'MediTech'}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-all backdrop-blur-sm border border-gray-200/50 dark:border-slate-800/50 hover:border-blue-500/50 hover:shadow-md"
          aria-label="Toggle Sidebar"
        >
          <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <nav className="p-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all group backdrop-blur-sm border border-transparent hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10 ${isActive(item.path)
                ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-600 shadow-lg border border-blue-500/40'
                : 'hover:bg-gray-100/50 dark:hover:bg-slate-800/50 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <Icon className={`w-6 h-6 flex-shrink-0 ${isActive(item.path) ? 'drop-shadow-lg shadow-blue-500/25' : ''}`} />
              <span className="font-semibold transition-all">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

