import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          About MediTrack
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Your trusted partner in healthcare, providing comprehensive medical services at your fingertips.
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To revolutionize healthcare accessibility through innovative digital solutions.
            </p>
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div>
            <img 
              src="/src/assets/hero.png" 
              alt="MediTrack Team" 
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

