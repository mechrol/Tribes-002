import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'
import CommunityCustomize from './pages/CommunityCustomize'
import Analytics from './pages/Analytics'
import Integrations from './pages/Integrations'

function App() {
  const { user, loading, initialize } = useAuthStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/auth" 
          element={user ? <Navigate to="/dashboard" /> : <AuthPage />} 
        />
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard /> : <Navigate to="/auth" />} 
        />
        <Route 
          path="/community" 
          element={user ? <Community /> : <Navigate to="/auth" />} 
        />
        <Route 
          path="/community/customize" 
          element={user ? <CommunityCustomize /> : <Navigate to="/auth" />} 
        />
        <Route 
          path="/analytics" 
          element={user ? <Analytics /> : <Navigate to="/auth" />} 
        />
        <Route 
          path="/integrations" 
          element={user ? <Integrations /> : <Navigate to="/auth" />} 
        />
        <Route 
          path="/" 
          element={<Navigate to={user ? "/dashboard" : "/auth"} />} 
        />
      </Routes>
    </Router>
  )
}

export default App
