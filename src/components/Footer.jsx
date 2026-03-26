const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50 py-8 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-lg">💊</span>
            </div>
            <span>&copy; 2024 MediTrack. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded" aria-label="Privacy Policy">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded" aria-label="Terms of Service">
              Terms
            </a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded" aria-label="Support">
              Support
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200/30 dark:border-slate-700/30 text-xs text-slate-500 dark:text-slate-500 text-center">
          Built with ❤️ for better medication adherence
        </div>
      </div>
    </footer>
  )
}

export default Footer

