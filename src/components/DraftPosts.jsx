import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Edit, Trash2, Send } from 'lucide-react'

const DraftPosts = () => {
  const drafts = [
    {
      id: 1,
      content: "Working on something exciting... Can't wait to share more details soon! 🔥",
      lastModified: '2024-01-14T09:30:00',
      platforms: ['twitter', 'instagram']
    },
    {
      id: 2,
      content: "Thoughts on the future of remote work and how it's changing our industry...",
      lastModified: '2024-01-13T15:45:00',
      platforms: ['linkedin']
    },
    {
      id: 3,
      content: "Tutorial Tuesday: How to create engaging social media content that converts",
      lastModified: '2024-01-12T11:20:00',
      platforms: ['twitter', 'facebook', 'linkedin']
    }
  ]

  const getPlatformColor = (platform) => {
    const colors = {
      twitter: 'bg-twitter',
      instagram: 'bg-instagram',
      facebook: 'bg-facebook',
      linkedin: 'bg-linkedin'
    }
    return colors[platform] || 'bg-gray-400'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-4">
      {drafts.map((draft, index) => (
        <motion.div
          key={draft.id}
          className="glass p-6 glass-hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                {draft.platforms.map((platform) => (
                  <div
                    key={platform}
                    className={`w-3 h-3 rounded-full ${getPlatformColor(platform)}`}
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm capitalize">
                {draft.platforms.join(', ')}
              </span>
            </div>
            <div className="flex space-x-2">
              <motion.button
                className="text-white/60 hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Publish"
              >
                <Send size={18} />
              </motion.button>
              <motion.button
                className="text-white/60 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Edit"
              >
                <Edit size={18} />
              </motion.button>
              <motion.button
                className="text-white/60 hover:text-red-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Delete"
              >
                <Trash2 size={18} />
              </motion.button>
            </div>
          </div>

          <p className="text-white mb-4 leading-relaxed">{draft.content}</p>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-white/60 text-sm">
              Last modified: {formatDate(draft.lastModified)}
            </span>
            <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm font-medium">
              Draft
            </span>
          </div>
        </motion.div>
      ))}

      {drafts.length === 0 && (
        <div className="glass p-12 text-center">
          <FileText className="w-16 h-16 text-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Drafts</h3>
          <p className="text-white/60">Start creating content and save drafts for later editing.</p>
        </div>
      )}
    </div>
  )
}

export default DraftPosts
