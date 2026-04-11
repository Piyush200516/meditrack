import { useState, useEffect } from 'react';
import { Calendar, FileText, Stethoscope, BarChart3, MessageCircle, CreditCard } from 'lucide-react';
import StatCard from '../components/ui/StatCard';
import ActionCard from '../components/ui/ActionCard';
import AppointmentCard from '../components/ui/AppointmentCard';
import { mockAppointments, mockStats } from '../services/mockData';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [stats, setStats] = useState(mockStats);

  useEffect(() => {
    // Simulate API call
    setAppointments(mockAppointments);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">Welcome back, John!</h1>
        <p className="text-xl text-gray-600 max-w-2xl">Here's what's happening with your health today. Quick overview of appointments and insights.</p>
      </div>

      {/* Stats KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard 
          title="Upcoming Appointments" 
          value={stats.upcomingAppointments || 0} 
          change="+2 this week" 
          icon={Calendar} 
          color="blue" 
        />
        <StatCard 
          title="Health Reports" 
          value={stats.totalReports || 0} 
          change="+1 today" 
          icon={FileText} 
          color="green" 
        />
        <StatCard 
          title="Recent Consultations" 
          value="5" 
          change="+15%" 
          icon={Stethoscope} 
          color="purple" 
        />
      </section>

      {/* Quick Actions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActionCard
            title="Book New Appointment"
            description="Find and book with top doctors instantly"
            icon={Calendar}
            color="blue"
            onClick={() => alert('Navigate to /patient/appointments')}
          />
          <ActionCard
            title="AI Health Assistant"
            description="Describe symptoms for instant insights"
            icon={MessageCircle}
            color="purple"
            onClick={() => alert('Open AI Chat')}
          />
          <ActionCard
            title="Payments & Insurance"
            description="View bills, claims and payment history"
            icon={CreditCard}
            color="green"
            onClick={() => alert('Navigate to /patient/payments')}
          />
        </div>
      </section>

      {/* Upcoming Appointments */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Appointments</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {appointments.map((appt) => (
            <AppointmentCard key={appt.id} appointment={appt} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;

