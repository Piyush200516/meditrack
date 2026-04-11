import { useState } from 'react';
import { Download, Search, Filter, FileText, Clock, CheckCircle } from 'lucide-react';
import StatCard from '../components/ui/StatCard';
import { mockStats } from '../services/mockData';

const mockReports = [
  {
    id: 1,
    title: 'Blood Test Results',
    date: '2024-10-10',
    type: 'Lab Report',
    status: 'Ready',
    doctor: 'Dr. Sarah Johnson'
  },
  {
    id: 2,
    title: 'ECG Report',
    date: '2024-10-05',
    type: 'Diagnostic',
    status: 'Ready',
    doctor: 'Dr. Raj Patel'
  },
  {
    id: 3,
    title: 'Full Body Checkup',
    date: '2024-09-25',
    type: 'Health Checkup',
    status: 'Ready',
    doctor: 'Dr. Emily Chen'
  }
];

const PatientReports = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredReports = mockReports.filter(report => 
    report.title.toLowerCase().includes(search.toLowerCase()) ||
    report.doctor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-4xl font-black text-gray-900">Health Reports</h1>
        <p className="text-xl text-gray-600">View and download your medical reports</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Reports" value={mockReports.length} change="+3 this month" icon={FileText} color="blue" />
        <StatCard title="Ready to View" value="3" change="100%" icon={CheckCircle} color="green" />
        <StatCard title="Recent" value="1" change="New" icon={Clock} color="orange" />
      </div>

      {/* Search Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            placeholder="Search reports..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
        >
          <option>All Reports</option>
          <option>Lab Reports</option>
          <option>Diagnostics</option>
        </select>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium">
          <Download className="w-5 h-5 inline mr-2" />
          Bulk Download
        </button>
      </div>

      {/* Reports List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => (
          <div key={report.id} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl border border-white/50 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-blue-600">{report.title}</h3>
                <p className="text-sm text-gray-600">{report.doctor} • {report.type}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                {report.status}
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4" />
                <span>{report.date}</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-xl transition-all">
              <Download className="w-4 h-4 inline mr-2" />
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientReports;

