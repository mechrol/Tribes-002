import React from 'react'
import { motion } from 'framer-motion'
import StatsCard from './StatsCard'
import QuickActions from './QuickActions'
import RecentActivity from './RecentActivity'
import { TrendingUp, Users, MessageCircle, Heart } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Followers',
      value: '124.5K',
      change: '+12.5%',
      icon: Users,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Engagement Rate',
      value: '8.2%',
      change: '+2.1%',
      icon: Heart,
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Posts This Month',
      value: '47',
      change: '+18%',
      icon: MessageCircle,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Reach',
      value: '2.1M',
      change: '+25.3%',
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600'
    }
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-white/60 mt-1">Welcome back! Here's your social media overview.</p>
        </div>
        <motion.div
          className="glass px-4 py-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white/80 text-sm">Last updated: 2 min ago</span>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
