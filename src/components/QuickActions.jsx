import React from 'react'
import { motion } from 'framer-motion'
import { Plus, Calendar, Image, BarChart } from 'lucide-react'

const QuickActions = () => {
  const actions = [
    {
      title: 'Create Post',
      description: 'Share content across platforms',
      icon: Plus,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Schedule Content',
      description: 'Plan your posting strategy',
      icon: Calendar,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Media Library',
      description: 'Manage your assets',
      icon: Image,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'View Analytics',
      description: 'Track performance metrics',
      icon: BarChart,
      color: 'from-pink-400 to-pink-600'
    }
  ]

  return (
    <div className="glass p-6">
      <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <motion.div
            key={action.title}
            className="glass p-4 glass-hover cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${action.color}`}>
                <action.icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{action.title}</h3>
                <p className="text-white/60 text-sm">{action.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default QuickActions
