import React from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  MessageSquare, 
  BarChart3, 
  FileText, 
  Settings,
  User,
  Bell
} from 'lucide-react'

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'feed', icon: MessageSquare, label: 'Post Feed' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'content', icon: FileText, label: 'Content Manager' },
  ]

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 p-6 glass m-4 rounded-2xl"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white gradient-text">
          SocialHub
        </h1>
        <p className="text-white/60 text-sm mt-1">Dashboard Pro</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeTab === item.id
                ? 'bg-white/20 text-white'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      <div className="mt-8 pt-8 border-t border-white/20">
        <div className="flex items-center space-x-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <div>
            <p className="text-white font-medium">Alex Johnson</p>
            <p className="text-white/60 text-sm">Social Manager</p>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}

export default Sidebar
