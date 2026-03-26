import { useState } from 'react'
import { useMedicines } from '../context/MedicineContext.jsx'

const MedicineList = () => {
  const { medicines, toggleTaken, deleteMedicine } = useMedicines();


  return (
    <div className="space-y-4">
      {medicines.map((medicine) => (
        <div
          key={medicine.id}
          className="group bg-gradient-to-r from-white/50 to-slate-50/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-sky-300/50"
          role="article"
          aria-labelledby={`med-${medicine.id}-name`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className={`w-3 h-3 rounded-full ${
                medicine.taken 
                  ? 'bg-teal-500 shadow-teal-500/50 animate-pulse shadow-lg' 
                  : 'bg-orange-400 shadow-orange-400/50 shadow-lg'
              }`} aria-hidden="true" />
              <div>
                <h3 id={`med-${medicine.id}-name`} className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {medicine.name}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{medicine.dosage}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">{medicine.time}</p>
              <span 
                className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                  medicine.taken
                    ? 'bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-200 shadow-md shadow-teal-200/50'
                    : 'bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 shadow-md shadow-orange-200/50'
                }`}
                aria-label={`Status: ${medicine.taken ? 'Taken' : 'Not taken'}`}
              >
                {medicine.taken ? '✅ Taken' : '⏳ Pending'}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => toggleTaken(medicine.id)}
              className={`flex-1 bg-gradient-to-r ${
                medicine.taken
                  ? 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-300/50 hover:shadow-xl hover:shadow-orange-400/50'
                  : 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg shadow-teal-300/50 hover:shadow-xl hover:shadow-teal-400/50'
              } py-3 px-4 rounded-xl font-semibold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-500/50`}
              aria-label={`Mark ${medicine.name} as ${medicine.taken ? 'not taken' : 'taken'}`}
            >
              {medicine.taken ? 'Undo' : 'Taken'}
            </button>
            <button
              onClick={() => deleteMedicine(medicine.id)}
              className="p-3 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-800 rounded-xl text-red-600 dark:text-red-400 hover:text-red-700 transition-all duration-200"
              aria-label={`Delete ${medicine.name}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MedicineList

