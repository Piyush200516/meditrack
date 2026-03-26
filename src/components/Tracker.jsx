import { useMedicines } from '../context/MedicineContext.jsx';

const Tracker = () => {
  const { medicines } = useMedicines();

  const weeklyAdherence = () => {
    // Simple mock - in production, query takenHistory
    return 88;
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">📈 Adherence History</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {Array.from({length: 7}, (_, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/50">
                <p className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">Mon</p>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">95%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Weekly Average</h2>
          <p className="text-5xl font-bold text-emerald-600 dark:text-emerald-400">{weeklyAdherence()}%</p>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Great job keeping up!</p>
        </div>
      </div>
    </div>
  );
};

export default Tracker;

