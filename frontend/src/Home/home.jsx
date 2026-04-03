import { FaUserMd, FaCapsules, FaFlask, FaHospital } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 bg-white shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 cursor-pointer">MediTrack</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
          <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 shadow-md hover:shadow-lg">Login</a>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 shadow-md hover:shadow-lg">Sign Up</button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Your Health, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Consult top doctors online anytime, anywhere. Get medicines delivered and book appointments instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              Start Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 text-center">
              <FaUserMd className="text-5xl text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Talk to Doctor</h3>
              <p className="text-gray-600">24/7 video consultations with top specialists</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 text-center">
              <FaCapsules className="text-5xl text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Medicine Delivery</h3>
              <p className="text-gray-600">Order prescriptions and get delivered at door</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 text-center">
              <FaHospital className="text-5xl text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Appointment</h3>
              <p className="text-gray-600">Schedule clinic visits effortlessly</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 text-center">
              <FaFlask className="text-5xl text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lab Tests</h3>
              <p className="text-gray-600">Home collection & instant reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-indigo-100 via-white to-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 shadow-2xl rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Consult with Top Doctors Online, 24×7
              </h2>
              <p className="text-blue-100 text-lg md:text-xl mb-8 opacity-90">
                Get expert medical advice instantly from verified doctors across 50+ specialties
              </p>
            </div>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Start Free Consultation →
            </button>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Cashless Treatment</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">Avail cashless support for hospitalization across 100+ procedures</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {[
              { name: "Cataract", icon: "👁️" },
              { name: "Circumcision", icon: "✂️" },
              { name: "Piles", icon: "💉" },
              { name: "Dengue", icon: "🦟" },
              { name: "Kidney Stone", icon: "🫘" },
              { name: "Hair Transplant", icon: "💇" },
            ].map((item, i) => (
              <div key={i} className="group bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-white transform hover:scale-105 transition-all duration-300 text-center border border-green-200 hover:border-green-400">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Avail Cashless Support for Hospitalization
              </h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                End-to-end care for various surgical procedures with zero upfront payment at 5000+ network hospitals
              </p>
            </div>
            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap mx-auto lg:mx-0">
              REGISTER NOW →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-6">MediTrack</h3>
            <p className="text-gray-400 mb-4">Your trusted healthcare partner for online consultations and more.</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">📱</a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">📧</a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">📘</a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Online Doctor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medicine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lab Test</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Appointment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <p className="text-gray-400 mb-4">24/7 Customer Support</p>
            <a href="tel:+91-9876543210" className="text-2xl font-bold text-blue-400 hover:text-blue-300 block mb-2">+91 98765 43210</a>
            <p className="text-sm text-gray-400">Mon-Sun, 24x7</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MediTrack. All rights reserved. | Designed for healthcare excellence.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
