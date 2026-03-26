const Profile = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto">
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
          👤 Profile
        </h1>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Profile Picture</label>
            <div className="w-32 h-32 bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl mx-auto mb-4">
              JD
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Name</label>
            <input type="text" value="John Doe" className="w-full px-4 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-sky-400/50 backdrop-blur-xl transition-all duration-200" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Email</label>
            <input type="email" value="john@example.com" className="w-full px-4 py-4 bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-sky-400/50 backdrop-blur-xl transition-all duration-200" />
          </div>
          <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

