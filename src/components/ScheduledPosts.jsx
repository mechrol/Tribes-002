import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Edit, Trash2 } from 'lucide-react'

const ScheduledPosts = () => {
  const scheduledPosts = [
    {
      id: 1,
      content: "Excited to share our latest product update! 🚀 New features that will revolutionize your workflow.",
      platforms: ['twitter', 'linkedin'],
      scheduledFor: '2024-01-15T14:30:00',
      status: 'scheduled'
    },
    {
      id: 2,
      content: "Behind the scenes of our creative process. Check out how we bring ideas to life! ✨",
      platforms: ['instagram', 'facebook'],
      scheduledFor: '2024-01-16T10:00:00',
      status: 'scheduled'
    },
    {
      id: 3,
      content: "Join us for our upcoming webinar on social media marketing strategies. Link in bio!",
      platforms: ['twitter', 'linkedin', 'facebook'],
      scheduledFor: '2024-01-17T16:00:00',
      status: 'scheduled'
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
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <div className="space-y-4">
      {scheduledPosts.map((post, index) => (
        <motion.div
          key={post.id}
          className="glass p-6 glass-hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                {post.platforms.map((platform) => (
                  <div
                    key={platform}
                    className={`w-3 h-3 rounded-full ${getPlatformColor(platform)}`}
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm capitalize">
                {post.platforms.join(', ')}
              </span>
            </div>
            <div className="flex space-x-2">
              <motion.button
                className="text-white/60 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Edit size={18} />
              </motion.button>
              <motion.button
                className="text-white/60 hover:text-red-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Trash2 size={18} />
              </motion.button>
            </div>
          </div>

          <p className="text-white mb-4 leading-relaxed">{post.content}</p>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white/60">
                <Calendar size={16} />
                <span className="text-sm">{formatDate(post.scheduledFor)}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <Clock size={16} />
                <span className="text-sm">{formatTime(post.scheduledFor)}</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
              Scheduled
            </span>
          </div>
        </motion.div>
      ))}

      {scheduledPosts.length === 0 && (
        <div className="glass p-12 text-center">
          <Calendar className="w-16 h-16 text-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Scheduled Posts</h3>
          <p className="text-white/60">Schedule your content to maintain a consistent posting schedule.</p>
        </div>
      )}
    </div>
  )
}

export default ScheduledPosts
