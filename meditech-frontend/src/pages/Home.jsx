import {
  FaUserMd,
  FaHospital,
  FaUser,
  FaCogs,
  FaRobot,
  FaDatabase,
} from "react-icons/fa";

const Card = ({ title, desc }) => (
  <div className="bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-lg border border-blue-100 text-center hover:scale-105 transition">
    <h3 className="font-semibold text-blue-800 text-lg">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mt-16 px-6">
    <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
      {title}
    </h2>
    {children}
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
          <a href="#">Features</a>
          <a href="#">Architecture</a>
          <a href="#">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow">
          Get Started
        </button>
      </div>

      {/* Hero */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">
          Advanced MediTech System
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          All-in-One Healthcare Platform with AI & Microservices
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
          Explore System
        </button>
      </div>

      {/* Roles */}
      <Section title="User Interfaces">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="Patient App" desc="Book & manage appointments" />
          <Card title="Doctor Dashboard" desc="Manage patients & reports" />
          <Card title="Hospital Admin Panel" desc="Manage hospital system" />
          <Card title="Super Admin Panel" desc="Full system control" />
        </div>
      </Section>

      {/* API Gateway */}
      <Section title="API Gateway">
        <div className="bg-blue-600 text-white text-center p-6 rounded-2xl shadow-lg">
          API • JWT Auth • Rate Limiting • Load Balancer
        </div>
      </Section>

      {/* Microservices */}
      <Section title="Microservices Layer">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="User Service" desc="Authentication & profiles" />
          <Card title="Appointment Service" desc="Booking system" />
          <Card title="Hospital Service" desc="Hospital management" />
          <Card title="Pharmacy" desc="Medicine system" />
          <Card title="Payment Service" desc="Transactions" />
          <Card title="Insurance Service" desc="Claims & coverage" />
          <Card title="LMS Service" desc="Learning platform" />
        </div>
      </Section>

      {/* AI Engine */}
      <Section title="AI Engine">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="AI Chatbot" desc="24/7 assistant" />
          <Card title="Symptom Checker" desc="Analyze symptoms" />
          <Card title="Report Analysis" desc="AI insights" />
          <Card title="Disease Prediction" desc="Predict diseases" />
        </div>
      </Section>

      {/* Real-Time */}
      <Section title="Real-Time Communication">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="WebSocket" desc="Live communication" />
          <Card title="Video Call" desc="Doctor consultation" />
          <Card title="Chat System" desc="Instant messaging" />
          <Card title="Notifications" desc="Alerts & updates" />
        </div>
      </Section>

      {/* Data Layer */}
      <Section title="Data Layer">
        <div className="grid grid-cols-3 gap-6">
          <Card title="MySQL" desc="Primary database" />
          <Card title="MongoDB" desc="NoSQL storage" />
          <Card title="Redis" desc="Caching system" />
        </div>
      </Section>

      {/* Integrations */}
      <Section title="External Integrations">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card title="Payments" desc="Razorpay / Stripe" />
          <Card title="Google Maps" desc="Location services" />
          <Card title="SMS / Email" desc="Notifications" />
          <Card title="WhatsApp API" desc="Messaging" />
        </div>
      </Section>

      {/* DevOps */}
      <Section title="Cloud & DevOps">
        <div className="flex flex-wrap justify-center gap-6">
          <Card title="Docker" desc="Containerization" />
          <Card title="Kubernetes" desc="Orchestration" />
          <Card title="AWS / GCP" desc="Cloud hosting" />
        </div>
      </Section>

      {/* Footer */}
      <div className="mt-16 py-6 text-center text-gray-600">
        © 2026 MediTech • All Rights Reserved
      </div>
    </div>
  );
};

export default Home;