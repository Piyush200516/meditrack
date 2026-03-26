import { useState } from 'react';
import { useMedicines } from '../context/MedicineContext.jsx';

const AddMedicine = () => {
  const { addMedicine } = useMedicines();
  const [formData, setFormData] = useState({
    name: '',
    dosage: '',
    time: '',
    frequency: 'daily'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.dosage && formData.time) {
      addMedicine({ ...formData, taken: false });
      setFormData({ name: '', dosage: '', time: '', frequency: 'daily' });
    }
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto">
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
          ➕ Add New Medicine
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Medicine Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-sky-400/50 backdrop-blur-xl transition-all duration-200"
              placeholder="e.g., Aspirin 81mg"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Dosage</label>
              <input
                type="text"
                value={formData.dosage}
                onChange={(e) => setFormData({...formData, dosage: e.target.value})}
                className="w-full px-4 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-sky-400/50 backdrop-blur-xl"
                placeholder="e.g., 1 tablet"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Time</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-4 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-sky-400/50 backdrop-blur-xl"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Frequency</label>
            <select
              value={formData.frequency}
              onChange={(e) => setFormData({...formData, frequency: e.target.value})}
              className="w-full px-4 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-sky-400/50 backdrop-blur-xl"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-5 px-8 rounded-3xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
          >
            Add Medicine
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;

