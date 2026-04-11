import { motion } from 'framer-motion';
import { Calendar, User, Clock, MapPin, Video, CheckCircle } from 'lucide-react';

const AppointmentCard = ({ appointment }) => {
  const statusColor = appointment.status === 'confirmed' ? 'emerald' : 
                     appointment.status === 'pending' ? 'orange' : 'gray';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600">{appointment.doctor}</h4>
            <p className="text-sm text-gray-600">{appointment.specialty}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
          statusColor === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
          statusColor === 'orange' ? 'bg-orange-100 text-orange-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {appointment.status}
        </span>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{appointment.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{appointment.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="w-4 h-4" />
          <span>Patient: {appointment.patient}</span>
        </div>
      </div>

      <div className="flex gap-2 pt-4 border-t border-gray-200/50">
        <motion.button whileTap={{ scale: 0.95 }} className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
          <Video className="w-4 h-4 mr-2" />
          Join Video
        </motion.button>
        <motion.button whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 font-semibold transition-colors">
          <CheckCircle className="w-4 h-4" />
          Reschedule
        </motion.button>
      </div>
    </motion.div>
  );
};

AppointmentCard.defaultProps = {
  appointment: {
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    time: 'Tomorrow, 10:30 AM',
    location: 'MediTech Hospital, Room 305',
    patient: 'John Doe',
    status: 'confirmed'
  }
};

export default AppointmentCard;

