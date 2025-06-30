import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import PostFeed from './components/PostFeed'
import Analytics from './components/Analytics'
import ContentManager from './components/ContentManager'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'feed':
        return <PostFeed />
      case 'analytics':
        return <Analytics />
      case 'content':
        return <ContentManager />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {renderContent()}
        </motion.div>
      </main>
    </div>
  )
}

export default App
