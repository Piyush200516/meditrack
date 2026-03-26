import { useState } from 'react'

const Signup = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[\w\-.]+@([\w\-]+\.)+[\w\-]{2,4}$/.test(formData.email)) newErrors.email = 'Please use a valid email format'
    if (!formData.password) newErrors.password = 'Password is required (min 6 chars)'
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Signup attempt:', formData)
      alert('Welcome to MediTrack! Account created (check console for details)')
      setFormData({ name: '', email: '', password: '', confirmPassword: '' })
      setErrors({})
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const togglePasswordVisibility = (which) => {
    if (which === 'password') setShowPassword(!showPassword)
    else setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <>
      {/* Subtle decorative background matching login */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <path 
            d="M0 200 Q100 100 200 150 Q300 200 400 150 L400 300 Z" 
            stroke="url(#healthGrad)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <defs>
            <radialGradient id="healthGrad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#10b981" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="text-center mb-8 relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-4 animate-fade-in">
          Join MediTrack
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-md mx-auto leading-relaxed">
          Create your free account to start tracking medications effortlessly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-5 py-4 border-2 rounded-3xl shadow-lg focus:outline-none focus:ring-4 focus:border-transparent transition-all duration-300 text-lg placeholder-slate-400 dark:text-white dark:placeholder-slate-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] py-4 ${
              errors.name 
                ? 'border-red-300 focus:ring-red-400/50 dark:border-red-500/50 shadow-red-100/50 focus:shadow-red-200/50' 
                : 'border-slate-200 focus:ring-sky-400/30 focus:shadow-2xl dark:border-slate-700 dark:bg-slate-800/50 dark:shadow-slate-900/20'
            }`}
            placeholder="Enter your full name"
            aria-describedby={errors.name ? "name-error" : "name-help"}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center" role="alert">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.name}
            </p>
          )}
          {!errors.name && (
            <p id="name-help" className="sr-only mt-1 text-xs text-slate-500">
              How we will address you in the app
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-5 py-4 border-2 rounded-3xl shadow-lg focus:outline-none focus:ring-4 focus:border-transparent transition-all duration-300 text-lg placeholder-slate-400 dark:text-white dark:placeholder-slate-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] ${
              errors.email 
                ? 'border-red-300 focus:ring-red-400/50 dark:border-red-500/50 shadow-red-100/50 focus:shadow-red-200/50' 
                : 'border-slate-200 focus:ring-sky-400/30 focus:shadow-2xl dark:border-slate-700 dark:bg-slate-800/50 dark:shadow-slate-900/20'
            }`}
            placeholder="your@email.com"
            aria-describedby={errors.email ? "email-error" : "email-help"}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center" role="alert">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            className={`w-full pl-5 pr-14 py-4 border-2 rounded-3xl shadow-lg focus:outline-none focus:ring-4 focus:border-transparent transition-all duration-300 text-lg placeholder-slate-400 pr-12 dark:text-white dark:placeholder-slate-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] ${
              errors.password 
                ? 'border-red-300 focus:ring-red-400/50 dark:border-red-500/50' 
                : 'border-slate-200 focus:ring-emerald-400/30 dark:border-slate-700 dark:bg-slate-800/50'
            }`}
            placeholder="At least 6 characters"
            aria-describedby={errors.password ? "password-error" : "password-help"}
            aria-invalid={!!errors.password}
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility('password')}
            className="absolute inset-y-0 right-3 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 21l4-4m6.122 4L21 3l-4 4M15.122 9.878l4.242-4.242" />
              </svg>
            )}
          </button>
          {errors.password && (
            <p id="password-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center pt-1" role="alert">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.password}
            </p>
          )}
        </div>

        <div className="relative">
          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full pl-5 pr-14 py-4 border-2 rounded-3xl shadow-lg focus:outline-none focus:ring-4 focus:border-transparent transition-all duration-300 text-lg placeholder-slate-400 pr-12 dark:text-white dark:placeholder-slate-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] ${
              errors.confirmPassword 
                ? 'border-red-300 focus:ring-red-400/50 dark:border-red-500/50' 
                : 'border-slate-200 focus:ring-emerald-400/30 dark:border-slate-700 dark:bg-slate-800/50'
            }`}
            placeholder="Confirm your password"
            aria-describedby={errors.confirmPassword ? "confirm-error" : "confirm-help"}
            aria-invalid={!!errors.confirmPassword}
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility('confirm')}
            className="absolute inset-y-0 right-3 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full"
            aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
          >
            {showConfirmPassword ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 21l4-4m6.122 4L21 3l-4 4M15.122 9.878l4.242-4.242" />
              </svg>
            )}
          </button>
          {errors.confirmPassword && (
            <p id="confirm-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center pt-1" role="alert">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="group w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-600 hover:via-teal-600 hover:to-sky-600 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed text-white font-bold py-5 px-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.03] active:scale-[0.98] active:shadow-xl transition-all duration-300 text-xl focus:outline-none focus:ring-4 focus:ring-emerald-400/50 animate-pulse-subtle"
          aria-label="Create your MediTrack account"
        >
          <span className="flex items-center justify-center gap-2">
            Create My Account
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </form>

      <p className="mt-8 pt-8 border-t-2 border-slate-200/50 dark:border-slate-700/50 text-center text-sm text-slate-600 dark:text-slate-400 relative z-10">
        Already have an account?{' '}
        <button
          onClick={onSwitchToLogin}
          className="font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-200 hover:underline text-lg"
          aria-label="Switch to login form"
        >
          Log In Instead
        </button>
      </p>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
      `}</style>
    </>
  )
}

export default Signup

