import React from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share, TrendingUp } from 'lucide-react'

const RecentActivity = () => {
  const activities = [
    {
      type: 'like',
      message: 'Your post got 127 new likes',
      time: '2 minutes ago',
      icon: Heart,
      color: 'text-pink-400'
    },
    {
      type: 'comment',
      message: '15 new comments on your latest post',
      time: '5 minutes ago',
      icon: MessageCircle,
      color: 'text-blue-400'
    },
    {
      type: 'share',
      message: 'Post shared 23 times',
      time: '10 minutes ago',
      icon: Share,
      color: 'text-green-400'
    },
    {
      type: 'trending',
      message: 'Your hashtag is trending',
      time: '15 minutes ago',
      icon: TrendingUp,
      color: 'text-purple-400'
    }
  ]

  return (
    <div className="glass p-6">
      <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`p-2 rounded-lg bg-white/10 ${activity.color}`}>
              <activity.icon size={16} />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm">{activity.message}</p>
              <p className="text-white/50 text-xs mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity
