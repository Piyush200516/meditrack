import { FaUserMd, FaCapsules, FaFlask, FaHospital } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">MediTrack</h1>

        <div className="space-x-6">
          <a href="#" className="text-gray-700">About Us</a>
          <button className="border px-4 py-1 rounded">Login</button>
        </div>
      </div>

      {/* Services Icons */}
      <div className="flex justify-center gap-10 mt-10 text-center">
        <div>
          <FaUserMd className="text-3xl mx-auto text-blue-500" />
          <p>Talk to Doctor</p>
        </div>

        <div>
          <FaCapsules className="text-3xl mx-auto text-blue-500" />
          <p>Medicine</p>
        </div>

        <div>
          <FaHospital className="text-3xl mx-auto text-blue-500" />
          <p>Book Appointment</p>
        </div>

        <div>
          <FaFlask className="text-3xl mx-auto text-blue-500" />
          <p>Lab Tests</p>
        </div>
      </div>

      {/* Main Banner */}
      <div className="flex justify-center mt-10">
        <div className="bg-white shadow-xl rounded-full px-10 py-6 flex items-center gap-10 w-[70%] justify-between">
          <h2 className="text-xl font-semibold">
            Consult with Top Doctors Online, 24x7
          </h2>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
            Start Consultation →
          </button>
        </div>
      </div>

      {/* Green Section */}
      <div className="flex justify-center mt-10">
        <div className="bg-green-100 rounded-xl p-8 w-[80%] flex gap-6">

          {/* Left Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              "Cataract",
              "Circumcision",
              "Piles",
              "Dengue",
              "Kidney Stone",
              "Hair Transplant",
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded shadow text-center">
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-center ml-10">
            <h2 className="text-2xl font-bold text-gray-800">
              Avail Cashless Support for Hospitalization
            </h2>
            <p className="text-gray-600 mt-2">
              End-to-end care for various surgical procedures
            </p>

            <button className="mt-4 text-green-700 font-bold">
              REGISTER NOW →
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;