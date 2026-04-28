// src/pages/Features.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShieldPlus,
  Search,
  Home,
  Users,
  ShieldCheck,
  Calendar,
  FileText,
  BarChart3,
  Video,
  Pill,
  CreditCard,
  UserCheck,
  Building2,
  Shield,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Features() {
  const location = useLocation();

  const featureCards = [
    {
      title: "Patient Management",
      desc: "Manage patient information, history, records, and profiles securely.",
      icon: Users,
    },
    {
      title: "Appointment Scheduling",
      desc: "Easy booking, rescheduling, and cancellation with reminders.",
      icon: Calendar,
    },
    {
      title: "Electronic Health Records",
      desc: "Digital records management with quick accessibility.",
      icon: FileText,
    },
    {
      title: "Analytics & Reports",
      desc: "Powerful analytics tools for data-driven decision making.",
      icon: BarChart3,
    },
    {
      title: "Security & Compliance",
      desc: "HIPAA-compliant platform with role-based access.",
      icon: ShieldCheck,
    },
    {
      title: "Telemedicine",
      desc: "HD video consultations and remote patient monitoring.",
      icon: Video,
    },
    {
      title: "Pharmacy Management",
      desc: "Manage medications, prescriptions, and inventory.",
      icon: Pill,
    },
    {
      title: "Billing & Insurance",
      desc: "Automated billing and insurance claim workflows.",
      icon: CreditCard,
    },
  ];

  const benefits = [
    {
      title: "For Patients",
      desc: "Better care, easy access to health records and communication.",
      icon: Users,
    },
    {
      title: "For Doctors",
      desc: "Streamline workflows and reduce administrative tasks.",
      icon: UserCheck,
    },
    {
      title: "For Hospitals",
      desc: "Improve efficiency and optimize healthcare operations.",
      icon: Building2,
    },
    {
      title: "For Administrators",
      desc: "Real-time insights, control, and compliance in one platform.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <ShieldPlus />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-700">MediTech</h1>
              <p className="text-xs text-gray-500">System Architecture</p>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden lg:flex gap-8 text-sm font-medium">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                  : "hover:text-blue-600"
              }
            >
              Home
            </Link>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                  : "hover:text-blue-600"
              }
            >
              About
            </Link>
            <Link
              to="/features"
              className={
                location.pathname === "/features"
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                  : "hover:text-blue-600"
              }
            >
              Features
            </Link>
            <Link to="#" className="hover:text-blue-600">
              Architecture
            </Link>
            <Link to="#" className="hover:text-blue-600">
              Services
            </Link>
            <Link to="#" className="hover:text-blue-600">
              Integrations
            </Link>
            <Link to="#" className="hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-lg border flex items-center justify-center">
              <Search size={18} />
            </button>

            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold">
              Login / Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Home size={15} />
              <span>Home</span>
              <span>/</span>
              <span>Features</span>
            </div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Features
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Powerful Features for <br />
              <span className="text-blue-600">Modern Healthcare</span>
            </h1>

            <p className="text-gray-600 mt-6 leading-8">
              MediTech is built with a suite of powerful features to streamline
              healthcare operations, improve patient outcomes, and enhance
              overall experience for everyone.
            </p>

            <div className="flex gap-10 mt-8 flex-wrap">
              <div>
                <h2 className="text-2xl font-bold">50K+</h2>
                <p className="text-gray-500 text-sm">Active Users</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">99.9%</h2>
                <p className="text-gray-500 text-sm">System Uptime</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">24/7</h2>
                <p className="text-gray-500 text-sm">Customer Support</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase text-sm">
              Features
            </p>
            <h2 className="text-4xl font-bold mt-3">
              Everything You Need in One Platform
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Discover the comprehensive features that make MediTech the complete
              solution for modern healthcare management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                    <Icon className="text-blue-600" />
                  </div>

                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-3 leading-6">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase text-sm">
              Benefits
            </p>
            <h2 className="text-4xl font-bold">
              Benefits for Every Stakeholder
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                    <Icon className="text-blue-600" />
                  </div>

                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-3 leading-6">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl font-bold">
                Ready to Experience the Difference?
              </h2>
              <p className="mt-4 text-blue-100 max-w-2xl">
                Join thousands of healthcare organizations already using
                MediTech to transform their operations and improve patient care.
              </p>
            </div>

            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold flex items-center gap-2">
              Request a Demo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold">MediTech</h2>
            <p className="text-blue-100 mt-4 text-sm leading-7">
              An advanced microservices-based platform for modern healthcare
              management and digital transformation.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Architecture</li>
              <li>Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Guides</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li className="flex gap-2"><Mail size={16} /> info@meditech.com</li>
              <li className="flex gap-2"><Phone size={16} /> +1 (123) 456-7890</li>
              <li className="flex gap-2"><MapPin size={16} /> 123 HealthTech Street</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 py-5 text-center text-sm text-blue-200">
          © 2024 MediTech System Architecture. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

