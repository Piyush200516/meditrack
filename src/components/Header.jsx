import { useState } from 'react'

const Header = ({ onLogout, setSidebarOpen }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const handleLogout = () => {
    onLogout()
    setUserMenuOpen(false)
  }

  return (
    <header className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-30">
      <div className="px-6 sm:px-8 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            aria-label="Open sidebar"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo - hidden on mobile since sidebar has it */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-3 p-2 rounded-2xl bg-gradient-to-r from-sky-500/10 to-teal-500/10 border border-sky-200/50 dark:border-sky-800/50 hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl">💊</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-sky-500 to-teal-500 bg-clip-text text-transparent">MediTrack</h1>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">Medication Manager</p>
              </div>
            </div>
          </div>

          {/* User menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" aria-hidden="true" />
              <span>Welcome back, Dr. Smith!</span>
            </div>

            {/* Notifications bell */}
            <button
              className="relative p-2 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              aria-label="Notifications"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">3</span>
            </button>

            {/* User avatar dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-3 p-2 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                aria-expanded={userMenuOpen}
                aria-haspopup="true"
                aria-label="User menu"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg text-white font-semibold text-lg">
                  DS
                </div>
                <div className="hidden sm:block text-left">
                  <p className="font-semibold text-slate-900 dark:text-white">Dr. Smith</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
                </div>
                <svg className={`w-5 h-5 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 py-2 z-50 animate-in slide-in-from-top-2 duration-200" role="menu">
                  <div className="px-4 py-3 border-b border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-semibold">
                        DS
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">Dr. Smith</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">dr.smith@meditrack.com</p>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="block px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-200 rounded-xl mx-2 mt-2" role="menuitem">Settings</a>
                  <a href="#" className="block px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-200 rounded-xl mx-2" role="menuitem">Billing</a>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 rounded-xl mx-2"
                    role="menuitem"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

