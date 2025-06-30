import React, { useState, useEffect } from 'react'
import { useAuthStore } from '../store/authStore'
import { useLanguage } from '../hooks/useLanguage'
import LanguageSwitcher from '../components/LanguageSwitcher'

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signIn, signUp } = useAuthStore()
  const { t, initialize } = useLanguage()

  useEffect(() => {
    initialize()
  }, [initialize])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }
    
    try {
      if (isSignUp) {
        await signUp(email, password)
      } else {
        await signIn(email, password)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex">
      {/* Left side - Illustration */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <div className="relative">
              {/* Background blob */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl transform scale-150"></div>
              
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 mb-6">
                <div className="flex items-center justify-center space-x-4">
                  {/* Team illustration with avatars */}
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                      alt="Team member"
                      className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                    />
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                      alt="Team member"
                      className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                    />
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                      alt="Team member"
                      className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                    />
                    <img
                      src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                      alt="Team member"
                      className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                    />
                  </div>
                  
                  {/* Connection lines */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                  </div>
                  
                  {/* AI Brain icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🧠</span>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-400 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-green-400 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('createAndNurture')}
          </h1>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            {t('connectWithFellow')}
          </p>
          
          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
      
      {/* Right side - Auth form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-right mb-8">
            <div className="flex items-center justify-end space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🤖</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AITribes</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">{isSignUp ? '👤' : '🔐'}</span>
                <h2 className="text-xl font-semibold text-gray-900">
                  {isSignUp ? t('signUp') : t('signIn')}
                </h2>
              </div>
              <p className="text-gray-600 text-sm">
                {isSignUp ? t('createAccount') : t('signInToAccount')}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailAddress')}
                  className="input w-full"
                  required
                />
              </div>
              
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('password')}
                  className="input w-full"
                  required
                />
              </div>
              
              {isSignUp && (
                <div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={t('confirmPassword')}
                    className="input w-full"
                    required
                  />
                </div>
              )}
              
              {!isSignUp && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    🔒 {t('forgotPassword')}
                  </button>
                </div>
              )}
              
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full h-12 text-base font-medium"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>{isSignUp ? t('signingUp') : t('signingIn')}</span>
                  </div>
                ) : (
                  <>
                    <span className="mr-2">{isSignUp ? '🚀' : '🔐'}</span>
                    {isSignUp ? t('signUp') : t('signIn')}
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError('')
                  setPassword('')
                  setConfirmPassword('')
                }}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                {isSignUp ? t('alreadyHaveAccount') : t('dontHaveAccount')}{' '}
                <span className="text-primary-600 font-medium">
                  {isSignUp ? t('signIn') : t('signUp')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
