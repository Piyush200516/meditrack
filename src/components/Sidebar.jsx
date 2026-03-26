const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', active: true, href: '/dashboard' },
    { id: 'add-medicine', label: 'Add Medicine', icon: '➕', active: false, href: '/dashboard/add-medicine' },
    { id: 'tracker', label: 'Adherence Tracker', icon: '📈', active: false, href: '/dashboard/tracker' },
    { id: 'notifications', label: 'Notifications', icon: '🔔', active: false, href: '/dashboard/notifications' },
    { id: 'profile', label: 'Profile', icon: '👤', active: false, href: '/dashboard/profile' },
  ]

  return (
    <>
      {/* Mobile sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:w-64 lg:shadow-none border-r border-slate-200/50 dark:border-slate-700/50`}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">💊</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">MediTrack</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-2xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            aria-label="Close sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6 space-y-2" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`group flex items-center p-4 rounded-2xl transition-all duration-200 font-medium ${
                item.active
                  ? 'bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-xl shadow-sky-500/25 hover:shadow-2xl hover:scale-[1.02]'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white hover:shadow-lg'
              }`}
              aria-current={item.active ? 'page' : undefined}
            >
              <span className="w-6 h-6 mr-4 text-lg flex-shrink-0">{item.icon}</span>
              <span>{item.label}</span>
              {!item.active && (
                <svg className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Sidebar

