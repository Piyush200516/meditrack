import { useState, useContext } from 'react';
import { FaSearch, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

/* ---------- Consult Categories Data ---------- */
const consultData = [
  { img: "/images/pregnancy.png", title: "Period doubts or Pregnancy" },
  { img: "/images/acne.png", title: "Acne, pimple or skin issues" },
  { img: "/images/performance.svg", title: "Performance issues in bed" },
  { img: "/images/cold.png", title: "Cold, cough or fever" },
  { img: "/images/child.svg", title: "Child not feeling well" },
  { img: "/images/depression.png", title: "Depression or anxiety" },
];

/* ---------- Reusable Cards ---------- */
const Card = ({ title, desc }) => (
  <div className="bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow-md border border-blue-100 text-center hover:scale-105 transition">
    <h3 className="font-semibold text-blue-800">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const ImageServiceCard = ({ img, title, desc }) => (
  <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-blue-100 hover:scale-105 transition cursor-pointer text-center">
    <img
      src={img}
      alt={title}
      className="w-20 h-20 mx-auto mb-4 rounded-xl object-cover shadow-md"
    />
    <h3 className="font-semibold text-xl text-blue-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark, toggleTheme } = useTheme();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // TODO: Implement search logic
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      {/* Enhanced Sticky Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 flex justify-between items-center px-6 lg:px-12 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-xl border-b border-white/50 dark:border-slate-700/50"
      >
        <motion.div 
          className="flex items-center gap-8"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" className="text-3xl font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            MediTech
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
            <span className="font-semibold text-gray-700 dark:text-gray-300 cursor-not-allowed opacity-50">Doctors</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300 cursor-not-allowed opacity-50">Services</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300 cursor-not-allowed opacity-50">About</span>
          </div>
        </motion.div>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button 
            type="button" 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-400" />
            )}
          </button>
          
          <Link to="/login">
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-2xl font-semibold shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              Login Now
            </motion.button>
          </Link>

          {/* Mobile menu button */}
          <button type="button" className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Enhanced Hero */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center text-center py-16 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.8) 0%, rgba(147,51,234,0.8) 50%, rgba(59,130,246,0.8) 100%), linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-300" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Advanced <span className="text-blue-600">MediTech</span>
            <br />
            Healthcare System
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            AI + Microservices Powered Smart Healthcare
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <motion.div 
              className="flex bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden w-full max-w-2xl border border-white/30"
              whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.98 }}
            >
              <form onSubmit={handleSearch} className="flex w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="🔍 Find doctors, search symptoms, book tests..."
                  className="flex-1 px-6 py-4 bg-transparent outline-none text-white placeholder-gray-300 text-lg"
                />
                <motion.button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 flex items-center gap-3 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaSearch className="w-5 h-5" /> 
                  <span className="uppercase tracking-wide">Search</span>
                </motion.button>
              </form>
            </motion.div>
            
            <motion.button 
              type="button"
              className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl backdrop-blur-sm border-2 border-white/30 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started 
              <Sun className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform"
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">10K+</div>
                <div className="text-xl font-semibold text-gray-800">Expert Doctors</div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl"
              >
                <div className="text-4xl md:text-5xl font-black text-green-600 mb-2">1M+</div>
                <div className="text-xl font-semibold text-gray-800">Happy Patients</div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl"
              >
                <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2">24/7</div>
                <div className="text-xl font-semibold text-gray-800">Support Available</div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl"
              >
                <div className="text-4xl md:text-5xl font-black text-orange-600 mb-2">99.9%</div>
                <div className="text-xl font-semibold text-gray-800">Success Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------- Consult Categories Section -------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white py-14 px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Consult top doctors online for any health concern
            </h2>
            <p className="text-gray-500 mt-2">
              Private online consultations with verified doctors in all specialists
            </p>
          </div>

          <button type="button" className="mt-4 md:mt-0 border border-blue-500 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50">
            View All Specialities
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 text-center max-w-7xl mx-auto">
          {consultData.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-blue-50 flex items-center justify-center shadow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="mt-4 text-gray-800 font-medium text-sm">
                {item.title}
              </h3>
              <button type="button" className="mt-2 text-blue-600 text-xs font-semibold">
                CONSULT NOW
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Medical Services Cards */}
      <div className="mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <ImageServiceCard
          img="/images/doctor-video.png"
          title="Instant Video Consultation"
          desc="Connect within 60 secs"
          onClick={() => console.log('Video consultation clicked')}
        />
        <ImageServiceCard
          img="/images/doctor-find.png"
          title="Find Doctors Near You"
          desc="Confirmed appointments"
          onClick={() => console.log('Find doctors clicked')}
        />
        <ImageServiceCard
          img="/images/lab-test.png"
          title="Lab Tests"
          desc="Safe and trusted lab tests"
          onClick={() => console.log('Lab tests clicked')}
        />
        <ImageServiceCard
          img="/images/surgery.png"
          title="Surgeries"
          desc="Safe and trusted surgery centers"
          onClick={() => console.log('Surgeries clicked')}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-16">
        <Card title="Book Appointment" desc="Easy doctor booking" />
        <Card title="Online Consultation" desc="Talk with doctors" />
        <Card title="Lab Tests" desc="Book medical tests" />
      </div>

      {/* AI Section */}
      <div className="mt-16 px-6">
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            AI Powered Healthcare
          </h2>
          <button type="button" className="bg-blue-600 text-white px-5 py-2 rounded-xl flex items-center gap-2" onClick={() => console.log('AI Doctor clicked')}>
            <FaRobot /> Ask AI Doctor
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 py-6 text-center text-gray-600">
        Docker • Kubernetes • AWS • GCP • Azure
      </div>
    </div>
  );
};

export default Home;
