import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useMedicines } from '../../context/MedicineContext';


const MedicineQuickAdd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', dosage: '', frequency: '' });
  const { addMedicine } = useMedicines();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine({
      ...formData,
      startDate: new Date().toISOString().split('T')[0],
      endDate: null,
      notes: '',
      isActive: true
    });
    setFormData({ name: '', dosage: '', frequency: '' });
    setIsOpen(false);
  };

  return (
    <div className="glass shadow-2xl rounded-3xl p-6 border border-white/30">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <FaPlus className="group-hover:scale-110" />
        Quick Add Medicine
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 animate-fade-in-up">
          <input
            type="text"
            placeholder="Medicine name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary/10 glass"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Dosage"
              value={formData.dosage}
              onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
              className="p-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary/10 glass"
              required
            />
            <input
              type="text"
              placeholder="Frequency"
              value={formData.frequency}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
              className="p-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary/10 glass"
              required
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button type="submit" className="flex-1 bg-success-500 hover:bg-success-600 text-white p-4 rounded-xl font-semibold shadow-lg transition-all">
              Add Medicine
            </button>
            <button type="button" onClick={() => setIsOpen(false)} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 p-4 rounded-xl font-semibold transition-all">
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MedicineQuickAdd;

