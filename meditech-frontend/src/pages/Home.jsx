import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { 
  FaUserMd, FaUsers, FaHospital, FaUserShield, FaMobileAlt, FaLaptopMedical, FaChartLine,
  FaDatabase, FaMicrochip, FaRobot, FaSearch, FaComments, FaFileMedical, FaBrain,
  FaExclamationTriangle, FaImage, FaMicrophone, FaSyncAlt, FaCloud, FaDocker, FaServer,
  FaShieldAlt, FaClock, FaCreditCard, FaFileInvoiceDollar, FaBook, FaVideo, FaCheckCircle, FaRocket, FaArrowRight
} from "react-icons/fa";
import { 
  MdOutlineApi, MdOutlineStorage, MdOutlineCached, MdPsychology 
} from "react-icons/md";

// Reusable Card Component
const Card = ({ children, className = "", hover = true }) => (
  <motion.div 
    whileHover={hover ? { y: -8, scale: 1.05 } : {}}
    className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

// Icon Wrapper
const IconBox = ({ Icon, children, className = "" }) => (
  <div className={`w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto ${className}`}>
    <Icon className="w-10 h-10 text-white" />
    {children}
  </div>
);

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark, toggleTheme } = useTheme();

  const platforms = [
    { icon: FaMobileAlt, title: "Patient App", desc: "Mobile-first experience for booking, consultations, reports & AI health assistant" },
    { icon: FaLaptopMedical, title: "Doctor Dashboard", desc: "Appointment management, patient history, video consults & AI diagnostics" },
    { icon: FaHospital, title: "Hospital Admin", desc: "Bed management, staff scheduling, inventory & compliance reporting" },
    { icon: FaUserShield, title: "Super Admin", desc: "Platform-wide analytics, user management & system configuration" }
  ];

  const microservices = [
    { icon: FaUserMd, title: "User Service" },
    { icon: FaClock, title: "Appointment Service" },
    { icon: FaHospital, title: "Hospital Service" },
    { icon: FaShieldAlt, title: "Pharmacy Service" },
{ icon: FaCreditCard, title: "Payment Service" },
    { icon: FaFileInvoiceDollar, title: "Insurance Service" },
    { icon: FaBook, title: "LMS Service" }
  ];

  const aiFeatures = [
    { icon: FaSearch, title: "Symptom Checker" },
    { icon: FaComments, title: "AI Chatbot" },
    { icon: FaFileMedical, title: "Report Analysis" },
    { icon: FaChartLine, title: "Prediction Engine" },
    { icon: FaExclamationTriangle, title: "Risk Assessment" },
    { icon: FaImage, title: "Image Analysis" },
    { icon: FaMicrophone, title: "Voice Diagnosis" },
    { icon: MdPsychology, title: "Mental Health AI" }
  ];

  const dataLayer = [
    { icon: MdOutlineStorage, title: "SQL (Postgres)", desc: "Patient records, appointments, transactions" },
    { icon: FaDatabase, title: "NoSQL (MongoDB)", desc: "Medical documents, chat logs, analytics" },
    { icon: MdOutlineCached, title: "Cache (Redis)", desc: "Session management, real-time data" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100 min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 px-6 lg:px-16 py-4 bg-white/95 backdrop-blur-xl shadow-lg border-b border-blue-100/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-3xl font-black bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            MediTech AI
          </div>
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

      {/* 1. Hero — Virtual AI Doctor */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Virtual AI Doctor
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Complete AI-powered MediTech platform with intelligent diagnostics, real-time communication and enterprise-grade scalability
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Link to="/demo" className="px-12 py-6 bg-white text-blue-700 font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
              Demo Platform
            </Link>
            <Link to="/contact" className="px-12 py-6 border-2 border-white text-white font-bold text-xl rounded-3xl hover:bg-white hover:text-blue-700 transition-all duration-300">
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Platforms */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Multi-Tenant Platforms</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Tailored interfaces for every healthcare stakeholder</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, idx) => {
              const Icon = platform.icon;
              return (
                <Card key={platform.title} className="p-10 h-full">
                  <IconBox Icon={Icon} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{platform.title}</h3>
                  <p className="text-gray-500 text-center leading-relaxed">{platform.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. API Gateway */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Central API Gateway</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Intelligent routing, authentication, rate limiting & service orchestration</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-10 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <MdOutlineApi className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="pt-20">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Unified Entry Point</h3>
                <ul className="space-y-3 text-gray-600">
  <li className="flex items-center"><FaCheckCircle className="w-5 h-5 text-green-500 mr-3" /> JWT Auth & RBAC</li>
                  <li className="flex items-center"><FaCheckCircle className="w-5 h-5 text-green-500 mr-3" /> Rate Limiting</li>
                  <li className="flex items-center"><FaCheckCircle className="w-5 h-5 text-green-500 mr-3" /> Load Balancing</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Microservices Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Microservices Architecture</h2>
            <p className="text-xl text-gray-500">Scalable, independent services with event-driven communication</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {microservices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="p-8 text-center h-full hover:bg-gradient-to-br hover:from-blue-50">
                  <IconBox Icon={Icon} className="!mb-4" />
                  <h4 className="font-semibold text-gray-800">{service.title}</h4>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. AI Engine */}
      <section className="py-24 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              AI Intelligence Engine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Multi-modal AI processing with GPT-4o, medical LLMs & computer vision</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-8 text-center group hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Real-time Communication */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Real-time Communication</h2>
            <p className="text-xl text-gray-500">WebRTC Video, Socket.io Chat & Push Notifications</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-10">
<IconBox Icon={FaVideo} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">HD Video Consults</h3>
              <p className="text-gray-500 text-center">WebRTC powered end-to-end encrypted consultations</p>
            </Card>
            <Card className="p-10">
              <IconBox Icon={FaComments} className="from-emerald-500 to-green-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Live Chat</h3>
              <p className="text-gray-500 text-center">Socket.io real-time messaging with typing indicators</p>
            </Card>
            <Card className="p-10">
              <IconBox Icon={FaSyncAlt} className="from-orange-500 to-red-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Push Notifications</h3>
              <p className="text-gray-500 text-center">FCM & APNs for appointment reminders & updates</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Data Layer */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Data Layer</h2>
            <p className="text-xl text-gray-500">Hybrid database strategy with ACID compliance & horizontal scaling</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataLayer.map((db, idx) => {
              const Icon = db.icon;
              return (
                <Card key={db.title} className="p-10">
                  <IconBox Icon={Icon} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{db.title}</h3>
                  <p className="text-gray-500 text-center">{db.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. DevOps & Cloud */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">DevOps & Cloud Infrastructure</h2>
            <p className="text-xl text-gray-500">Production-ready container orchestration with multi-cloud support</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-10 text-center">
              <IconBox Icon={FaDocker} className="from-blue-500 to-cyan-500" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Docker Containerization</h3>
              <p className="text-gray-500">Microservices packaged as immutable containers</p>
            </Card>
            <Card className="p-10 text-center">
              <IconBox Icon={FaServer} className="from-indigo-500 to-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Kubernetes Orchestration</h3>
              <p className="text-gray-500">Auto-scaling, self-healing deployments</p>
            </Card>
            <Card className="p-10 text-center">
              <IconBox Icon={FaCloud} className="from-gray-500 to-gray-700" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Multi-Cloud</h3>
              <p className="text-gray-500">AWS • GCP • Azure with unified deployment</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. Final CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Transform Healthcare Today
            </h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">Enterprise AI platform for the future of medicine</p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <Link 
                to="/demo" 
                className="px-12 py-6 bg-white text-blue-700 font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <FaRocket /> Launch Demo
              </Link>
              <Link 
                to="/contact" 
                className="px-12 py-6 border-4 border-white/50 text-white font-bold text-xl rounded-3xl hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center gap-3"
              >
                <FaArrowRight /> Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 text-center text-gray-500 text-sm border-t border-gray-200 bg-white/50 backdrop-blur-xl">
        © 2026 MediTech AI Platform. Complete Healthcare Intelligence Solution | 
        <span className="text-blue-600 font-semibold ml-2">Production Ready</span>
      </footer>
    </div>
  );
};

export default Home;

