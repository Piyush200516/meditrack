import React from 'react';
import { FaAmbulance, FaUserMd, FaUserNurse, FaHospital } from 'react-icons/fa';

const ServiceCard = ({ name, description, icon: IconComponent }) => {
  const defaultIcon = FaAmbulance;
  const Icon = IconComponent || defaultIcon;

  return (
    <div className="group bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 rounded-2xl p-8 border border-white/40 overflow-hidden relative animate-slide-in-right hover:ring-4 ring-primary/20">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent -skew-x-12 -translate-x-8 group-hover:translate-x-0 transition-transform duration-500" />
              <div className="text-5xl text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
        <Icon />
      </div>
      <h3 className="font-black text-xl text-gray-900 mb-3 relative z-10 drop-shadow-sm">{name}</h3>
      <p className="text-gray-600 font-medium relative z-10">{description}</p>
      <button className="mt-6 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 transform hover:-translate-y-1">
        Access Service
      </button>
    </div>
  );
};

export default ServiceCard;

