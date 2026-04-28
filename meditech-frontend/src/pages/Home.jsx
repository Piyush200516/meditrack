import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShieldPlus,
  Search,
  Users,
  Cpu,
  ShieldCheck,
  Network,
  Database,
  Brain,
  Link2,
  PlayCircle,
  Smartphone,
  UserRound,
  Building2,
  Server,
  Activity,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const location = useLocation();

  const cards = [
    ["Client Applications", "Patient App, Doctor Dashboard, Admin Panels", Smartphone],
    ["API Gateway", "Rate limiting, authentication and load balancing", ShieldPlus],
    ["Microservices Layer", "Independent healthcare services", Network],
    ["AI Engine", "Prediction, report analysis and health scoring", Brain],
    ["Data Layer", "SQL, NoSQL and Redis cache", Database],
    ["External Integrations", "Payments, SMS, Email, Maps and Wearables", Link2],
  ];

  const services = [
    "User Service",
    "Appointment Service",
    "Hospital Mgmt",
    "Pharmacy Service",
    "Payment Service",
    "Insurance Service",
    "LMS Service",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-slate-900">
      {/* Top Alert */}
      <div className="hidden md:flex h-10 items-center justify-center gap-6 border-b bg-blue-50 text-sm">
        <span className="rounded-md bg-blue-100 px-3 py-1 text-blue-700 font-semibold">
          What’s New
        </span>
        <span>AI-Powered Disease Prediction module is now live!</span>
        <span className="text-green-600 font-semibold">● All Systems Operational</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <ShieldPlus />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-700">MediTech</h1>
              <p className="text-xs text-slate-500">System Architecture</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2 hover:text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Home
            </Link>

            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2 hover:text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              About
            </Link>

            <Link
              to="/features"
              className={
                location.pathname === "/features"
                  ? "text-blue-600 border-b-2 border-blue-600 pb-2 hover:text-blue-600"
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

          <div className="flex items-center gap-3">
            <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-lg border bg-white">
              <Search size={18} />
            </button>
            <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-white font-semibold hover:bg-blue-700">
              Login / Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-blue-700 text-sm font-semibold mb-6">
            Advanced • Scalable • Secure
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Building Smarter <br />
            <span className="text-blue-600">Healthcare Systems</span>
          </h2>

          <p className="mt-6 max-w-xl text-slate-600 text-lg leading-8">
            MediTech System Architecture is an advanced microservices-based
            platform that delivers intelligent, secure, and seamless digital
            healthcare experiences.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold flex items-center gap-2">
              <Network size={18} /> Explore Architecture
            </button>
            <button className="rounded-lg border px-6 py-3 font-semibold flex items-center gap-2 bg-white">
              <PlayCircle size={18} /> Watch Overview
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["50K+", "Users", Users],
              ["98.7K+", "API Requests / Day", Cpu],
              ["45K+", "AI Predictions / Day", Brain],
              ["99.9%", "System Uptime", ShieldCheck],
            ].map(([num, label, Icon]) => (
              <div key={label} className="rounded-xl border bg-white p-4 shadow-sm">
                <Icon className="text-blue-600 mb-2" />
                <h3 className="text-2xl font-bold">{num}</h3>
                <p className="text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="rounded-3xl border bg-white/80 p-5 shadow-xl">
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[
              ["Patient App", Smartphone],
              ["Doctor Dashboard", UserRound],
              ["Hospital Admin", Building2],
              ["Super Admin", ShieldCheck],
            ].map(([title, Icon]) => (
              <div key={title} className="rounded-xl border bg-blue-50 p-3 text-center">
                <Icon className="mx-auto text-blue-600 mb-2" />
                <p className="text-xs font-bold">{title}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border bg-blue-600 text-white text-center p-4 font-bold mb-4">
            API Gateway
            <p className="text-xs font-normal mt-1">
              Rate Limiting • JWT/OAuth • Load Balancer
            </p>
          </div>

          <div className="rounded-xl border p-4 mb-4">
            <h3 className="text-center font-bold text-blue-700 mb-3">
              Microservices Layer
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
              {services.map((s) => (
                <div key={s} className="rounded-lg border bg-blue-50 p-2 text-center text-[11px] font-semibold">
                  <Server className="mx-auto text-blue-600 mb-1" size={20} />
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white p-4">
              <Brain className="text-blue-600 mb-2" />
              <h4 className="font-bold text-blue-700">AI Engine</h4>
              <p className="text-xs text-slate-500">Prediction, Analysis, Health Scoring</p>
            </div>

            <div className="rounded-xl border bg-white p-4">
              <Database className="text-blue-600 mb-2" />
              <h4 className="font-bold text-blue-700">Data Layer</h4>
              <p className="text-xs text-slate-500">SQL, NoSQL, Redis Cache</p>
            </div>

            <div className="rounded-xl border bg-white p-4">
              <Link2 className="text-blue-600 mb-2" />
              <h4 className="font-bold text-blue-700">Integrations</h4>
              <p className="text-xs text-slate-500">Payment, SMS, Maps, WhatsApp</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border bg-blue-50 p-3 text-center text-sm font-semibold text-blue-700">
            Docker • Kubernetes • AWS / GCP / Azure
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-4 rounded-2xl border bg-white p-6 shadow-sm">
          {[
            ["Microservices Architecture", "Modular and scalable services.", Network],
            ["AI-Powered Intelligence", "Smart prediction and diagnostics.", Brain],
            ["Secure & Compliant", "Authentication and encrypted access.", ShieldCheck],
            ["Real-time Integrations", "Payments, chat, maps and wearables.", Activity],
          ].map(([title, desc, Icon]) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="rounded-full bg-blue-100 p-3">
                <Icon className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-slate-500 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">System Architecture at a Glance</h2>
          <p className="text-slate-500 mt-2">
            A robust, future-ready platform built for today’s healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cards.map(([title, desc, Icon]) => (
            <div key={title} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-lg transition">
              <Icon className="text-blue-600 mb-4" size={32} />
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-xs text-slate-500 leading-5">{desc}</p>
              <button className="mt-4 text-blue-600 text-sm font-semibold">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Tech */}
      <footer className="bg-blue-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap justify-between gap-6 text-sm">
          <span>Trusted by Healthcare Providers Worldwide</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>AWS</span>
          <span>Google Cloud</span>
          <span>Azure</span>
          <span>TensorFlow</span>
          <span>PyTorch</span>
        </div>
      </footer>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center">
        <MessageCircle />
      </button>
    </div>
  );
}

