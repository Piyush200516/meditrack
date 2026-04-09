import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { 
  FaSearch, FaArrowRight, 
  FaStethoscope, FaUserMd, FaHeartbeat, FaRunning,
  FaShieldAlt, FaClock, FaMobileAlt,
  FaUserCheck, FaCalendarCheck, FaCheckCircle 
} from "react-icons/fa";

// Reusable Card Component
const Card = ({ children, className = "", hover = true }) => (
  <motion.div 
    whileHover={hover ? { scale: 1.05, y: -5 } : {}}
    className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-100/50 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden ${className}`}
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
      title: "Dentist",
      desc: "Expert dental care and oral health consultations",
      img: "/images/doctor-find.png",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: FaUserMd,
      title: "Gynecologist",
      desc: "Comprehensive women’s health and pregnancy care",
      img: "/images/pregnancy.png",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FaHeartbeat,
      title: "Dietitian",
      desc: "Personalized nutrition plans and weight management",
      img: "/images/performance.svg",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: FaRunning,
      title: "Physiotherapist",
      desc: "Injury recovery and physical rehabilitation",
      img: "/images/child.svg",
      color: "from-orange-500 to-red-500"
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
      <section className="relative py-28 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero.png')] bg-cover bg-center opacity-5 mix-blend-multiply" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight"
          >
            Book Top Doctors
            <span className="block text-blue-600 text-6xl md:text-7xl lg:text-8xl">Instantly</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with 10,000+ verified doctors across 50+ specialties. 
            Book clinic visits or video consultations in 30 seconds.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-4xl mx-auto"
          >
            <form onSubmit={handleSearch} className="flex w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-blue-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctors, symptoms or tests..."
                className="flex-1 px-8 py-5 text-lg bg-transparent outline-none text-gray-800 placeholder-gray-500"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-8 py-5 font-bold text-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <FaSearch />
                Search
              </button>
            </form>
            <Link 
              to="/doctors"
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:from-blue-700 flex items-center gap-3 whitespace-nowrap"
            >
              Book Now <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 px-6 lg:px-10 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Specialty Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from our top medical specialties</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="p-10 text-center hover:-translate-y-2" hover>
                  <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-2xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <img src={service.img} alt={service.title} className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-xl object-cover" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
                  <button className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-xl transition-all">
                    Book Now
                  </button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Choose MediTrack?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by 1M+ patients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-12 lg:p-16 hover:bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{feature.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 px-6 lg:px-10 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">3 simple steps to your appointment</p>
          </div>
          <div className="relative">
            {/* Desktop horizontal */}
            <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
              {howItWorks.map((step, index) => {
                const Icon = step.icon;
                const isMiddle = index === 1;
                return (
                  <div key={step.title} className={`relative ${!isMiddle && 'text-center'}`}>
                    {!isMiddle && (
                      <div className="absolute -left-12 top-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transform -translate-y-1/2 hidden lg:block" />
                    )}
                    <Card className="p-10 lg:p-12 max-w-md mx-auto relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                          {step.step}
                        </div>
                      </div>
                      <Icon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </Card>
                    {isMiddle && (
                      <div className="absolute right-12 top-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transform -translate-y-1/2" />
                    )}
                  </div>
                );
              })}
            </div>
            {/* Mobile vertical stack */}
            <div className="lg:hidden space-y-12">
              {howItWorks.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex items-center space-x-6">
                    <div className="w-20 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl mx-auto">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <Card className="flex-1 p-8">
                      <Icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-28 px-6 lg:px-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to book your appointment?</h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">Join 1M+ happy patients who trust MediTrack</p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Link 
              to="/register"
              className="px-12 py-5 bg-white text-blue-700 font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:bg-gray-50 transition-all whitespace-nowrap"
            >
              Get Started Free
            </Link>
            <Link 
              to="/doctors"
              className="px-12 py-5 border-2 border-white text-white font-bold text-xl rounded-3xl hover:bg-white hover:text-blue-700 transition-all"
            >
              View Doctors
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

