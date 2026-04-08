import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 p-4">

      {/* MAIN BOX */}
      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white p-10">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Join MediTech
          </h1>
          <p className="text-center text-sm mb-6">
            Smart Healthcare Platform with AI & Microservices
          </p>

          <div className="space-y-3 text-sm">
            <p>✔ AI Health Assistant</p>
            <p>✔ Easy Appointment Booking</p>
            <p>✔ Secure Medical Records</p>
            <p>✔ Real-Time Consultation</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 md:p-10 flex flex-col justify-center">

          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Create Account
          </h2>

          {/* NAME */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Full Name</label>
            <div className="flex items-center bg-white rounded-xl border px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Email</label>
            <div className="flex items-center bg-white rounded-xl border px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Password</label>
            <div className="flex items-center bg-white rounded-xl border px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* ROLE */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Register As</label>
            <select className="w-full mt-1 px-3 py-2 rounded-xl border">
              <option>Patient</option>
              <option>Doctor</option>
              <option>Admin</option>
            </select>
          </div>

          {/* BUTTON */}
          <button className="bg-blue-600 text-white py-2 rounded-xl shadow-md hover:scale-105 transition">
            Register
          </button>

          {/* LOGIN LINK */}
          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer">
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}