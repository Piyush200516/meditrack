import React from "react";
import { FaHome, FaUserInjured, FaUserMd, FaUsers, FaChartBar, FaBoxes, FaCog, FaBell } from "react-icons/fa";

import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">HOSPITAL</h1>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><FaHome /> Dashboard</li>
            <li className="flex items-center gap-3"><FaUserInjured /> Patients</li>
            <li className="flex items-center gap-3"><FaUserMd /> Doctors</li>
            <li className="flex items-center gap-3"><FaUsers /> Staff</li>
            <li className="flex items-center gap-3"><FaChartBar /> Reports</li>
            <li className="flex items-center gap-3"><FaBoxes /> Inventory</li>
            <li className="flex items-center gap-3"><FaCog /> Settings</li>
          </ul>
        </div>
        <div>
          <p className="text-sm">Dr. Aman Verma</p>
          <p className="text-xs text-gray-300">Admin</p>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Top */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Welcome Admin 👋</h2>
          <FaBell />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <Card title="Total Patients" value="245" />
          <Card title="Doctors" value="12" />
          <Card title="Appointments" value="27" />
          <Card title="Beds" value="68/80" />
          <Card title="Alerts" value="3" />
        </div>

        {/* Charts + Reports */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Patients Analytics</h3>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Recent Reports</h3>
            <ul className="space-y-2 text-sm">
              <li>Blood Test</li>
              <li>ECG Analysis</li>
              <li>X-Ray Scan</li>
            </ul>
          </div>
        </div>

        {/* Appointments + Inventory */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Appointments</h3>
            <ul className="space-y-2">
              <li>John Doe - Completed</li>
              <li>Anita Shah - Pending</li>
              <li>Rohan Mehta - Completed</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Inventory Alerts</h3>
            <ul className="space-y-2 text-red-500">
              <li>Medicines Low Stock</li>
              <li>PPE Limited</li>
              <li>Test Kits Low</li>
            </ul>
          </div>
        </div>

        {/* Staff */}
        <div className="grid grid-cols-3 gap-4">
          <Card title="Doctors" value="146" />
          <Card title="Nurses" value="178" />
          <Card title="Admin Staff" value="32" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h4 className="text-gray-500 text-sm">{title}</h4>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
