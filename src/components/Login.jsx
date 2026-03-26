import { useState } from 'react'

const Login = ({ onSwitchToSignup, onLoginSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      console.log('Login attempt:', { email, password })
      // Simulate successful login
      onLoginSuccess()
    } else {
      alert('Please fill in email and password')
    }
  }

  const handleGoogleLogin = () => {
    alert('Google OAuth placeholder - integrate real flow as needed')
    console.log('Google login clicked')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      {/* Subtle decorative background */}
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
              <stop offset="0%" stopColor="#38bdf8" /> {/* sky-400 */}
              <stop offset="100%" stopColor="#10b981" />  {/* emerald-500 */}
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="text-center mb-8 relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-4 animate-fade-in">
          Welcome back
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-md mx-auto leading-relaxed">
          Access your MediTrack account to track medications seamlessly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-400/30 focus:shadow-2xl transition-all duration-300 text-lg placeholder-slate-400 dark:bg-slate-800/50 dark:border-slate-600 dark:placeholder-slate-500 dark:text-white hover:shadow-xl hover:border-sky-300 hover:scale-[1.02] active:scale-[0.99]"
            placeholder="Enter your email"
            aria-describedby="email-help"
          />
          <p id="email-help" className="sr-only">Enter the email address associated with your account</p>
        </div>

        <div className="relative">
          <label 
            htmlFor="password" 
            className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3"
          >
            Password
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-5 pr-14 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/30 focus:shadow-2xl transition-all duration-300 text-lg placeholder-slate-400 dark:bg-slate-800/50 dark:border-slate-600 dark:placeholder-slate-500 dark:text-white hover:shadow-xl hover:border-emerald-300 hover:scale-[1.02] active:scale-[0.99] pr-12"
            placeholder="Enter your password"
            aria-describedby="password-help"
          />
          <p id="password-help" className="sr-only">Enter your password</p>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-controls="password"
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
        </div>

        <a
          href="#"
          className="block w-full text-right text-sm font-semibold text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 transition-all duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
          aria-label="Reset your password if forgotten"
        >
          Forgot Password?
        </a>

        <button
          type="submit"
          className="group w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-600 hover:via-teal-600 hover:to-sky-600 text-white font-bold py-5 px-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.03] active:scale-[0.98] active:shadow-xl transition-all duration-300 text-xl focus:outline-none focus:ring-4 focus:ring-emerald-400/50 animate-pulse-subtle disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Sign in to your MediTrack account"
        >
          <span className="flex items-center justify-center gap-2">
            Log In to MediTrack
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </form>

      <div className="mt-8 relative z-10">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-4 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 border-2 border-slate-200 dark:border-slate-700 rounded-3xl py-4 px-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-400/50 backdrop-blur-xl"
          aria-label="Continue login with Google account"
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>
      </div>

      <div className="mt-8 pt-8 border-t-2 border-slate-200/50 dark:border-slate-700/50 relative z-10">
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-200 hover:underline text-lg"
            aria-label="Switch to sign up form"
          >
            Sign Up Now
          </button>
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
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

export default Login

