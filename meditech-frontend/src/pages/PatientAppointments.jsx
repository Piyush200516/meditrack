import { useState } from 'react';
import { Search, Plus, Filter, Calendar, MapPin, Video } from 'lucide-react';
import AppointmentCard from '../components/ui/AppointmentCard';
import { mockAppointments } from '../services/mockData';

const PatientAppointments = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredAppointments = mockAppointments.filter(appt => 
    appt.doctor.toLowerCase().includes(search.toLowerCase()) || 
    appt.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">My Appointments</h1>
          <p className="text-xl text-gray-600">Manage your upcoming consultations</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all self-start lg:self-end">
          <Plus className="w-5 h-5 inline mr-2" />
          Book New Appointment
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search doctors or specialty..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Appointments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAppointments.map((appt) => (
          <AppointmentCard key={appt.id} appointment={appt} />
        ))}
        {filteredAppointments.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
            <Calendar className="w-16 h-16 text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No appointments found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or book a new appointment</p>
            <button className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl">
              Book New Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientAppointments;

