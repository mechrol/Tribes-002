import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Calendar, Image, FileText, Send } from 'lucide-react'
import CreatePostModal from './CreatePostModal'
import ScheduledPosts from './ScheduledPosts'
import DraftPosts from './DraftPosts'
import MediaLibrary from './MediaLibrary'

const ContentManager = () => {
  const [activeTab, setActiveTab] = useState('create')
  const [showCreateModal, setShowCreateModal] = useState(false)

  const tabs = [
    { id: 'create', label: 'Create Post', icon: Plus },
    { id: 'scheduled', label: 'Scheduled', icon: Calendar },
    { id: 'drafts', label: 'Drafts', icon: FileText },
    { id: 'media', label: 'Media Library', icon: Image },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'create':
        return (
          <div className="glass p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Create New Content</h3>
              <p className="text-white/60">Start creating engaging content for your social media platforms</p>
            </div>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateModal(true)}
            >
              Create Post
            </motion.button>
          </div>
        )
      case 'scheduled':
        return <ScheduledPosts />
      case 'drafts':
        return <DraftPosts />
      case 'media':
        return <MediaLibrary />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Content Manager</h1>
        <p className="text-white/60">Create, schedule, and manage your social media content</p>
      </motion.div>

      <div className="glass p-2 rounded-xl">
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon size={18} />
              <span className="font-medium">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderContent()}
      </motion.div>

      {showCreateModal && (
        <CreatePostModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  )
}

export default ContentManager
