import React from "react";
import {
  ShieldPlus, Search, Home, Users, CalendarDays, Video,
  FileText, Pill, CreditCard, BarChart3, ShieldCheck,
  Headphones, HeartHandshake, ExternalLink, Zap, User,
  ArrowRight, Mail, Phone, MapPin, Facebook, Linkedin,
  Twitter, Github
} from "lucide-react";

export default function Services() {
  const services = [
    ["Patient Management", "Comprehensive patient profile management and centralized health records.", Users],
    ["Appointment Scheduling", "Smart scheduling, reminders, and seamless appointment management.", CalendarDays],
    ["Telemedicine Solutions", "HD video consultations and remote care for better accessibility.", Video],
    ["Electronic Health Records", "Secure, digital, and interoperable health records accessible anytime.", FileText],
    ["Pharmacy Management", "Inventory, prescriptions, and medication management made simple.", Pill],
    ["Billing & Insurance", "Automated billing, insurance claims, and payment reconciliation.", CreditCard],
    ["Analytics & Reporting", "Real-time insights and advanced analytics for data-driven decisions.", BarChart3],
    ["Security & Compliance", "HIPAA-compliant, secure, and built with industry-leading standards.", ShieldCheck],
  ];

  const whyChoose = [
    ["Secure & Compliant", "Enterprise-grade security with HIPAA and regulatory compliance.", ShieldCheck],
    ["Scalable & Flexible", "Built on modern microservices architecture for maximum scalability.", ExternalLink],
    ["Reliable & Available", "99.9% uptime with high availability and disaster recovery.", Zap],
    ["User-Centric Design", "Intuitive and responsive experience for all healthcare users.", User],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <ShieldPlus />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-700">MediTech</h1>
              <p className="text-xs text-slate-500">System Architecture</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/features" className="hover:text-blue-600">Features</a>
            <a href="/architecture" className="hover:text-blue-600">Architecture</a>
            <a href="/services" className="text-blue-600 border-b-2 border-blue-600 pb-2">Services</a>
            <a href="/integrations" className="hover:text-blue-600">Integrations</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Home size={15} />
            <span>Home</span>
            <span>/</span>
            <span className="text-slate-800">Services</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Our Services
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight">
                Comprehensive Services for <br />
                <span className="text-blue-600">Smarter Healthcare</span>
              </h1>

              <p className="mt-6 text-slate-600 leading-8 max-w-xl">
                MediTech offers a wide range of services designed to empower
                healthcare organizations, streamline operations, and deliver
                exceptional care experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-8">
                <Stat icon={Users} value="50K+" label="Active Users" />
                <Stat icon={ShieldCheck} value="99.9%" label="System Uptime" />
                <Stat icon={Headphones} value="24/7" label="Customer Support" />
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                alt="Hospital Service"
                className="w-full h-[390px] object-cover rounded-3xl shadow-xl"
              />

              <div className="absolute -bottom-10 right-6 max-w-md bg-white rounded-2xl shadow-2xl border p-7">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <HeartHandshake className="text-blue-600" size={30} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Our Commitment</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-6">
                      Deliver innovative, reliable, and secure services that
                      improve patient outcomes and drive healthcare excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-bold text-sm uppercase">What We Offer</p>
            <h2 className="text-4xl font-bold mt-3">Our Core Services</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              End-to-end healthcare solutions built with technology, expertise,
              and a patient-first approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(([title, desc, Icon]) => (
              <div key={title} className="bg-white border rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={30} />
                </div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="mt-3 text-sm text-slate-500 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-bold text-sm uppercase">Why Choose Us</p>
            <h2 className="text-3xl font-bold mt-3">
              Why Healthcare Providers Trust MediTech
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {whyChoose.map(([title, desc, Icon]) => (
              <div key={title} className="text-center px-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-white shadow flex items-center justify-center mb-5">
                  <Icon className="text-blue-600" size={30} />
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-sm text-slate-500 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-950 to-blue-600 rounded-3xl p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold">
                Ready to Transform Your Healthcare Operations?
              </h2>
              <p className="mt-4 text-blue-100 max-w-2xl">
                Partner with MediTech and experience the power of technology in
                delivering better care and outcomes.
              </p>
            </div>

            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold flex items-center gap-2">
              Request a Demo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <ShieldPlus />
              </div>
              <div>
                <h3 className="text-xl font-bold">MediTech</h3>
                <p className="text-xs text-blue-200">System Architecture</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-6">
              An advanced microservices-based platform for modern healthcare
              management and digital transformation.
            </p>

            <div className="flex gap-3 mt-5">
              <IconCircle icon={Facebook} />
              <IconCircle icon={Linkedin} />
              <IconCircle icon={Twitter} />
              <IconCircle icon={Github} />
            </div>
          </div>

          <FooterList title="Quick Links" items={["Home", "About", "Features", "Architecture", "Services", "Integrations", "Contact"]} />
          <FooterList title="Solutions" items={["Patient Management", "Hospital Management", "Telemedicine", "Pharmacy", "Insurance"]} />
          <FooterList title="Resources" items={["Documentation", "API Reference", "Guides", "Blog", "Case Studies"]} />

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex gap-2"><Mail size={16} /> info@meditech.com</li>
              <li className="flex gap-2"><Phone size={16} /> +1 (123) 456-7890</li>
              <li className="flex gap-2"><MapPin size={16} /> 123 HealthTech Street, San Francisco, CA 94107, USA</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-blue-800 py-5 flex flex-col md:flex-row justify-between gap-4 text-sm text-blue-200">
          <p>© 2024 MediTech System Architecture. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-white border flex items-center justify-center">
        <Icon className="text-blue-600" />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm text-slate-500">{label}</p>
      </div>
    </div>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-blue-100">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function IconCircle({ icon: Icon }) {
  return (
    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
      <Icon size={15} />
    </div>
  );
}