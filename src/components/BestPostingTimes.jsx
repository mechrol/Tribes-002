import React from 'react'
import { motion } from 'framer-motion'
import { Clock, TrendingUp } from 'lucide-react'

const BestPostingTimes = () => {
  const timeSlots = [
    { time: '9:00 AM', engagement: 85, day: 'Monday' },
    { time: '1:00 PM', engagement: 92, day: 'Tuesday' },
    { time: '6:00 PM', engagement: 78, day: 'Wednesday' },
    { time: '11:00 AM', engagement: 88, day: 'Thursday' },
    { time: '3:00 PM', engagement: 95, day: 'Friday' },
    { time: '10:00 AM', engagement: 82, day: 'Saturday' },
    { time: '7:00 PM', engagement: 90, day: 'Sunday' },
  ]

  return (
    <div className="glass p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="text-purple-400" size={24} />
        <h3 className="text-xl font-bold text-white">Best Posting Times</h3>
      </div>
      
      <div className="space-y-4">
        {timeSlots.map((slot, index) => (
          <motion.div
            key={slot.day}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="text-white/80 font-medium min-w-[80px]">
                {slot.day}
              </div>
              <div className="text-white/60">
                {slot.time}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${slot.engagement}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                />
              </div>
              <span className="text-white/80 text-sm font-medium min-w-[40px]">
                {slot.engagement}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="text-purple-400" size={16} />
          <span className="text-purple-300 font-medium text-sm">Insight</span>
        </div>
        <p className="text-white/80 text-sm">
          Friday at 3:00 PM shows the highest engagement rate. Consider scheduling your most important content during this time.
        </p>
      </div>
    </div>
  )
}

export default BestPostingTimes
