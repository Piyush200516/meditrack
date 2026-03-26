const Notifications = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
          🔔 Notifications
        </h1>
        <div className="space-y-4">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-400 p-6 rounded-2xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Great adherence this week!</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">95% - Keep up the good work!</p>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-6 rounded-2xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Aspirin due in 30 minutes</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">8:00 AM reminder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

