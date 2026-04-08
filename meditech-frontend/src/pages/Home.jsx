import { FaSearch, FaRobot, FaVideo, FaBell, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ title, desc }) => (
  <div className="bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow-md border border-blue-100 text-center hover:scale-105 transition">
    <h3 className="font-semibold text-blue-800">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const ImageServiceCard = ({ img, title, desc }) => (
  <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-blue-100 hover:scale-105 transition cursor-pointer">
    <img src={img} alt={title} className="w-20 h-20 mx-auto mb-4 rounded-xl object-cover shadow-md" />
    <h3 className="font-semibold text-xl text-blue-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 min-h-screen">

      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-4 bg-white/60 backdrop-blur-md shadow">
        <h1 className="text-2xl font-bold text-blue-700">MediTech</h1>
        <div className="space-x-6 text-blue-800 font-medium hidden md:block">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Doctors</a>
          <a href="#">AI Health</a>
          <a href="#">Contact</a>
        </div>
        <Link to="/login">
  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
    Login Now
  </button>
</Link>
      </div>

      {/* Hero */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Advanced MediTech Healthcare System
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          AI + Microservices Powered Smart Healthcare
        </p>

        {/* Search */}
        <div className="flex justify-center">
          <div className="flex bg-white rounded-full shadow-lg overflow-hidden w-full max-w-xl">
            <input
              type="text"
              placeholder="Find doctors, search symptoms..."
              className="flex-1 px-4 py-3 outline-none"
            />
            <button className="bg-blue-600 text-white px-6 flex items-center gap-2">
              <FaSearch /> Search
            </button>
          </div>
        </div>
      </div>


      {/* Medical Services Cards */}
<div className="mt-16 px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <ImageServiceCard
      img="/images/doctor-video.png"
      title="Instant Video Consultation"
      desc="Connect within 60 secs"
    />
    <ImageServiceCard
      img="/images/doctor-find.png"
      title="Find Doctors Near You"
      desc="Confirmed appointments"
    />
    <ImageServiceCard
      img="/images/lab-test.png"
      title="Lab Tests"
      desc="Safe and trusted lab tests"
    />
    <ImageServiceCard
      img="/images/surgery.png"
      title="Surgeries"
      desc="Safe and trusted surgery centers"
    />
  </div>
</div>


      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <Card title="Book Appointment" desc="Easy doctor booking" />
        <Card title="Online Consultation" desc="Talk with doctors" />
        <Card title="Lab Tests" desc="Book medical tests" />
      </div>

      {/* Secure Platform */}
      <div className="mt-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Secure & Fast Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Secure Login" desc="Protected user access" />
          <Card title="Fast Response" desc="Quick system speed" />
          <Card title="Reliable System" desc="Trusted services" />
        </div>
      </div>

      {/* Services */}
      <div className="mt-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="Appointment Booking" desc="" />
          <Card title="Hospital Management" desc="" />
          <Card title="Pharmacy" desc="" />
          <Card title="Payments" desc="" />
        </div>
      </div>

      {/* AI Section */}
      <div className="mt-16 px-6">
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              AI Powered Healthcare
            </h2>
            <p className="text-gray-600 mb-4">
              Hello, how can I help you today?
            </p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl flex items-center gap-2">
              <FaRobot /> Ask AI Doctor
            </button>
          </div>
        </div>
      </div>

      {/* Real-Time */}
      <div className="mt-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Real-Time Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="Live Chat" desc="" />
          <Card title="Video Consultation" desc="" />
          <Card title="Notifications" desc="" />
          <Card title="24/7 Tracking" desc="" />
        </div>
      </div>

      {/* Integrations */}
      <div className="mt-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Trusted & Secure
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="Payments" desc="" />
          <Card title="Google Maps" desc="" />
          <Card title="SMS / Email" desc="" />
          <Card title="WhatsApp API" desc="" />
        </div>
      </div>

      {/* Emergency */}
      <div className="mt-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Emergency Help
        </h2>
        <button className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg">
          Call Ambulance 🚨
        </button>
      </div>

      {/* Footer */}
      <div className="mt-16 py-6 text-center text-gray-600">
        Docker • Kubernetes • AWS • GCP • Azure
      </div>

    </div>
  );
};

export default Home;