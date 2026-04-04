import React from "react";
import { FaUserMd, FaCapsules, FaHospital, FaFlask } from "react-icons/fa";
import { Link } from "react-router-dom";

  // Swiper - DISABLED due to React deps conflict (createContext error)
  // import { Swiper, SwiperSlide } from "swiper/react";
  // import { Autoplay, Loop } from "swiper/modules";
  // import "swiper/css";

  const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    console.log('Home component rendering');

    const services = [
    { icon: <FaUserMd />, title: "Doctor", color: "text-blue-500" },
    { icon: <FaCapsules />, title: "Medicine", color: "text-green-500" },
    { icon: <FaHospital />, title: "Hospital", color: "text-purple-500" },
    { icon: <FaFlask />, title: "Lab Test", color: "text-orange-500" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar - Mobile Responsive */}
      <nav className="px-4 md:px-10 py-4 bg-white shadow-lg relative z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
            MediTrack
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </Link>
            <Link to="/signup" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 border-t">
            <Link 
              to="/" 
              className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/login" 
              className="block px-6 py-3 text-blue-600 font-bold bg-blue-50 border-b rounded-lg mx-4 my-1 hover:bg-blue-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="block px-6 py-3 text-green-600 font-bold bg-green-50 border-b rounded-lg mx-4 my-1 hover:bg-green-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section - Updated with search bar */}
      <section className="relative h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/4 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Connect with top doctors instantly. Book appointments, get prescriptions, 
              and manage your health 24/7 from anywhere.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search doctors, medicines, hospitals..."
                  className="w-full py-4 px-6 rounded-3xl text-lg shadow-2xl border-0 focus:ring-4 focus:ring-white/30 bg-white/20 backdrop-blur-xl text-white placeholder-white/70"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  Search
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/login" 
                className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 bg-opacity-90 backdrop-blur-sm"
              >
                Get Started Free
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Services */}
      <section className="py-20 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((item, i) => (
            <Link 
              to={`/${item.title.toLowerCase().replace(' ', '-')}`} 
              key={i}
              className="group bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:bg-white border border-white/20 hover:border-blue-200 cursor-pointer"
            >
              <div className={`text-6xl ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with verified {item.title.toLowerCase()} professionals. 
                Book instantly, 24/7 availability.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Explore Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 animate-pulse">10K+</div>
              <div className="text-xl font-semibold text-gray-700">Happy Patients</div>
            </div>
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-4 animate-pulse">2K+</div>
              <div className="text-xl font-semibold text-gray-700">Expert Doctors</div>
            </div>
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-4 animate-pulse">500+</div>
              <div className="text-xl font-semibold text-gray-700">Partner Hospitals</div>
            </div>
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-4 animate-pulse">24/7</div>
              <div className="text-xl font-semibold text-gray-700">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose MediTrack?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by millions. Experience healthcare like never before.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-10 rounded-3xl bg-gray-50 hover:bg-blue-50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border hover:border-blue-200">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600">Verified Doctors</h3>
              <p className="text-gray-600 leading-relaxed">All doctors are board-certified with years of experience and excellent patient ratings.</p>
            </div>
            
            <div className="group text-center p-10 rounded-3xl bg-gray-50 hover:bg-green-50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border hover:border-green-200">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">HIPAA compliant. Your health information stays protected with bank-level security.</p>
            </div>
            
            <div className="group text-center p-10 rounded-3xl bg-gray-50 hover:bg-purple-50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border hover:border-purple-200">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600">Instant Access</h3>
              <p className="text-gray-600 leading-relaxed">No waiting rooms. Connect within minutes. Available 24/7 across 50+ specialties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">

          <div>
            <h3 className="text-2xl font-bold mb-4">MediTrack</h3>
            <p className="text-gray-400">
              Your trusted healthcare partner.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Doctor</li>
              <li>Medicine</li>
              <li>Lab Test</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <p className="text-gray-400">24/7 Available</p>
          </div>

        </div>

        <div className="text-center text-gray-400 mt-8">
          © 2026 MediTrack
        </div>
      </footer>

    </div>
  );
};

export default Home;