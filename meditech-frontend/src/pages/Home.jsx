import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { 
  FaSearch, FaArrowRight, FaStethoscope, FaHeartbeat, FaClipboardList, FaExclamationTriangle,
  FaShieldAlt, FaClock, FaMobileAlt,
  FaUserCheck, FaCalendarCheck, FaCheckCircle,
  FaPhone 
} from "react-icons/fa";

// Reusable Card Component
const Card = ({ children, className = "", hover = true }) => (
  <motion.div 
    whileHover={hover ? { y: -2, scale: 1.02 } : {}}
    className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark, toggleTheme } = useTheme();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching:', searchQuery);
    }
  };

  const services = [
    {
      icon: FaStethoscope,
      title: "Telemedicine",
      desc: "Online consultations with top doctors from anywhere",
      img: "/images/doctor-video.png"
    },
    {
      icon: FaClipboardList,
      title: "Lab Tests",
      desc: "Home sample collection for all diagnostic tests",
      img: "/images/lab-test.png"
    },
    {
      icon: FaHeartbeat,
      title: "Wellness",
      desc: "Health checkups and preventive care programs",
      img: "/images/performance.svg"
    },
    {
      icon: FaExclamationTriangle,
      title: "Emergency",
      desc: "24/7 ambulance and urgent care services",
      img: "/images/doctor-find.png"
    }
  ];

  const whyUs = [
    {
      icon: FaShieldAlt,
      title: "Verified Doctors",
      desc: "All doctors are certified with 5+ years experience"
    },
    {
      icon: FaClock,
      title: "Instant Booking",
      desc: "Book appointments within 30 seconds, no waiting"
    },
    {
      icon: FaMobileAlt,
      title: "24/7 Support",
      desc: "Round the clock assistance via call or chat"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      icon: FaUserCheck,
      title: "Choose Doctor",
      desc: "Search and select from top-rated specialists"
    },
    {
      step: "2",
      icon: FaCalendarCheck,
      title: "Book Slot",
      desc: "Pick your preferred date and time instantly"
    },
    {
      step: "3",
      icon: FaCheckCircle,
      title: "Get Care",
      desc: "Visit clinic or get online consultation"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 px-6 lg:px-16 py-4 bg-white/95 backdrop-blur-xl shadow-lg border-b border-blue-100/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="text-3xl font-black bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
            MediTrack
          </Link>
          <div className="flex items-center gap-4 lg:gap-8">
            <Link to="/login" className="px-6 py-2 text-lg font-semibold text-blue-700 hover:text-blue-900 transition-colors">
              Login
            </Link>
            <Link to="/register" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-700 transition-all">
              Get Started
            </Link>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold tracking-tight text-gray-800 mb-6 leading-tight"
            >
              Your Health, Our Priority
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 mb-8 max-w-lg"
            >
              Connect with verified doctors for consultations, diagnostics, and wellness care. Premium healthcare made simple.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/doctors"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Book Now
              </Link>
              <Link 
                to="/register"
                className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-xl hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          <motion.div className="lg:w-1/2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
            <img src="/images/doctor-video.png" alt="Healthcare Hero" className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Comprehensive healthcare solutions at your fingertips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="overflow-hidden p-0 hover:shadow-2xl" hover>
                  <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                    <p className="text-gray-500 mb-6 text-center leading-relaxed">{service.desc}</p>
                    <button className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300">
                      Book Service
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Experience premium healthcare with confidence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-10 text-center hover:-translate-y-2" hover>
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* How It Works */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Simple 3-step process to get the care you need</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-4xl mx-auto">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="text-center p-8 relative" hover>
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-bold text-2xl text-blue-600 mx-auto -mt-6 relative z-10">
                      {step.step}
                    </div>
                  </div>
                  <Icon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to start your healthcare journey?</h2>
          <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">Join thousands of satisfied patients</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link 
              to="/register"
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-xl text-lg"
            >
              Get Started Free
            </Link>
            <Link 
              to="/doctors"
              className="px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
            >
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 px-6 text-center text-gray-500 text-sm border-t border-gray-200 bg-white">
        © 2024 MediTrack. All rights reserved. | Premium Healthcare Booking Platform
      </footer>
    </div>
  );
};

export default Home;

