import React from "react";
import { FaUserMd, FaCapsules, FaHospital, FaFlask } from "react-icons/fa";
import { Link } from "react-router-dom";

  // Swiper - DISABLED due to React deps conflict (createContext error)
  // import { Swiper, SwiperSlide } from "swiper/react";
  // import { Autoplay, Loop } from "swiper/modules";
  // import "swiper/css";

  const Home = () => {
    console.log('Home component rendering');

    const services = [
    { icon: <FaUserMd />, title: "Doctor", color: "text-blue-500" },
    { icon: <FaCapsules />, title: "Medicine", color: "text-green-500" },
    { icon: <FaHospital />, title: "Hospital", color: "text-purple-500" },
    { icon: <FaFlask />, title: "Lab Test", color: "text-orange-500" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 bg-white shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
          MediTrack
        </h1>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Login
          </Link>

          <Link to="/signup" className="bg-green-600 text-white px-6 py-2 rounded-md">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Slider - STATIC due to Swiper deps error */}
      <section className="h-[70vh] bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 text-center flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Consult Doctors Online
        </h1>
        <p className="mb-6 text-lg">
          24x7 healthcare at your fingertips
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold mx-auto hover:bg-opacity-90 transition">
          Start Now
        </button>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className={`text-5xl ${item.color} mb-4`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                High quality service available
              </p>
            </div>
          ))}
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