import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Image, Calendar, Send, Hash } from 'lucide-react'

const CreatePostModal = ({ onClose }) => {
  const [content, setContent] = useState('')
  const [selectedPlatforms, setSelectedPlatforms] = useState(['twitter'])
  const [scheduleDate, setScheduleDate] = useState('')
  const [hashtags, setHashtags] = useState('')

  const platforms = [
    { id: 'twitter', name: 'Twitter', color: 'bg-twitter' },
    { id: 'instagram', name: 'Instagram', color: 'bg-instagram' },
    { id: 'facebook', name: 'Facebook', color: 'bg-facebook' },
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-linkedin' },
  ]

  const togglePlatform = (platformId) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle post creation/scheduling
    console.log({ content, selectedPlatforms, scheduleDate, hashtags })
    onClose()
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="glass p-6 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Create New Post</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white/80 font-medium mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full h-32 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 resize-none"
              required
            />
            <div className="text-right text-white/50 text-sm mt-1">
              {content.length}/280
            </div>
          </div>

          <div>
            <label className="block text-white/80 font-medium mb-3">Platforms</label>
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((platform) => (
                <motion.button
                  key={platform.id}
                  type="button"
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all ${
                    selectedPlatforms.includes(platform.id)
                      ? 'border-white/40 bg-white/10'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                  onClick={() => togglePlatform(platform.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-4 h-4 rounded-full ${platform.color}`} />
                  <span className="text-white font-medium">{platform.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white/80 font-medium mb-2">Hashtags</label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <input
                type="text"
                value={hashtags}
                onChange={(e) => setHashtags(e.target.value)}
                placeholder="socialmedia marketing content"
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/80 font-medium mb-2">Schedule (Optional)</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <input
                type="datetime-local"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <motion.button
              type="button"
              className="flex-1 bg-white/10 text-white py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Save as Draft
            </motion.button>
            <motion.button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} />
              <span>{scheduleDate ? 'Schedule' : 'Post Now'}</span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default CreatePostModal
