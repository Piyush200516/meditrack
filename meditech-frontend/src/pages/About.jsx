import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShieldPlus, Search, Home, Users, ShieldCheck, Layers,
  Zap, Target, Rocket, Code2, Trophy, Mail, Phone, MapPin
} from "lucide-react";

const navItems = ["Home", "About", "Features", "Architecture", "Services", "Integrations", "Contact"];

export default function About() {
  const location = useLocation();

  const cards = [
    { title: "Patient-Centric", desc: "We put patients at the center of everything we build.", icon: Users },
    { title: "Secure & Compliant", desc: "Built with security-first approach and HIPAA-compliant standards.", icon: ShieldCheck },
    { title: "Scalable & Reliable", desc: "Microservices architecture ensures high availability and scalability.", icon: Layers },
    { title: "Innovative & Intelligent", desc: "AI-powered insights for better decisions and outcomes.", icon: Zap },
  ];

  const journey = [
    { year: "2020", title: "Foundation", desc: "MediTech was founded to explore digital transformation in healthcare.", icon: Rocket },
    { year: "2021", title: "Platform Development", desc: "Built the core microservices architecture and launched MVP.", icon: Code2 },
    { year: "2022", title: "Growth", desc: "Onboarded hospitals, integrated services, and expanded capabilities.", icon: Users },
    { year: "2024+", title: "The Future", desc: "Continuing to innovate with AI, advanced analytics, and global reach.", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <ShieldPlus />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-700">MediTech</h1>
              <p className="text-xs text-slate-500">System Architecture</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const to =
                item === "Home"
                  ? "/"
                  : item === "About"
                  ? "/about"
                  : item === "Features"
                  ? "/features"
                  : "#";
              const isActive = location.pathname === to;
              return (
                <Link
                  key={item}
                  to={to}
                  className={`hover:text-blue-600 ${
                    isActive ? "text-blue-600 border-b-2 border-blue-600 pb-2" : ""
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

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

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex items-center gap-2 text-sm text-slate-500">
        <Home size={15} />
        <span>Home</span>
        <span>/</span>
        <span className="text-slate-900">About</span>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            About MediTech
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">
            Empowering Healthcare <br />
            <span className="text-blue-600">Through Technology</span>
          </h1>

          <p className="mt-6 text-slate-600 leading-8">
            MediTech System Architecture is a modern, secure, and scalable
            microservices-based platform built to transform the way healthcare
            organizations operate and deliver care.
          </p>

          <p className="mt-4 text-slate-600 leading-8">
            We combine innovation, intelligence, and reliability to create seamless
            digital experiences for patients, providers, and administrators.
          </p>

          <div className="mt-8 flex gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">50K+</h3>
                <p className="text-sm text-slate-500">Active Users</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <ShieldCheck className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">99.9%</h3>
                <p className="text-sm text-slate-500">System Uptime</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
            alt="MediTech Building"
            className="rounded-3xl shadow-xl w-full h-[380px] object-cover"
          />

          <div className="absolute -bottom-10 right-6 bg-white rounded-2xl shadow-2xl border p-7 max-w-sm">
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <Target className="text-blue-600" size={30} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  To leverage technology and data intelligence to make healthcare
                  smarter, accessible, and more effective for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <p className="text-blue-600 font-bold text-sm uppercase">Who We Are</p>
          <h2 className="text-4xl font-bold mt-3">Building the Future of Healthcare</h2>
          <p className="mt-4 text-slate-500 max-w-3xl mx-auto">
            MediTech is designed by a team of healthcare professionals, engineers,
            and data scientists who are passionate about solving real-world healthcare challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-7 mt-12">
          {cards.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="border rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition bg-white">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-5">
                <Icon className="text-blue-600" size={30} />
              </div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm text-slate-500 mt-3 leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-bold text-sm uppercase">Our Journey</p>
            <h2 className="text-4xl font-bold mt-3">Our Journey</h2>
            <p className="mt-5 text-slate-600 leading-8">
              MediTech was founded with a vision to bridge the gap between healthcare
              and technology. From a small idea to a powerful platform, our journey
              continues with innovation and excellence.
            </p>
            <button className="mt-7 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Explore Architecture →
            </button>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-4 gap-5">
            {journey.map(({ year, title, desc, icon: Icon }) => (
              <div key={year} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white shadow flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" />
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full mx-auto mb-3"></div>
                <h3 className="font-bold text-blue-700">{year}</h3>
                <h4 className="font-bold">{title}</h4>
                <p className="text-xs text-slate-500 leading-5 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Logos */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-center text-2xl font-bold mb-8">Trusted & Integrated With</h2>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
          {["AWS", "Google Cloud", "Microsoft Azure", "Kubernetes", "Docker", "TensorFlow", "PyTorch"].map((tech) => (
            <div key={tech} className="border rounded-xl bg-white p-4 text-center font-bold shadow-sm">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldPlus />
              <div>
                <h3 className="text-xl font-bold">MediTech</h3>
                <p className="text-xs text-blue-200">System Architecture</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-6">
              An advanced microservices-based platform for modern healthcare
              management and digital transformation.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Architecture</li>
              <li>Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Patient Management</li>
              <li>Hospital Management</li>
              <li>Telemedicine</li>
              <li>Pharmacy</li>
              <li>Insurance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-blue-100">
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

