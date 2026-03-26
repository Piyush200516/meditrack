import MedicineList from './MedicineList.jsx'
import AdherenceChart from './AdherenceChart.jsx'
import { useMedicines } from '../context/MedicineContext.jsx';

const DashboardHome = () => {
  const { todaysAdherence, medicines } = useMedicines();

  const todaysTaken = medicines.filter(med => med.taken).length;
  const totalMeds = medicines.length;

  // Mock next dose
  const nextDose = '2:30 PM';

  return (
    <>
      {/* Stats cards */}
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">Today's Adherence</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{todaysAdherence()}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">Taken Today</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{todaysTaken}/{totalMeds}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">Next Dose</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{nextDose}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">Total Meds</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{totalMeds}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Weekly Adherence
            </h2>
            <div className="h-80">
              <AdherenceChart />
            </div>
          </div>

          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Today's Medicines
            </h2>
            <MedicineList />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;

