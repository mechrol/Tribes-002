import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Image, Video, Upload, Search, Filter } from 'lucide-react'

const MediaLibrary = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Team Meeting',
      size: '2.4 MB',
      uploadDate: '2024-01-14'
    },
    {
      id: 2,
      type: 'image',
      url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Product Launch',
      size: '1.8 MB',
      uploadDate: '2024-01-13'
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Office Space',
      size: '3.1 MB',
      uploadDate: '2024-01-12'
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Creative Process',
      size: '2.7 MB',
      uploadDate: '2024-01-11'
    },
    {
      id: 5,
      type: 'image',
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Brand Assets',
      size: '1.9 MB',
      uploadDate: '2024-01-10'
    },
    {
      id: 6,
      type: 'image',
      url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Social Campaign',
      size: '2.2 MB',
      uploadDate: '2024-01-09'
    }
  ]

  const filteredItems = mediaItems.filter(item => {
    const matchesFilter = filter === 'all' || item.type === filter
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="glass p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <input
                type="text"
                placeholder="Search media..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="text-white/50" size={20} />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400"
              >
                <option value="all">All Media</option>
                <option value="image">Images</option>
                <option value="video">Videos</option>
              </select>
            </div>
          </div>

          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Upload size={20} />
            <span>Upload Media</span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="glass p-4 glass-hover cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-white/5">
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Video className="text-white/50" size={48} />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                {item.type === 'image' ? (
                  <Image className="text-blue-400" size={16} />
                ) : (
                  <Video className="text-green-400" size={16} />
                )}
                <h3 className="text-white font-medium truncate">{item.name}</h3>
              </div>
              
              <div className="flex justify-between text-white/60 text-sm">
                <span>{item.size}</span>
                <span>{new Date(item.uploadDate).toLocaleDateString()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="glass p-12 text-center">
          <Image className="w-16 h-16 text-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No Media Found</h3>
          <p className="text-white/60">Upload images and videos to build your media library.</p>
        </div>
      )}
    </div>
  )
}

export default MediaLibrary
