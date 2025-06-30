import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react'

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(prev => liked ? prev - 1 : prev + 1)
  }

  const getPlatformColor = (platform) => {
    const colors = {
      twitter: 'from-twitter to-blue-400',
      instagram: 'from-instagram to-pink-400',
      facebook: 'from-facebook to-blue-500',
      linkedin: 'from-linkedin to-blue-600'
    }
    return colors[platform] || 'from-gray-400 to-gray-600'
  }

  return (
    <motion.div
      className="glass p-6 glass-hover"
      whileHover={{ y: -2 }}
      layout
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPlatformColor(post.platform)}`} />
          <span className="text-white/80 capitalize font-medium">{post.platform}</span>
          <span className="text-white/50 text-sm">{post.timestamp}</span>
        </div>
        <button className="text-white/60 hover:text-white transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-white leading-relaxed">{post.content}</p>
      </div>

      {post.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt="Post content" 
            className="w-full h-64 object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center space-x-6">
          <motion.button
            className={`flex items-center space-x-2 transition-colors ${
              liked ? 'text-pink-400' : 'text-white/60 hover:text-pink-400'
            }`}
            onClick={handleLike}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={liked ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
            </motion.div>
            <span className="text-sm font-medium">{likes}</span>
          </motion.button>

          <button className="flex items-center space-x-2 text-white/60 hover:text-blue-400 transition-colors">
            <MessageCircle size={20} />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>

          <button className="flex items-center space-x-2 text-white/60 hover:text-green-400 transition-colors">
            <Share size={20} />
            <span className="text-sm font-medium">{post.shares}</span>
          </button>
        </div>

        <div className="text-white/50 text-sm">
          Engagement: {post.engagement}%
        </div>
      </div>
    </motion.div>
  )
}

export default PostCard
